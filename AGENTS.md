# AGENTS.md

## Project Overview
This project is a personal portfolio website showcasing mobile applications published on the App Store and Google Play. It is hosted on GitHub Pages.

## Goals
- Showcase a portfolio of apps.
- Provide details for each app (features, download links).
- **CRITICAL**: Ensure the site has clear access to **Support** and **Privacy Policy** information (if applicable).

## Architecture & Technology
- **Hosting**: GitHub Pages.
- **Stack**: Pure HTML, CSS, and vanilla JavaScript.
- **Structure**:
    - `index.html`: Main landing page with a list of apps ("Link in Bio" style).
    - `assets/`: Directory for static assets (images).
        - `assets/images/app_store_badge.svg`: Official "Download on the App Store" badge.
        - `assets/images/google_play_badge.svg`: Official "Get it on Google Play" badge.
- **Styling**: CSS is currently embedded within the `<head>` of HTML files.
- **Scripting**: Minimal vanilla JS embedded at the bottom of HTML files.

## File Structure
- `index.html`: Entry point.
- `assets/`: Images and icons.

## Guidelines for Agents
1. **GitHub Pages Limitations**:
    - This is a static site. Do not introduce server-side code (PHP, Node.js, Python, etc.) or databases.
    - All content must be client-side.

2. **Code Style**:
    - Keep CSS and JS embedded in the HTML files unless the complexity grows significantly, in which case refactoring to external files in `assets/` is acceptable but must be consistent.
    - Ensure responsive design (mobile-first or adaptive).

3. **Content Requirements**:
    - **Support**: The site MUST have a footer or dedicated section with contact information (email).

4. **Maintenance**:
    - When adding a new app:
        1. Add a card to `index.html`.
        2. Ensure assets are placed in `assets/images/`.

## Current Status & Known Issues
- None.
