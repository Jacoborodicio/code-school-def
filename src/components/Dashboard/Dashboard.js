/** @jsx jsx **/
import React, {useEffect, useRef, useState} from 'react';
import {jsx} from "@emotion/react";
import {Container} from "./dashboard-styles";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import DashboardCard from "./Cards/DashboardCard";

const Dashboard = ({width, height}) => {
    const containerProps = {
        dimensions: {height, width},
    }
    return (
        <Container {...containerProps}>
            <DashboardCard />
        </Container>
    )
}

export default Dashboard;
