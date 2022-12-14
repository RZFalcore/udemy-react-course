import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Summary/components/layouts/Layout";
import Favorites from "../components/Summary/pages/Favorites";
import Meetups from "../components/Summary/pages/Meetups";
import NewMeetup from "../components/Summary/pages/NewMeetup";

import "./SummaryApp.css";

const SummaryApp = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Meetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
};

export default SummaryApp;
