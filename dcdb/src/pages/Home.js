import React from "react";
import ImageCarousel from "../components/ImageCarousel";

export const Home = () => (
  <div>
    <div className="segment main-display  carousel-image">
      <ImageCarousel />
    </div>
    <h3 className="underline-header">Welcome</h3>
    <div className="segment text-box">
      <h4>
        Find all the information about DC Films and track movies you have
        watched!
      </h4>
    </div>
  </div>
);
