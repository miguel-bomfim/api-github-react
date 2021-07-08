import React, { useState } from "react";
import ShowUser from "../ShowUser/ShowUser";
import SearchUser from "../SearchUser";

import { makeStyles, Paper, Tabs, Tab } from "@material-ui/core";

//Tabs parameters (@material-ui)
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Dashboard({ onSearch, user }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <SearchUser next={nextStep} onSearch={onSearch} />,
    <ShowUser user={user} />,
  ];

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setCurrentStep(newValue);
  };

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <>
      <Paper className={classes.root}>
        <Tabs
          value={currentStep}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Busca" required />
          <Tab label="Info" />
        </Tabs>
      </Paper>
      {steps[currentStep]}
    </>
  );
}
