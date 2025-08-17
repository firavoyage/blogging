const listen = (bindings) => {
  const keyStates = {};
  const activeBindings = new Map();

  // Parse and store the bindings
  Object.entries(bindings).forEach(([keys, callback]) => {
    const keyArr = keys.toLowerCase().split(" ");
    const normalizedKeys = keyArr.sort().join(" ");
    activeBindings.set(normalizedKeys, callback);
  });

  const resetKeyStates = () => {
    for (const key in keyStates) {
      keyStates[key] = false;
    }
  };

  const handleKeyDown = (e) => {
    const key = e.key.toLowerCase();
    keyStates[key] = true;

    // Get current combination of pressed keys
    const currentCombo = Object.keys(keyStates)
      .filter((k) => keyStates[k])
      .sort()
      .join(" ");

    if (activeBindings.has(currentCombo)) {
      e.preventDefault();
      activeBindings.get(currentCombo)(e);
    }
  };

  const handleKeyUp = (e) => {
    const key = e.key.toLowerCase();
    keyStates[key] = false;
  };

  const handleBlur = () => {
    resetKeyStates();
  };

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
  window.addEventListener("blur", handleBlur);

  // Return unsubscribe function
  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("keyup", handleKeyUp);
    window.removeEventListener("blur", handleBlur);
    Object.keys(bindings).forEach((key) => {
      activeBindings.delete(key.toLowerCase().split(" ").sort().join(" "));
    });
    resetKeyStates();
  };
};
