import React from "react";

type Props = {
  icon: string;
  errorMsg: string;
};

const ErrorComponent = (props: Props) => {
  return (
    <div className="error-msg">
      <img src={props.icon} alt="Red cross" height={20} width={20} className="icon" />
      {props.errorMsg}
    </div>
  );
};

export default ErrorComponent;
