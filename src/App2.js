import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import { ModalSwitch } from "./components/ModalSwitch";
export const App2=()=> {
    return (
      <Router>
        <ModalSwitch />
      </Router>
    );
  }