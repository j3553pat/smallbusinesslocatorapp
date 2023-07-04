import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import cookie from "cookie";

const Listings = (props) => {
  const isLoggedIn = cookie.parse(document.cookie).loggedIn === "true";
  return (
  <Container>
    {isLoggedIn && (<h3 className="username">Logged in as: {props.user.username}</h3>)}
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Hours</TableCell>
            </TableRow>
        </TableHead>
        {props.listing.map((list, idx) => (
          <TableBody key={idx}>
            <TableRow>
              <TableCell>
                <Link style={{ fontSize: 20, color: "black" }} to={`/details/${list.id}`}>
                  {list["name"]}{" "}
                </Link>
              </TableCell>
              <TableCell>{list["Address"]}</TableCell>
              <TableCell>{list["description"]}</TableCell>
              <TableCell>{list["hours"]}</TableCell>
              {isLoggedIn && (
                <TableCell>
                  <DeleteIcon
                    onClick={() => props.removeListing(idx)}
                    className="icon text-red"
                  />
                </TableCell>
              )}
            </TableRow>
          </TableBody>
        ))}
    </Table>
  </Container>
  )
}

export default Listings