// Write your Character component here
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardText } from "reactstrap";
import axios from "axios";

export default function Character({ character }) {
  const [home, setHome] = useState("");
  const [species, setSpecies] = useState("");

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
        <CardHeader>
          {character.name}
          <br></br> Birth Year: {character.birth_year}
          <br></br>
        </CardHeader>

        <CardBody>
          <CardText>
            <div className="physcal-attributes">
              <h4>Physical Attributes</h4>
              Eye Color: {character.eye_color}
              <br></br>
              Hair Color: {character.hair_color}
              <br></br>
              Height: {character.height}
              <br></br>
              Gender: {character.gender}
              <br></br>
            </div>
            Skin Color: {character.skin_color}
            <br></br>
            <div className="demographics">
              <h4>Demographics</h4>
              Homeworld: {home}
              <br></br>
              Species: {species}
            </div>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
