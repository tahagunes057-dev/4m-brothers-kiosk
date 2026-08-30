# 4M Brothers Kiosk 🍔

A modern, responsive website for the 4M Brothers Kiosk with real-time opening hours tracking and interactive navigation.

## Features

✨ **Key Features:**
- 🎯 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🕐 **Real-time Status** - Automatically displays if the kiosk is open or closed with live countdown
- 📱 **Mobile-First Navigation** - Smooth hamburger menu for smaller screens
- 🎨 **Modern UI** - Clean, professional design with gradient accents
- ♿ **Accessible** - WCAG compliant with ARIA labels and keyboard navigation
- 🌙 **Dark Mode Support** - Automatically adapts to system preferences
- ⚡ **Performance Optimized** - Fast loading and smooth interactions

## Website Sections

1. **Header** - Sticky navigation with logo and mobile menu toggle
2. **Hero Section** - Eye-catching welcome banner with live status indicator
3. **Status Card** - Current opening status with detailed information
4. **Opening Hours** - Weekly schedule with today's day highlighted
5. **Menu Preview** - Categories showcasing food offerings
6. **Contact Section** - Address, phone, and email information
7. **Footer** - Copyright and branding

## Opening Hours

| Day | Hours |
|-----|-------|
| Sonntag (Sunday) | 09:00 – 01:00 |
| Montag (Monday) | 09:00 – 01:00 |
| Dienstag (Tuesday) | 09:00 – 01:00 |
| Mittwoch (Wednesday) | 09:00 – 01:00 |
| Donnerstag (Thursday) | 09:00 – 01:00 |
| Freitag (Friday) | 09:00 – 03:00 |
| Samstag (Saturday) | 09:00 – 03:00 |

## File Structure

```
4m-brothers-kiosk/
├── index.html       # Main HTML structure
├── styles.css       # All styling and responsive design
├── script.js        # Interactivity and opening hours logic
└── README.md        # This file
```

## How to Use

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/tahagunes057-dev/4m-brothers-kiosk.git
cd 4m-brothers-kiosk
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

### Customization

#### Update Opening Hours
Edit `script.js` and modify the `HOURS` object:
```javascript
const HOURS = {
  0: { open: 9 * 60, close: 1 * 60 },   // Sonntag 09:00–01:00
  // ... modify as needed
};
```

#### Update Contact Information
Edit `index.html` in the Contact Section:
```html
<p>Your Address<br>Your City</p>
<p><a href="tel:+491234567890">Your Phone</a></p>
<p><a href="mailto:your@email.com">your@email.com</a></p>
```

#### Customize Colors
Edit `styles.css` CSS variables:
```css
:root {
  --primary: #ff6b35;      /* Orange accent */
  --secondary: #004e89;    /* Blue accent */
  --accent: #f7b801;       /* Yellow accent */
  --dark: #1a1a1a;         /* Dark text */
  --light: #f5f5f5;        /* Light background */
}
```

## JavaScript Functionality

### Opening Hours Logic
- Automatically calculates if the kiosk is currently open or closed
- Handles overnight closings (e.g., closing at 01:00 or 03:00)
- Updates status indicators every minute
- Highlights today's hours in the schedule

### Mobile Navigation
- Toggle hamburger menu on mobile devices
- Auto-closes menu when a link is clicked
- Accessible with ARIA labels

### Scroll Effects
- Header adds shadow when page is scrolled
- Smooth scroll behavior for anchor links

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML structure
- ARIA labels for buttons and navigation
- Keyboard navigation support
- Color contrast compliant
- Respects `prefers-reduced-motion` preference
- Alt text ready for images

## Performance

- Lightweight CSS (9.2 KB)
- Minimal JavaScript (4.8 KB)
- No external dependencies
- Optimized animations with GPU acceleration
- Passive event listeners for scroll performance

## Deployment

### GitHub Pages
1. Push to GitHub
2. Go to repository Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://tahagunes057-dev.github.io/4m-brothers-kiosk`

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: (leave empty, uses root)
4. Deploy!

### Other Hosting
Simply upload the three files (`index.html`, `styles.css`, `script.js`) to your hosting provider.

## License

© 2026 4M Brothers Kiosk. All rights reserved.

## Author

Created by tahagunes057-dev

---

**Last Updated:** August 30, 2026
