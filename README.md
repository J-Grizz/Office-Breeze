# Office Breeze

### General tech used:
- React
- TypeScript
- Firebase
- React Router

### Setting up locally:

1. Clone this repo:
`git clone https://github.com/J-Grizz/specno-assessment.git`

2. Install modules:
`yarn`
or
`npm i`

3. Setup firebase:

- Create new project
- Setup auth by enabling 'Google' as  sign-in provider and allowing local host
- Create a firestore database. Rules are not important as we push rules from the repo
- Create a `.env` file and copy in the correct values from firebase settings:
```
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID
```
- Initialize firebase: `npx firebase init` and connect to your newly created firebase project
- Push the repo firestore rules to your firebase project: `npx firebase deploy --only firestore:rules`

4. Now you should be able to run `yarn start` or `npm start`, localhost:3000 should open automatically in your browser and you should be able to signin and start creating offices.
