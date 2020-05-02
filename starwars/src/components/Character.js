// Write your Character component here
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
} from "reactstrap";
import axios from "axios";

export default function Character({ character }) {
  const [home, setHome] = useState("");
  const [species, setSpecies] = useState("");

  console.log(character);
  const homeURL = character.homeworld;
  const speciesURL = character.species;

  useEffect(() => {
    axios
      .get(speciesURL)
      .then((res) => {
        setSpecies(res.data.name);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(homeURL)
      .then((res) => {
        setHome(res.data.name);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="character-card-container">
      <Card>
        <CardHeader>{character.name}</CardHeader>
        <CardBody>
          <CardText>
            Birth Year: {character.birth_year}
            <br></br>
            Eye Color: {character.eye_color}
            <br></br>
            Height: {character.height}
            <br></br>
            Homeworld: {home}<br></br>
            Species: {species}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
