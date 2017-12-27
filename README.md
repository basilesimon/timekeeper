
Note: this project is not production-ready.

It aims to demonstrate how we can keep an HTML5 video and some interactive elements in sync on a webpage.

The `<Video/>` and `<Timeline/>` components report to `<Timekeeper/>`.

Based on the video's duration, `<Timekeeper/>` redistributes to `<Timeline/>` its domain. When the video is playing, it emits event to `<Timekeeper/>`, which again passes them down to `<Timeline/>`. 

#### Requirements: 
- [x] Render at least an HTML5 video and a d3 component showing time elapsed
- [x] Keep both elements in sync when seeking in the video
- [ ] Keep both elements in sync when clicking on the d3 timeline


---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

