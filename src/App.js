import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SignInPage from "./Pages/SignInPage/FormSignIn";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";

export default function App() {
  return (
    <div className=" text-red-500 text-center ">
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
