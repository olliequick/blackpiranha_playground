# AGENTS.md — Agent Development & Automation Guide

## 1. Mission & System Boundaries

Welcome, Agent. You are an automated documentation engineer operating within **Blackpiranha Playground** (`https://playground.blackpiranha.net/`), synced to the `blackpiranha_playground` GitHub repository.

This repository serves as an **auto-generated documentation hub** for a collection of native Android applications (such as **Sparrowhawk**, **Eat What Ah**, **Type Affair**, and future projects) created under the Blackpiranha brand.

### Core Operating Constraints
* **Documentation-Only Repository**: There is **no application programming** here. You must **NEVER** introduce backend code, servers, or application software.
* **Permitted File Modifications**: You are strictly confined to creating and editing:
  1. Markdown content files (`*.md`)
  2. MkDocs & YAML configuration files (`mkdocs.yml`, `*.yml`, `*.yaml`)
  3. Static landing assets & portal links (`index.html`, `style.css`, image assets)
* **Material for MkDocs Compliance**: All documentation must strictly adhere to [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) syntax, components, and configuration specifications.
* **Independent Mini-Sites**: Each Android project is structured in its own directory and functions as a **dedicated, self-contained Material for MkDocs mini-site**.

---

## 2. Repository Architecture & Layout

The site follows a two-tier architecture:
1. **Root Landing Portal (`index.html`)**: A clean, responsive HTML homepage that introduces Blackpiranha and provides links/cards routing users to each application's dedicated mini-site.
2. **Dedicated Project Mini-Sites**: Independent sub-sites under each project directory (e.g., `sparrowhawk/`, `eat-what-ah/`, `type-affair/`, etc.), containing its own `mkdocs.yml`, theme configuration, and documentation tree.

### Workspace File Map
```
blackpiranha_playground/
├── AGENTS.md                   # This instruction file for Antigravity agents
├── CNAME                       # Custom domain (playground.blackpiranha.net)
├── index.html                  # Root landing page linking to all mini-sites
├── style.css                   # Global landing page styling
├── requirements.txt            # Python dependencies (mkdocs-material)
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages build & deployment workflow
│
├── <project-slug>/             # Dedicated directory for each Android application
│   │                           # (e.g., sparrowhawk/, eat-what-ah/, type-affair/)
│   ├── mkdocs.yml              # Dedicated Material for MkDocs configuration
│   └── docs/                   # Mini-site documentation source
│       ├── index.md            # App landing page (Hero, Pitch, Feature grid)
│       ├── features.md         # In-depth features & screenshots
│       ├── privacy.md          # Google Play compliant Privacy Policy
│       ├── releases.md         # Version history & changelog
│       ├── permissions.md      # Android permissions explanation
│       └── assets/             # App icons, mockups, screenshots
...
```

---

## 3. Material for MkDocs Standard Configuration

When creating or maintaining `mkdocs.yml` for any project, enforce the following configuration standards:

```yaml
site_name: <App Name>
site_url: https://playground.blackpiranha.net/<app-slug>/
site_description: <Concise, punchy description of the Android app>
site_author: Donny (Blackpiranha)

theme:
  name: material
  language: en
  palette:
    # Light mode palette
    - scheme: default
      primary: teal              # Choose app-specific primary branding color
      accent: orange             # Choose app-specific accent color
      toggle:
        icon: material/brightness-7
        name: Switch to dark mode
    # Dark mode palette
    - scheme: slate
      primary: teal
      accent: orange
      toggle:
        icon: material/brightness-4
        name: Switch to light mode
  features:
    - navigation.instant
    - navigation.tracking
    - navigation.sections
    - navigation.tabs
    - navigation.top
    - content.code.copy

markdown_extensions:
  - admonition
  - pymdownx.details
  - pymdownx.superfences
  - pymdownx.tabbed:
      alternate_style: true
  - pymdownx.highlight:
      anchor_linenums: true
  - pymdownx.inlinehilite
  - pymdownx.snippets
  - pymdownx.emoji:
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
  - attr_list
  - md_in_html

nav:
  - Overview: index.md
  - Features: features.md
  - Privacy Policy: privacy.md
  - Releases: releases.md
  - Permissions: permissions.md
```

---

## 4. Documentation Standards for Android Applications

Every mini-site serves as the authoritative public documentation and Google Play support website for that Android application. Agents must enforce high editorial standards:

### A. App Overview (`index.md`)
* **Hero Banner**: Clear application title, concise tagline, and primary call to action.
* **Value Proposition**: Explain why the app was built, target users, and unique selling points (e.g., native Android, tactile button navigation, Material 3 design, distraction-free).
* **Feature Grid**: Showcase core capabilities using Material card grids:
  ```html
  <div class="grid cards" markdown>
  - :material-cellphone-text: **Modern Reading Interface**
      Clean Material 3 interface with dedicated article navigation buttons.
  - :material-shield-check: **Privacy First**
      Local Room database storage. No tracking, no external accounts required.
  </div>
  ```
* **Call to Action Buttons**:
  ```markdown
  [View Release Notes :material-download:](releases.md){ .md-button .md-button--primary }
  [Read Privacy Policy :material-shield-account:](privacy.md){ .md-button }
  ```
* **Developer Contact**: Display contact email in the standard obfuscated format: `<app-name>.app (at) blackpiranha.net`.

### B. Privacy Policy (`privacy.md`) — Mandatory & Google Play Compliant
A compliant privacy policy is essential for Google Play Store distribution. Every app's `privacy.md` must contain:
1. **Clear Statement of Non-Collection**:
   > *"The app does not collect, track, or transmit any personal identification, device identifiers, or sensitive user data to external servers."*
2. **Local Storage Architecture**: Disclose how data is retained locally (e.g., SQLite / Room database, SQLCipher encrypted storage).
3. **Third-Party Trackers**: State explicitly that no advertising SDKs, third-party analytics, or surveillance trackers are bundled.
4. **Data Deletion Procedures**:
   * Clear steps inside the app to wipe history/cache.
   * Android system route: `Android Settings > Apps > <AppName> > Storage > Clear Data`.
   * Uninstallation wipes all local data permanently.
5. **Permissions Rationale**: Brief justification for any runtime or install-time permissions.
6. **Support Contact**: Support email `<app-name>.app (at) blackpiranha.net`.
7. **Version Stamp**: `*Last Updated: <Month Day, Year>*` at the top.

### C. Release Notes / Changelog (`releases.md`)
* Maintain reverse-chronological order: latest version at the top.
* Header format: `### vX.Y.Z *(Month DD, YYYY)*`.
* Categorize changes using clear bullet points:
  * **Added**: New features, new UI components.
  * **Improved**: Performance, Material 3 dynamic color tweaks, typography.
  * **Fixed**: Bug fixes, crash resolutions, database migration logic.
  * **Security**: Dependencies, encryption, or permissions tightening.

### D. Android Permissions Transparency (`permissions.md`)
For any permission requested in `AndroidManifest.xml` (e.g., `INTERNET`, `POST_NOTIFICATIONS`, `READ_MEDIA_AUDIO`), provide:
* Permission identifier and protection level (Normal vs. Runtime).
* Exact user benefit and functional necessity.
* Reassurance that the permission is never used for data harvesting.

---

## 5. Agent Operational Runbooks

### Runbook 1: Creating a New Android App Mini-Site
When instructed to add a new project `<app-slug>`:
1. **Initialize Directory**: Create `<app-slug>/` and `<app-slug>/docs/`.
2. **Configure `mkdocs.yml`**:
   - Set `site_name` to the app's formal title.
   - Configure branding palette (choose fitting primary and accent colors).
   - Set up standard navigation structure and Material extensions.
3. **Generate Baseline Documentation**:
   - `docs/index.md`: Hero, value proposition, feature card grid, contact info.
   - `docs/features.md`: Deep dive into app capabilities and screenshots.
   - `docs/privacy.md`: Complete Google Play compliant privacy policy.
   - `docs/releases.md`: Initial release notes (v1.0.0).
   - `docs/permissions.md`: Permissions transparency breakdown.
4. **Update Root Landing Page (`index.html`)**:
   - Add a new card/tile to `index.html` linking directly to `<app-slug>/`.
   - Include the app logo, tagline, and a link button.
5. **Validate Build**:
   - Run `mkdocs build --strict` to ensure zero broken links and valid YAML/Markdown.

### Runbook 2: Updating an Existing App Site
When updating an existing app:
1. **Targeted Edits**: Only modify files belonging to the relevant app folder (`<app-slug>/`).
2. **Version Bumps**: When releasing an update, add the new version to `releases.md` with date and change items.
3. **Verify Links**: Check that all relative cross-links (e.g., `[Privacy Policy](privacy.md)`) resolve properly.

### Runbook 3: Updating the Root Portal (`index.html`)
1. Keep the landing page lightweight, responsive, and visually cohesive with Blackpiranha branding.
2. Ensure every registered app link points accurately to its respective mini-site path.

---

## 6. Material for MkDocs Formatting Cheatsheet

Use these components to keep pages modern and structured:

* **Admonitions**:
  ```markdown
  !!! note "Note"
      Informational context.

  !!! tip "Pro Tip"
      You can use physical volume or hardware buttons to navigate articles.

  !!! warning "Caution"
      Clearing storage will permanently remove your saved feeds.
  ```

* **Content Tabs**:
  ```markdown
  === "Light Mode"
      Clean high-contrast theme for daytime reading.

  === "Dark Mode"
      OLED-friendly slate palette for nighttime doomscrolling.
  ```

* **Buttons & Badges**:
  ```markdown
  [Download on GitHub :material-download:](https://github.com/blackpiranha/<app>){ .md-button .md-button--primary }
  [Read Documentation :material-book-open-page-variant:](features.md){ .md-button }
  ```

* **Icons**:
  ```markdown
  :material-android: Android Native
  :material-shield-check: Privacy-First
  :material-rss: RSS / Atom
  ```

---

## 7. Quality & Verification Checklist

Before completing any task, every agent must verify:
- [ ] **No application code written**: Only `.md`, `.yml`, and static assets were modified.
- [ ] **Valid YAML**: `mkdocs.yml` contains zero syntax errors and valid 2-space indentation.
- [ ] **Valid Markdown**: No broken headings, unclosed code fences, or malformed links.
- [ ] **Material Compliance**: Uses official Material for MkDocs components and extensions.
- [ ] **Strict Build Cleanliness**: `mkdocs build --strict` finishes with 0 errors and 0 warnings.
- [ ] **Root Portal Synced**: New or renamed projects are properly linked from root `index.html`.
