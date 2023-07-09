import React from "react";
import Navbar from "../components/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Error occured</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
