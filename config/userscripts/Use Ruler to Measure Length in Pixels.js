// ==UserScript==
// @name         Use Ruler to Measure Length in Pixels
// @version      2.2
// @description  SVG pixel ruler, draggable, toggles with Alt+R, rotates 0/90 on click, with end padding.
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Settings
  // const RULER_LENGTH = 700; // Ruler tick area length in pixels
  const RULER_LENGTH = 600; // Ruler tick area length in pixels
  const PADDING = 20; // Padding before 0px and after last graduation
  const TOTAL_WIDTH = RULER_LENGTH + PADDING * 2;
  const RULER_HEIGHT = 60;

  // 1. Create Outer Ruler Container
  const ruler = document.createElement("div");
  ruler.id = "userscript-svg-ruler";

  Object.assign(ruler.style, {
    position: "fixed",
    top: "100px",
    left: "100px",
    width: `${TOTAL_WIDTH}px`,
    height: `${RULER_HEIGHT}px`,
    backgroundColor: "color-mix(in srgb, white 50%, transparent)",
    border: "1px solid rgba(255, 255, 255, 0.8)",
    borderRadius: "0px",
    boxSizing: "border-box",
    zIndex: "999999",
    display: "none", // Default hidden
    cursor: "grab",
    userSelect: "none",
    backdropFilter: "blur(2px)",
    transformOrigin: "top left",
    transition: "transform 0s ease-out",
    // transition: 'transform 0.15s ease-out'
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
      // Render text label

      // base 4px
      svgContent += `<text x="${posX}" y="36" stroke="none" text-anchor="middle">${
        x / 4
      }</text>`;
      // svgContent += `<text x="${posX}" y="36" stroke="none" text-anchor="middle">${x}</text>`;
    } else if (x % 20 === 0) {
      tickHeight = 15; // Mid tick every 20px
    }

    // Draw crisp 1px SVG line using shape-rendering crispEdges
    svgContent += `<line x1="${posX}" y1="0" x2="${posX}" y2="${tickHeight}" shape-rendering="crispEdges"/>`;
  }

  // render tailwind max width sizes
  for (const [size, x] of Object.entries({
    xs: 20,
    sm: 24,
    md: 28,
    lg: 32,
    xl: 36,
    "2xl": 42,
    "3xl": 48,
    "4xl": 56,
    "5xl": 64,
    "6xl": 72,
    "7xl": 80,
  })) {
    // 1rem = 16px
    svgContent += `<text x="${
      x * 16
    }" y="36" stroke="none" text-anchor="middle">${size}</text>`;
  }

  svgContent += `</g>`;
  svg.innerHTML = svgContent;
  ruler.appendChild(svg);
  document.body.appendChild(ruler);

  // 3. Toggle Visibility (Alt + R)
  window.addEventListener("keydown", (e) => {
    if (e.altKey && e.code === "KeyR") {
      e.preventDefault();
      ruler.style.display = ruler.style.display === "none" ? "block" : "none";
    }
  });

  // 4. Drag & Rotation Logic
  let isDragging = false;
  let dragDistance = 0;
  let startX = 0;
  let startY = 0;
  let rotationAngle = 0; // Strictly 0 or 90
  let offsetX = 0;
  let offsetY = 0;

  ruler.addEventListener("mousedown", (e) => {
    isDragging = true;
    dragDistance = 0;
    startX = e.clientX;
    startY = e.clientY;
    ruler.style.cursor = "grabbing";

    // Get actual visual top-left coordinates regardless of CSS transform rotation
    const rect = ruler.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    // Track total movement distance to distinguish click vs. drag
    dragDistance += Math.hypot(e.clientX - startX, e.clientY - startY);
    startX = e.clientX;
    startY = e.clientY;

    // Position target top-left relative to cursor
    let targetX = e.clientX - offsetX;
    let targetY = e.clientY - offsetY;

    // Offset CSS position when rotated 90° so it sticks directly under the cursor without shifting
    if (rotationAngle === 90) {
      targetX += RULER_HEIGHT;
    }

    ruler.style.left = `${targetX}px`;
    ruler.style.top = `${targetY}px`;
  });

  window.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      ruler.style.cursor = "grab";
    }
  });

  // Toggle rotation strictly between 0° and 90° on click
  ruler.addEventListener("click", () => {
    // Only trigger rotation if the mouse wasn't dragged (distance threshold < 5px)
    if (dragDistance < 5) {
      const rect = ruler.getBoundingClientRect();

      // Toggle strictly 0 or 90
      rotationAngle = rotationAngle === 0 ? 90 : 0;
      ruler.style.transform = `rotate(${rotationAngle}deg)`;

      // Adjust element left/top so top-left corner stays anchored in place during rotation
      if (rotationAngle === 90) {
        ruler.style.left = `${rect.left + RULER_HEIGHT}px`;
        ruler.style.top = `${rect.top}px`;
      } else {
        ruler.style.left = `${rect.left}px`;
        ruler.style.top = `${rect.top}px`;
      }

      for (const item of document.querySelectorAll(
        "#userscript-svg-ruler text"
      )) {
        const x = item.getAttribute('x')
        const y = item.getAttribute('y')
        item.setAttribute(
          "transform",
          `rotate(${360 - rotationAngle}, ${x}, ${y})`
        );
      }
    }
  });
})();
