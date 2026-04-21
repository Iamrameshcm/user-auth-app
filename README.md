# User Auth App

A full-stack login application I built using Angular on the frontend and Node.js with Express on the backend. The idea was to keep it simple but functional — a user fills in their credentials, the form validates them, hits the backend API, and gets a success or error response shown via a snackbar notification.

---

## What I Used

**Frontend**
- Angular (Standalone Components)
- Reactive Forms
- Angular Material (Snackbar)

**Backend**
- Node.js
- Express.js
- CORS

---

## Project Structure

```
user-auth-app/
├── backend/
│   ├── src/
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    ├── angular.json
    └── package.json
```

---

## Features

On the frontend:
- Login form with email and password validation
- Show/hide password toggle
- Success and error notifications using Angular Material Snackbar
- Clean, responsive layout

On the backend:
- Simple Express server with a `/api/login` POST endpoint
- Credential validation with proper HTTP responses
- CORS configured for local development

---

## How to Run

**Clone the repo**
```bash
git clone https://github.com/Iamrameshcm/user-auth-app.git
cd user-auth-app
```

**Start the backend**
```bash
cd backend
npm install
node server.js
```
Backend runs at `http://localhost:3000`

**Start the frontend**
```bash
cd frontend
npm install
ng serve
```
Frontend runs at `http://localhost:4200`

---

## API

```
POST /api/login
```

Request:
```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

On success:
```json
{
  "message": "Login successful"
}
```

On failure:
```json
{
  "message": "Invalid credentials"
}
```

---

## How It Works

1. User fills in the login form
2. Angular validates the inputs before making any API call
3. If valid, it sends a POST request to the Express backend
4. The backend checks the credentials and sends back a response
5. The frontend shows a snackbar with success or error message
6. On successful login, the user gets redirected

---

## What I Learned

This was a good exercise in connecting a frontend and backend end-to-end. A few things I got more comfortable with:

- Setting up Angular Reactive Forms with validation
- Making HTTP calls from Angular to a Node API
- Handling responses and showing feedback to the user
- Structuring a monorepo with separate frontend and backend folders

---

## Author

Ramesh — Full Stack Developer (Angular + Node.js)
