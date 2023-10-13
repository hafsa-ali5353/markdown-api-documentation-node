# Book Api

 this is new api for Books you can login, signUp and create Books.

## API DOCUMENTATION

[https://node-documentation-nnlp.onrender.com]()

### Authentication

DO we need athentication, do wee need token.

## Sign Up

### Endpoint

* `POST /signup`

### Description

This endpoint allows a user to sign up as an owner by providing their name, email, and password. It checks if the email is unique, hashes the password for security, and creates a new owner in the system if all checks pass.

### Request Body

The request body should be a JSON object with the following properties:

- `name` (string, required): The name of the owner.
- `email` (string, required): The email address of the owner.
- `password` (string, required): The password for the owner's account.

### Success Response

- **Status Code**: 201 Created
- **Response Body**:

```json
{
  "message": "Owner created successfully",
  "owner": {
    "owner_id": 1,
  "token": "<JWT>"
  }
}
```

### Error Responses

- **Status Code**: 409 Conflict
- **Response Body**:

```json
{
  "message": "Owner already exists"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "message": "Something went wrong",
  "error": "An error occurred"
}
```

## Log In

### Endpoint

- `POST /login`

### Description

This endpoint allows a user to log in as an owner by providing their email and password. It verifies the email's existence, checks if the provided password matches the stored hashed password, and issues a JWT token for authenticated access.

### Request Body

The request body should be a JSON object with the following properties:

- `email` (string, required): The email address of the owner.
- `password` (string, required): The password for the owner's account.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
{
  "message": "Owner logged in successfully",
  "token": "JWT Token"
}
```

### Error Responses

- **Status Code**: 404 Not Found
- **Response Body**:

```json
{
  "message": "Owner not found"
}
```

- **Status Code**: 401 Unauthorized
- **Response Body**:

```json
{
  "message": "Invalid credentials"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "message": "Something went wrong",
  "error": "An error occurred
}
```

---

# Author API Documentation

## Get All Authors

### Endpoint

- `GET/`

### Description

This endpoint retrieves all authors from the system.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
[
  // Array of author objects
]
```

### Error Responses

- **Status Code**: 404 Not Found
- **Response Body**:

```json
{
  "message": "No author found"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "error": "An error occurred"
}
```

## Get Author by ID

### Endpoint

- `GET/:id`

### Description

This endpoint retrieves an author by their ID.

### Parameters

- `id` (number, required): The ID of the author.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
{
  // Author object containing details
}
```

### Error Responses

- **Status Code**: 404 Not Found
- **Response Body**:

```json
{
  "message": "No author found"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "error": "An error occurred"
}
```

## Create Author

### Endpoint

- `POST/create_author`

### Description

This endpoint creates a new author in the system.

### Request Body

The request body should be a JSON object with the following properties:

- `name` (string, required): The name of the author.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
{
  // Author object containing details
}
```

### Error Responses

- **Status Code**: 404 Not Found
- **Response Body**:

```json
{
  "error": "No author found"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "error": "Error message details"
}
```

## Update Author

### Endpoint

- `PUT/update_author/:id`

### Description

This endpoint updates an existing author in the system.

### Request Body

The request body should be a JSON object with the following properties:

- `id` (number, required): The ID of the author.
- `name` (string, required): The updated name of the author.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
{
  // Updated author object containing details
}
```

### Error Responses

- **Status Code**: 404 Not Found
- **Response Body**:

```json
{
  "error": "Author not found"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "error": "An error occurred"
}
```

## Delete Author

### Endpoint

- **URL**: `DELETE/delete_author/:id`

### Description

This endpoint deletes an author from the system.

### Request Body

The request body should be a JSON object with the following properties:

- `id` (number, required): The ID of the author.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
{
  // Deleted author object containing details
}
```

### Error Responses

- **Status Code**: 404 Not Found
- **Response Body**:

```json
{
  "error": "Author not found"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "error": "An error occurred"
}
```

---

# Book API Documentation

## Get All Books

### Endpoint

- `GET/books`

### Description

This endpoint retrieves all books from the database.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
[
  {
    // Book object containing details
  },
  {
    // Book object containing details
  },
  // ...
]
```

### Error Responses

- **Status Code**: 404 Not Found
- **Response Body**:

```json
{
  "status": 404,
  "message": "Books not found!"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "status": 500,
  "error": "An error occurred"
}
```

## Get Book by ID

### Endpoint

- `GET/books/:id`

### Description

This endpoint retrieves a specific book from the database based on the provided ID.

### Request Parameters

- `id` (string): The ID of the book.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
{
  // Book object containing details
}
```

### Error Responses

- **Status Code**: 404 Not Found
- **Response Body**:

```json
{
  "status": 404,
  "message": "Book not found"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "status": 500,
  "message": "An error occurred"
}
```

## Create Book

### Endpoint

- `POST/books`

### Description

This endpoint creates a new book in the database.

### Request Body

The request body should be a JSON object with the following properties:

- `authorId` (string): The ID of the book's author.
- `title` (string): The title of the book.
- `price` (number): The price of the book.
- `image` (string): The URL of the book's image.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
{
  // Book object containing details
}
```

### Error Responses

- **Status Code**: 404 Not Found
- **Response Body**:

```json
{
  "error": "No book found"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "error": "Error message details"
}
```

## Update Book

### Endpoint

- `PUT/books/:id`

### Description

This endpoint updates an existing book in the database based on the provided ID.

### Request Parameters

- `id` (string): The ID of the book.

### Request Body

The request body should be a JSON object with the following properties:

- `authorId` (string): The ID of the book's author.
- `title` (string): The title of the book.
- `price` (number): The price of the book.
- `image` (string): The URL of the book's image.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
{
  // Book object containing details
}
```

### Error Responses

- **Status Code**: 400 Bad Request
- **Response Body**:

```json
{
  "status": 400,
  "message": "Book was not updated!"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "status": 500,
  "message": "An error occurred"
}
```

## Delete Book

### Endpoint

- `DELETE/books/:id`

### Description

This endpoint deletes a specific book from the database based on the provided ID.

### Request Parameters

- `id` (string): The ID of the book.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
{
  // Deleted book object containing details
}
```

### Error Responses

- **Status Code**: 400 Bad Request
- **Response Body**:

```json
{
  "status": 400,
  "message": "Book was not deleted!"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "status": 500,
  "message": "An error occurred"
}
}
```

---

# BookStore API Documentation

## Get all BookStores

### Endpoint

- `GET/bookstores`

### Description

This endpoint retrieves all the available BookStores from the system.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
[
  {
    // BookStore object containing details
  },
  {
    // BookStore object containing details
  },
  // ...
]
```

### Error Responses

- **Status Code**: 404 Not Found
- **Response Body**:

```json
{
  "status": 404,
  "message": "BookStores not found"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "status": 500,
  "message": "Error message details"
}
```

## Get a BookStore by ID

### Endpoint

- `GET/bookstores/:id`

### Description

This endpoint retrieves a specific BookStore by its ID.

### Parameters

- `id` (number): The ID of the BookStore to retrieve.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
{
  // BookStore object containing details
}
```

### Error Responses

- **Status Code**: 404 Not Found
- **Response Body**:

```json
{
  "status": 404,
  "message": "BookStore not found"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "status": 500,
  "message": "Error message details"
}
```

## Create a BookStore

### Endpoint

- `POST/bookstores`

### Description

This endpoint allows the creation of a new BookStore by providing the necessary data.

### Request Body

The request body should be a JSON object with the following properties:

- `bookId` (number): The ID of the book associated with the BookStore.
- `name` (string): The name of the BookStore.
- `location` (string): The location of the BookStore.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
{
  "status": 200,
  "message": "BookStore created successfully"
}
```

### Error Responses

- **Status Code**: 400 Bad Request
- **Response Body**:

```json
{
  "status": 400,
  "message": "BookStore was not created!"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "status": 500,
  "message": "Error message details"
}
```

## Update a BookStore

### Endpoint

- `PUT/bookstores/:id`

### Description

This endpoint allows the update of an existing BookStore by providing the BookStore ID and the updated data.

### Parameters

- `id` (number): The ID of the BookStore to update.

### Request Body

The request body should be a JSON object with the following properties:

- `bookId` (number): The updated ID of the book associated with the BookStore.
- `name` (string): The updated name of the BookStore.
- `location` (string): The updated location of the BookStore.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
{
  "status": 200,
  "message": "BookStore updated successfully"
}
```

### Error Responses

- **Status Code**: 400 Bad Request
- **Response Body**:

```json
{
  "status": 400,
  "message": "BookStore was not updated!"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "status": 500,
  "message": "Error message details"
}
```

## Delete a BookStore

### Endpoint

- `DELETE/bookstores/:id`

### Description

This endpoint allows the deletion of a BookStore by its ID.

### Parameters

- `id` (number): The ID of the BookStore to delete.

### Success Response

- **Status Code**: 200 OK
- **Response Body**:

```json
{
  "status": 200,
  "message": "BookStore successfully deleted!"
}
```

### Error Responses

- **Status Code**: 400 Bad Request
- **Response Body**:

```json
{
  "status": 400,
  "message": "BookStore was not deleted!"
}
```

- **Status Code**: 500 Internal Server Error
- **Response Body**:

```json
{
  "status": 500,
  "message": "Error message details"
}
```
