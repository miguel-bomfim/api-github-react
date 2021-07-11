import React, { useState } from "react";
import ShowUser from "../ShowUser/ShowUser";
import SearchUser from "../SearchUser";

import { Tabs, Tab } from "@material-ui/core";

const Dashboard = () => {
  const [user, setUser] = useState();
  const [currentStep, setCurrentStep] = useState(0);
  const [disable, setDisable] = useState(true);

  const nextStep = (value, enable) => {
    setCurrentStep(currentStep + value);
    setDisable(enable);
  };

  const getUser = (user) => {
    setUser(user);
  };

  const steps = [
    <SearchUser next={nextStep} onSearch={getUser} />,
    <ShowUser user={user} back={nextStep} />,
  ];

  return (
    <>
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
      {steps[currentStep]}
    </>
  );
};

export default Dashboard;
