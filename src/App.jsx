import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from ".//components/Header/Header";
import Body from "./components/Body/Body";

export default function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}
