/** @jsx jsx **/
import React from 'react';
import {styled} from "@mui/material";
import {jsx} from "@emotion/react";
import {NavLink} from "react-router-dom";

const CardContainer = styled('div')`
  height: 100%;
  width: 100%;
  padding: .5rem;
  border-radius: .5rem;
  color: burlywood;
  background-color: rgba(0,0,0, .25);
  //  0 0 2px 1px hsl(217deg 18% 35% / 100%),
  box-shadow: 0 0 7px 4px hsl(217deg 18% 35% / 20%);

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
