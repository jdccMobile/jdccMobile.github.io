# AGENTS.md

## Project Overview
This project is a personal portfolio website showcasing mobile applications published on the App Store and Google Play. It is hosted on GitHub Pages.

## Goals
- Showcase a portfolio of apps.
- Provide details for each app (features, download links).
- **CRITICAL**: Ensure every app page has clear access to **Support** and a **Privacy Policy**.

## Architecture & Technology
- **Hosting**: GitHub Pages.
- **Stack**: Pure HTML, CSS, and vanilla JavaScript.
- **Structure**:
    - `index.html`: Main landing page with a grid of apps.
    - `[app_name].html`: Individual landing pages for each app.
    - `assets/`: Directory for static assets (images).
        - `assets/images/app_store_badge.svg`: Official "Download on the App Store" badge.
        - `assets/images/google_play_badge.svg`: Official "Get it on Google Play" badge.
- **Styling**: CSS is currently embedded within the `<head>` of each HTML file.
- **Scripting**: Minimal vanilla JS embedded at the bottom of HTML files (for mobile menus/navigation).

## File Structure
- `index.html`: Entry point.
- `star_realms.html`: Detail page for Star & Hero Realms Contador.
- `chinchon_counter.html`: Detail page for Chinchón Counter.
- `cosmere_companion.html`: Detail page for Cosmere Companion.
- `descubre_cantabria.html`: Detail page for Descubre Cantabria.
- `kawaii_sushi_counter.html`: Detail page for Kawaii Sushi Counter.
- `assets/`: Images and icons.

## Guidelines for Agents
1. **GitHub Pages Limitations**:
    - This is a static site. Do not introduce server-side code (PHP, Node.js, Python, etc.) or databases.
    - All content must be client-side.

2. **Code Style**:
    - Keep CSS and JS embedded in the HTML files unless the complexity grows significantly, in which case refactoring to external files in `assets/` is acceptable but must be consistent.
    - Ensure responsive design (mobile-first or adaptive).

3. **Content Requirements**:
    - **Support & Privacy**: Every app page MUST have a footer or dedicated section with links to:
        - Privacy Policy (external link).
        - Support (email or contact method).

4. **Maintenance**:
    - When adding a new app:
        1. Create a new HTML file based on the existing template.
        2. Add a card to `index.html`.
        3. Ensure assets are placed in `assets/images/`.

## Current Status & Known Issues
- `descubre_cantabria.html`: The privacy policy link points to a Flycricket login page, which is likely incorrect. It should be updated to the public view link.
- Support sections currently exist but mainly contain the Privacy Policy link. A direct contact method (e.g., email) is not explicitly visible on all pages.
