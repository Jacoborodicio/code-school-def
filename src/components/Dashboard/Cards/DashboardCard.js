/** @jsx jsx **/
import React from 'react';
import {styled} from "@mui/material";
import {jsx} from "@emotion/react";
import {NavLink} from "react-router-dom";

const CardContainer = styled('div')`
  height: 200px;
  width: 400px;
  padding: .5rem;
  border-radius: .5rem;
  background-color: white;
`;

const CardHeader = styled('div')`
  display: flex;
  
`;

const CardContent = styled('div')`
  
`;

const CardFooter = styled('div')`
  display: flex;
`;

const DashboardCard = ({topic}) => {
    const {image, imageDescription, title} = topic;
    return (
        <CardContainer>
            <CardHeader>
                <div>
                    {image ? <img src={image} alt={imageDescription} /> : '' }
                </div>
                <div>
                    <h1>{title}</h1>
                </div>
            </CardHeader>
            <CardFooter>
                <NavLink to={topic.link}>
                    Open
                </NavLink>
            </CardFooter>
        </CardContainer>
    )
}

export default DashboardCard;
