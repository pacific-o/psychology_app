import React , {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Loader from './Loader';
import axios from 'axios';
import {API} from './Api';





const TestsList = (props) => {

      const [loader, setLoader] = useState(false);
      const [data, setQustionsData] = useState([]);
      const [answersArray, setAnswer] = useState([]);
      const [index, setActiveIndex] = useState(1)
      let { id } = useParams();




  useEffect(() => {
     setLoader(true);
    axios.get(`${API}/api/assessments/${id}`)
    .then(response => {
      console.log(response);
      setLoader(false);
      setQustionsData(response.data.data.questions);
      let ansArr = [];
      for (var i = 0; i < response.data.data.questions.length; i++) {
        ansArr.push("?");
      }
      setAnswer(ansArr);
      setActiveCard(index);
      console.log(answersArray);
    })
    .catch(err => console.log(err))
  },[])

 
  const setActiveCard = (index) => {
   let card = document.querySelectorAll('.card');
    card[index - 1].classList.add("active")
  }


  const nextCard = () => {

    if (index === data.length) {
      return
    } else {

    let newIndex = index + 1;
    setActiveIndex(newIndex);

    let activeCard = document.querySelector('.active');
    activeCard.classList.remove("active");
    setActiveCard(newIndex);

    let cardsEl = document.querySelector('.cards');
    let percent = "-" + ((newIndex - 1) * 100) + "%";
    cardsEl.style.transform = `translateX(${percent})`;
    }

  }


  const preCard = () => {
   if (index === 1) {
    return
   } else {

    let newIndex = index - 1;
    setActiveIndex(newIndex);

    let activeCard = document.querySelector('.active');
    activeCard.classList.remove("active");
    setActiveCard(newIndex);

    let cardsEl = document.querySelector('.cards');
    let percent = "-" + ((newIndex - 1 ) * 100) + "%";
    cardsEl.style.transform = `translateX(${percent})`;
   }

  }


  const answerHandle = (e) => {
    let newAnswers = answersArray;
    console.log(e.target.parentNode.parentNode.parentNode.getAttribute('questionNum'), e.target.value);
    newAnswers[(e.target.parentNode.parentNode.parentNode.getAttribute('questionNum') - 1)] = e.target.value;
    console.log(newAnswers);
    nextCard();
  }


  const questionCard = data.map(item => (
     <div className="card" questionNum={item.order}>
        <div className="question-container"><p className="question">{item.text}</p></div>
        <div className="answer p-h" style={{gridTemplateColumns: `repeat(${item.answers.length}, 1fr)`}}>
            {item.answers.map(answer => (
              <div>
                <input type="radio" name="answer" value={answer.value} onClick={answerHandle}/>
                <label for={answer.text}>{answer.text}</label>
             </div>
            ))}
        </div>
     </div>
   
  	))



  return ( loader ? <Loader /> :
    <div className="cards-container">
      <div className="cards" style={{gridTemplateColumns: `repeat(${data.length}, 1fr)`}}>
         {questionCard}
      </div>
      <div className="card-navigation mt-h-2">
         <span><i className="fas fa-arrow-left" aria-hidden="true" onClick={preCard}></i></span>
         <span>{index}</span>
         <span>/</span>
         <span>{data.length}</span>
         <span><i className="fas fa-arrow-right" aria-hidden="true" onClick={nextCard}></i></span>       
         </div>
    </div>
  )
}

export default TestsList;