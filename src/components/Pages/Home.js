import React from "react";
import Listen from "../Pages/Listen/Listen";
import Unlimited from "./Unlimited/Unlimited";
import How from "./How/How";
import Concept from "./Concept/Concept";
import Subscription from "./Subscription/Subscription";
import Why from "./why/Why";
import Footer from "./Footer/Footer";


export const Home = () => {
  return (
    <div>
      <Listen />  
      <Unlimited />
      <How />
      <Concept />
      <Subscription />
      <Why />
      <Footer />
    </div>
  );
};
