categorize tailwind utilities

---

Of course. Tailwind CSS utilities can be categorized into several logical groups based on their function. Here is a comprehensive categorization of the core Tailwind utilities.

### 1. Layout

Utilities for controlling the layout of an element's box model and overall document flow.

- **Display:** `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `hidden`, etc.
- **Box Sizing:** `box-border`, `box-content`
- **Container:** `container` (centers content and sets max-width at breakpoints)
- **Float:** `float-right`, `float-left`, `float-none`
- **Clear:** `clear-left`, `clear-right`, `clear-both`, `clear-none`
- **Positioning:** `static`, `fixed`, `absolute`, `relative`, `sticky`
- **Top / Right / Bottom / Left:** `top-0`, `inset-4`, `-left-2`, etc.
- **Visibility:** `visible`, `invisible`, `collapse`
- **Z-Index:** `z-0`, `z-10`, `z-50`, `z-auto`

### 2. Flexbox

Utilities for creating flexible layouts using CSS Flexbox.

- **Flex Direction:** `flex-row`, `flex-row-reverse`, `flex-col`, `flex-col-reverse`
- **Flex Wrap:** `flex-wrap`, `flex-wrap-reverse`, `flex-nowrap`
- **Flex:** `flex-1`, `flex-auto`, `flex-initial`, `flex-none`
- **Flex Grow:** `grow`, `grow-0`
- **Flex Shrink:** `shrink`, `shrink-0`
- **Order:** `order-1`, `order-2`, ... `order-12`, `order-first`, `order-last`, `order-none`
- **Justify Content:** `justify-start`, `justify-end`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly`
- **Align Items:** `items-start`, `items-end`, `items-center`, `items-baseline`, `items-stretch`
- **Align Self:** `self-auto`, `self-start`, `self-end`, `self-center`, `self-stretch`, `self-baseline`
- **Align Content:** `content-center`, `content-start`, `content-end`, `content-between`, `content-around`, `content-evenly`
- **Gap:** `gap-4`, `gap-x-8`, `gap-y-2`

### 3. Grid

Utilities for creating two-dimensional layouts using CSS Grid.

- **Grid Template Columns:** `grid-cols-1`, `grid-cols-2`, ... `grid-cols-12`
- **Grid Column Start / End:** `col-start-2`, `col-end-4`, `col-span-2`
- **Grid Template Rows:** `grid-rows-1`, `grid-rows-2`, ... `grid-rows-6`
- **Grid Row Start / End:** `row-start-2`, `row-end-4`, `row-span-2`
- **Grid Auto Flow:** `grid-flow-row`, `grid-flow-col`, `grid-flow-row-dense`, `grid-flow-col-dense`
- **Gap:** `gap-4`, `gap-x-8`, `gap-y-2` (Same as Flexbox)

### 4. Spacing

Utilities for controlling an element's margin and padding.

- **Padding:** `p-4`, `px-4` (x-axis), `py-4` (y-axis), `pt-4` (top), `pr-4` (right), `pb-4` (bottom), `pl-4` (left)
- **Margin:** `m-4`, `mx-4`, `my-4`, `mt-4`, `mr-4`, `mb-4`, `ml-4`, `-m-4` (negative margin)
- **Space Between:** `space-x-4`, `space-y-4`, `space-y-reverse` (adds margin between sibling elements)

### 5. Sizing

Utilities for controlling an element's width and height.

- **Width:** `w-4`, `w-1/2`, `w-full`, `w-screen`, `w-min`, `w-max`, `w-fit`, `w-auto`
- **Min-Width:** `min-w-0`, `min-w-full`, `min-w-min`, `min-w-max`, `min-w-fit`
- **Max-Width:** `max-w-xs`, `max-w-screen-sm`, `max-w-full`, `max-w-prose`, `max-w-7xl`
- **Height:** `h-4`, `h-1/2`, `h-full`, `h-screen`, `h-auto`
- **Min-Height:** `min-h-0`, `min-h-full`, `min-h-screen`
- **Max-Height:** `max-h-32`, `max-h-full`, `max-h-screen`

### 6. Typography

Utilities for controlling text style, spacing, and layout.

- **Font Family:** `font-sans`, `font-serif`, `font-mono`
- **Font Size:** `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, ... `text-9xl`
- **Font Smoothing:** `antialiased`, `subpixel-antialiased`
- **Font Style:** `italic`, `not-italic`
- **Font Weight:** `font-thin`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`
- **Letter Spacing:** `tracking-tighter`, `tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-wider`, `tracking-widest`
- **Line Height:** `leading-3`, `leading-normal`, `leading-relaxed`, `leading-loose`
- **List Style Type:** `list-none`, `list-disc`, `list-decimal`
- **List Style Position:** `list-inside`, `list-outside`
- **Text Alignment:** `text-left`, `text-center`, `text-right`, `text-justify`
- **Text Color:** `text-black`, `text-white`, `text-gray-500`, `text-red-600`, etc.
- **Text Decoration:** `underline`, `line-through`, `no-underline`
- **Text Decoration Color:** `decoration-blue-500`
- **Text Decoration Style:** `decoration-solid`, `decoration-double`, `decoration-dotted`, `decoration-dashed`, `decoration-wavy`
- **Text Decoration Thickness:** `decoration-auto`, `decoration-from-font`, `decoration-1`, `decoration-2`, `decoration-4`
- **Text Underline Offset:** `underline-offset-auto`, `underline-offset-1`, `underline-offset-2`, `underline-offset-4`, `underline-offset-8`
- **Text Transform:** `uppercase`, `lowercase`, `capitalize`, `normal-case`
- **Text Overflow:** `truncate`, `text-ellipsis`, `text-clip`
- **Text Indent:** `indent-4`
- **Vertical Alignment:** `align-baseline`, `align-top`, `align-middle`, `align-bottom`, `align-text-top`, `align-text-bottom`
- **Whitespace:** `whitespace-normal`, `whitespace-nowrap`, `whitespace-pre`, `whitespace-pre-line`, `whitespace-pre-wrap`
- **Word Break:** `break-normal`, `break-words`, `break-all`
- **Content:** `content-none`

### 7. Backgrounds

Utilities for controlling an element's background.

- **Background Attachment:** `bg-fixed`, `bg-local`, `bg-scroll`
- **Background Clip:** `bg-clip-border`, `bg-clip-padding`, `bg-clip-content`, `bg-clip-text`
- **Background Color:** `bg-white`, `bg-gray-200`, `bg-blue-600`, `bg-transparent`, etc.
- **Background Origin:** `bg-origin-border`, `bg-origin-padding`, `bg-origin-content`
- **Background Position:** `bg-center`, `bg-top`, `bg-left`, `bg-bottom-right`, etc.
- **Background Repeat:** `bg-repeat`, `bg-no-repeat`, `bg-repeat-x`, `bg-repeat-y`, `bg-repeat-round`, `bg-repeat-space`
- **Background Size:** `bg-auto`, `bg-cover`, `bg-contain`
- **Background Image:** `bg-none`, `bg-gradient-to-r`, `bg-gradient-to-br`
- **Gradient Color Stops:** `from-blue-500`, `via-purple-500`, `to-pink-500`

### 8. Borders

Utilities for controlling an element's borders.

- **Border Radius:** `rounded`, `rounded-lg`, `rounded-full`, `rounded-t-lg`, `rounded-r-md`, etc.
- **Border Width:** `border`, `border-0`, `border-2`, `border-t-4`, `border-r-0`, etc.
- **Border Color:** `border-black`, `border-gray-300`, `border-transparent`, etc.
- **Border Style:** `border-solid`, `border-dashed`, `border-dotted`, `border-double`, `border-none`
- **Divide Width:** `divide-x`, `divide-y-2` (adds borders between sibling elements)
- **Divide Color:** `divide-gray-200`
- **Divide Style:** `divide-solid`, `divide-dashed`
- **Outline Width:** `outline-0`, `outline-1`, `outline-2`, `outline-4`, `outline-8`
- **Outline Color:** `outline-blue-500`
- **Outline Style:** `outline`, `outline-dashed`, `outline-dotted`, `outline-double`
- **Outline Offset:** `outline-offset-0`, `outline-offset-1`, `outline-offset-2`

### 9. Effects

Utilities for applying visual effects like shadows and opacity.

- **Box Shadow:** `shadow`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-inner`, `shadow-none`
- **Shadow Color:** `shadow-blue-500/50` (color/opacity)
- **Opacity:** `opacity-0`, `opacity-50`, `opacity-100`

### 10. Filters

Utilities for applying CSS filters like blur and grayscale.

- **Blur:** `blur`, `blur-sm`, `blur-md`, `blur-lg`, `blur-xl`, `blur-2xl`, `blur-3xl`
- **Brightness:** `brightness-50`, `brightness-100`, `brightness-150`
- **Contrast:** `contrast-0`, `contrast-50`, `contrast-100`, `contrast-150`, `contrast-200`
- **Drop Shadow:** `drop-shadow`, `drop-shadow-sm`, `drop-shadow-md`, `drop-shadow-lg`, `drop-shadow-xl`, `drop-shadow-2xl`, `drop-shadow-none`
- **Grayscale:** `grayscale`, `grayscale-0`
- **Hue Rotate:** `hue-rotate-0`, `hue-rotate-15`, `hue-rotate-30`, ... `hue-rotate-180`
- **Invert:** `invert`, `invert-0`
- **Saturate:** `saturate-0`, `saturate-50`, `saturate-100`, `saturate-150`, `saturate-200`
- **Sepia:** `sepia`, `sepia-0`
- **Backdrop Blur:** `backdrop-blur`, `backdrop-blur-sm`, `backdrop-blur-md`, ... (for the background behind the element)
- **Backdrop Brightness:** `backdrop-brightness-50`, ...
- **...and other backdrop filters.**

### 11. Tables

Utilities for styling table elements.

- **Border Collapse:** `border-collapse`, `border-separate`
- **Table Layout:** `table-auto`, `table-fixed`

### 12. Transitions and Animation

Utilities for controlling CSS transitions and animations.

- **Transition Property:** `transition`, `transition-none`, `transition-all`, `transition-colors`, `transition-opacity`, `transition-shadow`, `transition-transform`
- **Transition Duration:** `duration-75`, `duration-100`, `duration-150`, ... `duration-1000`
- **Transition Timing Function:** `ease-linear`, `ease-in`, `ease-out`, `ease-in-out`
- **Transition Delay:** `delay-75`, `delay-100`, `delay-150`, ... `delay-1000`
- **Animation:** `animate-spin`, `animate-ping`, `animate-pulse`, `animate-bounce`, `animate-none`

### 13. Transforms

Utilities for transforming elements (rotate, scale, skew, translate).

- **Transform:** `transform`, `transform-gpu`, `transform-none`
- **Scale:** `scale-0`, `scale-50`, `scale-100`, `scale-150`, `scale-x-75`, `scale-y-110`
- **Rotate:** `rotate-0`, `rotate-45`, `rotate-90`, `rotate-180`, `-rotate-45`
- **Translate:** `translate-x-4`, `translate-y-2`, `-translate-x-full`
- **Skew:** `skew-x-0`, `skew-x-3`, `skew-x-6`, `skew-x-12`, `skew-y-2`
- **Transform Origin:** `origin-center`, `origin-top`, `origin-top-right`, `origin-bottom-left`

### 14. Interactivity

Utilities for handling user interactions.

- **Cursor:** `cursor-auto`, `cursor-pointer`, `cursor-wait`, `cursor-text`, `cursor-move`, `cursor-not-allowed`
- **User Select:** `select-none`, `select-text`, `select-all`, `select-auto`
- **Resize:** `resize`, `resize-none`, `resize-y`, `resize-x`
- **Scroll Behavior:** `scroll-auto`, `scroll-smooth`
- **Scroll Margin:** `scroll-m-4`, `scroll-mt-8`
- **Scroll Padding:** `scroll-p-4`, `scroll-pt-8`
- **Snap Alignment:** `snap-start`, `snap-end`, `snap-center`, `snap-align-none`
- **Snap Stop:** `snap-normal`, `snap-always`
- **Snap Type:** `snap-none`, `snap-x`, `snap-y`, `snap-both`
- **Touch Action:** `touch-auto`, `touch-none`, `touch-pan-x`, `touch-pan-left`
- **Will Change:** `will-change-auto`, `will-change-scroll`, `will-change-contents`, `will-change-transform`

### 15. SVG

Utilities for styling SVG elements.

- **Fill:** `fill-current` (uses the current text color), `fill-red-500`
- **Stroke:** `stroke-current` (uses the current text color), `stroke-1`, `stroke-2`

### 16. Accessibility

Utilities for improving accessibility.

- **Screen Readers:** `sr-only` (hides element visually but not from screen readers), `not-sr-only`

This list covers the vast majority of the core Tailwind CSS utilities. For the most up-to-date and complete list, always refer to the official [Tailwind CSS documentation](https://tailwindcss.com/docs).
