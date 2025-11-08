# MoAds - Ad Creation Platform

Hey! Welcome to MoAds, a mock advertising platform I built to practice full-stack web development. Think of it as a simplified version of what Canva or Adobe Express does for ads.

## What Does This Do?

MoAds is a web app where you can create advertising campaigns and export them as professional graphics. You fill out a simple form with your ad details (headline, description, platform, call-to-action), and the app generates:

- A beautiful PNG graphic (1200x630px) perfect for social media
- A JSON file with all your ad data
- A dashboard to manage all your created ads

The graphics are generated with a modern blue-purple gradient design, complete with your MoAds branding. It's all client-side, so no backend needed!

## How to Set It Up

Pretty straightforward:

1. **Clone the repo:**
   ```bash
   git clone https://github.com/AmirBoutajrit/MoAds.git
   cd MoAds
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run it locally:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Go to [http://localhost:3000](http://localhost:3000)

That's it! No API keys, no environment variables, no database setup. Just clone and run.

## Key Features

Here's what you can do:

### 🎨 Ad Creation
- Fill out a form with your ad details
- Preview the graphic before exporting
- Download as PNG and JSON files

### 📊 Dashboard
- View all your created ads in one place
- Click on any ad to see detailed insights
- Mock analytics (impressions, clicks, conversions, etc.)

### 🖼️ Professional Graphics
- Canvas-based graphic generation
- Modern gradient design with geometric shapes
- Responsive typography that wraps nicely
- Automatic platform badges

### 🌓 Theme Support
- Light and dark mode toggle
- Theme persists across sessions
- All components are theme-aware

### 📱 Multiple Pages
- Home page with "What is MoAds" and "Why Choose MoAds" sections
- Features page with detailed capabilities
- Pricing page with three tiers
- Dashboard for managing ads
- Contact form
- Individual ad detail pages

### ✨ Nice Touches
- Animated particle background
- Scroll-responsive navbar
- Smooth hover animations
- Mobile responsive design

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Graphics:** HTML5 Canvas API
- **State Management:** React Context API
- **Deployment:** Vercel

## Assumptions & Limitations

Being honest here - this is a mock/practice project, so there are some things to know:

### What Works:
- All the UI and navigation
- Ad creation and graphic generation
- Local state management (ads persist during your session)
- Export functionality (PNG + JSON downloads)

### What Doesn't Work (Yet):
- **No real data persistence** - Refresh the page and your ads are gone (it's just using React state, not a database)
- **Contact form doesn't send emails** - It just shows an alert
- **Analytics are fake** - Those numbers in the ad detail page are hardcoded
- **No authentication** - Everyone sees the same ads
- **No actual ad publishing** - The "platforms" are just labels, it doesn't connect to Facebook Ads API or anything

### Known Quirks:
- The first ad you create might take a second to generate the graphic (browser needs to initialize the canvas)
- Graphics use system fonts, so they might look slightly different on Mac vs Windows
- No mobile navbar menu (desktop navigation only)

## Why I Built This

I wanted to practice:
- Next.js App Router and modern React patterns
- Canvas API for dynamic graphic generation
- File downloads (Blob, data URLs)
- Multi-page routing and navigation
- Theme management
- Responsive design
- TypeScript in a real project

## Future Ideas

If I come back to this, here's what I'd add:
- LocalStorage or a real database to persist ads
- More graphic templates/styles
- Image upload for custom backgrounds
- More export formats (PDF, different sizes)
- Actual analytics integration
- Team collaboration features

## Questions?

This is a learning project, so there might be bugs or rough edges. If you find something weird or have suggestions, feel free to open an issue or reach out!

---

Built with ☕ and Claude Code
