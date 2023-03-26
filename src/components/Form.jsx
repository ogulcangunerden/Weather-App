import axios from "axios";
import React, { useState } from "react";
import { Input, Button } from "@mantine/core";

const Form = ({ setInfo, info }) => {
  const [city, setCity] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const apiKey = "84d2a6de8de6b572246d79f878c368f7";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;
    axios.get(apiURL).then((res) => setInfo(res.data));
  };
  console.log(info);
  return (
    <form onSubmit={handleSubmit}>
      <h1>Hava Durumu</h1>
      <Input
        onChange={handleChange}
        variant="filled"
        placeholder="Enter City Name"
        radius="lg"
        size="md"
      />

      <Button
        className="button3"
        variant="light"
        color="cyan"
        radius="lg"
        size="md"
        onClick={handleSubmit}
      >
        Search
      </Button>
    </form>
  );
};

export default Form;
