# CPGEISTES Landing Page

A modern, responsive landing page for CPGEISTES (Classes Préparatoires aux Grandes Écoles d'Ingénieurs et Sciences et Technologies).

## Features

- Harvard-style logo design
- Responsive layout for all device sizes
- Interactive organizational chart showing educational progression
- Real images for better visual representation
- News section with latest updates
- Secure admin dashboard with MongoDB integration
- User authentication and role-based access control
- Educational institutions management system

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- MongoDB with Mongoose
- NextAuth.js for authentication
- bcryptjs for password hashing
- Lucide React for icons
- Leaflet for interactive maps

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- MongoDB Atlas account (for database)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/cpgeistes-site.git
   cd cpgeistes-site
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. Run the development server
```bash
npm run dev
   ```

5. Initialize the admin user (first time only)
   ```bash
   node init-admin.js
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Admin Dashboard

The admin dashboard provides a secure interface for managing the website content and monitoring the database connection.

### Features

- Secure login with email and password
- Role-based access control
- Database status monitoring
- Collapsible sidebar navigation
- Responsive design for all device sizes
- Educational institutions management:
  - Centres de Prépa: Complete CRUD functionality with image management and map location

### Accessing the Admin Dashboard

1. Navigate to `/admin/login`
2. Login with the default admin credentials:
   - Email: admin@cpgeistes.com
   - Password: admin123

## Project Structure

```
cpgeistes-site/
├── docs/                 # Documentation
├── public/               # Static files
├── src/
│   ├── app/              # Next.js app router
│   │   ├── (admin)/      # Admin routes
│   │   ├── (public)/     # Public routes
│   │   ├── (user)/       # User routes
│   │   └── api/          # API routes
│   ├── components/       # React components
│   │   ├── admin/        # Admin components
│   │   └── user/         # User components
│   └── lib/              # Utility functions
│       ├── auth/         # Authentication utilities
│       └── db/           # Database utilities
└── init-admin.js         # Admin initialization script
```

## Documentation

- [Admin Setup Guide](docs/ADMIN_SETUP.md)
- [Admin Dashboard Overview](docs/ADMIN_DASHBOARD.md)
- [Database Schema](docs/DATABASE_SCHEMA.md)
- [API Documentation](docs/API_DOCS.md)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
