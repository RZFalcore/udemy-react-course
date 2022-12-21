import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Summary/components/layouts/Layout";
import Favorites from "../components/Summary/pages/Favorites";
import Meetups from "../components/Summary/pages/Meetups";
import NewMeetup from "../components/Summary/pages/NewMeetup";

import { FavoritesContextProvider } from "../components/Summary/store/favorites-context";

import "./SummaryApp.css";

const SummaryApp = () => {
  return (
    <FavoritesContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Meetups />} />
          <Route path="/new-meetup" element={<NewMeetup />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </FavoritesContextProvider>
  );
};

export default SummaryApp;
