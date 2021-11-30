import React from "react";
import {mainTopics} from "../../helpers/constants";
import DashboardCard from "./Cards/DashboardCard";
import {styled} from "@mui/material";

const GlobalContainer = styled('div')`
  box-sizing: border-box;
  overflow: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  @media (max-width: 80rem) {
    grid-template-columns: repeat(3, 1fr);
  };
  @media (max-width: 50rem) {
    grid-template-columns: 1fr 1fr;
  };
  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
  };
`;
const TopicsPanel = () => {
    return (
        <GlobalContainer>
            {mainTopics.map(topic => (
                <DashboardCard key={topic.id} topic={topic}/>
            ))}
        </GlobalContainer>
    )
}

export default TopicsPanel;
