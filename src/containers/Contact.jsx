import React from "react";
import MainCard from "../components/MainCard";
import ResumePdf from "../img/resume.pdf"

const Contact = () => {
  return (
    <MainCard>
      <h1 class="card-title">Contact</h1>
      <hr />
      <div class="list-group list-group-flush">
        <span class="list-group-item list-group-item-action">
          <address>
            <strong>Zack Hayden</strong>
            <br />
            293 Paxton Cir
            <br />
            Marietta, GA 30062
          </address>
        </span>
        <a
          href="https://github.com/zackapotamus"
          target="_blank"
          class="list-group-item list-group-item-action"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/zack-hayden/"
          target="_blank"
          class="list-group-item list-group-item-action"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={ResumePdf}
          target="_blank"
          class="list-group-item list-group-item-action"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <span class="list-group-item list-group-item-action">
          <strong>Phone</strong> <a href="tel:678-826-9225">(678) 826-9225</a>
        </span>
        <span class="list-group-item list-group-item-action">
          <strong>Email</strong>{" "}
          <a href="mailto:z@ckhayden.com">z@ckhayden.com</a>
        </span>
      </div>
    </MainCard>
  );
};

export default Contact;
