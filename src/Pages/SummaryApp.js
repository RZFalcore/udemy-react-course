import React from "react";
import { Routes, Route } from "react-router-dom";

import Favorites from "../components/Summary/pages/Favorites";
import Meetups from "../components/Summary/pages/Meetups";
import NewMeetup from "../components/Summary/pages/NewMeetup";

import "./SummaryApp.css";

const SummaryApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Meetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default SummaryApp;
