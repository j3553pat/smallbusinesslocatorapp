import React from "react";
import { Container } from "@mui/material";
import image from "../photo/googlemap.jpg";
import AddListing from "../containers/AddListing";
import cookie from "cookie";

const NewListing = (props) => {
  const isLoggedIn = cookie.parse(document.cookie).loggedIn === "true";
  return (
    <Container maxWidth="fullwidth">
      {isLoggedIn && (
        <h2 className="username">Logged in as: {props.user.username}</h2>
      )}
      <div className="add-form">
        <AddListing />
        <img
          src={image}
          alt="image"
          className="business-map"
          style={{
            width: "450px",
            height: "auto",
          }}
        />
      </div>
    </Container>
  );
};

export default NewListing;