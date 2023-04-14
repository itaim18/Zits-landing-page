import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCane } from "@fortawesome/free-solid-svg-icons";
export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>פיצ'רים</h2>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <FontAwesomeIcon icon={faPersonCane} className="fayy" />
            <h3>נגישות</h3>
            <p>
              הצוות עבד בצורה מיטבית על הנגשת האפליקציה לגיל השלישי ולהקל על
              השימוש בו.
            </p>
          </div>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
