import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
type Props = {};

const Protected = (props: Props) => {
  return (
    <>
      <Confetti />
      <h1>I am the protected route !</h1>
    </>
  );
};
export default Protected;
