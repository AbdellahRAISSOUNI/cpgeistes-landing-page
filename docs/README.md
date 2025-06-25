# CPGEISTES Admin & Database Documentation

Welcome to the CPGEISTES admin dashboard and database documentation. This repository contains all the information you need to set up and manage the admin dashboard and MongoDB database for the CPGEISTES website.

## Documentation Contents

- [Admin Dashboard & Database Setup](./ADMIN_SETUP.md) - Instructions for setting up the admin dashboard and MongoDB database
- [Admin Dashboard Overview](./ADMIN_DASHBOARD.md) - Detailed overview of the admin dashboard features and usage
- [Database Schema](./DATABASE_SCHEMA.md) - Documentation of the MongoDB database schema
- [API Documentation](./API_DOCS.md) - Documentation of the API endpoints
- [Development Status](./DEVELOPMENT_STATUS.md) - Current development status, recent changes, and roadmap
- [Changelog](./CHANGELOG.md) - History of changes and updates to the project

## Quick Start

1. Set up your `.env.local` file with the required environment variables (see [Admin Setup](./ADMIN_SETUP.md))
2. Set up your MongoDB database (see [Admin Setup](./ADMIN_SETUP.md))
3. Create the admin user (see [Admin Setup](./ADMIN_SETUP.md))
4. Access the admin dashboard at `/admin/login` with the following credentials:
   - Email: admin@cpgeistes.com
   - Password: admin123

## Features

The admin dashboard provides the following features:

- **Secure Authentication**: Only authorized users with the admin role can access the dashboard
- **Collapsible Sidebar**: Sidebar that can be expanded or collapsed and stays fixed when scrolling
- **Responsive Design**: Works on desktop and mobile devices
- **Database Status**: View and monitor your MongoDB connection status in real-time
- **Modern UI**: Clean, intuitive interface with clear navigation

## Technology Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **Deployment**: Vercel

## Security

The admin dashboard implements several security measures:

- **Authentication**: Secure login with NextAuth.js
- **Authorization**: Role-based access control
- **API Protection**: All admin API endpoints are protected
- **Environment Variables**: Sensitive information is stored in environment variables

For more information on security, see the [Admin Setup](./ADMIN_SETUP.md) documentation.

## Troubleshooting

If you encounter any issues with the admin dashboard or database connection, refer to the troubleshooting sections in the respective documentation files:

- [Admin Setup Troubleshooting](./ADMIN_SETUP.md#troubleshooting)
- [Database Schema Troubleshooting](./DATABASE_SCHEMA.md#troubleshooting)

## Contributing

If you'd like to contribute to the development of the admin dashboard, please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or issues, please contact the development team. 