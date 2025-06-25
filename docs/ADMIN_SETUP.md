# CPGEISTES Admin Dashboard & Database Setup

This document provides instructions for setting up and using the admin dashboard and MongoDB database for the CPGEISTES website.

## Table of Contents

1. [Environment Setup](#environment-setup)
2. [MongoDB Setup](#mongodb-setup)
3. [Admin User Setup](#admin-user-setup)
4. [Admin Dashboard Features](#admin-dashboard-features)
5. [Security Considerations](#security-considerations)
6. [Troubleshooting](#troubleshooting)
7. [Development Status](#development-status)

## Environment Setup

The application requires environment variables to be set in a `.env.local` file in the root directory. Create this file with the following content:

```
# MongoDB Connection
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/cpgeistes

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here
```

Replace the placeholder values with your actual configuration:

- `MONGODB_URI`: Your MongoDB Atlas connection string (format: `mongodb+srv://username:password@cluster.mongodb.net/cpgeistes`) - make sure to use `cpgeistes` as the database name
- `NEXTAUTH_SECRET`: A random string used to encrypt session tokens. You can generate one using `openssl rand -base64 32` in terminal

## MongoDB Setup

1. **Create a MongoDB Atlas Account**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up for a free account
   - Create a new cluster (the free tier is sufficient for development)

2. **Configure Network Access**:
   - In the Atlas dashboard, go to "Network Access"
   - Add your IP address or set it to allow access from anywhere (0.0.0.0/0) for development

3. **Create a Database User**:
   - In the Atlas dashboard, go to "Database Access"
   - Add a new database user with read and write permissions

4. **Get Your Connection String**:
   - In the Atlas dashboard, click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string and replace `<username>`, `<password>` with your values
   - Make sure to set the database name to `cpgeistes` in the connection string
   - Add this connection string to your `.env.local` file as `MONGODB_URI`

## Admin User Setup

The admin user is set up with the following credentials:
- Email: admin@cpgeistes.com
- Password: admin123

To create the admin user, use one of the following methods:

### Option 1: Using the Setup API Endpoint

Make a POST request to `/api/admin/setup` to create the admin user:

```bash
curl -X POST http://localhost:3000/api/admin/setup
```

Or if you're using PowerShell:

```powershell
Invoke-WebRequest -Method POST -Uri http://localhost:3000/api/admin/setup
```

### Option 2: Using the Setup Script

Run the setup script directly:

1. Install required dependencies:
   ```bash
   npm install -g ts-node
   ```

2. Run the setup script:
   ```bash
   npx ts-node src/scripts/setup-admin.ts
   ```

### Option 3: Using the Simple JavaScript Script (Recommended)

This is the most reliable method:

1. Make sure you have set up your `.env.local` file with the MongoDB connection string
2. Run the script:
   ```bash
   node init-admin.js
   ```

The script will:
- Connect to your MongoDB database
- Check if the admin user already exists
- Create the admin user with the correct credentials if it doesn't exist
- Output a success message when done

## Admin Dashboard Features

Once set up, you can access the admin dashboard at `/admin/login` with the admin credentials:
- Email: admin@cpgeistes.com
- Password: admin123

The admin dashboard includes the following features:

1. **Dashboard Home**: Overview of the system status with current date and time
2. **Database Status**: View the connection status to your MongoDB database
3. **Centres de Prépa Management**: Complete CRUD functionality for preparatory centers

> **Note**: Some sections (Users, Content, Settings) have been temporarily removed to focus on core functionality. See the [Development Status](#development-status) section for more information.

### Dashboard UI Features

The admin dashboard includes several UI improvements for better usability:

1. **Collapsible Sidebar**: 
   - Click the chevron icon to collapse or expand the sidebar
   - Sidebar stays fixed when scrolling through content

2. **Responsive Design**:
   - Works on desktop and mobile devices
   - Sidebar collapses automatically on smaller screens

3. **Navigation**:
   - Clear navigation between dashboard and database status pages
   - Quick access to sign out functionality

4. **Database Monitoring**:
   - Real-time connection status to MongoDB
   - Displays database name and host information
   - Ability to refresh the connection status

## Security Considerations

1. **Environment Variables**:
   - Never commit your `.env.local` file to version control
   - Use strong, unique passwords for your database
   - Rotate your `NEXTAUTH_SECRET` periodically

2. **Production Deployment**:
   - Consider changing the admin password after initial setup
   - Use a more restrictive MongoDB network access configuration
   - Enable MongoDB Atlas advanced security features

3. **Access Control**:
   - The admin dashboard is protected by authentication and role-based access control
   - Only users with the `admin` role can access the dashboard

## Troubleshooting

### Database Connection Issues

If you're having trouble connecting to the database:

1. Check that your MongoDB Atlas cluster is running
2. Verify that your IP address is allowed in the MongoDB Atlas network access settings
3. Ensure your database user credentials are correct in the connection string
4. Make sure the database name is set to `cpgeistes` in the connection string
5. Check for any firewalls or network restrictions that might block the connection
6. Use the "Refresh" button on the Database Status page to retry the connection

### Authentication Issues

If you can't log in to the admin dashboard:

1. Verify that you've created the admin user using one of the setup methods
2. Check that you're using the correct email (admin@cpgeistes.com) and password (admin123)
3. Clear your browser cookies and try again
4. Check the server logs for any authentication errors

## Development Status

For information about the current development status, recent changes, and future roadmap, please refer to the [Development Status](./DEVELOPMENT_STATUS.md) document.

For additional help, please contact the development team. 