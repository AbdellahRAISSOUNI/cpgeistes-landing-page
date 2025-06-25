# CPGEISTES Database Schema

This document describes the MongoDB database schema used by the CPGEISTES website.

## Collections

### Users Collection

The `users` collection stores user account information.

#### Schema

| Field       | Type     | Description                              | Attributes                    |
|-------------|----------|------------------------------------------|-------------------------------|
| _id         | ObjectId | Unique identifier                        | Auto-generated                |
| name        | String   | User's full name                         | Required                      |
| email       | String   | User's email address                     | Required, Unique, Lowercase   |
| password    | String   | Hashed password                          | Required, Min length: 8, Hidden |
| role        | String   | User role (admin, user)                  | Required, Default: "user"     |
| createdAt   | Date     | Account creation timestamp               | Auto-generated                |
| updatedAt   | Date     | Account last update timestamp            | Auto-updated                  |

#### Indexes

- `email`: Unique index for fast lookup during authentication

#### Example Document

```json
{
  "_id": "60d21b4667d0d8992e610c85",
  "name": "Admin User",
  "email": "admin@cpgeistes.com",
  "password": "$2a$10$X7o/c0UfN9vXEZvGHLxc5e4WY6.jkXj8WqhG3Yd6n9VgZFXMjJhPe",
  "role": "admin",
  "createdAt": "2023-06-22T10:00:00.000Z",
  "updatedAt": "2023-06-22T10:00:00.000Z"
}
```

### CentrePrepa Collection

The `centreprepas` collection stores information about preparatory centers.

#### Schema

| Field         | Type     | Description                              | Attributes                    |
|---------------|----------|------------------------------------------|-------------------------------|
| _id           | ObjectId | Unique identifier                        | Auto-generated                |
| name          | String   | Centre name                              | Required, Unique, Trimmed     |
| description   | String   | Detailed description                     | Required                      |
| address       | String   | Street address                           | Required                      |
| city          | String   | City                                     | Required                      |
| postalCode    | String   | Postal code                              | Required                      |
| phone         | String   | Contact phone number                     | Required                      |
| email         | String   | Contact email address                    | Required, Lowercase           |
| website       | String   | Website URL                              | Optional                      |
| location      | Object   | GeoJSON Point                            | Required                      |
| location.type | String   | GeoJSON type ("Point")                   | Required, Enum: ["Point"]     |
| location.coordinates | Array | Coordinates [longitude, latitude]     | Required                      |
| images        | Array    | Array of image objects                   | Required                      |
| images.data   | Buffer   | Binary image data                        | Required                      |
| images.contentType | String | MIME type of the image                | Required                      |
| images.filename | String  | Original filename                       | Required                      |
| createdAt     | Date     | Creation timestamp                       | Auto-generated                |
| updatedAt     | Date     | Last update timestamp                    | Auto-updated                  |

#### Indexes

- `name`: Unique index for fast lookup by name
- `location`: 2dsphere index for geospatial queries

#### Example Document

```json
{
  "_id": "60d21b4667d0d8992e610c85",
  "name": "Centre de Prépa Example",
  "description": "A detailed description of the preparatory center...",
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
      "data": "<binary data>",
      "contentType": "image/jpeg",
      "filename": "building-front.jpg"
    },
    {
      "data": "<binary data>",
      "contentType": "image/jpeg",
      "filename": "classroom.jpg"
    }
  ],
  "createdAt": "2023-06-22T10:00:00.000Z",
  "updatedAt": "2023-06-22T10:00:00.000Z"
}
```

## Relationships

### Current Relationships

- None (collections are currently independent)

### Planned Future Relationships

- **CentrePrepa** to **FilierePrepa**: One-to-many relationship (a centre can offer multiple programs)
- **FilierePrepa** to **CentrePrepa**: Many-to-one relationship (a program belongs to a centre)
- **FilierePrepa** to **FiliereCycle**: Many-to-many relationship (preparatory programs can lead to multiple cycle programs)
- **FiliereCycle** to **GrandeEcole**: Many-to-one relationship (a cycle program belongs to a grande école)

## Database Connection Management

The database connection is managed using a singleton pattern to ensure only one connection is established and reused across requests. This is implemented in the `src/lib/db/mongodb.ts` file.

### Connection Status

The connection status can be checked using the `/api/admin/db-status` endpoint, which returns:

- `connected`: The connection to MongoDB is active
- `disconnected`: The connection to MongoDB is not active
- `error`: There was an error connecting to MongoDB

## Data Storage Considerations

### Images

Images are stored directly in the MongoDB database as binary data in the `images.data` field. This approach has the following implications:

- **Pros**:
  - Simplified deployment (no need for separate image storage service)
  - All data is contained within MongoDB
  - Easier backup and restore
  - Simplified access control

- **Cons**:
  - Increased database size
  - Potential impact on database performance for large numbers of images
  - MongoDB document size limit (16MB)

### Geospatial Data

Geospatial data is stored in GeoJSON format with a 2dsphere index for efficient geospatial queries. This allows for:

- Finding centres within a certain distance of a point
- Finding the nearest centres to a given location
- Calculating distances between points

## Future Schema Enhancements

Planned enhancements to the database schema include:

1. **FilierePrepa Collection**: To store information about preparatory programs
2. **FiliereCycle Collection**: To store information about cycle programs
3. **GrandeEcole Collection**: To store information about grandes écoles
4. **Orientation Collection**: To store guidance resources
5. **News Collection**: To store news and announcements
6. **Events Collection**: To store events information

## Future Collections

The following collections will be implemented in future updates:

### Content Collection

Will store website content such as pages, sections, and articles.

### Settings Collection

Will store website configuration settings.

### Applications Collection

Will store student applications and related data.

## Database Relationships

The CPGEISTES database uses a document-oriented approach with references between collections where needed. The following relationships will be implemented:

1. **Users to Content**: One-to-many relationship where users can create multiple content items
2. **Content to Settings**: Many-to-one relationship where content items can reference global settings

## Data Validation

Data validation is performed at multiple levels:

1. **Schema Level**: Using Mongoose schema validation
2. **API Level**: Using input validation in API routes
3. **UI Level**: Using form validation in the frontend

## Data Security

The database implements the following security measures:

1. **Password Hashing**: User passwords are hashed using bcrypt before storage
2. **Field Hiding**: Sensitive fields like passwords are hidden from query results by default
3. **Access Control**: Database operations are restricted based on user roles
4. **Environment Variables**: Connection strings are stored in environment variables, not in code

## Setup Instructions

To set up the MongoDB database:

1. Create a MongoDB Atlas account
2. Create a new cluster (the free tier is sufficient for development)
3. Configure network access to allow connections from your application
4. Create a database user with read and write permissions
5. Get your connection string and add it to your `.env.local` file

For detailed setup instructions, see the [Admin Setup Guide](./ADMIN_SETUP.md).

## Troubleshooting

If you encounter issues with the database connection:

1. Check that your MongoDB Atlas cluster is running
2. Verify that your IP address is allowed in the MongoDB Atlas network access settings
3. Ensure your database user credentials are correct in the connection string
4. Make sure the database name is set to `cpgeistes` in the connection string
5. Check for any firewalls or network restrictions that might block the connection
6. Use the "Refresh" button on the Database Status page to retry the connection

## Backup and Recovery

For production deployments, it is recommended to set up automated backups of the MongoDB database using MongoDB Atlas backup features.

## Migration Strategy

As the application evolves, database migrations will be performed using a combination of Mongoose schema updates and migration scripts.

## Performance Considerations

1. **Indexing**: Key fields used in queries are indexed for better performance
2. **Connection Pooling**: The database connection is reused across requests
3. **Query Optimization**: Queries are designed to retrieve only the necessary fields 