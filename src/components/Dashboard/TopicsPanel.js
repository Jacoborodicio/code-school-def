import React from "react";
import {mainTopics} from "../../helpers/constants";
import DashboardCard from "./Cards/DashboardCard";

const TopicsPanel = () => {
    return (
        <>
            {mainTopics.map(topic => (
                <DashboardCard key={topic.id} topic={topic}/>
            ))}
        </>
    )
}

export default TopicsPanel;
