# AutomiK - Tech Automation Agency Landing Page

A high-converting, professional landing page for a tech automation agency specializing in WhatsApp Business API automation, n8n workflows, web development, and custom SaaS solutions.

## 🎯 Features

- **Glassmorphism Design**: Modern glass effect with blur and transparency
- **Dark Theme**: Deep slate background with electric blue and neon green accents
- **Framer Motion Animations**: Smooth scroll animations and interactions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Proper meta tags and semantic HTML
- **High-Converting Copy**: Problem-Solution-Proof flow optimized for conversions
- **Floating WhatsApp CTA**: Always-visible WhatsApp button for quick contact
- **6 Core Sections**:
  - Hero Section
  - Services (3-column grid)
  - Process (3-step timeline growth engine)
  - Portfolio (2x2 project showcase)
  - Contact Form (with project type dropdown)
  - Footer

## 📁 Project Structure

```
automik-web3/
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind imports & custom animations
│   │   ├── layout.js         # Root layout with metadata
│   │   └── page.js           # Main page assembly
│   ├── components/
│   │   ├── Navbar.jsx        # Glassmorphism sticky navbar
│   │   ├── Hero.jsx          # Hero with WhatsApp CTA
│   │   ├── Services.jsx      # 3-column service grid
│   │   ├── Process.jsx       # 3-step growth engine timeline
│   │   ├── Portfolio.jsx     # 2x2 project showcase
│   │   ├── ContactForm.jsx   # Contact form with dropdown
│   │   └── Footer.jsx        # Footer with links
│   └── lib/
│       └── utils.js          # Utility functions
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── jsconfig.json            # JS path aliases
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
├── postcss.config.js        # PostCSS configuration
└── tailwind.config.js       # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. **Clone or extract the project** (if you haven't already)

2. **Navigate to the project directory**:
   ```bash
   cd automik-web3
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### 1. Update Company Information

**In `src/app/layout.js`** - Update metadata:
```javascript
export const metadata = {
  title: 'Your Company Name - Your Description',
  description: 'Your company description',
  // ... other fields
}
```

**In `src/components/Navbar.jsx`** - Update logo and company name

**In `src/components/Footer.jsx`** - Update contact information and links

### 2. Customize Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      brand: {
        whatsapp: '#25D366',  // Green WhatsApp color
        blue: '#3b82f6',      // Electric blue
        green: '#10b981',     // Neon green
      },
    },
  },
}
```

### 3. Update Content

- **Hero Section** (`src/components/Hero.jsx`): Update headline, subheadline, and CTAs
- **Services** (`src/components/Services.jsx`): Modify service titles, descriptions, and features
- **Process** (`src/components/Process.jsx`): Update process steps and details
- **Portfolio** (`src/components/Portfolio.jsx`): Replace projects and results
- **Contact Form** (`src/components/ContactForm.jsx`): Update project types and labels

### 4. Add Your WhatsApp Number

In `src/components/Hero.jsx` and `src/components/Footer.jsx`, replace:
```javascript
href="https://wa.me/your-phone-number"
```

With your actual WhatsApp number:
```javascript
href="https://wa.me/1234567890"  // Example: +1 (555) 123-4567 → 15551234567
```

### 5. Add Your Email

In `src/components/Footer.jsx`, update:
```javascript
<a href="mailto:hello@automik.com">
```

### 6. Add Project Images

Place images in the `public/` folder and reference them in components. For the portfolio section, you can either:
- Use gradient backgrounds (current setup)
- Add actual images by modifying the component to use `Image` from next/image

## 🔧 Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
2. **Import project to Vercel**: [vercel.com/new](https://vercel.com/new)
3. **Click Deploy** - Vercel handles the rest

### Deploy to Other Platforms

- **Netlify**: Supports Next.js out of the box
- **AWS Amplify**: Good for serverless deployments
- **Self-hosted**: Build and use `npm start`

## 📦 Dependencies

- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **Tailwind CSS 3**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## 🎬 Animation Details

- **Navbar**: Fade-in from top on page load
- **Hero**: Staggered text animations with floating decorative elements
- **Services**: Hover lift effect with gradient borders
- **Process**: Staggered timeline with checkmark animations
- **Portfolio**: Image reveal on hover with glass morphism overlay
- **Contact Form**: Smooth input focus states and submit animation
- **WhatsApp Button**: Continuous floating animation with pulse effect

## 📱 Responsive Breakpoints

- **Mobile**: 0px and up
- **Tablet**: 768px and up (md)
- **Desktop**: 1024px and up (lg)

All sections are fully responsive using Tailwind's responsive classes.

## 🔒 Performance & SEO

- ✅ Optimized images (next/image for future use)
- ✅ Meta tags for social sharing
- ✅ Semantic HTML structure
- ✅ Fast page load with Next.js optimizations
- ✅ Accessibility-friendly (proper color contrast, semantic elements)

## 🤝 Form Integration

The contact form currently uses a simulated submission. To connect to a real backend:

1. **Option 1: Web3Forms** (recommended):
   ```javascript
   // In ContactForm.jsx handleSubmit
   const response = await fetch('https://api.web3forms.com/submit', {
     method: 'POST',
     body: new FormData(e.target),
   })
   ```

2. **Option 2: Your own backend API**
   ```javascript
   const response = await fetch('/api/contact', {
     method: 'POST',
     body: JSON.stringify(formData),
   })
   ```

3. **Option 3: Email service** (Sendgrid, Mailgun, etc.)

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

## 📞 Support

For questions or issues:
- Update contact info in Footer component
- Check component props and state management
- Review Tailwind and Framer Motion documentation

## 📄 License

This project is ready to use for your agency. Modify as needed for your brand.

## 🎯 Next Steps After Setup

1. ✅ Install dependencies (`npm install`)
2. ✅ Customize company information and colors
3. ✅ Add your WhatsApp number
4. ✅ Replace portfolio projects with real work
5. ✅ Connect contact form to your backend
6. ✅ Add favicon and logo to `public/`
7. ✅ Deploy to production
8. ✅ Set up analytics (Google Analytics, etc.)

Happy coding! 🚀
