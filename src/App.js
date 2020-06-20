import React from "react";
import DisplayPosts from "./components/DisplayPosts";
import { withAuthenticator } from "aws-amplify-react";

import "./App.css";
import CreatePosts from "./components/CreatePosts";

function App() {
  return (
    <div className='App'>
      <CreatePosts />
      <DisplayPosts />
    </div>
  );
}

export default withAuthenticator(App, {
  includeGreetings: true,
});
