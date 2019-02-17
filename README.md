# Counter
A data collection web application for researchers and data lovers.

We built this as a challenge to test backend skills and CRUD operations for this stack. The basic idea was to build a web application that could be used by groups of people to count or verify sightings of things. For example, environmental threats like invasive species, social problems or more lighthearted subjects like where you see the cutest dogs around your home city, unicorns or other rare animals. 

Users can sign up and after activation link via email, join, create and manage projects and most importantly submit their sightings of different things to various projects. As an owner you can manage your projets and the data within them.

##Getting Started
- Clone or fork this repository
- In the command line for the project folder 
    $ npm init
    $ npm install
- create a .env file with the following properties
  - PORT= "num" // for local development
  - ENV=development
  - GMAIL_EMAIL="" // email address for nodemail package to send emails from 
  - GMAIL_PASSWORD= "" // email address for nodemail package to send emails from 
  - MONGODB_URI=  // URI for connection to your MongoDB database - either local or online

use the following command line to run dev mode locally...
 $ npm run dev

##Stack
- Mongo DB and Mongoose for database and database operations
- Express to handle HTTP methods
- Node.js for Javascript runtime
- Bootstrap for styling 
- Googlemap API for location capture and maps

##Contributions
Are always welcome please submit a well commented pull request with changes or challengesz