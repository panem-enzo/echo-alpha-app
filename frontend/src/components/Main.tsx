import { useState } from "react";
import App from "../App";
import LandscapeUI from "./LandscapeUI";

const Main = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  return isLandscape ? (
    <LandscapeUI toggleRotation={() => setIsLandscape(false)} />
  ) : (
    <App toggleRotation={() => setIsLandscape(true)} />
  );
};

export default Main;
