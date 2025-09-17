how to write a custom theme using tailwind

---

I'll show you how to create a custom theme using Tailwind CSS. Here's a comprehensive guide:

## 1. Basic Setup with `tailwind.config.js`

First, create or modify your `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Your custom theme extensions go here
    },
  },
  plugins: [],
};
```

## 2. Custom Color Palette

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
      secondary: {
        50: '#faf6ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7c3aed',
        800: '#6b21a8',
        900: '#581c87',
      },
    },
  },
}
```

## 3. Custom Typography

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    },
  },
}
```

## 4. Custom Spacing and Sizing

```javascript
theme: {
  extend: {
    spacing: {
      '18': '4.5rem',
      '88': '22rem',
      '128': '32rem',
    },
    borderRadius: {
      '4xl': '2rem',
    },
  },
}
```

## 5. Complete Custom Theme Example

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Colors
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9",
          900: "#0c4a6e",
        },
        secondary: {
          50: "#faf6ff",
          100: "#f3e8ff",
          500: "#a855f7",
          900: "#581c87",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          500: "#737373",
          900: "#171717",
        },
      },

      // Typography
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Cal Sans", "Inter", "system-ui", "sans-serif"],
      },

      // Spacing
      spacing: {
        18: "4.5rem",
        128: "32rem",
      },

      // Border Radius
      borderRadius: {
        "4xl": "2rem",
      },

      // Box Shadow
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        glow: "0 0 20px rgba(14, 165, 233, 0.15)",
      },

      // Animation
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
```

## 6. Using Your Custom Theme in HTML/JSX

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Custom Theme Example</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-neutral-50 font-sans">
    <div class="max-w-4xl mx-auto p-6">
      <!-- Header with custom colors -->
      <header class="bg-primary-500 text-white p-8 rounded-4xl shadow-soft">
        <h1 class="text-4xl font-display font-bold">Welcome to My App</h1>
        <p class="text-primary-100 mt-2">Built with a custom Tailwind theme</p>
      </header>

      <!-- Content section -->
      <main class="mt-8">
        <div class="bg-white p-6 rounded-2xl shadow-soft">
          <h2 class="text-2xl font-semibold text-primary-900">Features</h2>
          <div class="mt-4 space-y-4">
            <div
              class="p-4 bg-primary-50 rounded-lg border-l-4 border-primary-500"
            >
              <h3 class="font-semibold text-primary-800">Custom Colors</h3>
              <p class="text-neutral-600 mt-1">
                Easily accessible primary and secondary color palette
              </p>
            </div>
            <div
              class="p-4 bg-secondary-50 rounded-lg border-l-4 border-secondary-500"
            >
              <h3 class="font-semibold text-secondary-800">
                Custom Typography
              </h3>
              <p class="text-neutral-600 mt-1">
                Beautiful fonts with proper line heights
              </p>
            </div>
          </div>
        </div>

        <!-- Button with custom styles -->
        <div class="mt-6">
          <button
            class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl 
                      shadow-soft hover:shadow-glow transition-all duration-200 
                      transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  </body>
</html>
```

## 7. CSS Custom Properties (CSS Variables) Approach

For even more flexibility, you can use CSS variables:

```css
/* styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary-50: #f0f9ff;
  --color-primary-500: #0ea5e9;
  --color-primary-900: #0c4a6e;
  --radius-4xl: 2rem;
}

@layer base {
  body {
    font-family: "Inter", system-ui, sans-serif;
  }
}

@layer components {
  .btn-primary {
    @apply bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-xl 
           transition-colors duration-200 font-semibold;
  }

  .card {
    @apply bg-white rounded-2xl shadow-soft p-6 border border-neutral-100;
  }
}
```

## 8. Responsive Design with Custom Breakpoints

```javascript
theme: {
  extend: {
    screens: {
      'xs': '475px',
      '3xl': '1600px',
    },
  },
}
```

## Key Points to Remember:

1. **Use `extend`** to add to Tailwind's default theme without overriding it
2. **Be consistent** with your naming conventions
3. **Test your theme** across different components
4. **Consider accessibility** when choosing colors
5. **Use CSS variables** for dynamic theming if needed

This approach gives you a solid foundation for creating a custom, consistent design system with Tailwind CSS!
