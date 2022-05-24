// import { BrowserRouter, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Question } from './components/Question';
import { Result } from './components/Result';
import { Start } from './components/Start';
import store from './state/store';

function App() {

  let [answer, setAnswer] = useState(0)
  let [flag, setFlag] = useState(0)
  let [result, setResult] = useState(0)

  const getAnswer = (event) => {
    if (event.target.value === 'yes') {
      if (flag === 0) {
        setAnswer(answer + 1)
        setFlag(flag + 1)
      } else {
        setAnswer(answer)
      }
    } else {
      if (flag !== 0) {
        setAnswer(answer - 1)
        setFlag(flag - 1)
      } else {
        setAnswer(answer)
      }
    }
  }

  const getReset = () => {
    setAnswer(0)
    setFlag(0)
    setResult(result + answer)
  }

  const getResult = () => {
    setAnswer(0)
    setFlag(0)
    setResult(0)
  }

  let questionArray = store.question.map((elem) =>
    <Question
      questionNumber={elem.questionNumber}
      question={elem.question}
      var1={elem.var1}
      var2={elem.var2}
      var3={elem.var3}
      var4={elem.var4}
      value1={elem.value1}
      value2={elem.value2}
      value3={elem.value3}
      value4={elem.value4}
      path= {elem.path}
      link= {elem.link}
      next= {elem.next}
      q= {elem.q}
      getReset= {getReset}
      getAnswer= {getAnswer}
    />
  )


  return (
    // <BrowserRouter>
      <div className="App">
        <div className='container'>
          <h1 className='title'>планеты Солнечной системы</h1>
          {/* <Route exact path='/'></Route> */}
          <Start />
          {questionArray}
          {/* <Route exact path='/result'></Route> */}
          <Result getResult={getResult} result={result} />
        </div>
      </div>
    // {/* </BrowserRouter> */}

  );
}

export default App;
