import React from "react";
import "./Landpage.css";
const LandPage = () => {
  return (
    <div className="landpage">
      <div className="cover">
        <h1>Discover Our new products.</h1>
        <h1>Make your Landpage Attractive</h1>
        <form className="flex-form">
          <label htmlFor="from">
            <i className="ion-location" />
          </label>
          <input type="search" placeholder="Looking for new products?" />
          <input type="submit" defaultValue="Search" />
        </form>
      </div>
    </div>
  );
};

export default LandPage;