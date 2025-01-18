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

# 11 Weeks Week-by-Week Plan <br/><br/>

## Week 1: Planning and Setup <br/>
Frontend Developer<br/>
Set up the React app structure using Create React App or Vite.<br/>
Add basic routing for key pages: Login, Signup, Ride Booking, and Profile.<br/><br/>
Backend Developers<br/>
Set up the Express.js backend and integrate MongoDB. <br/>
Create the project folder structure: routes/, models/, controllers/. <br/>
Implement basic user and driver authentication using JWT. <br/><br/>
Database Manager <br/>
Design schemas for users, drivers, and basic ride structure. <br/>
Set up MongoDB Atlas and share connection strings. <br/><br/><br/>

Week 2-3: User and Driver Management
Frontend Developer
Create UI for Signup, Login, and Profile pages.
Use Redux/Context API for state management (user authentication).
Backend Developers
Developer 1: Implement User Signup/Login APIs.
Developer 2: Implement Driver Signup/Login APIs.
Add middleware for JWT-based authentication.
Database Manager
Finalize and test schemas for users and drivers.
Add validations for data consistency.
Week 4-5: Ride Booking System
Frontend Developer
Design and integrate Google Maps API for location selection.
Create a ride request form (pickup and drop-off location, time, etc.).
Backend Developers
Developer 1: Create APIs for ride requests (create, read).
Developer 2: Implement real-time updates using Socket.IO (ride status updates).
Database Manager
Extend schema to store ride details (pickup, drop-off, status).
Optimize database queries for ride history retrieval.
Week 6: Payment Integration
Frontend Developer
Add a payment page UI with options like card, UPI, or wallet.
Backend Developers
Developer 1: Integrate payment gateway APIs (Razorpay, Stripe).
Developer 2: Handle payment-related callbacks and store transaction details.
Database Manager
Create a schema for payments and link them to rides.
Week 7-8: Driver-Rider Matching and Notifications
Frontend Developer
Add UI for ride status tracking (e.g., "Driver Arrived", "Ride Started").
Backend Developers
Developer 1: Create APIs for driver matching (nearest driver based on location).
Developer 2: Implement push notifications using Firebase Cloud Messaging (FCM).
Database Manager
Store driver availability and locations in the database for efficient matching.
Week 9: Admin Panel
Frontend Developer
Design an admin dashboard for managing users, drivers, and rides.
Backend Developers
Developer 1: Add admin APIs for user and ride management.
Developer 2: Add analytics APIs (e.g., total rides, earnings).
Database Manager
Write aggregation queries for generating reports.
Week 10: Testing and Debugging
Frontend Developer
Conduct UI testing (use React Testing Library or Cypress).
Backend Developers
Write unit tests for APIs using Jest or Mocha.
Perform integration testing.
Database Manager
Test database performance and resolve bottlenecks.
Project Coordination
Ensure end-to-end testing and feature integration are completed.
Week 11: Deployment and Finalization
Frontend Developer
Deploy the React app to Vercel or Netlify.
Backend Developers
Deploy the Node.js app to AWS, Render, or Heroku.
Database Manager
Set up database monitoring and backups on MongoDB Atlas.
Project Coordination
Prepare project documentation and final presentation/demo.
