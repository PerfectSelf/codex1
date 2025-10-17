# CandidateAssessor Design System Guidelines

## Overview

CandidateAssessor's design language centers on credibility, clarity, and motion that feels purposeful. The system pairs confident gradients with structured layouts to mirror the product’s promise: hiring decisions backed by observable evidence. Accessibility (WCAG AA) and responsiveness remain non-negotiable.

## Color System

### Primary Brand Colors

- **Primary (#5B3FF7)**: Brand-defining violet used for primary actions, gradients, and key data points.
- **Primary Dark (#442AD6)** & **Pressed (#3319BA)**: Use for hover/active states to maintain color harmony.
- **Secondary (#00C1A6)**: Applied sparingly for supporting CTAs, highlights, and success states.

### Text & Surface Colors

- **Text Primary (#0B1020)**: Default body copy on light surfaces; aligns with AA contrast.
- **Surface (#FFFFFF)**: Default card/background on light mode.
- **Muted Surface (#E4E8FB)**: Use for section dividers, subtle panels, and chips.

### Neutral & Support Colors

- **Neutral (#5E6A86)**: Borders, dividers, icon strokes.
- **Muted Foreground (#55607A)**: Helper text, captions, secondary labels.
- **Destructive (#FF5C71)**: Destructive actions and alerts. Pair with white text for legibility.

## Typography

### Font Strategy

**Heading**: Space Grotesk (500–600 weight) for confident, modern headlines.  
**Body/UI**: Inter (400–500 weight) keeps dense information readable.

### Type Scale (Desktop Baseline)

- **H1**: 48–60px / 110% line-height, medium weight, -0.015em letter-spacing
- **H2**: 36–40px / 115% line-height, medium weight
- **H3**: 28px / 120% line-height, medium weight
- **Body**: 16px/24px line-height, normal weight
- **Small**: 14px/20px line-height, normal weight

### Usage Guidelines

- Increase line-height on white backgrounds for better readability
- Use medium weight (500) for headings and buttons
- Use normal weight (400) for body text and inputs

## Spacing & Layout

### 8-Point Grid System

Use consistent spacing based on 8-point increments:

- **4px** (0.25rem): Tight spacing within components
- **8px** (0.5rem): Component internal spacing
- **12px** (0.75rem): Small gaps between elements
- **16px** (1rem): Standard spacing between components
- **24px** (1.5rem): Medium section spacing
- **32px** (2rem): Large section spacing
- **40px** (2.5rem): XL section spacing
- **64px** (4rem): Major section breaks

### Layout Rules

- Components pad in 8-pt steps
- Subtract 1px when borders are present to maintain outer rhythm
- Use consistent container widths with responsive breakpoints

## Components

### Buttons

- **Primary**  
  - Background: #5B3FF7  
  - Text: #FFFFFF  
  - Hover: #442AD6  
  - Focus: 2px ring using rgba(91, 63, 247, 0.35) + offset 2px  
  - Radius: 14–16px, with subtle drop shadow for depth.

- **Secondary**  
  - Background: transparent  
  - Border: 1px solid rgba(91, 63, 247, 0.35)  
  - Text: #0B1020  
  - Hover: Tint with rgba(91, 63, 247, 0.08)

### Cards

- Background: #FFFFFF (light) / #101731 (dark)  
- Border: 1px solid rgba(213, 219, 255, 0.7)  
- Radius: 24–32px for hero panels; 18px for standard cards  
- Shadow: 0 40px 80px -48px rgba(26, 34, 71, 0.6)

### Inputs

- Background: #FFFFFF  
- Border: 1px solid #B8C3FF  
- Focus: 2px ring using rgba(91, 63, 247, 0.25)  
- Radius: 12px  
- Placeholder: rgba(11, 16, 32, 0.55)

## Data Visualization

### Chart Colors

- **Primary**: #5B3FF7
- **Secondary**: #00C1A6
- **Accent**: #1B8CFB, #F28F45, #F553E8
- **Grid Lines**: rgba(17, 23, 40, 0.12)
- Always verify series vs background contrast meets AA for lines/points

### Chart Guidelines

- Use primary brand color for most important data series
- Use secondary for supporting data
- Use neutral/muted for background elements
- Ensure sufficient contrast for accessibility

## Iconography

### Icon Styles

- **Line Icons**: 2px stroke weight using #586C64 (neutral)
- **Filled Accents**: Use #6E8F47 (primary)
- **Size**: Maintain >3:1 contrast against background for UI affordances
- **Consistency**: Use same icon family throughout (Lucide recommended)

## Motion & Animation

### Timing

- **Hover/Focus**: 150-200ms ease-out for state changes
- **Modal/Section Entrances**: 250-300ms for larger transitions
- **Loading States**: Use consistent, subtle animations

### Principles

- Keep state changes subtle and consistent
- Avoid distracting animations that interfere with usability
- Provide visual feedback for interactive elements

## Accessibility Requirements

### Color Contrast

- **Body Text**: Must meet WCAG AA (4.5:1 minimum) on white backgrounds
- **Interactive Elements**: Must meet AA contrast requirements
- **Focus States**: Must be visually distinct with 3:1 contrast minimum

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Focus states must be clearly visible
- Tab order should be logical and intuitive

### Screen Readers

- Use semantic HTML elements
- Provide appropriate ARIA labels where needed
- Ensure content is meaningful without visual context

## Implementation Notes

### CSS Custom Properties

The design system uses CSS custom properties (CSS variables) for all tokens:

- Colors: `var(--primary)`, `var(--foreground)`, etc.
- Spacing: `var(--spacing-4)`, `var(--spacing-8)`, etc.
- Typography: `var(--text-lg)`, `var(--text-xl)`, etc.

### Component Classes

Use utility classes that map to design tokens:

- `.btn-primary`, `.btn-secondary` for buttons
- `.card` for card components
- `.input` for form inputs
- `.icon`, `.icon-accent` for iconography

### Responsive Design

- Follow mobile-first approach
- Use consistent breakpoints
- Maintain design system integrity across all screen sizes

## Brand Application

### Trust & Professionalism

- Use consistent spacing and typography to build trust
- Maintain clean, uncluttered layouts
- Emphasize clarity in financial data presentation

### Conversion Optimization

- Use primary color strategically for key CTAs
- Ensure sufficient visual hierarchy
- Minimize cognitive load with consistent patterns

### Financial Context

- Present numerical data clearly and prominently
- Use appropriate precision for financial figures
- Maintain professional appearance suitable for CFO-level decision makers
