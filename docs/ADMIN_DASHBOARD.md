# CPGEISTES Admin Dashboard

This document provides an overview of the CPGEISTES admin dashboard, its features, and usage.

## Overview

The CPGEISTES admin dashboard is a secure, responsive interface for managing the website and monitoring the MongoDB database connection. It features a modern design with a collapsible sidebar, responsive layout, and real-time database status monitoring.

## Features

### Authentication

- Secure login with email and password
- Role-based access control (admin role required)
- Session management with NextAuth.js
- Protection against unauthorized access

### UI Components

1. **Collapsible Sidebar**:
   - Toggle between expanded and collapsed states
   - Fixed position that stays in place when scrolling
   - Responsive design that adapts to different screen sizes
   - Navigation links with active state highlighting
   - User profile display with name and email

2. **Header**:
   - Dynamic page title that updates based on the current page
   - Mobile menu button for smaller screens
   - Clean, minimal design

3. **Dashboard**:
   - Greeting with current time of day
   - Current date and time display
   - Quick access cards for common actions
   - System status overview
   - Link to view the public website

4. **Database Status**:
   - Real-time connection status to MongoDB
   - Database name and host information
   - Refresh button to check connection status
   - Clear error reporting for connection issues
   - Back button to return to the dashboard

5. **Ecoles Section**:
   - Expandable section in the sidebar
   - Management of educational institutions
   - Currently implemented:
     - **Centres de Prépa**: Complete CRUD functionality for preparatory centers

## Usage

### Accessing the Dashboard

1. Navigate to `/admin/login` in your browser
2. Enter the admin credentials:
   - Email: admin@cpgeistes.com
   - Password: admin123
3. After successful login, you'll be redirected to the dashboard

### Navigating the Dashboard

- Use the sidebar links to navigate between pages
- Click the chevron icon to collapse or expand the sidebar
- On mobile, use the menu button in the header to open the sidebar

### Monitoring Database Status

1. Click on "Database Status" in the sidebar
2. View the current connection status, database name, and host
3. Click the "Refresh" button to check the connection status again
4. If there are any connection issues, error messages will be displayed

### Managing Centres de Prépa

The Centres de Prépa section provides comprehensive management of preparatory centers:

1. **Listing Centres de Prépa**:
   - Navigate to "Ecoles" > "Centres de Prépa" in the sidebar
   - View a list of all centres with key information
   - Search by name or city
   - Sort by various fields

2. **Adding a New Centre de Prépa**:
   - Click the "Ajouter" button on the centres list page
   - Fill in the required information:
     - General information (name, city, description)
     - Address and contact details
     - Location using the interactive map
     - Upload one or more images
   - Click "Enregistrer" to save the new centre

3. **Viewing Centre de Prépa Details**:
   - Click the "View" icon on a centre in the list
   - View all details including:
     - Images with gallery navigation
     - Description
     - Contact information
     - Location on a map
     - Metadata (creation and modification dates)

4. **Editing a Centre de Prépa**:
   - Click the "Edit" icon on a centre in the list or the "Modifier" button on the detail view
   - Update any information as needed
   - Add new images or remove existing ones
   - Update the location on the map
   - Click "Enregistrer" to save changes

5. **Deleting a Centre de Prépa**:
   - Click the "Delete" icon on a centre in the list or the "Supprimer" button on the detail view
   - Confirm deletion when prompted

### Signing Out

- Click the "Sign Out" button in the sidebar
- You'll be redirected to the public site after signing out

## Technical Implementation

### Components Structure

- `src/components/admin/Sidebar.tsx`: Collapsible sidebar with navigation
- `src/components/admin/Header.tsx`: Page header with title and mobile menu button
- `src/app/(admin)/admin/layout.tsx`: Main layout for admin pages
- `src/app/(admin)/admin/dashboard/page.tsx`: Dashboard home page
- `src/app/(admin)/admin/database/page.tsx`: Database status page
- `src/app/(admin)/admin/login/page.tsx`: Login page
- `src/app/(admin)/admin/ecoles/centres-prepa/page.tsx`: Centres de Prépa list page
- `src/app/(admin)/admin/ecoles/centres-prepa/new/page.tsx`: Add new Centre de Prépa page
- `src/app/(admin)/admin/ecoles/centres-prepa/[id]/view/page.tsx`: Centre de Prépa detail view
- `src/app/(admin)/admin/ecoles/centres-prepa/[id]/edit/page.tsx`: Edit Centre de Prépa page
- `src/components/admin/MapSelector.tsx`: Interactive map component for selecting locations
- `src/components/admin/MapViewer.tsx`: Map component for displaying locations

### Authentication Flow

1. User enters credentials on the login page
2. NextAuth.js verifies the credentials against the database
3. If valid, a session is created and the user is redirected to the dashboard
4. Protected routes check the session and user role before rendering
5. If unauthorized, the user is redirected to the login page

### Database Connection

- Connection to MongoDB is managed by the `src/lib/db/mongodb.ts` module
- Connection status is checked by the `/api/admin/db-status` endpoint
- The dashboard displays the connection status in real-time

### Data Models

- **CentrePrepa**: MongoDB model for preparatory centers
  - Basic information (name, description)
  - Location details (address, city, postal code)
  - Contact information (phone, email, website)
  - Geospatial data (coordinates for map display)
  - Images stored directly in the database as binary data

### API Endpoints

- `/api/admin/centres-prepa`: List and create centres
- `/api/admin/centres-prepa/[id]`: Get, update, or delete a specific centre
- `/api/admin/centres-prepa/[id]/images/[imageIndex]`: Get a specific image from a centre

## Responsive Design

The admin dashboard is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile phones

On smaller screens:
- The sidebar is hidden by default and can be toggled with the menu button
- UI elements adjust their size and layout for better readability
- Touch-friendly buttons and controls

## Future Enhancements

Planned future enhancements for the admin dashboard:

1. **Additional Ecoles Sections**:
   - Filières de Prépa: Management of preparatory programs
   - Filières de Cycle: Management of cycle programs
   - Orientation: Student guidance resources
   - Grandes Écoles d'Ingénieur: Engineering schools information
   - Grandes Écoles de Commerce: Business schools information

2. **Map Integration**:
   - Interactive map showing all centres on a single view
   - Filtering and search capabilities on the map

3. **Advanced Image Management**:
   - Image optimization
   - Caption and metadata for images
   - Gallery management

4. **User Management**:
   - Create and manage user accounts
   - Role-based permissions

5. **Content Management**:
   - News and announcements
   - Events calendar
   - Resource library

For detailed setup instructions, see the [Admin Setup Guide](./ADMIN_SETUP.md). 