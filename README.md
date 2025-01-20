# Uber-Clone-TBPPP-Project
An advanced ride-hailing application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project replicates core features of Uber, including real-time ride booking, driver-rider matching, live location tracking, and payment integration.

# 🛠️ Tech Stack
Frontend: React.js and Google Maps API for location services. <br/>
Backend: Node.js with Express.js for building scalable REST APIs. <br/>
Database: MongoDB (Compass) for managing user, driver, and ride data. <br/>
Real-Time Updates: Socket.IO for real-time communication between users and drivers. <br/>

# Group Members Individual Task Distribution <br/>
## 1. Frontend Developer <br/>
## 2. Backend Developer 1 <br/>
## 3. Backend Developer 2 <br/>
## 4. Database Manager <br/><br/>

# 7 Weeks Week-by-Week Plan <br/>

## Week 1: Planning, Setup, and User Authentication <br/>
Frontend Developer

Set up the React app structure using Create React App or Vite.
Add basic routing for key pages: Login, Signup, Ride Booking, and Profile.
Start creating UI for Signup and Login pages.
Backend Developers

Set up the Express.js backend and integrate MongoDB.
Create the project folder structure: routes/, models/, controllers/.
Implement basic user and driver authentication using JWT.
Start working on User and Driver Signup/Login APIs.
Database Manager

Design schemas for users, drivers, and basic ride structure.
Set up MongoDB Atlas and share connection strings.
Week 2: Finalize User and Driver Management
Frontend Developer

Complete UI for Signup, Login, and Profile pages.
Use Redux/Context API for state management (user authentication).
Backend Developers

Developer 1: Finalize and test User Signup/Login APIs.
Developer 2: Finalize and test Driver Signup/Login APIs.
Add middleware for JWT-based authentication.
Database Manager

Finalize schemas for users and drivers.
Add validations for data consistency.
Week 3: Ride Booking System
Frontend Developer

Design and integrate Google Maps API for location selection.
Create a ride request form (pickup and drop-off location, time, etc.).
Backend Developers

Developer 1: Create APIs for ride requests (create, read).
Developer 2: Implement real-time updates using Socket.IO (ride status updates).
Database Manager

Extend schema to store ride details (pickup, drop-off, status).
Optimize database queries for ride history retrieval.
Week 4: Payment Integration and Driver-Rider Matching
Frontend Developer

Add a payment page UI with options like card, UPI, or wallet.
Add UI for ride status tracking (e.g., "Driver Arrived", "Ride Started").
Backend Developers

Developer 1: Integrate payment gateway APIs (Razorpay, Stripe).
Developer 2: Handle payment-related callbacks and store transaction details.
Create APIs for driver matching (nearest driver based on location).
Database Manager

Create a schema for payments and link them to rides.
Store driver availability and locations for efficient matching.
Week 5: Notifications and Admin Panel
Frontend Developer

Implement notifications for ride status tracking using Firebase Cloud Messaging (FCM).
Design an admin dashboard for managing users, drivers, and rides.
Backend Developers

Developer 1: Implement push notifications for ride updates.
Developer 2: Add admin APIs for user and ride management.
Create analytics APIs (e.g., total rides, earnings).
Database Manager

Write aggregation queries for generating reports.
Week 6: Testing and Debugging
Frontend Developer

Conduct UI testing using React Testing Library or Cypress.
Backend Developers

Write unit tests for APIs using Jest or Mocha.
Perform integration testing.
Database Manager

Test database performance and resolve bottlenecks.
Project Coordination

Ensure end-to-end testing and feature integration are completed.
Week 7: Deployment and Finalization
Frontend Developer

Deploy the React app to Vercel or Netlify.
Backend Developers

Deploy the Node.js app to AWS, Render, or Heroku.
Database Manager

Set up database monitoring and backups on MongoDB Atlas.
Project Coordination

Prepare project documentation and final presentation/demo.
