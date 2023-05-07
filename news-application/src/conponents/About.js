import React from "react";
import Footer from "./Footer";
import photo from "../image/photo.jfif";

export default function About() {
  return (
    <>
      <div className="container n-about" style={{ marginTop: "4rem" }}>
        Read Top News in India and around the World on
        <br />
        <big className="bigg">
          Daily-Updates:Times Of India <br />
          <p>
            Get the latest India news and breaking news from Daily-Updates on
            Times of India.
          </p>
        </big>{" "}
        Breaking news coverage and analysis on top headlines, politics, current
        affairs, Latest News Today: Breaking news on Politics, Business, Sports,
        Bollywood, Education, ... NewsTimes of India Covers all latest breaking
        news across India and world.This digital news media owned and managed by
        <big className="bigg"> Rohini Kalane</big>. This News media is free to
        use and also provide you the latest and the top headlines of the
        country. We also tried to serve better experience to our viewers and
        provide Daily updates top headlines for free.
      </div>

      <div className="logo">
        <div style={{ textAlign: "center" }} className="left">
          <img
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "2px solid white",
              marginTop: "184px",
            }}
            src={photo}
            alt=""
          />
        </div>

        <div
          style={{
            textAlign: "center",
          }}
          className="right"
        >
          This Daily-Updates:Times of India news app is developed by-- <br />
          <strong>Rohini Kalane</strong>
          <br />
          <strong>A Aspiring Full Stack Developer</strong>
        </div>
      </div>
      <Footer />
    </>
  );
}
