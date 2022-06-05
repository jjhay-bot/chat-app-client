import { useState } from "react";
import AuthScreen from "./pages/AuthScreen";
import HomeScreen from "./pages/HomeScreen";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("jwt") ? true : false
  );

  return (
    <div className="App">
      {loggedIn ? (
        <HomeScreen setLoggedIn={setLoggedIn} />
      ) : (
        <AuthScreen setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
