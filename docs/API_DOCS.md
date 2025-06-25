# CPGEISTES API Documentation

This document describes the API endpoints available in the CPGEISTES website.

## Authentication API

### POST /api/auth/[...nextauth]

NextAuth.js authentication endpoint that handles login, logout, session management, and other authentication operations.

- **Authentication**: None (for login), Session (for other operations)
- **Request Body**: Varies based on the operation
- **Response**: Varies based on the operation

## Admin API

### GET /api/admin/db-status

Returns the current status of the MongoDB connection.

- **Authentication**: Required (admin role)
- **Response**:
  ```json
  {
    "status": "connected",
    "database": "cpgeistes",
    "host": "cluster0.mongodb.net"
  }
  ```
  or
  ```json
  {
    "status": "error",
    "error": "Connection error message"
  }
  ```

### POST /api/admin/setup

Creates the initial admin user with hardcoded credentials:
- Email: admin@cpgeistes.com
- Password: admin123

- **Authentication**: None (only for initial setup)
- **Response**:
  ```json
  {
    "message": "Admin user created successfully"
  }
  ```
  or
  ```json
  {
    "message": "Admin user already exists"
  }
  ```
  or
  ```json
  {
    "error": "Error message"
  }
  ```

## Centres de Prépa API

### GET /api/admin/centres-prepa

Returns a list of all centres de prépa.

- **Authentication**: Required (admin role)
- **Response**:
  ```json
  [
    {
      "_id": "60d21b4667d0d8992e610c85",
      "name": "Centre de Prépa Example",
      "description": "Description of the centre",
      "address": "123 Example Street",
      "city": "Casablanca",
      "postalCode": "20000",
      "phone": "+212 5 22 12 34 56",
      "email": "contact@example.com",
      "website": "https://example.com",
      "location": {
        "type": "Point",
        "coordinates": [-7.589843, 33.573109]
      },
      "images": [
        {
          "_id": "60d21b4667d0d8992e610c86",
          "filename": "image1.jpg",
          "contentType": "image/jpeg"
        }
      ],
      "createdAt": "2023-06-22T10:00:00.000Z",
      "updatedAt": "2023-06-22T10:00:00.000Z"
    }
  ]
  ```

### POST /api/admin/centres-prepa

Creates a new centre de prépa.

- **Authentication**: Required (admin role)
- **Request Body**: FormData with the following fields:
  - `name`: Name of the centre (required)
  - `description`: Description of the centre (required)
  - `address`: Address of the centre (required)
  - `city`: City where the centre is located (required)
  - `postalCode`: Postal code of the centre (required)
  - `phone`: Phone number of the centre (required)
  - `email`: Email address of the centre (required)
  - `website`: Website of the centre (optional)
  - `longitude`: Longitude coordinate (required)
  - `latitude`: Latitude coordinate (required)
  - `images`: One or more image files (required)
- **Response**:
  ```json
  {
    "message": "Centre de prépa created successfully",
    "id": "60d21b4667d0d8992e610c85"
  }
  ```
  or
  ```json
  {
    "error": "Error message"
  }
  ```

### GET /api/admin/centres-prepa/:id

Returns details of a specific centre de prépa.

- **Authentication**: Required (admin role)
- **Parameters**:
  - `id`: MongoDB ID of the centre de prépa
- **Response**:
  ```json
  {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "Centre de Prépa Example",
    "description": "Description of the centre",
    "address": "123 Example Street",
    "city": "Casablanca",
    "postalCode": "20000",
    "phone": "+212 5 22 12 34 56",
    "email": "contact@example.com",
    "website": "https://example.com",
    "location": {
      "type": "Point",
      "coordinates": [-7.589843, 33.573109]
    },
    "images": [
      {
        "_id": "60d21b4667d0d8992e610c86",
        "filename": "image1.jpg",
        "contentType": "image/jpeg"
      }
    ],
    "createdAt": "2023-06-22T10:00:00.000Z",
    "updatedAt": "2023-06-22T10:00:00.000Z"
  }
  ```
  or
  ```json
  {
    "error": "Centre de prépa not found"
  }
  ```

### PUT /api/admin/centres-prepa/:id

Updates a specific centre de prépa.

- **Authentication**: Required (admin role)
- **Parameters**:
  - `id`: MongoDB ID of the centre de prépa
- **Request Body**: FormData with the following fields:
  - `name`: Name of the centre (required)
  - `description`: Description of the centre (required)
  - `address`: Address of the centre (required)
  - `city`: City where the centre is located (required)
  - `postalCode`: Postal code of the centre (required)
  - `phone`: Phone number of the centre (required)
  - `email`: Email address of the centre (required)
  - `website`: Website of the centre (optional)
  - `longitude`: Longitude coordinate (required)
  - `latitude`: Latitude coordinate (required)
  - `existingImages`: Array of indices of existing images to keep (optional)
  - `images`: One or more new image files (optional)
- **Response**:
  ```json
  {
    "message": "Centre de prépa updated successfully",
    "id": "60d21b4667d0d8992e610c85"
  }
  ```
  or
  ```json
  {
    "error": "Error message"
  }
  ```

### DELETE /api/admin/centres-prepa/:id

Deletes a specific centre de prépa.

- **Authentication**: Required (admin role)
- **Parameters**:
  - `id`: MongoDB ID of the centre de prépa
- **Response**:
  ```json
  {
    "message": "Centre de prépa deleted successfully"
  }
  ```
  or
  ```json
  {
    "error": "Error message"
  }
  ```

### GET /api/admin/centres-prepa/:id/images/:imageIndex

Returns a specific image from a centre de prépa.

- **Authentication**: None (publicly accessible)
- **Parameters**:
  - `id`: MongoDB ID of the centre de prépa
  - `imageIndex`: Index of the image to retrieve
- **Response**: Binary image data with appropriate content type header
  or
  ```json
  {
    "error": "Image not found"
  }
  ```

## Future API Endpoints

The following API endpoints will be implemented in future updates:

### User Management API

#### GET /api/admin/users

Returns a list of all users.

- **Authentication**: Required (admin role)
- **Query Parameters**:
  - `page`: Page number (default: 1)
  - `limit`: Number of users per page (default: 10)
  - `sort`: Field to sort by (default: "createdAt")
  - `order`: Sort order (default: "desc")
- **Response**:
  ```json
  {
    "users": [
      {
        "id": "60d21b4667d0d8992e610c85",
        "name": "User Name",
        "email": "user@example.com",
        "role": "user",
        "createdAt": "2023-06-22T10:00:00.000Z"
      }
    ],
    "pagination": {
      "total": 100,
      "pages": 10,
      "current": 1,
      "limit": 10
    }
  }
  ```

#### GET /api/admin/users/:id

Returns a specific user by ID.

- **Authentication**: Required (admin role)
- **Response**:
  ```json
  {
    "id": "60d21b4667d0d8992e610c85",
    "name": "User Name",
    "email": "user@example.com",
    "role": "user",
    "createdAt": "2023-06-22T10:00:00.000Z",
    "updatedAt": "2023-06-22T10:00:00.000Z"
  }
  ```

#### POST /api/admin/users

Creates a new user.

- **Authentication**: Required (admin role)
- **Request Body**:
  ```json
  {
    "name": "New User",
    "email": "newuser@example.com",
    "password": "password123",
    "role": "user"
  }
  ```
- **Response**:
  ```json
  {
    "id": "60d21b4667d0d8992e610c85",
    "name": "New User",
    "email": "newuser@example.com",
    "role": "user",
    "createdAt": "2023-06-22T10:00:00.000Z"
  }
  ```

#### PUT /api/admin/users/:id

Updates an existing user.

- **Authentication**: Required (admin role)
- **Request Body**:
  ```json
  {
    "name": "Updated Name",
    "email": "updated@example.com",
    "role": "admin"
  }
  ```
- **Response**:
  ```json
  {
    "id": "60d21b4667d0d8992e610c85",
    "name": "Updated Name",
    "email": "updated@example.com",
    "role": "admin",
    "updatedAt": "2023-06-22T11:00:00.000Z"
  }
  ```

#### DELETE /api/admin/users/:id

Deletes a user.

- **Authentication**: Required (admin role)
- **Response**:
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

### Content Management API

Content management API endpoints will be implemented in future updates to allow managing website content.

### Settings API

Settings API endpoints will be implemented in future updates to allow configuring website settings.

## Error Handling

All API endpoints follow a consistent error handling pattern:

- **400 Bad Request**: Invalid input data
- **401 Unauthorized**: Authentication required
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server error

Example error response:
```json
{
  "error": "Error message",
  "details": "Additional error details (optional)"
}
```

## API Authentication

API endpoints are protected using NextAuth.js session authentication. The session is automatically checked for protected routes.

### Authentication Flow

1. User logs in through the `/admin/login` page
2. NextAuth.js creates a session and sets cookies
3. Protected API routes check the session using middleware
4. If the user is not authenticated or doesn't have the admin role, they are redirected to the login page

## Database Connection

The API uses a singleton pattern to maintain a single connection to MongoDB across requests. This is implemented in the `src/lib/db/mongodb.ts` file.

### Connection Status

The database connection status is checked by the `/api/admin/db-status` endpoint, which returns:

- `connected`: The connection to MongoDB is active
- `disconnected`: The connection to MongoDB is not active
- `error`: There was an error connecting to MongoDB

## Security Considerations

1. **API Rate Limiting**: Consider implementing rate limiting for production deployments
2. **CORS**: Configure CORS to allow requests only from trusted origins
3. **Error Messages**: Avoid exposing sensitive information in error messages
4. **Logging**: Implement proper logging for API requests and errors

## Rate Limiting

API rate limiting will be implemented in future updates to prevent abuse.

## CORS

Cross-Origin Resource Sharing (CORS) is configured to allow requests only from trusted origins. 