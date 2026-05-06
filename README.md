# Alex Gold - Portfolio Website

A sleek, professional portfolio website with modern animations and responsive design.

## Features

- **Logo Drawing Animation**: SVG-based logo animation on page load
- **Fade-in Animations**: Smooth scroll-triggered animations for all sections
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Typography**: Inter font for body text, Playfair Display for headings
- **Professional Color Scheme**: Blue-to-purple gradient based on logo colors
- **Interactive Elements**: Hover effects, smooth scrolling, and form validation

## Customization Guide

### Adding Your Profile Picture

1. Save your profile photo as `imgs/profile-placeholder.jpg` (recommended: 300x300px or larger, square aspect ratio)
2. The website will automatically detect and display your photo
3. If no photo is found, a stylish placeholder will remain visible

### Personalizing Content

Edit the following sections in `index.html`:

- **Hero Section**: Update name, title, and description
- **About Section**: Modify the bio text and skills
- **Projects Section**: Replace with your actual projects
- **Contact Section**: Update contact information and social links

### Color Customization

The color scheme uses a blue-to-purple gradient. To customize:

1. Open `style.css`
2. Find the gradient definitions (search for `#4A90E2` and `#9B59B6`)
3. Replace with your preferred colors

### Font Customization

Currently uses:
- **Inter**: Modern sans-serif for body text
- **Playfair Display**: Elegant serif for headings

To change fonts, update the Google Fonts link in `index.html` and the `font-family` declarations in `style.css`.

## File Structure

```
SeniorPortfolio/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # JavaScript functionality
└── imgs/
    └── portfoliologo (2).png  # Your logo file
```

## How to View

Simply open `index.html` in any modern web browser, or serve it with a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts
- SVG Animations