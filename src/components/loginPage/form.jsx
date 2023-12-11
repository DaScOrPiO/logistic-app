import { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";

export default function Form() {
  const [display_signup, setDisplay_signup] = useState(false);

  return (
    <>
      {!display_signup ? (
        <Signin showMe={display_signup} setShowME={setDisplay_signup} />
      ) : (
        <Signup showMe={display_signup} setShowME={setDisplay_signup} />
      )}
    </>
  );
}
