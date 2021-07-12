import { Switch, Route } from "react-router";
import Home from "../pages/Home";
import React from 'react'
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/users/:login" component={ Details }/>
      <Route component={ NotFound } />
    </Switch>
  )
}
