// Serves as the root component of the application.
import React from 'react';
import AllRoutes from './AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar /> {/* Provides the navigation bar that users interact with to navigate to different parts of the app. */}
      <AllRoutes />  {/*Handles routing and renders the appropriate component based on the current URL. */}
    </>
  );
}

export default App;
