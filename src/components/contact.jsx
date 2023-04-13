import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [isSent, setIsSent] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "service_4mal9b4",
        "template_9qtvmi8",
        e.target,
        "abWtcACN4gumebMAh"
      )
      .then(
        (result) => {
          setIsSent(true);
          console.log(result.text);
          clearState();
          setState({ ...initialState });
          setTimeout(() => {
            setIsSent(false);
          }, [5000]);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>צרו קשר</h2>
                <p>
                  אנא מלאו את פרטי הטופס מלמטה כדי לשלוח מייל ונחזור אלים בהקדם
                  האפשרי.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="שם"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        value={email}
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="אימייל"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={message}
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="הודעה"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  {isSent ? "הודעה נשלחה בהצלחה!" : "שלח הודעה"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center" style={{ direction: "ltr" }}>
          <p>
            &copy; 2023 Itai Mizlish Full Stack developer.{" "}
            <a href="mailto:itaim148@gmail.com">mail me</a>
          </p>
        </div>
      </div>
    </div>
  );
};
