# Design System Strategy: The Ethereal Professional

## 1. Overview & Creative North Star
The "Creative North Star" for this design system is **"The Ethereal Curator."** 

This system moves away from the rigid, boxy constraints of traditional portfolios to embrace a fluid, breathable, and high-end editorial aesthetic. It is designed to feel like a digital art gallery—sophisticated yet approachable. By utilizing **intentional asymmetry** (e.g., a display headline offset against a right-aligned image) and **tonal depth**, we create a signature experience that feels "designed" rather than "assembled." We break the template look by treating the screen as a canvas where elements float in a coordinated, pastel-hued atmosphere.

## 2. Color & Surface Philosophy
The palette is a sophisticated take on Gen Z pastels, using Material Design logic to ensure functional hierarchy without sacrificing the "dreamy" vibe.

*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through background shifts. For example, a `surface-container-low` section should sit directly on a `surface` background to create a soft, organic transition.
*   **Surface Hierarchy & Nesting:** Treat the UI as layers of fine, semi-translucent paper.
    *   **Base:** `surface` (#f8f9fa)
    *   **Sectioning:** Use `surface-container-low` (#f1f4f5) for large structural blocks.
    *   **Components:** Use `surface-container-lowest` (#ffffff) for cards to make them "pop" against the slightly darker sections.
*   **The "Glass & Gradient" Rule:** To achieve a premium custom feel, floating elements (like Navigation Bars or Modals) must use **Glassmorphism**. Apply `surface` at 70% opacity with a `24px` backdrop-blur. 
*   **Signature Textures:** Linear gradients are our "visual soul." Use a transition from `primary` (#974362) to `primary-container` (#fe97b9) at a 135-degree angle for hero buttons and key highlights. This adds a "glow" that flat colors cannot replicate.

## 3. Typography: Modernity & Rhythm
We use **Plus Jakarta Sans** for its friendly yet geometric precision. The goal is to create an editorial rhythm through dramatic scale contrasts.

*   **Display (The Hook):** `display-lg` (3.5rem) should be used sparingly for "hero" statements. Set it with tight letter-spacing (-0.02em) to feel impactful and modern.
*   **Headline (The Story):** `headline-lg` (2rem) guides the user through project titles.
*   **Body (The Detail):** `body-lg` (1rem) is the workhorse. Ensure a generous line-height (1.6) to maintain the "breathable" feel.
*   **Labels (The Metadata):** `label-md` (0.75rem) should always be in All Caps with +0.05em tracking when used for categories or tags to provide a professional, "spec-sheet" contrast to the soft body copy.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too heavy for this system. We achieve depth through **Tonal Layering** and **Ambient Light**.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` card on a `surface-container` background. The subtle shift in hex value creates "natural lift."
*   **Ambient Shadows:** For floating action buttons or high-priority cards, use an "Ambient Shadow": `0px 10px 40px rgba(45, 51, 53, 0.06)`. The shadow color is derived from `on-surface`, making it feel like a soft reflection rather than a "dark hole."
*   **The "Ghost Border" Fallback:** If a divider is required for accessibility, use the `outline-variant` token (#adb3b5) at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism Depth:** When nesting glass elements, increase the `backdrop-blur` and the `surface-container` tier for each subsequent layer to simulate physical thickness.

## 5. Component Guidelines

### Buttons: The "Soft-Touch" Interaction
*   **Primary:** Gradient from `primary` to `primary-container`. `9999px` (full) rounded corners. Use `on-primary` text.
*   **Secondary:** `surface-container-high` background with `primary` text. No border.
*   **Interaction:** On hover, primary buttons should scale to 105% with a subtle glow increase (increase shadow spread by 4px).

### Cards & Lists: Editorial Flow
*   **Forbid Dividers:** Never use a horizontal line to separate list items. Use `spacing-6` (2rem) of vertical white space or alternate background tones between items.
*   **Card Styling:** Use `roundedness-xl` (3rem) for project cards to lean into the youthful, playful vibe.

### Input Fields: Clean & Minimal
*   **Style:** `surface-container-lowest` background with a `ghost border`.
*   **Focus State:** Shift the border to 100% opacity `primary` color and add a soft `primary-container` outer glow (4px spread).

### Contextual Components (Portfolio Specific)
*   **The Floating Nav:** A glassmorphic bar pinned to the bottom or top, using `roundedness-full`. 
*   **Project Tags (Chips):** Use `tertiary-container` with `on-tertiary-container` text. Use `roundedness-md` (1.5rem) to differentiate them from the "full" roundness of buttons.

## 6. Do's and Don'ts

### Do:
*   **DO** use whitespace as a functional element. If a layout feels "crowded," double the spacing scale value.
*   **DO** use asymmetrical image placements. Align text to the left and images slightly offset to the right to create an editorial feel.
*   **DO** use the `primary-fixed` and `secondary-fixed` tokens for subtle background accents behind photos.

### Don't:
*   **DON'T** use pure black (#000000) for text. Always use `on-surface` (#2d3335) to maintain the "soft" professional vibe.
*   **DON'T** use "Hard" corners. Even the smallest component (like a checkbox) must use at least `roundedness-sm`.
*   **DON'T** over-saturate. The beauty of this system lies in the balance between the neutral `surface` and the pastel accents. Keep the ratio roughly 80% neutral, 20% color.