import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddCategories from "./Categories/AddCategories";
import "./App.css";

export default function Navbar({ setSearchTerm }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddWidget = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleWidgetAdded = () => {
    closePopup();
  };
  const refreshfunc = ()=>{
    window.location.reload();
  }

  return (
    <div className="navmdiv">
      <h1>Dashboard</h1>
      <div className="navf">
        <div className="inp">
          <SearchIcon style={{ fontSize: "1.7rem", color: "blue" }} />
          <input
            type="text"
            className="input"
            placeholder="search..."
            onChange={handleSearchChange}
          />
        </div>
        <button className="btn" onClick={handleAddWidget}>
          + Add Widget
        </button>
        <div className="icon2">
          <RefreshIcon className="reficon" onClick = {refreshfunc} />
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>
              ✖
            </button>
            <AddCategories onWidgetAdded={handleWidgetAdded}/>
          </div>
        </div>
      )}
    </div>
  );
}
