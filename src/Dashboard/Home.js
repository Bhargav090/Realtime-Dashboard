import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ProjectManagement from "../Categories/ProjectManagement";
import MarketingInsights from "../Categories/MarketingInsights";
import CustomerSupport from "../Categories/CustomerSupport";
import SalesDashboard from "../Categories/SalesDashboard";

export default function Home() {
  const [widgetsData, setWidgetsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWidgets, setFilteredWidgets] = useState([]);



  // to show the for the search results fetxhing here------------------------------
  useEffect(() => {
    fetch("http://localhost:3001/widgets")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setWidgetsData(data);
        setFilteredWidgets(data);
      })
      .catch((error) => console.error("Error fetching widgets:", error));
  }, []);

  useEffect(() => {
    console.log("Widgets Data:", widgetsData);
    console.log("Search Term:", searchTerm);

    if (searchTerm.trim() === "") {
      setFilteredWidgets([]);
    } else {
      const filtered = widgetsData.filter((widget) =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log("Filtered Widgets:", filtered);
      setFilteredWidgets(filtered);
    }
  }, [searchTerm, widgetsData]);

  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} />
      {searchTerm === "" ? (
        <div>
          <ProjectManagement />
          <MarketingInsights />
          <CustomerSupport />
          <SalesDashboard />
        </div>
      ) : (
        <div className="filteritems">
          {filteredWidgets.length > 0 ? (
            filteredWidgets.map((widget) => (
              <div key={widget.id}>
                <h2>{widget.name}</h2>
                <p>{widget.description}</p>
                <br></br>
              </div>
            ))
          ) : (
            <p>No widgets found</p>
          )}
        </div>
      )}
    </div>
  );
}
