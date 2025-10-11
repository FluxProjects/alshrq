# Luxury Gold Shop Design Guidelines

## Design Approach
**Reference-Based Luxury E-commerce** - Drawing inspiration from high-end jewelry brands like Cartier, Tiffany & Co., and Bulgari, emphasizing opulence, sophistication, and timeless elegance through a dramatic black and gold palette.

## Color Palette

### Dark Mode Primary (Default)
- **Background Deep Black**: 0 0% 8% (rich charcoal, not pure black)
- **Surface Black**: 0 0% 12% (for cards and elevated elements)
- **Gold Primary**: 45 95% 58% (vibrant metallic gold for CTAs and accents)
- **Gold Muted**: 42 85% 45% (refined gold for text highlights)
- **Text Primary**: 45 30% 95% (warm off-white with gold tint)
- **Text Secondary**: 45 15% 70% (muted warm gray)
- **Border Accent**: 45 60% 35% (subtle gold borders)

### Light Mode (Admin/Forms)
- **Background Ivory**: 45 40% 98%
- **Surface Cream**: 42 35% 95%
- **Text Dark**: 0 0% 15%

## Typography

### Font Selection
- **Headings**: Playfair Display (serif) - conveys luxury and tradition
- **Body**: Inter (sans-serif) - modern readability
- **Accent**: Cormorant Garamond (serif) - for prices and special callouts

### Type Scale
- **Hero Headline**: text-6xl md:text-7xl lg:text-8xl font-bold (Playfair)
- **Section Titles**: text-4xl md:text-5xl font-semibold
- **Product Names**: text-2xl font-medium (Cormorant)
- **Prices**: text-3xl font-bold text-gold (Cormorant)
- **Body Text**: text-base md:text-lg leading-relaxed
- **Labels**: text-sm uppercase tracking-widest (subtle sophistication)

## Layout System

### Spacing Primitives
Use Tailwind units: **4, 8, 12, 16, 20, 24** for consistent rhythm
- Component padding: p-8 to p-16
- Section spacing: py-20 to py-32
- Grid gaps: gap-8 to gap-12

### Container Strategy
- **Full-width hero**: w-full
- **Content sections**: max-w-7xl mx-auto px-4
- **Text content**: max-w-4xl for optimal readability

## Component Library

### Navigation
- Fixed transparent navbar with backdrop blur on scroll
- Gold underline animation on hover for nav links
- Elegant hamburger menu with slide-in drawer for mobile
- Cart and admin icons with gold hover states

### Hero Section (Home Page)
- **Full viewport height hero** (min-h-screen) with luxury jewelry background image
- Gradient overlay: black (80% opacity at top) fading to transparent
- Centered content with dramatic headline and gold CTA button
- Subtle parallax scroll effect on background
- "Discover Luxury" primary button with gold background and black text

### Product Showcase
- **Two rows, 4 columns on desktop** (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Product cards with hover scale effect (scale-105 transform)
- Black card backgrounds (bg-surface-black) with thin gold border on hover
- Product image fills card top (aspect-ratio-square)
- Product name, category tag, and price below image
- Gold "Add to Cart" button appears on hover
- Price displayed prominently in Cormorant font

### About Page
- **Split-screen layout**: Image gallery on left (60%), story text on right (40%)
- Timeline of brand history with gold connector lines
- Founder's message in elegant quote box with gold accent border
- Values section with 3 columns showcasing craftsmanship, quality, heritage

### Contact Page
- **Two-column layout**: Contact form (left), information + map (right)
- Form fields with gold focus borders
- Elegant input styling with subtle animations
- Shop hours, address, phone displayed in cards with gold icons
- Location map or elegant gold shop illustration

### Admin Panel
- **Sidebar navigation** with product management, categories, settings
- Data table with gold action buttons (edit, delete)
- Product form modal with elegant input fields
- JWT login page with centered card on black background
- Dashboard stats cards with gold numerical highlights

### Buttons & CTAs
- **Primary**: Gold background (45 95% 58%), black text, hover: darker gold
- **Outline**: Transparent background, gold border, white text, backdrop-blur-sm when on images
- **Ghost**: No background, gold text on hover
- Rounded corners (rounded-md) for modern luxury feel

### Cards & Surfaces
- Black background with subtle gold border (border border-gold/20)
- Hover: border brightens to border-gold/60
- Shadow: Use gold glow on hover (shadow-xl shadow-gold/10)

### Forms
- Input fields with gold bottom border that brightens on focus
- Labels in uppercase tracking-wide for sophistication
- Error states in muted red-gold (0 70% 50%)

## Images Strategy

### Required Images
1. **Hero Banner**: Full-width luxury gold jewelry collection image (necklaces, rings, bracelets on black velvet)
2. **Product Images**: 8 sample gold products - mix of rings, necklaces, bracelets, earrings
3. **About Page**: Luxury workshop/craftsmanship images, founder portrait
4. **Background Textures**: Subtle gold leaf or damascus patterns for section dividers

### Image Treatment
- Always use dark overlays on hero images (gradient from black to transparent)
- Product images on pure black or white backgrounds for consistency
- Aspect ratios: 1:1 for product cards, 16:9 for hero, 3:2 for about page

## Animations
- **Minimal and purposeful**: Hover scale on products, fade-in on scroll for sections
- Gold shimmer effect on "New Arrival" badges
- Smooth page transitions (fade)
- NO distracting carousel animations or auto-playing elements

## Accessibility & Polish
- Maintain 4.5:1 contrast ratio (gold text on black passes)
- Focus indicators with visible gold outline
- Keyboard navigation support
- Loading states with elegant gold spinner
- Empty states with gold iconography and helpful messaging

**Design Philosophy**: Every pixel should whisper luxury. The black and gold palette creates dramatic contrast, the serif typography adds timeless elegance, and generous spacing allows each piece to breathe and be appreciated like art in a gallery.