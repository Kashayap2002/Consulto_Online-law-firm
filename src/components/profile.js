// ProfilePage.js
import React, { useState } from "react";
import "./profile.css";

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    username: "JohnDoe",
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
  });

  const [cases, setCases] = useState([]);
  const [newCase, setNewCase] = useState("");

  const handleAddCase = () => {
    if (newCase.trim() !== "") {
      setCases([...cases, newCase]);
      setNewCase("");
    }
  };

  return (
    <div className="content-container">
      {/* User Profile Section */}
      <div className="profile-details">
        <h2>User Profile</h2>
        <p>
          <strong>Username:</strong> {userData.username}
        </p>
        <p>
          <strong>Name:</strong> {userData.name}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {userData.phoneNumber}
        </p>
      </div>

      {/* My Cases Section */}
      <div>
        <h2>My Cases</h2>
        <ul>
          {cases.map((caseItem, index) => (
            <li key={index}>{caseItem}</li>
          ))}
        </ul>
        <div className="add-case">
          <input
            type="text"
            placeholder="Enter new case"
            value={newCase}
            onChange={(e) => setNewCase(e.target.value)}
          />
          <button onClick={handleAddCase}>Add Case</button>
        </div>
      </div>
    </div>
  );
}
