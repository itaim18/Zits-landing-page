import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="img/logo.png"
              alt="zits logo"
              style={{
                width: "160px",
                bottom: "20px",
                position: "relative",
              }}
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right font-medium font-sans">
            <li>
              <a href="#features" className="page-scroll font-medium">
                פיצ'רים
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll font-medium">
                עוד עלינו
              </a>
            </li>

            <li>
              <a href="#team" className="page-scroll">
                צוות
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                צור קשר
              </a>
            </li>
            <li>
              <a
                href="https://expo.dev/artifacts/eas/5fPLaQ2ufz9BCjiVhRfsBv.apk"
                className="page-scroll btn btn-custom"
                style={{ borderRadius: "12px" }}
              >
                להורדה
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
