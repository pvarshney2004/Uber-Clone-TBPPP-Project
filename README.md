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
Frontend Developer<br/>

Set up the React app structure using Create React App or Vite.<br/>
Add basic routing for key pages: Login, Signup, Ride Booking, and Profile.<br/>
Start creating UI for Signup and Login pages.<br/><br/>
Backend Developers<br/>

Set up the Express.js backend and integrate MongoDB.<br/>
Create the project folder structure: routes/, models/, controllers/.<br/>
Implement basic user and driver authentication using JWT.<br/>
Start working on User and Driver Signup/Login APIs.<br/><br/>
Database Manager<br/>

Design schemas for users, drivers, and basic ride structure.<br/>
Set up MongoDB Atlas and share connection strings.<br/>
## Week 2: Finalize User and Driver Management<br/><br/>
Frontend Developer<br/>

Complete UI for Signup, Login, and Profile pages.<br/>
Use Redux/Context API for state management (user authentication).<br/><br/>
Backend Developers<br/>

Developer 1: Finalize and test User Signup/Login APIs.<br/>
Developer 2: Finalize and test Driver Signup/Login APIs.<br/>
Add middleware for JWT-based authentication.<br/><br/>
Database Manager<br/>

Finalize schemas for users and drivers.<br/>
Add validations for data consistency.<br/>
## Week 3: Ride Booking System<br/>
Frontend Developer<br/>

Design and integrate Google Maps API for location selection.<br/>
Create a ride request form (pickup and drop-off location, time, etc.).<br/><br/>
Backend Developers<br/>

Developer 1: Create APIs for ride requests (create, read).<br/>
Developer 2: Implement real-time updates using Socket.IO (ride status updates).<br/><br/>
Database Manager<br/>

Extend schema to store ride details (pickup, drop-off, status).<br/>
Optimize database queries for ride history retrieval.<br/>
## Week 4: Payment Integration and Driver-Rider Matching<br/><br/>
Frontend Developer<br/>

Add a payment page UI with options like card, UPI, or wallet.<br/>
Add UI for ride status tracking (e.g., "Driver Arrived", "Ride Started").<br/><br/>
Backend Developers<br/>

Developer 1: Integrate payment gateway APIs (Razorpay, Stripe).<br/>
Developer 2: Handle payment-related callbacks and store transaction details.<br/>
Create APIs for driver matching (nearest driver based on location).<br/><br/>
Database Manager<br/>

Create a schema for payments and link them to rides.<br/>
Store driver availability and locations for efficient matching.<br/>
## Week 5: Notifications and Admin Panel<br/>
Frontend Developer<br/>

Implement notifications for ride status tracking using Firebase Cloud Messaging (FCM).<br/>
Design an admin dashboard for managing users, drivers, and rides.<br/><br/>
Backend Developers<br/>

Developer 1: Implement push notifications for ride updates.<br/>
Developer 2: Add admin APIs for user and ride management.<br/>
Create analytics APIs (e.g., total rides, earnings).<br/><br/>
Database Manager<br/>

Write aggregation queries for generating reports.<br/>
## Week 6: Testing and Debugging<br/>
Frontend Developer<br/>

Conduct UI testing using React Testing Library or Cypress.<br/><br/>
Backend Developers<br/>

Write unit tests for APIs using Jest or Mocha.<br/>
Perform integration testing.<br/><br/>
Database Manager<br/>

Test database performance and resolve bottlenecks.<br/>
Project Coordination<br/>

Ensure end-to-end testing and feature integration are completed.<br/>
##Week 7: Deployment and Finalization<br/><br/>
Frontend Developer<br/>

Deploy the React app to Vercel or Netlify.<br/><br/>
Backend Developers<br/>

Deploy the Node.js app to AWS, Render, or Heroku.<br/><br/>
Database Manager<br/>

Set up database monitoring and backups on MongoDB Atlas.<br/>
Project Coordination<br/>

Prepare project documentation and final presentation/demo.<br/>
