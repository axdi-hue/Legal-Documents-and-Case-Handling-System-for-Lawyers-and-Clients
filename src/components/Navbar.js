import React from "react";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar(props) {
  const handleGoBack = () => {
    window.history.back();
  };

  const divStyle = {
    borderBottom: "0.1px solid white",
  };

  return (
    <>
      <div className="sticky-top">
        {props.currentAccount ? (
          <div
            className="container-fluid text-center d-flex justify-content-end bgd"
            style={divStyle}
          >
            <div>
              {props.currentAccount ? (
                <button
                  type="button"
                  className="btn btn-outline-success m-1"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Welcome,&nbsp;&nbsp;  
                  <span className="badge badge-light">
                    {" "}
                    {props.currentAccount}
                  </span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        <nav className="navbar navbar-expand-lg navbar-dark bgd">
          <div className="logo-holder logo-3 mr-3">
            <a>
              <h3>Legal Vault</h3>
              <p>A blockchain DApp</p>
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse mr-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              {props.currentAccount ? (
                <Link to="/" className="nav-link ml-5">
                  Home
                </Link>
              ) : (
                ""
              )}
            </ul>
            {props.currentAccount ? (
              <button className="btn btn-secondary" onClick={handleGoBack}>
                Go Back
              </button>
            ) : (
              ""
            )}

            <Login
              setCurrentAccount={props.setCurrentAccount}
              setCurrentBalanace={props.setCurrentBalanace}
              currentAccount={props.currentAccount}
              currentBalance={props.currentBalance}
            ></Login>
          </div>
        </nav>
      </div>
      
           

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Profile
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text text-success"
                    id="basic-addon1"
                  >
                    User Address
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={props.currentAccount}
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text text-success"
                    id="basic-addon1"
                  >
                    Eth Balance
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control "
                  disabled
                  value={props.currentBalance}
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
