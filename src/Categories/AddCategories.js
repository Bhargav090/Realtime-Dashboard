import React, { useState } from "react";
import "../App.css";

export default function AddCategories({ onWidgetAdded }) {
  const [categoryId, setCategoryId] = useState("");
  const [widgetName, setWidgetName] = useState("");
  const [widgetDescription, setWidgetDescription] = useState("");

  const AddWidget = () => {
    if (!categoryId || !widgetName || !widgetDescription) {
      alert("Please fill out all fields before adding the widget.");
      return;
    }

    const widgetData = {
      name: widgetName,
      description: widgetDescription,
      categoryId: parseInt(categoryId, 10),
    };

    fetch(`http://localhost:3001/widgets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(widgetData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add widget");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Widget added:", data);
        setWidgetName("");
        setWidgetDescription("");
        onWidgetAdded();
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding widget:", error);
      });
  };

  return (
    <div className="addcatcont">
      <h2>Add widget</h2>
      <select defaultValue="" onChange={(e) => setCategoryId(e.target.value)}>
        <option value="" disabled>
          Select a Category
        </option>
        <option value="1">Project Management</option>
        <option value="2">Marketing Insights</option>
        <option value="3">Customer Support</option>
        <option value="4">Sales Dashboard</option>
      </select>
      <label>Widget Name:</label>
      <input
        type="text"
        placeholder="Widget..."
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
      />
      <label>Widget Description:</label>
      <input
        type="text"
        placeholder="Description..."
        value={widgetDescription}
        onChange={(e) => setWidgetDescription(e.target.value)}
      />
      <button onClick={AddWidget}>Add</button>
    </div>
  );
}
