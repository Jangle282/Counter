# Counter
Data collection app for researchers and data lovers

## TODO
- Write a better README
  - Presentation of the project with links and screenshots
  - Instructions to execute the project: `git clone ...; npm install; npm run dev` and a `.env` example
- Add a favicon
- Connect the user right after the confirmation link. For this, you can use: `req.logIn(theUserToLogIn, callback)`
- A manager is not able to add a datapoint
- Update the route `GET /api/data-points/:projectId`, and give the email only if `req.user` is the owner
