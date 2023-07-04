import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper } from "@mui/material";
import image from "../photo/googlemap.jpg";

export default function BizDetails(props) {
  const id = useParams().id;
  const list = props.listing.find((c) => c.id === Number(id));

  return (
    <Container maxWidth="sm" className="listing-container">
      <Paper className="listing-paper">
        <h2>{list.name}</h2>
        <h4>{list.Address}</h4>
        <h4>{list.hours}</h4>
        <p>{list.description}</p>
        <img
          src={image}
          alt="img"
          style={{
            width: "500px",
            height: "auto",
          }}
        />
      </Paper>
    </Container>
  );
};

