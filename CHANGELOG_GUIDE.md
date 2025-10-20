# Changelog Guide

## How to Add Updates

The changelog section is located in `index.html` within the **Changelog Section**. Follow this structure to add new version updates:

### Structure

```html
<div class="changelog-entry">
    <div class="changelog-header">
        <span class="version-badge">v0.X.X</span>
        <span class="date-badge">YYYY-MM-DD</span>
    </div>
    <div class="changelog-content">
        <h4>Title of Update</h4>
        <ul>
            <li>Feature or fix 1</li>
            <li>Feature or fix 2</li>
            <li>Feature or fix 3</li>
        </ul>
    </div>
</div>
```

### Steps to Add a New Version

1. Open `index.html`
2. Find the `<!-- Changelog Section -->` (around line 183)
3. Add your new version entry **above** the comment `<!-- Add your updates here -->`
4. Use the structure shown above

### Example

```html
<!-- Latest version should be at the top -->
<div class="changelog-entry">
    <div class="changelog-header">
        <span class="version-badge">v0.2.0</span>
        <span class="date-badge">2025-10-25</span>
    </div>
    <div class="changelog-content">
        <h4>Performance Improvements</h4>
        <ul>
            <li>Optimized flashing speed by 30%</li>
            <li>Reduced memory usage</li>
            <li>Fixed bug in WiFi scanner</li>
        </ul>
    </div>
</div>
```

### Versioning Guidelines

- **Major version** (v1.0.0): Breaking changes or major features
- **Minor version** (v0.1.0): New features, backward compatible
- **Patch version** (v0.0.1): Bug fixes and minor improvements

### Best Practices

- Keep entries concise and clear
- Use action verbs (Added, Fixed, Improved, Removed, etc.)
- Order from newest to oldest (latest at top)
- Include the date in YYYY-MM-DD format
- Group related changes together

### Translation

The changelog section title is automatically translated:
- English: "CHANGELOG"
- Spanish: "HISTORIAL DE CAMBIOS"

The content inside each entry is **not** automatically translated, so write your updates in English or maintain both languages.
