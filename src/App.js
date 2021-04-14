import './App.css';
import { useEffect, useState } from "react";
import { getQuestions } from "./services/triviaService";
import Card from "./components/Card/Card";

function App() {

  const [questionData, setQuestionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const initUrl = 'https://opentdb.com/api.php?amount=10';

  useEffect(() => {
    async function fetchData(){
      let res = await getQuestions(initUrl)
      await loadQuestions(res.results)
      setLoading(false)
    }
    fetchData()
  }, [])

  const loadQuestions = async (data) => {
    let _questionData = data
    console.log(data);
    setQuestionData(_questionData)
  }

  return (
    <div className="App">
      { questionData.map((question, index) => {
        return (
          <Card
            key={index }
            question={ question.question }
            correct_answer={ question.correct_answer }
          /> 
        )
        })
      }
    </div>
  );
}

export default App;
