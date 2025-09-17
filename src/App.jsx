import React, { useState, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import NiceModal from '@ebay/nice-modal-react'

import './App.css'
import NotFoundPage from "./pages/NotFound";
import LoginPage from "./pages/Login";
import Homepage from "./pages/Homepage";

function App() {

  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={10000}
      >
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </SnackbarProvider>
    </>
  );
}

export default App;
