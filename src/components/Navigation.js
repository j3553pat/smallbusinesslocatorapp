import * as React from 'react';
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom'


export default function Navigation() {
    return (
        <AppBar position="relative" sx={{backgroundColor: "green"}}>
          <Toolbar>
            <Typography variant="h6" style={{flexGrow: "1", color: "white" }}>
              Austin Small Business Locations
            </Typography>
            <ul className="list">
              <li className="list-item">
                <Link to="/listings"style={{ textDecoration: "none", color: "white" }}>Listings</Link>
              </li>
              <li className="list-item">
                <Link to="/login" style={{ textDecoration: "none", color: "white" }}>Login</Link>
              </li>
              <li className="nav-list-item">
                <Link
                  to="/newListing"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Add
                </Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
    );
  };
  