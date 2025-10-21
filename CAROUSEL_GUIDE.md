# Carousel Image Guide

## Image Requirements

### Directory Structure
```
img/
└── board/
    └── cyd/
        └── ui/
            ├── main-menu.png
            ├── wifi-scanner.png
            ├── deauth-detection.png
            ├── bluetooth-scan.png
            └── settings.png
```

### Image Specifications

- **Format:** PNG (recommended for screenshots)
- **Aspect Ratio:** 4:3 (320x240 native resolution)
- **Recommended Size:** 640x480 pixels or 960x720 pixels
- **Max Size:** 1280x960 pixels (for performance)
- **File Size:** Keep under 500KB per image

### Naming Convention

Use descriptive, lowercase names with hyphens:
- `main-menu.png` - Main menu interface
- `wifi-scanner.png` - WiFi scanning screen
- `deauth-detection.png` - Deauth detection screen
- `bluetooth-scan.png` - Bluetooth scanner
- `settings.png` - Settings menu

## How to Add/Change Images

### Method 1: Replace Existing Images
1. Take screenshots of your ESP32 CYD display
2. Resize to recommended dimensions (640x480 or 960x720)
3. Save with the exact filenames shown above
4. Place in `img/board/cyd/ui/` directory

### Method 2: Add More Slides
1. Add your new image to `img/board/cyd/ui/`
2. Open `index.html`
3. Find the `<!-- Gallery Carousel Section -->`
4. Add a new slide inside `.carousel-track`:

```html
<div class="carousel-slide">
    <img src="img/board/cyd/ui/your-new-image.png" alt="Description" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'320\' height=\'240\' viewBox=\'0 0 320 240\'%3E%3Crect width=\'320\' height=\'240\' fill=\'%23050805\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' fill=\'%2300ff41\' font-family=\'monospace\' font-size=\'14\'%3EYour Feature Name%3C/text%3E%3C/svg%3E'">
    <div class="carousel-caption">Your Feature Name</div>
</div>
```

5. The indicators will automatically update

### Method 3: Remove Slides
1. Open `index.html`
2. Find the slide you want to remove in `.carousel-track`
3. Delete the entire `<div class="carousel-slide">...</div>` block
4. Save the file

## Carousel Features

### Auto-Play
- Automatically advances every 5 seconds
- Pauses on hover/touch
- Resumes when mouse leaves

### Navigation
- **Arrow Buttons:** Click left/right arrows
- **Keyboard:** Use arrow keys (← →)
- **Touch/Swipe:** Swipe left/right on mobile
- **Indicators:** Click dots at bottom

### Responsive Design
- Adapts to screen size
- Maintains 4:3 aspect ratio
- Smaller controls on mobile

## Fallback Images

If images don't exist, the carousel shows placeholder SVG images with:
- Black background (#050805)
- Green text (#00ff41)
- Feature name displayed

## Tips for Best Results

### Taking Screenshots
1. Use the ESP32's native resolution (320x240)
2. Capture clear, readable screens
3. Show different features/functions
4. Use high contrast for better visibility

### Image Optimization
- Use tools like TinyPNG or ImageOptim
- Compress without losing quality
- Keep file sizes reasonable for web

### Recommended Captures
- Main menu / home screen
- WiFi scanner with networks list
- Deauth detection in action
- Bluetooth scanner results
- Settings/configuration menu
- Any special features or tools

## Testing

After adding images:
1. Open the webpage in browser
2. Check that all images load correctly
3. Test navigation (arrows, keyboard, swipe)
4. Verify auto-play works
5. Test on mobile devices

## Troubleshooting

**Images not showing:**
- Check file paths are correct
- Verify files are in `img/board/cyd/ui/`
- Check file permissions
- Clear browser cache (Ctrl+Shift+R)

**Carousel not working:**
- Open browser console (F12)
- Look for JavaScript errors
- Verify `script.js` is loaded correctly

**Wrong aspect ratio:**
- Images should be 4:3 ratio
- Use image editor to crop/resize
- Recommended: 640x480, 960x720, or 1280x960
