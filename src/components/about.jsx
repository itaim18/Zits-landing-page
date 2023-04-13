import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export const About = (props) => {
  return (
    <div id="about" style={{ background: "#3990B1" }}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>עוד עלינו</h2>
              <p style={{ color: "whitesmoke" }}>
                {props.data ? props.data.paragraph : "loading..."}
              </p>
              <h3>למה לבחור בנו?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <div
                            key={`${d}-${i}`}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              color: "whitesmoke",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="faCheck"
                            />
                            <li>{d}</li>
                          </div>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <div
                            style={{
                              color: "whitesmoke",
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="faCheck"
                            />
                            <li key={`${d}-${i}`}> {d}</li>
                          </div>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
