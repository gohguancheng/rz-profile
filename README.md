# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app). First attempt
at using [Redux](https://redux.js.org/tutorials/quick-start) for state
management.

## Deployed Sample

Test link: [rz-profile.vercel.app/](https://rz-profile.vercel.app)

## Features

This app focuses on a profile list management component to the left of the
viewport.
- Left panel contains the profile list and the right panel contains the selected
  profile name.
- Profile list shows list of profiles, with a toolbar anchored below.
- User has 4 default profiles: Default, Game, Movie and Music, that cannot be
  deleted.
- Toolbar has 3 permanent buttons: Move Up, Move Down, Add, as well as 2 buttons
  that are only available for Custom Profiles: Delete, Rename.
- The above 5 buttons does Write actions that alter the state of the user's
  profiles.
- Users can reorder the display order of all profiles using the Move Up and Move
  Down button.
- Users can add more Custom profiles using the Add button.
- Users can rename custom profile names using Rename button.
- Users can delete custom profile names using Delete button.
- An autosave mechanism is triggered 3 seconds after the last Write action, to
  save the user's profile list into their browser storage.

## Possible Improvements
- preload icon images to prevent buggy render
- add content for window component

## Create React App - Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.
