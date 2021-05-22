import React from "react";
import Card from "../Card";
import { useEffect, useState } from "react";
import { getQuestions } from "../../services/triviaService";
import { Wrapper } from "./styles";

const Home = () => {
  const [questionData, setQuestionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const initUrl = "https://opentdb.com/api.php?amount=10";

  useEffect(() => {
    async function fetchData() {
      let res = await getQuestions(initUrl);
      await loadQuestions(res.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadQuestions = async (data) => {
    let _questionData = data;
    console.log(data);
    setQuestionData(_questionData);
  };

  return (
    <Wrapper>
      {questionData.map((question, index) => {
        return (
          <Card
            key={index}
            question={question.question}
            correct_answer={question.correct_answer}
          />
        );
      })}
    </Wrapper>
  );
};
export default Home;
