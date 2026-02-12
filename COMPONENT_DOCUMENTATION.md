# Component Documentation - BizOn Digital Landing Page

## 📋 Component Overview

### Total Components: 10
All located in `src/components/` directory

---

## 1. 🎯 Header Component
**Files:** `Header.jsx` + `Header.css`

### Features
- Fixed header with scroll detection
- Smooth background blur effect when scrolled
- Logo with gradient animation
- Navigation links with underline hover effect
- Mobile hamburger menu (responsive)
- CTA button for consultation
- Smooth scroll to sections

### Properties
- `isScrolled` - Boolean state from App for styling
- Active section highlighting
- Mobile responsive at 768px breakpoint

### Animations
- `slideInDown` - Logo slides down on load
- Underline expansion on hover
- Hamburger icon transformation on mobile

### Customization
```jsx
// Change navigation links in Header.jsx
<a onClick={() => scrollToSection('your-section')}>Your Link</a>

// Update button text
<button>Your CTA Text</button>
```

---

## 2. 🚀 Hero Component
**Files:** `Hero.jsx` + `Hero.css`

### Features
- Full viewport height hero section
- Gradient animated background
- Large headline with gradient text
- Subtitle with secondary text
- Two CTA buttons (primary + secondary)
- Statistics showing key metrics
- Floating cards with fade animations
- Responsive layout

### Layout
- Grid: 2 columns on desktop, 1 on mobile
- Hero text on left
- Visual elements on right

### Animations
- `slideInLeft` - Text slides from left
- `slideInRight` - Visuals slide from right
- `slideInUp` - Stats slide in with stagger
- `float` - Floating cards bounce gently
- `scaleIn` - Main visual scales in

### Interactive Elements
- Floating cards with hover lift effect
- Button hover with shadow
- Radio gradient background

### Customization
```jsx
// Change headline
<h2 className="hero-title">Your Headline</h2>

// Change subtitle
<p className="hero-subtitle">Your subtitle</p>

// Update statistics
<div className="stat">
  <h3>Your Number</h3>
  <p>Your Label</p>
</div>
```

---

## 3. 📖 About Component
**Files:** `About.jsx` + `About.css`

### Features
- Section title and subtitle
- 4 feature cards with numbers
- Left border accent on hover
- Gradient hover effect
- Staggered animation on load
- Semantic structure

### Card Layout
```jsx
{
  number: '01',
  title: 'Feature Title',
  description: 'Feature description'
}
```

### Animations
- `slideInUp` - Cards slide up with stagger
- Hover color transition
- Border color animation

### Grid Layout
- 4 columns on desktop
- Auto-fit responsive columns
- Minimum 280px per card

---

## 4. 🛎️ Services Component
**Files:** `Services.jsx` + `Services.css`

### Features
- 6 service cards with icons
- Icon emojis (🔍, 💻, 📱, 💰, 📊, 🎨)
- "Learn More →" links with hover effect
- Text-centered cards
- Hover lift animation
- Icon float animation

### Service Data
```jsx
{
  icon: '🔍',
  title: 'Service Name',
  description: 'Service description'
}
```

### Animations
- Icon float continuously
- Card lift on hover
- Link slide on hover
- Staggered entrance

### Grid Layout
- 3 columns fully responsive
- Adapts to available space
- Minimum 340px per card

---

## 5. 📊 Stats Component
**Files:** `Stats.jsx` + `Stats.css`

### Features
- 4 key statistics
- Large number display with gradient
- Gray labels below
- Staggered animation
- Background bar effect
- Centered layout

### Statistics
```jsx
- 500+ Satisfied Clients
- 10+ Years of Expertise
- 1000+ Successful Campaigns
- 250M+ Total Ad Spend Managed
```

### Animations
- `slideInUp` - Each stat slides up with delay

### Styling
- Gradient text for numbers
- Semi-transparent background
- Border top and bottom

---

## 6. 💬 Testimonials Component
**Files:** `Testimonials.jsx` + `Testimonials.css`

### Features
- Interactive carousel slider
- Client testimonials with stars
- Company and name display
- Dot navigation indicators
- Smooth sliding transition
- Fixed at 1 card width

### Testimonial Data
```jsx
{
  name: 'Client Name',
  company: 'Company Name',
  rating: 5,
  text: 'Testimonial text...'
}
```

### Interactive Features
- Click dots to navigate
- Smooth slide animation (0.5s)
- Star rating display

### Styling
- Card maximum width 500px
- Center aligned text
- Author section separated by border

### Customization
```jsx
// Add more testimonials - just add to array
// They will automatically get dot controls
```

---

## 7. ⚙️ Process Component
**Files:** `Process.jsx` + `Process.css`

### Features
- 6-step process visualization
- Steps numbered 01-06
- Title and description for each
- Top border with gradient on hover
- Animated number display
- Staggered entrance animation

### Process Steps
```jsx
1. Consultation
2. Research & Strategy
3. Implementation
4. Monitoring
5. Reporting
6. Improvement
```

### Animations
- Border gradient animation on hover
- `slideInUp` with stagger
- Number opacity effect

### Grid Layout
- 3 columns responsive
- Minimum 340px per card

---

## 8. 💥 CTA Component
**Files:** `CTA.jsx` + `CTA.css`

### Features
- Conversion-focused section
- Large headline
- Descriptive subtitle
- Primary CTA button
- 3 benefits checkmarks
- Animated background with gradients
- Fully responsive

### Benefits Listed
- Customized growth strategy
- Competitive analysis
- Actionable recommendations

### Animations
- `slideInUp` with stagger delays
- Gradient background animation
- Float effect on background circles
- Button hover effect

### Styling
- Rounded corners (20px)
- Border with opacity
- Gradient background
- Full width on mobile

---

## 9. ❓ FAQ Component
**Files:** `FAQ.jsx` + `FAQ.css`

### Features
- Accordion-style FAQ
- 6 pre-loaded questions
- Click to expand/collapse
- Rotating + icon on expand
- Max height animation
- Staggered entrance

### FAQ Data
```jsx
{
  question: 'Question?',
  answer: 'Answer...'
}
```

### Interactive Features
- Single accordion open
- Smooth height transition
- Active state styling
- Icon rotation animation

### Animations
- `slideInUp` with delay per item
- Max-height transition for smooth open
- Icon rotation on expand (+45°)

### Max Width
- 800px for readability

---

## 10. 🔗 Footer Component
**Files:** `Footer.jsx` + `Footer.css`

### Features
- 4-column responsive layout
- Social media links
- Company links
- Service links
- Support/Legal links
- Copyright notice
- Footer bottom links
- Gradient logo text

### Sections
1. Company info + socials
2. Company links (About, Services, Contact)
3. Services links (SEO, PPC, Social Media)
4. Support links (Privacy, Terms, Help)

### Dynamic Content
- Auto-updating copyright year
- Smooth link transitions
- Icon hovers with transform

### Animations
- `slideInUp` on load
- Link hover transform (translateX)
- Social icon background fill

### Grid
- 4 columns on desktop
- Auto-fit responsive columns
- Single column on mobile

---

## 🔄 Component Data Flow

```
App.jsx (Main)
├── Header (Fixed)
├── Hero (Full viewport)
├── About (4 features)
├── Services (6 services)
├── Stats (4 metrics)
├── Testimonials (Interactive carousel)
├── Process (6 steps)
├── CTA (Call to action)
├── FAQ (Accordion)
└── Footer (4 columns)
```

---

## 🎨 Shared Styling

### Global Classes Used Across Components
- `.container` - Max-width 1200px wrapper
- `.section` - 80px padding top/bottom
- `.section-title` - Large centered heading
- `.section-subtitle` - Smaller gray text
- `.btn` - Base button styles
- `.btn-primary` - Blue gradient button
- `.btn-secondary` - Outlined button
- `.card` - Card styling with hover
- `.grid`, `.grid-2`, `.grid-3`, `.grid-4` - Grid layouts
- `.stagger` - Staggered animation delays
- `.badge` - Label badge style

### Color Variables
```css
--primary-color: #0066ff
--secondary-color: #00cc99
--dark-bg: #0a0e27
--light-text: #ffffff
--gray-text: #b0b0b0
--card-bg: #1a1f3a
--accent-color: #ff6b6b
--transition-duration: 0.3s
```

---

## 📱 Responsive Behavior

### Desktop (1200px+)
- Full grid layouts
- All columns visible
- Larger text and spacing
- Header navigation visible

### Tablet (768px - 1024px)
- 2-column grids adapt
- Optimized spacing
- Touch-friendly buttons
- Mobile menu ready

### Mobile (< 768px)
- Single column layouts
- Hamburger navigation menu
- Larger touch targets
- Full width content
- Stacked sections
- Smaller font sizes

---

## ♿ Accessibility Features

- ARIA labels on buttons `aria-label="Toggle menu"`
- Keyboard navigation support
- Semantic HTML (`<nav>`, `<section>`, `<footer>`)
- Color contrast compliance
- Focus indicators (outline on focus)
- Screen reader friendly
- Mobile accessible (min 44px touch targets)

---

## 🚀 Performance Optimizations

### In Each Component
- CSS modules for style isolation
- Minimal re-renders
- Event delegation
- Smooth 60 FPS animations
- GPU-accelerated transforms
- Lazy loading ready

### Global Optimizations
- Minified CSS and JS
- No unused dependencies
- Optimized animations
- Mobile-first CSS
- CSS variable theming

---

## 🔧 Common Modifications

### Add a New Section
1. Create `NewSection.jsx` in components
2. Create `NewSection.css`
3. Import in `App.jsx`
4. Add to JSX return

### Change Colors
Edit `src/App.css` CSS variables:
```css
:root {
  --primary-color: #newcolor;
}
```

### Update Content
Edit the component JSX directly - text, arrays, etc.

### Add Animation
Use existing animations from `App.css` or create new `@keyframes`

### Modify Responsiveness
Update media queries in component CSS files

---

## 📚 File Sizes

| Component | JS | CSS | Total |
|-----------|----|----|-------|
| Header | 1.2KB | 1.8KB | 3KB |
| Hero | 0.9KB | 2.5KB | 3.4KB |
| About | 0.7KB | 1.5KB | 2.2KB |
| Services | 1.1KB | 1.8KB | 2.9KB |
| Stats | 0.6KB | 1.2KB | 1.8KB |
| Testimonials | 1.3KB | 1.9KB | 3.2KB |
| Process | 0.8KB | 1.6KB | 2.4KB |
| CTA | 0.6KB | 2.0KB | 2.6KB |
| FAQ | 1.4KB | 1.9KB | 3.3KB |
| Footer | 1.5KB | 1.8KB | 3.3KB |
| **TOTAL** | **10KB** | **18KB** | **28KB** |

Total minified + gzipped: ~8KB

---

**Component Documentation**
Created: February 12, 2025
Version: 1.0
