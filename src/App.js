import { Route, Routes } from "react-router-dom";
import "./App.css"
import SignUpComponent from "./components/SignUpComponent";
import LoginComponent from "./components/LoginComponent";
import DashboardComponent from "./components/DashboardComponent";

const App = () => (
  <Routes>
    <Route exact path = "/signUp" element ={ < SignUpComponent /> } />
    <Route exact path = "/logIn" element = {< LoginComponent />} />
    <Route exact path = "/" element = {<DashboardComponent/>} />
  </Routes>
)

export default App;
