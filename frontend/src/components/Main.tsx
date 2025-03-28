import { useState } from "react";
import App from "../App";
import ExpandUI from "./ExpandUI";

const Main = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  return isLandscape ? (
    <ExpandUI toggleExpand={() => setIsLandscape(false)} />
  ) : (
    <App toggleExpand={() => setIsLandscape(true)} />
  );
};

export default Main;
