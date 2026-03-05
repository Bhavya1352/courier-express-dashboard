# 🚚 SwiftFleet Courier Dashboard

A modern, responsive courier and delivery service website built with React, TypeScript, and Tailwind CSS. Features multiple pages, RTL/LTR support, and comprehensive dashboard functionality.

## ✨ Features

### 🎯 Core Features
- **Multi-page Website** - Home variants, About, Contact, Get Started pages
- **Dashboard System** - Separate User and Admin dashboards
- **RTL/LTR Support** - Complete bidirectional text support with context switching
- **Responsive Design** - Mobile-first approach with modern UI components
- **Glass Morphism UI** - Modern design with backdrop blur effects
- **Smooth Animations** - Framer Motion powered transitions

### 📱 Pages Overview
- **Home1** - General courier platform with comprehensive services
- **Home2** - E-commerce seller focused with pricing plans
- **Index** - Simple landing page with quick shipping solutions
- **About** - Company story, values, timeline, and services
- **Contact** - Multiple contact methods and regional offices
- **Get Started** - Registration form with onboarding flow
- **User Dashboard** - Personal shipment management and tracking
- **Admin Dashboard** - System administration and fleet management

### 🛠 Technical Features
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Context API** - State management for RTL/LTR
- **Responsive Design** - Mobile, tablet, desktop optimized

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd courier-express-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── Navbar.tsx      # Navigation with dropdowns
│   ├── Footer.tsx      # Site footer
│   └── ...
├── contexts/           # React contexts
│   └── DirectionContext.tsx  # RTL/LTR state management
├── pages/              # Page components
│   ├── Home1.tsx       # General platform page
│   ├── Home2.tsx       # E-commerce focused page
│   ├── About.tsx       # Company information
│   ├── Contact.tsx     # Contact information
│   ├── UserDashboard.tsx   # User dashboard
│   ├── AdminDashboard.tsx  # Admin dashboard
│   └── ...
├── lib/                # Utilities
│   └── utils.ts        # Helper functions
└── App.tsx             # Main app component
```

## 🎨 Design System

### Color Palette
- **Primary**: Orange gradient (`#FF6B35`)
- **Background**: Dark theme (`#0A0A0B`)
- **Glass**: Backdrop blur with transparency
- **Text**: High contrast for accessibility

### Typography
- **Display Font**: Space Grotesk
- **Body Font**: Inter
- **Responsive scaling**: Mobile to desktop

### Components
- **Buttons**: Hero, outline, and icon variants
- **Cards**: Glass morphism with hover effects
- **Navigation**: Dropdown menus with animations
- **Forms**: Modern input styling

## 🌐 RTL/LTL Support

The application supports both Right-to-Left and Left-to-Right text directions:

- **Context-based switching** - Global state management
- **Punctuation handling** - Automatic repositioning in RTL mode
- **Layout adaptation** - Components adjust to text direction
- **Persistent preference** - Saved in localStorage

## 📊 Dashboard Features

### User Dashboard
- **Shipment Stats** - 6 key metrics display
- **Package Tracking** - Real-time status updates
- **Recent Orders** - Order history and details
- **Benefits Section** - User advantages

### Admin Dashboard
- **System Stats** - 6 administrative metrics
- **Fleet Management** - Vehicle and driver oversight
- **Analytics** - Performance insights
- **Admin Benefits** - System management features

## 🛠 Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript checking

# Testing
npm run test         # Run tests
npm run test:ui      # Run tests with UI
```

## 📦 Dependencies

### Core
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing

### UI & Styling
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Radix UI** - Accessible components

### Development
- **ESLint** - Code linting
- **Vitest** - Testing framework
- **PostCSS** - CSS processing

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 🎯 Key Highlights

- **Professional Design** - Modern courier service branding
- **Performance Optimized** - Fast loading with lazy loading
- **SEO Friendly** - Proper meta tags and structure
- **Accessibility** - WCAG compliant components
- **Mobile First** - Responsive across all devices
- **Type Safe** - Full TypeScript implementation

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support

For support and questions:
- 📧 Email: support@swiftfleet.com
- 🌐 Website: [SwiftFleet Courier](https://swiftfleet.com)
- 📱 Phone: +91-XXXX-XXXX-XX

---

**Built with ❤️ for modern courier services**