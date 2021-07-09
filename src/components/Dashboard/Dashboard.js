import React, { useState } from "react";
import ShowUser from "../ShowUser/ShowUser";
import SearchUser from "../SearchUser";

import { Paper, Tabs, Tab } from "@material-ui/core";

const Dashboard = ({ onSearch, user }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [disable, setDisable] = useState(true);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    setDisable(false);
  };

  const steps = [
    <SearchUser next={nextStep} onSearch={onSearch} />,
    <ShowUser user={user} />,
  ];

  return (
    <>
      <Paper>
        <Tabs
          value={currentStep}
          onChange={(event, newValue) => setCurrentStep(newValue)}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Busca" required />
          <Tab label="Info" disabled={disable} />
        </Tabs>
      </Paper>
      {steps[currentStep]}
    </>
  );
};

export default Dashboard;
