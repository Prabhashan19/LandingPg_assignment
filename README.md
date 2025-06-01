# Creative Team Ideas - Landing Page

A modern, responsive landing page for Creative Team Ideas showcasing AI automation tools and collaboration solutions. Built with HTML5, SCSS, and JavaScript, containerized with Docker for easy deployment.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet (768px) and mobile (480px)
- **Modern UI/UX**: Clean design with smooth animations and hover effects
- **Fixed Navigation**: Sticky header with mobile hamburger menu
- **Smooth Scrolling**: Enhanced navigation with offset for fixed header
- **Company Showcase**: Floating logo grid displaying trusted partners
- **Interactive Elements**: Animated buttons, carousel navigation, and form interactions
- **Containerized Deployment**: Docker setup for consistent environments

## 🚀 Live Sections

1. **Hero Section** (`#success`) - Company logos and main value proposition
2. **AI Automation** (`#automation`) - Features and capabilities showcase
3. **Testimonials** (`#achievement`) - Customer feedback and ratings
4. **Get Started** (`#journey`) - Call-to-action section
5. **Footer** - Links, social media, and newsletter subscription

## 🛠️ Tech Stack

- **Frontend**: HTML5, SCSS/CSS3, Vanilla JavaScript
- **Containerization**: Docker, Docker Compose
- **Web Server**: Nginx Alpine
- **Build Tools**: SCSS compilation
- **Assets**: SVG icons, optimized images

## 📁 Project Structure

```
├── docker-compose.yml      # Container orchestration
├── Dockerfile             # Container definition
├── nginx.conf            # Web server configuration
├── README.md             # Project documentation
└── website/              # Frontend application
    ├── index.html        # Main HTML structure
    ├── styles.scss       # Source styles with variables
    ├── styles.css        # Compiled CSS output
    ├── styles.css.map    # Source map for debugging
    ├── web.js           # Interactive functionality
    └── img/             # Image assets and icons
        ├── company logos (slack.svg, microsoft.svg, etc.)
        ├── navigation icons (arrow.svg, left_arrow.svg, etc.)
        ├── social media icons (icons8-*.svg)
        └── background images (free_guide.png, UX@2x_*.png)
```

## 🏃‍♂️ Quick Start

### Using Docker (Recommended)

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd LandingPg_assignment
   ```

2. **Build and run with Docker Compose**

   ```bash
   docker-compose up --build
   ```

3. **Access the website**
   ```
   http://localhost:3000
   ```

### Local Development

1. **Serve the files**

   ```bash
   cd website
   # Use any local server (e.g., Live Server in VS Code)
   # or Python: python -m http.server 8000
   ```

2. **SCSS Development** (Optional)
   ```bash
   # Watch for SCSS changes
   sass --watch styles.scss:styles.css
   ```

## 🐳 Docker Configuration

### Services

- **nginx-website**: Nginx Alpine container serving the static website
  - **Port**: 3000 (host) → 80 (container)
  - **Volume**: `./website` → `/var/www/html`
  - **Network**: Custom bridge network `webnet`

### Nginx Features

- **Static file serving** with efficient caching
- **Gzip compression** for faster loading
- **Security headers** for protection
- **Asset optimization** with 1-year cache expiry

## 🎨 Design System

### Colors

- **Primary**: `#f92672` (Pink accent)
- **Secondary**: `#a86db7` (Purple variant)
- **Text**: `#000743` (Dark blue)
- **Background**: Gradient from white to `#f8f8ff`

### Typography

- **Font Family**: DM Sans (Google Fonts)
- **Headings**: 700 weight, responsive sizing
- **Body**: 400 weight, optimized line height

### Breakpoints

- **Desktop**: > 768px
- **Tablet**: ≤ 768px
- **Mobile**: ≤ 480px

## 🔧 Development

### SCSS Structure

- **Variables**: Colors, gradients, and reusable values
- **Nesting**: Organized component-based styling
- **Mixins**: Responsive design patterns
- **Media Queries**: Mobile-first responsive design

### JavaScript Features

- **Smooth Scrolling**: Enhanced anchor navigation
- **Mobile Menu**: Hamburger menu with toggle functionality
- **Responsive Handlers**: Window resize event handling
- **Accessibility**: Keyboard navigation support

### Performance Optimizations

- **Optimized Images**: SVG icons and compressed backgrounds
- **CSS Minification**: Production-ready compiled styles
- **Caching Strategy**: Browser and server-side caching
- **Lazy Loading**: Efficient resource loading

## 📱 Responsive Features

### Mobile Navigation

- Hamburger menu for small screens
- Collapsible navigation with smooth animations
- Touch-friendly button sizing
- Optimized spacing for mobile interaction

### Adaptive Content

- Company logos fade on smaller screens
- Responsive typography scaling
- Flexible grid layouts
- Optimized image sizing

## 🚢 Deployment

### Docker Deployment

```bash
# Production build
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Environment Variables

No environment variables required - static site deployment.

### Server Requirements

- **Docker**: 19.03+
- **Docker Compose**: 1.25+
- **Memory**: 256MB minimum
- **Storage**: 50MB for images and assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use meaningful class names and comments
- Follow SCSS nesting conventions
- Maintain responsive design patterns
- Test across different screen sizes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Icons**: Icons8 for social media icons
- **Fonts**: Google Fonts for DM Sans typography
- **Images**: Optimized background images for sections
- **Inspiration**: Modern web design principles and best practices

## 📞 Support

For support, questions, or feature requests:

- Open an issue in the repository
- Check the documentation for common solutions

---

**Built with ❤️ for Creative Team Ideas**
