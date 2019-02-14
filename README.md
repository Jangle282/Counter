# Counter
A data collection web application for researchers and data lovers.

We built this as a challenge to test back end skills and CRUD operations in this stack. The basic idea was to build a web application that could be used by groups of people to count or verify sightings of things. For example, environmental threats like invasive species, social problems or more lighthearted subjects like where you see the cutest dogs around your home city, unicorns or other rare animals. 

Users can sign up and after activation link, join, create and manage projects and most importantly submit their sightings of different things

##Getting Started
- Clone or fork this repository
- In the project folder 
- $ npm init
- $ npm install
create a .env file with the following properties

PORT= "num" // for local development
ENV=development
GMAIL_EMAIL="" // email address for nodemail package to send emails from 
GMAIL_PASSWORD= "" // email address for nodemail package to send emails from 
MONGODB_URI=  // URI for connection to a MongoDB database
clientId =  // for google login 
clientSecret =  // for google login

use the following command ...
- $ npm run dev 
to run dev mode

##Database
Uses Mongo DB and Mongoose. 

##Prerequisites
What things you need to install the software and how to install them

## TODO
- Write a better README
  - Presentation of the project with links and screenshots
  - Instructions to execute the project: `git clone ...; npm install; npm run dev` and a `.env` example
- Update the route `GET /api/data-points/:projectId`, and give the email only if `req.user` is the owner



Give examples
Installing
A step by step series of examples that tell you how to get a development env running

Say what the step will be

Give the example
And repeat

until finished
End with an example of getting some data out of the system or using it for a little demo

Running the tests
Explain how to run the automated tests for this system

Break down into end to end tests
Explain what these tests test and why

Give an example
And coding style tests
Explain what these tests test and why

Give an example
Deployment
Add additional notes about how to deploy this on a live system

Built With
Dropwizard - The web framework used
Maven - Dependency Management
ROME - Used to generate RSS Feeds
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

Authors
Billie Thompson - Initial work - PurpleBooth
See also the list of contributors who participated in this project.

License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc