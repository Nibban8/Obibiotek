import "./App.css";

import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Footer from "./components/Footer";

import Frag from "./views/Frag";
import Ros from "./views/Ros";

import Success from "./views/Success";
import Failure from "./views/Failure";
import { LocationContext } from "./locationContext";

import axios from "axios";

function App() {
  const url_mx =
    "https://www.nanogbiotec.com/producto/kit-de-fragmentacion-y-kit-ros/";

  const ros_pe = "https://buy.stripe.com/28o17K3WH7lEg12fZ0";

  const frag_pe = "https://buy.stripe.com/9AQeYA50LcFYg128ww";

  const [url_ros, setUrl_ros] = useState(
    "https://buy.stripe.com/eVa3fSdxhbBUcOQ9AD"
  );
  const [url_frag, setUrl_frag] = useState(
    "https://buy.stripe.com/4gw8AcdxhfSa9CE5kl"
  );

  const [country, setCountry] = useState("");

  useEffect(() => {
    const getContry = async () => {
      let res = await axios.get("https://ipapi.co/json/");
      const ctry = res.data.country_code;
      console.log(ctry);
      setCountry(ctry);

      if (ctry === "MX") {
        setUrl_frag(url_mx);
        setUrl_ros(url_mx);
      }

      if (ctry === "PE") {
        setUrl_frag(frag_pe);
        setUrl_ros(ros_pe);
      }
    };
    getContry();
  }, []);

  return (
    <div>
      {country && (
        <>
          <Router>
            <Navigation />
            <Switch>
              <LocationContext.Provider value={{ url_frag, url_ros, country }}>
                <Route path="/success" exact component={() => <Success />} />
                <Route path="/failure" exact component={() => <Failure />} />
                <Route
                  path="/productos/frag"
                  exact
                  component={() => <Frag />}
                />
                <Route path="/productos/ros" exact component={() => <Ros />} />
                <Route path="/" exact component={() => <Home />} />
              </LocationContext.Provider>
            </Switch>
          </Router>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
