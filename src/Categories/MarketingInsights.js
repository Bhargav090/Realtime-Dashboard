import React, { useEffect, useState } from "react";
import "../App.css";
import CloseIcon from "@mui/icons-material/Close";

export default function MarketingInsights() {
  const [categories, setCategories] = useState([]);
  const [widgets, setWidgets] = useState([]);

  // fetching the data from the db.json (should run the json server locally then only it fetchs..)
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/categories");
      const data = await response.json();
      setCategories(data);
    } catch (e) {
      console.log(e);
    }
    try {
      const response = await fetch("http://localhost:3001/widgets");
      const data = await response.json();
      setWidgets(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (categories.length === 0 || widgets.length === 0) {
    return (
      <div>
        <center>
          No widgets to show please add by clicking on add widget button
        </center>
      </div>
    );
  }

  //to find the Marketing Insights Dashboard Dashboard category------
  const MarketingInsightsCategory = categories.find(
    (category) => category.name === "Marketing Insights Dashboard"
  );

  // to filter widgets that belong to the Marketing Insights Dashboard category------
  const MarketingInsightstWidgets = widgets.filter(
    (widget) => widget.categoryId === MarketingInsightsCategory.id
  );

  // Function to delete a widget---
  const deleteWidget = (widgetId) => {
    fetch(`http://localhost:3001/widgets/${widgetId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete widget");
        }
        // Update the local state-------
        setWidgets((prevWidgets) =>
          prevWidgets.filter((widget) => widget.id !== widgetId)
        );
      })
      .catch((error) => console.error("Error deleting widget:", error));
  };

  return (
    <div>
      <div className="pdiv">
        <h2>{MarketingInsightsCategory.name}</h2>
        <div className="pcdiv">
          {MarketingInsightstWidgets.map((widget, index) => (
            <div key={index} className="widget-card">
              <div className="h-top">
                <h3>{widget.name}</h3>
                <CloseIcon
                  className="closeicon"
                  onClick={() => deleteWidget(widget.id)}
                />
              </div>
              <br />
              <p>{widget.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
