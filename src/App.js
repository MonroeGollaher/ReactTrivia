import { useEffect, useState } from "react";
import { getQuestions } from "./services/triviaService";
import Card from "./components/Card/";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  // const [questionData, setQuestionData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [search, setSearch] = useState("");
  // const [ticker, setTicker] = useState(0);

  // const initUrl = "https://opentdb.com/api.php?amount=10";

  // useEffect(() => {
  //   async function fetchData() {
  //     let res = await getQuestions(initUrl);
  //     await loadQuestions(res.results);
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, []);

  // const loadQuestions = async (data) => {
  //   let _questionData = data;
  //   console.log(data);
  //   setQuestionData(_questionData);
  // };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
