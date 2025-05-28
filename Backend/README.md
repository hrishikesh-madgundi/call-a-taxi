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
   * [Captain Registration](#captain-registration)
   * [Captain Login](#captain-login)
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

### Captain Registration

Register a new captain account.

* **URL**: `/captain/register`
* **Method**: `POST`
* **Content-Type**: `application/json`

#### Request Body

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "janesmith@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

| Field                | Type   | Required | Description                                |
| -------------------- | ------ | -------- | ------------------------------------------ |
| `fullname.firstname` | String | Yes      | First name (min. 3 characters)             |
| `fullname.lastname`  | String | No       | Last name (min. 3 characters, if provided) |
| `email`              | String | Yes      | Must be a valid email address              |
| `password`           | String | Yes      | Minimum 6 characters                       |
| `vehicle.color`      | String | Yes      | Vehicle color (min. 3 characters)          |
| `vehicle.plate`      | String | Yes      | Vehicle plate number (min. 3 characters)   |
| `vehicle.capacity`   | Number | Yes      | Vehicle capacity (min. 1)                  |
| `vehicle.vehicleType`| String | Yes      | Vehicle type (`car`, `motorcycle`, `auto`) |

#### Success Response

* **Status Code**: `201 Created`

```json
{
  "token": "<jwt_token_here>",
  "captain": {
    "_id": "<captain_id>",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "janesmith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "__v": 0
  }
}
```

---

### Captain Login

Authenticate a captain and return a JWT token.

* **URL**: `/captain/login`
* **Method**: `POST`
* **Content-Type**: `application/json`

#### Request Body

```json
{
  "email": "janesmith@example.com",
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
  "captain": {
    "_id": "<captain_id>",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "janesmith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "__v": 0
  }
}
```

---

## Features Developed

1. **User Registration**: Allows users to register with their first name, last name, email, and password.
2. **User Login**: Authenticates users and provides a JWT token for session management.
3. **Get User Profile**: Retrieves the profile of the authenticated user.
4. **User Logout**: Logs out the user by blacklisting the token.
5. **Captain Registration**: Allows captains to register with their personal and vehicle details.
6. **Captain Login**: Authenticates captains and provides a JWT token for session management.
7. **Token Blacklisting**: Ensures logged-out tokens cannot be reused.
8. **Password Hashing**: Secures user and captain passwords using bcrypt.
9. **Validation**: Validates user and captain input for registration and login using `express-validator`.
10. **Authentication Middleware**: Protects routes by verifying JWT tokens.

---