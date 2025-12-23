# General guidelines

* **Structure:** Use semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) for better SEO and accessibility.
* **Layout:** Use CSS Grid and Flexbox by default. Avoid absolute positioning unless strictly necessary for decorative elements.
* **Responsiveness:** Adopt a Mobile-first approach. Ensure adequate padding on smaller screens so text never touches the edges.
* **Code Style:** Keep code clean and modular. Use concise class names (BEM naming convention or utility-first if using Tailwind).

--------------

# Design system guidelines

## Typography
* **Font Family:** Use a Monospaced font stack to match the brutalist/technical aesthetic (e.g., `'Courier New', Courier, monospace` or `Roboto Mono`).
* **Hierarchy:**
  * **H1/Hero:** Large, bold, and strictly centered text.
  * **Body Text:** Readable size (min 16px), high contrast.
  * **Links:** Text-style with underline. No background colors or button-like appearance for standard links.

## Colors
* **Background:** Off-white or pure white (`#F8F8F8` or `#FFFFFF`) to maintain the clean look.
* **Text:** Pure black (`#000000`) or very dark gray (`#1A1A1A`) for maximum contrast.
* **Accents:** Use color sparingly, only for hover states or specific highlights.

## Spacing & Layout
* **Whitespace:** Use generous spacing between sections to keep the design "clean" and breathable.
* **Container:** Use a centered container with a `max-width` (e.g., 1200px) for large screens.
* **Alignment:** Text in the Hero section must be centered.

## Components

### Header / Navbar
* **Layout:** Flexbox `space-between`.
  * Left: Logo/Name ("Lívia Miranda").
  * Center: Navigation links ("Início", "Projetos", "Sobre mim").
  * Right: Action icons (Email, LinkedIn, CV).
* **Style:** Minimalist. No heavy shadows or background colors. Use a simple bottom border line if separation is needed.

### Buttons & Icons
* **Style:** Outline style or text-only. Avoid pill-shaped filled buttons unless heavily emphasized.
* **Icons:** Use thin, outlined icons (like Phosphor Icons or Heroicons) to match the font weight.