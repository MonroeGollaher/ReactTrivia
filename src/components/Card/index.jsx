import React from "react";
import "./styles";
import { CardContainer } from "./styles";

const Card = ({ question, correct_answer }) => (
  <CardContainer>
    <p>Question: {question}</p>
  </CardContainer>
);
export default Card;
