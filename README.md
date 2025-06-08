# CPGEISTES Landing Page

A modern, responsive landing page for CPGEISTES (Classes Préparatoires aux Grandes Écoles d'Ingénieurs et Sciences et Technologies).

## Features

- Harvard-style logo design
- Responsive layout for all device sizes
- Interactive organizational chart showing educational progression
- Real images for better visual representation
- News section with latest updates
- Login functionality

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- React Icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/AbdellahRAISSOUNI/cpgeistes-landing-page.git
   cd cpgeistes-landing-page
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/public` - Static assets including images and logos
- `/src/app` - Next.js app router pages
- `/src/components` - React components
  - `Header.tsx` - Navigation header with Harvard-style logo
  - `HeroSection.tsx` - Hero section with image slider and login form
  - `OrganizationalChart.tsx` - Educational progression chart (BAC → SUP → CPGE → Ingénieur/Manager)
  - `NewsSection.tsx` - Latest news and updates
  - `BottomSection.tsx` - Additional content section
  - `Footer.tsx` - Page footer

## Build for Production

```bash
npm run build
```

## License

This project is proprietary and confidential.

## Contact

For any inquiries, please contact the repository owner.
