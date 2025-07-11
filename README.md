# Nexorah - Advanced Physiotherapy Platform

## Project Overview
Nexorah is a cutting-edge physiotherapy platform that revolutionizes healthcare delivery through AI-powered diagnosis and personalized treatment pathways. The platform connects patients with physiotherapists across multiple service delivery models: clinic-based, home-based, workplace, and tele-rehabilitation.

## Core Technologies

### Frontend Framework
- **Next.js 15.3.1**: App Router implementation
- **React 19.1.0**: Latest version with concurrent features
- **Client Components**: Marked with "use client" directive for client-side interactivity

### UI/UX Libraries
- **Material-UI (@mui/material)**: Core UI components
  - Avatar components for user profiles
  - Rating system for reviews
  - Typography for consistent text styling
- **HeroUI (@heroui/react)**: Custom UI components
- **Framer Motion**: Advanced animations and transitions
- **GSAP**: Complex animation sequences
- **Swiper**: Touch-enabled carousels
- **Custom Components**:
  - CircularText: Animated rotating text
  - CountUp: Animated number counters
  - PlayButton: Video player integration
  - CustomCursor: Enhanced cursor interactions

### Styling
- **Tailwind CSS 4**: Utility-first styling
- **Custom Color Scheme**:
  - Primary: #003A70 (Deep Blue)
  - Secondary: #35B6B4 (Teal)
  - Accent: #EBF2FA (Light Blue)
- **Responsive Design**:
  - Mobile-first approach
  - Breakpoint-specific layouts
  - Flexible grid systems

### State Management & Data Fetching
- **SWR**: Data fetching and caching
- **React Context**: Global state management
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation

### Authentication & Backend
- **Firebase**: 
  - Authentication
  - Real-time database
  - Cloud storage
- **Custom Auth Context**: Role-based access control

## Detailed Component Architecture

### 1. Header Component (`Header.jsx`)
- **Top Navigation Bar**:
  - Contact information
  - Social media links
  - Quick access buttons
- **Main Navigation**:
  - Responsive menu system
  - Dropdown menus with hover effects
  - User authentication status
  - Dynamic menu items based on user role
- **Features**:
  - Click-outside detection
  - Smooth transitions
  - Mobile-responsive hamburger menu

### 2. Hero Section (`Hero.jsx`)
- **Layout**:
  - Two-column design (text and image)
  - Responsive layout adjustments
- **Components**:
  - Main heading with value proposition
  - Descriptive subtext
  - Social proof section:
    - User avatars
    - Rating display
    - Review count
  - Video integration
  - Achievement bar with animated counters
- **Interactive Elements**:
  - Circular text animation
  - Count-up animations
  - Play button for video content

### 3. Navigation Structure
```javascript
const menuList = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About Us",
    link: "/about"
  },
  {
    name: "Services",
    link: "/services",
    dropdown: [
      {
        name: "Physiotherapy at Clinic",
        link: "/services/clinic"
      },
      {
        name: "Physiotherapy at Home",
        link: "/services/physio-at-home"
      },
      {
        name: "Physiotherapy at Workplace",
        link: "/services/physio-at-workplace"
      },
      {
        name: "Online Consultation",
        link: "/services/online"
      }
    ]
  },
  {
    name: "Find a Physio",
    link: "/find-physio"
  },
  {
    name: "Become a Physio",
    link: "/become-physio"
  }
]
```

### 4. Service Delivery Models
1. **Clinic-based Physiotherapy**
   - In-person consultations
   - Equipment-based treatments
   - Professional supervision

2. **Home-based Physiotherapy**
   - Mobile service delivery
   - Convenient scheduling
   - Personalized home environment care

3. **Workplace Physiotherapy**
   - Corporate wellness programs
   - On-site treatment
   - Preventive care

4. **Online Consultation**
   - Tele-rehabilitation
   - Virtual assessments
   - Remote monitoring

## User Roles and Access

### 1. Patient Portal
- **Features**:
  - Profile management
  - Appointment booking
  - Treatment history
  - Progress tracking
  - Payment processing
- **Access Control**:
  - Patient-specific data
  - Treatment records
  - Payment history

### 2. Physiotherapist Portal
- **Features**:
  - Professional profile
  - Schedule management
  - Patient records
  - Treatment plans
  - Availability settings
- **Access Control**:
  - Patient data access
  - Treatment documentation
  - Schedule management

### 3. Admin Dashboard
- **Features**:
  - User management
  - Service configuration
  - Analytics dashboard
  - Content management
- **Access Control**:
  - System-wide access
  - User role management
  - Service configuration

## Development Workflow

### 1. Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build
```

### 2. Environment Configuration
Required environment variables:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

### 3. Code Organization
- **Components**: Reusable UI elements
- **Contexts**: Global state management
- **Lib**: Utility functions and Firebase config
- **Public**: Static assets
- **Styles**: Global styles and Tailwind config

## Performance Optimizations

### 1. Image Optimization
- Next.js Image component
- Responsive images
- Lazy loading
- WebP format support

### 2. Code Splitting
- Dynamic imports
- Route-based code splitting
- Component-level code splitting

### 3. Caching Strategy
- SWR for data caching
- Static page generation
- Incremental Static Regeneration

## Deployment

### 1. Production Build
```bash
# Create production build
npm run build

# Start production server
npm start
```

### 2. Deployment Checklist
- [ ] Environment variables configured
- [ ] Firebase project setup
- [ ] Database rules configured
- [ ] Storage rules configured
- [ ] SSL certificate installed
- [ ] Domain configured
- [ ] Analytics setup

## Contributing Guidelines

### 1. Code Standards
- ESLint configuration
- Prettier formatting
- TypeScript type checking
- Component documentation

### 2. Git Workflow
1. Create feature branch
2. Implement changes
3. Write tests
4. Submit pull request
5. Code review
6. Merge to main

## License
[Add your license information]

## Contact
[Add your contact information]

## Physio
// Physio login>account
Physio Dashboard >> route >> /physio/dashboard
