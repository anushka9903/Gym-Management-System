import { ThemeProvider } from "@emotion/react";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import darkTheme from "./Theme/DarkTheme";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import SubscriptionSuccess from "./Pages/Home/Subscription/SubscriptionSuccess";
import { CssBaseline } from "@mui/material";
import { getUserSubscription } from "./redux/Subscription/Action";
import Admin from "./Admin/Admin";
import { getUser } from "./redux/Auth/Action";
import AboutUs from "./Pages/About/AboutUs";
import ContactPage from "./Pages/ContactUs/ContactPage";
import Diet from "./Pages/Diet/Diet";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const {auth}=useSelector(store=>store)

  useEffect(() => {
    dispatch(getUser(localStorage.getItem("jwt")));
    dispatch(getUserSubscription(localStorage.getItem("jwt")));
  }, []);

  console.log("----------- ", location.pathname);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {auth.user?.role!=="ROLE_ADMIN"?<>
        {location.pathname !== "/login" && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/subscription/success"
            element={<SubscriptionSuccess />}
          ></Route>
        </Routes>
      </>:<Admin/>}
      
      
    </ThemeProvider>
  );
}

export default App;
