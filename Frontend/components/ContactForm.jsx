  import { FaStar } from "react-icons/fa";
import { Radio, Rating } from "./RatingStyles";
import React, { useState } from "react";

const ContactForm = () => {
  const [rate, setRate] = useState(0);
  const rating = (rate) => {
    <></>;
  };

  return (
    <div className="contact-form">
      <form
        target="_blank"
        action="https://formsubmit.co/anshulwork1998@gmail.com"
        method="POST"
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Full Name"
          required
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email Address"
          required
        ></input>
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          className="form-control"
          placeholder="Subject"
          required
        ></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          className="form-control"
          name="message"
          required
        />

        <label>Please rate my website</label>
        
          {[...Array(5)].map((item, index) => {
            const givenRating = index + 1;
            return (
              <label>
                <Radio
                  type="radio"
                  value={givenRating}
                  onClick={() => {
                    setRate(givenRating);
                    alert(
                      `Are you sure you want to give ${givenRating} stars ?`
                    );
                  }}
                />
                <Rating>
                  <FaStar
                    color={
                      givenRating < rate || givenRating === rate
                        ? "000"
                        : "rgb(192,192,192)"
                    }
                  />
                </Rating>
              </label>
            );
          })}
       
        <button className="btn" type="submit" onClick={rating}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
