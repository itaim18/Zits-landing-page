import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <a
                    href="https://expo.dev/artifacts/eas/5fPLaQ2ufz9BCjiVhRfsBv.apk"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{
                      alignSelf: "center",
                    }}
                  >
                    לחץ להורדה
                  </a>
                  <a
                    href="https://youtu.be/vezFcTHqScA"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      marginTop: "12px",
                      color: "white",
                      textDecoration: "underline",
                    }}
                  >
                    מדריך הורדה
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
