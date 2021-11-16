/** @jsx jsx **/
import React from 'react';
import {styled} from "@mui/material";
import {jsx} from "@emotion/react";

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

const DashboardCard = ({type, title, subtitle, description, preImage}) => {
    return (
        <CardContainer>
            hola lola jeje
        </CardContainer>
    )
}

export default DashboardCard;
