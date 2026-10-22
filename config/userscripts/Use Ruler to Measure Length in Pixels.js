// ==UserScript==
// @name         Use Ruler to Measure Length in Pixels
// @version      2.4
// @description  SVG pixel ruler, draggable, toggles with Alt+R, rotates 0/90 on click, with end padding.
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Settings
  const RULER_LENGTH = 600; // Ruler tick area length in pixels
  const PADDING = 20; // Padding before 0px and after last graduation
  const TOTAL_WIDTH = RULER_LENGTH + PADDING * 2;
  const RULER_HEIGHT = 60;

  let ruler = null;
  let isDragging = false;
  let dragDistance = 0;
  let startX = 0;
  let startY = 0;
  let rotationAngle = 0; // Strictly 0 or 90
  let offsetX = 0;
  let offsetY = 0;
  let lastX = "100px";
  let lastY = "100px";

  // Function to create and insert the ruler into the DOM
  function showRuler() {
    if (ruler) return; // Already exists

    // 1. Create Outer Ruler Container
    ruler = document.createElement("div");
    ruler.id = "userscript-svg-ruler";

    Object.assign(ruler.style, {
      position: "fixed",
      top: lastY,
      left: lastX,
      width: `${TOTAL_WIDTH}px`,
      height: `${RULER_HEIGHT}px`,
      backgroundColor: "color-mix(in srgb, white 50%, transparent)",
      border: "1px solid rgba(255, 255, 255, 0.8)",
      borderRadius: "0px",
      boxSizing: "border-box",
      zIndex: "999999",
      cursor: "grab",
      userSelect: "none",
      backdropFilter: "blur(2px)",
      transformOrigin: "top left",
      transform: `rotate(${rotationAngle}deg)`,
      transition: "transform 0s ease-out",
    });

    // 2. Generate SVG Elements
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", `0 0 ${TOTAL_WIDTH} ${RULER_HEIGHT}`);
    Object.assign(svg.style, { display: "block", pointerEvents: "none" });

    let svgContent = `<g stroke="#ffffff" stroke-width="1" fill="#ffffff" font-family="sans-serif" font-size="9px">`;

    // Loop through graduations from 0 to RULER_LENGTH
    for (let x = 0; x <= RULER_LENGTH; x += 4) {
      const posX = x + PADDING; // Offset position by padding
      let tickHeight = 8; // Default tick every 4px

      if (x % 40 === 0 && x < 90 * 4) {
        tickHeight = 24; // High tick every 40px
        svgContent += `<text x="${posX}" y="36" stroke="none" text-anchor="middle">${x / 4}</text>`;
      } else if (x % 20 === 0) {
        tickHeight = 15; // Mid tick every 20px
      }

      svgContent += `<line x1="${posX}" y1="0" x2="${posX}" y2="${tickHeight}" shape-rendering="crispEdges"/>`;
    }

    // Render tailwind max width sizes
    for (const [size, x] of Object.entries({
      xs: 20, sm: 24, md: 28, lg: 32, xl: 36,
      "2xl": 42, "3xl": 48, "4xl": 56, "5xl": 64, "6xl": 72, "7xl": 80,
    })) {
      svgContent += `<text x="${x * 16}" y="36" stroke="none" text-anchor="middle">${size}</text>`;
    }

    svgContent += `</g>`;
    svg.innerHTML = svgContent;
    ruler.appendChild(svg);

    // Apply proper text rotation if currently rotated
    if (rotationAngle === 90) {
      for (const item of ruler.querySelectorAll("text")) {
        const x = Number(item.getAttribute('x'));
        const y = Number(item.getAttribute('y'));
        item.setAttribute("transform", `rotate(${360 - rotationAngle}, ${x + 2}, ${y})`);
      }
    }

    // Attach Event Listeners for the current instance
    ruler.addEventListener("mousedown", (e) => {
      isDragging = true;
      dragDistance = 0;
      startX = e.clientX;
      startY = e.clientY;
      ruler.style.cursor = "grabbing";

      const rect = ruler.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
    });

    ruler.addEventListener("click", () => {
      if (dragDistance < 5) {
        const rect = ruler.getBoundingClientRect();

        rotationAngle = rotationAngle === 0 ? 90 : 0;
        ruler.style.transform = `rotate(${rotationAngle}deg)`;

        if (rotationAngle === 90) {
          ruler.style.left = `${rect.left + RULER_HEIGHT}px`;
          ruler.style.top = `${rect.top}px`;
        } else {
          ruler.style.left = `${rect.left}px`;
          ruler.style.top = `${rect.top}px`;
        }

        lastX = ruler.style.left;
        lastY = ruler.style.top;

        for (const item of ruler.querySelectorAll("text")) {
          const x = Number(item.getAttribute('x'));
          const y = Number(item.getAttribute('y'));
          item.setAttribute(
            "transform",
            rotationAngle === 90 ? `rotate(${360 - rotationAngle}, ${x + 2}, ${y})` : ""
          );
        }
      }
    });

    document.body.appendChild(ruler);
  }

  // Function to completely remove the ruler from the DOM
  function hideRuler() {
    if (!ruler) return;
    // Keep exact style positions instead of querying bounding rect
    lastX = ruler.style.left || lastX;
    lastY = ruler.style.top || lastY;

    ruler.remove();
    ruler = null;
    isDragging = false;
  }

  // 3. Toggle Visibility (Alt + R)
  window.addEventListener("keydown", (e) => {
    if (e.altKey && e.code === "KeyR") {
      e.preventDefault();
      if (ruler) {
        hideRuler();
      } else {
        showRuler();
      }
    }
  });

  // 4. Global Drag & Mouseup Logic
  window.addEventListener("mousemove", (e) => {
    if (!isDragging || !ruler) return;

    dragDistance += Math.hypot(e.clientX - startX, e.clientY - startY);
    startX = e.clientX;
    startY = e.clientY;

    let targetX = e.clientX - offsetX;
    let targetY = e.clientY - offsetY;

    if (rotationAngle === 90) {
      targetX += RULER_HEIGHT;
    }

    ruler.style.left = `${targetX}px`;
    ruler.style.top = `${targetY}px`;
    lastX = ruler.style.left;
    lastY = ruler.style.top;
  });

  window.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      if (ruler) ruler.style.cursor = "grab";
    }
  });
})();