import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <header className="flex justify-center item-center py-3 h-20 shadow-md bg-white">
        <img src="logo.png" alt="logo" width={180} height={60} />
      </header>
      {children}
    </>
  );
};

export default AuthLayout;
