# RNchallenge – User and Country Management with React and Node.js

This is a full-stack application for managing users and countries, built with React on the frontend and Node.js/Express on the backend, using MongoDB as the database.

---

## Features

- List, create, and delete users.
- List, create, and delete countries.
- Multilingual support (English and Portuguese).
- Visual feedback with spinners during async operations.
- Modular React architecture using Context API for state management.
- RESTful API built with Express and MongoDB.
- Basic backend validation to prevent incomplete data and duplicates.
- Responsive and accessible styling.

---

## Project Structure

- `/client`: React frontend application.
- `/server`: Node.js Express backend server.
- `/client/src/context`: React Context for user management.
- `/client/src/hooks`: Custom hooks for users and countries.
- `/client/src/components`: Reusable UI components (UserForm, UserTable, CountryForm, etc.).
- `/client/src/pages`: Application pages (Home, Countries, Revisited).
- `/server/routes`: API routes.
- `/server/controllers`: API controllers with business logic.
- `/server/models`: Mongoose data models for MongoDB.

---

## Technologies Used

- React 18
- React Router v6
- React i18next for internationalization
- Axios for HTTP requests
- Node.js & Express
- MongoDB & Mongoose
- CSS Modules for styling

---

## How to Run the Project (Development Mode)

1. Clone the repository:

   ```bash
   git clone <REPOSITORY_URL>
Navigate to the project folder:


cd RNchallenge
Run the app with both frontend and backend concurrently:


npm run dev
This script launches both the Express server and React app in development mode.

Open your browser at:

http://localhost:3000
Make sure MongoDB is running locally on the default port (mongodb://127.0.0.1:27017).

Available Scripts
npm run dev: Starts frontend and backend in development mode.

npm run build: Builds the React frontend for production.

npm start: Starts the backend server in production mode.

Additional Notes
MongoDB must be installed and running locally.

The backend prevents duplicate users by enforcing a unique index on name, surname, country, and birthday.

To modify MongoDB connection settings, adjust /server/app.js or /server/server.js.

Frontend communicates with backend via REST API using Axios.

