# CPGEISTES Changelog

## [1.2.0] - 2025-06-15

### Changed
- Removed temporary admin sections for users, content, and settings to focus on core functionality
- Streamlined admin interface for improved performance and usability
- Updated documentation to reflect current state of the application

## [1.1.0] - 2025-06-09

### Added
- New "Ecoles" section in the admin dashboard
- Complete CRUD functionality for "Centres de Prépa"
  - List view with search and filtering
  - Detailed view with image gallery
  - Create form with image upload and map location
  - Edit form with image management
  - Delete functionality with confirmation
- Interactive maps using Leaflet
  - Map selector for adding/editing locations
  - Map viewer for displaying locations
- Binary image storage directly in MongoDB
- Geospatial data storage using GeoJSON format
- Updated documentation to reflect new features

### Changed
- Updated sidebar to include collapsible "Ecoles" section
- Improved documentation structure
- Enhanced database schema with new collections

## [1.0.0] - 2025-06-01

### Added
- Initial release
- Harvard-style logo design
- Responsive landing page
- Admin dashboard with authentication
- MongoDB integration
- Database status monitoring
- User authentication with NextAuth.js
- Documentation 