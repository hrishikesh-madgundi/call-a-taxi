# Call-a-Taxi Backend API

This repository contains the backend API for the Call-a-Taxi app, built with Node.js, Express, and MongoDB.

## Table of Contents

1. [Installation](#installation)
2. [Environment Variables](#environment-variables)
3. [Running the Server](#running-the-server)
4. [API Endpoints](#api-endpoints)

   * [User Registration](#user-registration)
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

## Error Handling

All errors return a JSON response with either an `errors` array (for validation) or an `error` message (for server issues).

---

## Security

* Passwords are hashed with bcrypt before storage.
* On successful registration, a JWT token is returned. Use this token in the `Authorization` header (`Bearer <token>`) for protected routes.

---

*Feel free to extend this README with additional endpoints and setup instructions as your project grows.*
