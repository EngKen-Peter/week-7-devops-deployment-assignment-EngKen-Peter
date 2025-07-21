Week 7 – MERN Bug Tracker Deployment
Overview
This project is a MERN stack Bug Tracker that allows users to report, view, update, and delete bugs. It includes full-stack development and deployment using CI/CD practices.

Live Links
Frontend: https://week-7-bug-tracker-iv8c4ca1x-kennedy-peters-projects-99f4df6f.vercel.app

Backend API: https://week-7-bug-tracker-backend.onrender.com

Features
User-friendly bug tracking interface

Create, read, update, and delete bugs

RESTful API with Express and MongoDB

Deployment of backend to Render

Deployment of frontend to Vercel

GitHub Actions CI/CD workflows (partial)

Technologies Used
MongoDB

Express.js

React.js

Node.js

Vite

Tailwind CSS

Render

Vercel

GitHub Actions

Backend Setup
Navigate to the backend folder.

Install dependencies with npm install.

Create a .env file with your MongoDB URI and any other secrets.

Run the server locally using npm run dev.

Frontend Setup
Navigate to the client folder.

Install dependencies with npm install.

Set the API base URL in environment variables.

Start the development server using npm run dev.

CI/CD (GitHub Actions)
I attempted to set up GitHub Actions workflows for both frontend and backend deployment. However, the frontend workflow failed due to a missing package.json file path error. Despite troubleshooting, I was unable to resolve it in time but all core deployment goals were achieved manually.

Screenshots

1. Frontend Unit Tests
[Frontend Unit Tests](screenshots/frontend-unit-tests.png)

2. Backend Coverage Report
[Backend Coverage Report](screenshots/backend-coverage-report.png)

3. E2E Cypress Test
[E2E Cypress Test](screenshots/e2e-cypress-test.png)


Author
Kennedy Mbaluka Peter
GitHub: https://github.com/EngKen-Peter

