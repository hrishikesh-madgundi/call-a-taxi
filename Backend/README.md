# Call-a-Taxi Backend API

This repository contains the backend API for the Call-a-Taxi app, built with Node.js, Express, and MongoDB.

## Table of Contents

1. [Installation](#installation)
2. [Environment Variables](#environment-variables)
3. [Running the Server](#running-the-server)
4. [API Endpoints](#api-endpoints)

   * [User Registration](#user-registration)
   * [User Login](#user-login)
   * [Get User Profile](#get-user-profile)
   * [User Logout](#user-logout)
5. [Error Handling](#error-handling)
6. [Security](#security)

---

## Installation

1. Clone this repository:

   ```bash
   git clone <your-repo-url>
   cd backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

---

## Environment Variables

Create a `.env` file in the `backend` folder with the following variables:

```env
PORT=4000
MONGO_URL=mongodb://0.0.0.0/call-a-taxi
JWT_SECRET=your_jwt_secret_here
```

* `PORT` – Port on which the server will run (default: 4000)
* `MONGO_URL` – MongoDB connection string
* `JWT_SECRET` – Secret key for signing JSON Web Tokens

---

## Running the Server

To start the server in development mode:

```bash
npm start
```

The server will be accessible at `http://localhost:4000` (or the port you set).

---

## API Endpoints

### User Registration

Register a new user account.

* **URL**: `/register`
* **Method**: `POST`
* **Content-Type**: `application/json`

#### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securePassword123"
}
```

| Field                | Type   | Required | Description                                |
| -------------------- | ------ | -------- | ------------------------------------------ |
| `fullname.firstname` | String | Yes      | First name (min. 3 characters)             |
| `fullname.lastname`  | String | No       | Last name (min. 3 characters, if provided) |
| `email`              | String | Yes      | Must be a valid email address              |
| `password`           | String | Yes      | Minimum 6 characters                       |

#### Success Response

* **Status Code**: `201 Created`

```json
{
  "token": "<jwt_token_here>",
  "user": {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null,
    "__v": 0
  }
}
```

#### Error Responses

* **400 Bad Request** – Validation failed

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

* **500 Internal Server Error** – Unexpected server error

```json
{
  "error": "Error message details"
}
```

---

### User Login

Authenticate a user and return a JWT token.

* **URL**: `/login`
* **Method**: `POST`
* **Content-Type**: `application/json`

#### Request Body

```json
{
  "email": "johndoe@example.com",
  "password": "securePassword123"
}
```

| Field      | Type   | Required | Description                  |
| ---------- | ------ | -------- | ---------------------------- |
| `email`    | String | Yes      | Must be a valid email address |
| `password` | String | Yes      | Minimum 6 characters         |

#### Success Response

* **Status Code**: `200 OK`

```json
{
  "token": "<jwt_token_here>",
  "user": {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null,
    "__v": 0
  }
}
```

#### Error Responses

* **401 Unauthorized** – Invalid email or password

```json
{
  "message": "Invalid email or password"
}
```

---

### Get User Profile

Retrieve the profile of the authenticated user.

* **URL**: `/profile`
* **Method**: `GET`
* **Headers**: `Authorization: Bearer <jwt_token>`

#### Success Response

* **Status Code**: `200 OK`

```json
{
  "_id": "<user_id>",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "socketId": null,
  "__v": 0
}
```

#### Error Responses

* **401 Unauthorized** – Missing or invalid token

---

### User Logout

Log out the user by blacklisting the token.

* **URL**: `/logout`
* **Method**: `GET`
* **Headers**: `Authorization: Bearer <jwt_token>`

#### Success Response

* **Status Code**: `200 OK`

```json
{
  "message": "Logged out successfully"
}
```

---

## Error Handling

All errors return a JSON response with either an `errors` array (for validation) or an `error` message (for server issues).

---

## Security

* Passwords are hashed with bcrypt before storage.
* On successful registration and login, a JWT token is returned. Use this token in the `Authorization` header (`Bearer <token>`) for protected routes.
* Tokens are blacklisted upon logout and expire after 24 hours.

---

## Features Developed

1. **User Registration**: Allows users to register with their first name, last name, email, and password.
2. **User Login**: Authenticates users and provides a JWT token for session management.
3. **Get User Profile**: Retrieves the profile of the authenticated user.
4. **User Logout**: Logs out the user by blacklisting the token.
5. **Token Blacklisting**: Ensures logged-out tokens cannot be reused.
6. **Password Hashing**: Secures user passwords using bcrypt.
7. **Validation**: Validates user input for registration and login using `express-validator`.
8. **Authentication Middleware**: Protects routes by verifying JWT tokens.

---