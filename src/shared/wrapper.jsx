import React from "react";

function Wrapper({ children }) {
  return (
    <div className="max-w-[1440px] px-[20px] w-full mx-auto">{children}</div>
  );
}

export default Wrapper;
