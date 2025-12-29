# Tailwind Design Tokens

**Purpose:** Define design system tokens for consistent styling across the website  
**Based on:** PRD v1.0 design requirements

---

## Design Philosophy

* **Trust & Clarity** - Professional, calm, senior
* **Low Cognitive Load** - High whitespace, clear hierarchy
* **Corporate-Compatible** - Neutral, accessible, professional
* **Subtle Confidence** - Not flashy, but polished

---

## Color Palette

### Neutral Colors (Primary)

```javascript
// Background
background: {
  primary: '#FAFAFA',      // Near-white (not pure white)
  secondary: '#F5F5F5',    // Very light neutral
  paper: '#FFFFFF',        // Pure white for cards/content
}

// Text
text: {
  primary: '#1A1A1A',      // Deep neutral (near black)
  secondary: '#4A4A4A',   // Medium gray for secondary text
  muted: '#6B6B6B',       // Lighter gray for less important text
  inverse: '#FFFFFF',     // White text for dark backgrounds
}

// Borders
border: {
  default: '#E5E5E5',     // Light gray borders
  subtle: '#F0F0F0',      // Very subtle borders
  accent: '#D1D5DB',      // Slightly darker for emphasis
}
```

### Accent Color (Single)

```javascript
// Primary Accent - Blue (Trust/Professionalism)
accent: {
  50: '#EFF6FF',   // Lightest
  100: '#DBEAFE',
  200: '#BFDBFE',
  300: '#93C5FD',
  400: '#60A5FA',
  500: '#3B82F6',  // Primary accent
  600: '#2563EB',  // Hover state
  700: '#1D4ED8',  // Active/pressed
  800: '#1E40AF',
  900: '#1E3A8A',  // Darkest
}
```

### Alternative Accent (Optional - Teal)

```javascript
// If blue doesn't work, consider teal
accentTeal: {
  500: '#14B8A6',  // Primary
  600: '#0D9488',  // Hover
  700: '#0F766E',  // Active
}
```

---

## Typography

### Font Families

```javascript
fonts: {
  // English - Clean sans-serif
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  
  // Hebrew - Professional Hebrew font
  hebrew: ['Heebo', 'Assistant', 'system-ui', 'sans-serif'],
  
  // Monospace (for code snippets if needed)
  mono: ['JetBrains Mono', 'Consolas', 'monospace'],
}
```

### Font Sizes

```javascript
fontSize: {
  // Headings
  'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],      // 40px
  'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],          // 32px
  'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],       // 24px
  'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],       // 20px
  
  // Body
  'base': ['1rem', { lineHeight: '1.6' }],                          // 16px
  'lg': ['1.125rem', { lineHeight: '1.6' }],                        // 18px
  'sm': ['0.875rem', { lineHeight: '1.5' }],                        // 14px
  
  // Small text
  'xs': ['0.75rem', { lineHeight: '1.4' }],                         // 12px
}
```

### Font Weights

```javascript
fontWeight: {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
}
```

---

## Spacing Scale

```javascript
spacing: {
  // Base unit: 4px
  '0': '0',
  '1': '0.25rem',   // 4px
  '2': '0.5rem',    // 8px
  '3': '0.75rem',   // 12px
  '4': '1rem',      // 16px
  '5': '1.25rem',   // 20px
  '6': '1.5rem',    // 24px
  '8': '2rem',      // 32px
  '10': '2.5rem',   // 40px
  '12': '3rem',     // 48px
  '16': '4rem',     // 64px
  '20': '5rem',     // 80px
  '24': '6rem',     // 96px
}
```

### Section Spacing

```javascript
// Vertical rhythm for sections
sectionSpacing: {
  tight: '3rem',      // 48px - between related sections
  normal: '5rem',     // 80px - standard section spacing
  loose: '8rem',      // 128px - major section breaks
}
```

---

## Layout

### Container Widths

```javascript
container: {
  // Max content width for readability
  content: '48rem',      // max-w-3xl (768px)
  wide: '64rem',         // max-w-4xl (1024px)
  full: '100%',
}
```

### Breakpoints

```javascript
screens: {
  'sm': '640px',    // Mobile landscape
  'md': '768px',    // Tablet
  'lg': '1024px',   // Desktop
  'xl': '1280px',   // Large desktop
  '2xl': '1536px',  // Extra large
}
```

---

## Component-Specific Tokens

### Buttons

```javascript
button: {
  // Primary button
  primary: {
    bg: 'accent.500',
    hover: 'accent.600',
    active: 'accent.700',
    text: 'text.inverse',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
  },
  
  // Secondary button
  secondary: {
    bg: 'transparent',
    border: 'border.default',
    hover: 'background.secondary',
    text: 'text.primary',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
  },
  
  // Link button (text only)
  link: {
    text: 'accent.500',
    hover: 'accent.600',
    underline: 'hover',
  },
}
```

### Cards

```javascript
card: {
  bg: 'background.paper',
  border: 'border.default',
  borderRadius: '0.5rem',
  padding: '1.5rem',
  shadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  hover: {
    shadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
}
```

### Links

```javascript
link: {
  default: {
    color: 'accent.500',
    hover: 'accent.600',
    underline: 'hover',
  },
  muted: {
    color: 'text.secondary',
    hover: 'text.primary',
  },
}
```

---

## RTL Support

### RTL-Specific Adjustments

```javascript
rtl: {
  // Spacing adjustments for RTL
  padding: {
    start: 'pl',  // padding-left in LTR, padding-right in RTL
    end: 'pr',   // padding-right in LTR, padding-left in RTL
  },
  
  // Text alignment
  textAlign: {
    default: 'left',   // LTR
    rtl: 'right',      // RTL
  },
  
  // Border radius (may need adjustment)
  borderRadius: {
    start: 'rounded-l',  // left in LTR, right in RTL
    end: 'rounded-r',    // right in LTR, left in RTL
  },
}
```

---

## Tailwind Config Example

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#FAFAFA',
          secondary: '#F5F5F5',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#4A4A4A',
          muted: '#6B6B6B',
          inverse: '#FFFFFF',
        },
        border: {
          default: '#E5E5E5',
          subtle: '#F0F0F0',
          accent: '#D1D5DB',
        },
        accent: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        hebrew: ['Heebo', 'Assistant', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      maxWidth: {
        'content': '48rem',  // max-w-3xl
        'wide': '64rem',     // max-w-4xl
      },
      spacing: {
        'section-tight': '3rem',
        'section-normal': '5rem',
        'section-loose': '8rem',
      },
    },
  },
  plugins: [],
}
```

---

## Accessibility

### Contrast Ratios

- **Text on background:** Minimum 4.5:1 (WCAG AA)
- **Large text:** Minimum 3:1 (WCAG AA)
- **Interactive elements:** Minimum 3:1 (WCAG AA)

### Focus States

```javascript
focus: {
  ring: '2px solid accent.500',
  ringOffset: '2px',
  outline: 'none',
}
```

---

## Usage Examples

### Hero Section

```jsx
<div className="bg-background-primary py-section-normal">
  <div className="max-w-content mx-auto px-4">
    <h1 className="text-h1 text-text-primary font-semibold">
      Avi Koenig
    </h1>
  </div>
</div>
```

### Button

```jsx
<a 
  href="/resume" 
  className="bg-accent-500 hover:bg-accent-600 text-text-inverse px-6 py-3 rounded-md font-medium transition-colors"
>
  Resume (PDF)
</a>
```

### Card

```jsx
<div className="bg-background-paper border border-border-default rounded-lg p-6 shadow-sm">
  {/* Card content */}
</div>
```

---

## Notes

1. **Test colors** - Ensure contrast ratios meet WCAG AA standards
2. **RTL testing** - Verify all spacing and alignment works in Hebrew
3. **Font loading** - Consider font-display: swap for web fonts
4. **Dark mode** - Not in scope for v1, but tokens can be extended later
5. **Print styles** - Consider print-friendly color adjustments if needed

---

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Inter Font](https://rsms.me/inter/)
- [Heebo Font](https://fonts.google.com/specimen/Heebo)
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)

