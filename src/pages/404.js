import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center flex-column">
              <h1>Nie znaleziono strony</h1>
              <p>Powrót na <Link className="footer__link" to='/'>Stronę główną</Link></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
