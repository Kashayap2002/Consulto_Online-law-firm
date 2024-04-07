import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  margin-top: 20px;
`;

const CasesSection = styled.div`
  flex-grow: 1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AddCase = styled.div`
  margin-top: 20px;
  text-align: center;

  input {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

function Profile() {
  const [value, setValue] = useState({
    email: "",
    username: "",
    birthday: "",
    gender: "",
    title: "",
    name: "",
    phoneNumber: "",
  });

  useEffect(() => {
    handleProfile();
  }, []);

  const handleSubmit = () => {
    console.log(value);

    axios
      .post("/api/updateProfile", value)
      .then((response) => {
        const { status, message } = response.data;
        console.log(response);
        if (status === 2) {
          toast.success(`${message} 😄`);
        } else if (status === 1) {
          toast(`${message} 🙂`, { style: { backgroundColor: "yellow" } });
        } else {
          toast.error(`${message} 😅`);
        }
        // if(changedRows===1)
      })
      .catch((e) => {
        console.log(e);
        toast.error(`Some error while updating profile`);
      });
  };

  const handleChange = (e) => {
    const flag = { ...value };
    flag[e.target.name] = e.target.value;
    setValue(flag);
  };

  const handleProfile = () => {
    axios
      .get("/api/me")
      .then((response) => {
        console.log(response.data.data);
        setValue(response.data.data);
      })
      .catch((e) => {
        console.log(e);
        toast.error(`Some issue while fetching the data`);
      });
  };

  const navigate = useNavigate();
  console.log(value);

  const [cases, setCases] = useState([]);
  const [newCase, setNewCase] = useState("");

  const handleAddCase = () => {
    if (newCase.trim() !== "") {
      setCases([...cases, newCase]);
      setNewCase("");
    }
  };

  return (
    <>
      <Container>
        {/* Grid has 12 boxes */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="User Name"
              name="username"
              onChange={handleChange}
              className="inputBox"
              fullWidth={true}
              value={value.username}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              disabled={true}
              label="Email"
              name="email"
              onChange={handleChange}
              className="inputBox"
              fullWidth={true}
              value={value.email}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Birthday"
              name="birthday"
              onChange={handleChange}
              className="inputBox"
              fullWidth={true}
              value={value.birthday}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Gender"
              name="gender"
              onChange={handleChange}
              className="inputBox"
              fullWidth={true}
              value={value.gender}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Title"
              name="title"
              onChange={handleChange}
              className="inputBox"
              fullWidth={true}
              value={value.title}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Full Name"
              name="name"
              onChange={handleChange}
              className="inputBox"
              fullWidth={true}
              value={value.name}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              onChange={handleChange}
              className="inputBox"
              fullWidth={true}
              value={value.phoneNumber}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              style={{ margin: "15px" }}
              variant="contained"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              style={{ margin: "15px" }}
              variant="contained"
              onClick={() => navigate("/")}
            >
              Go to Home
            </Button>
          </Grid>
        </Grid>
      </Container>

      <CasesSection>
        <h2>My Cases</h2>
        <ul>
          {cases.map((caseItem, index) => (
            <li key={index}>{caseItem}</li>
          ))}
        </ul>
        <AddCase>
          <input
            type="text"
            placeholder="Enter new case"
            value={newCase}
            onChange={(e) => setNewCase(e.target.value)}
          />
          <Button
            style={{ margin: "15px" }}
            variant="contained"
            onClick={handleAddCase}
          >
            Add Case
          </Button>
        </AddCase>
      </CasesSection>
    </>
  );
}

export default Profile;
