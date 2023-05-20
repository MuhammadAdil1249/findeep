import Home from "./pages/home/Home";
import Login from "./components/login/Login"
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
import PhoneSignUp from "./components/PhoneSignUp";
// import Wave from '../src/assets/wave.svg'
import "./App.css"

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <UserAuthContextProvider>
          <Routes>
          <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/">
              {/* <Route index element={<Home />} /> */}
              {/* <Route path="login" element={<Login />} /> */}
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="home" element={<Home />} />
              <Route path="dashboard" element={<Home />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route>
              <Route path="companies">
                <Route index element={<List />} />
                <Route path=":companyId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={productInputs} title="Add New Stock " />}
                />
              </Route>
            </Route>
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
      {/* <Footer /> */}
      {/* <img src={Wave} alt="" /> */}
    </div>
  );
}

export default App;
