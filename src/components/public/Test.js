import React , {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";



const TestsList = (props) => {

      let { id } = useParams();


  const [data, setQustionsData] = useState([])
  const [index, setActiveIndex] = useState(1)

  useEffect(() => {
     fetch(`http://37.152.178.76:54000/api/assessments/${id}`)
     .then(res => res.json())
     .then(data => {
      console.log(data);
      console.log(data.data.questions);
      setQustionsData(data.data.questions);
      setActiveCard(index);
  })
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
    console.log(e.target.parentNode.parentNode.parentNode.getAttribute('questionNum'), e.target.value);
    nextCard();
  }


  const questionCard = data.map(item => (
     <div className="card" questionNum={item.id}>
        <p className="question mt-h-2">{item.text}</p>
        <div className="answer p-h mt-h-2" style={{gridTemplateColumns: `repeat(${item.answers.length}, 1fr)`}}>
            {item.answers.map(answer => (
              <div>
                <input type="radio" name="answer" value={answer.value} onClick={answerHandle}/>
                <label for={answer.text}>{answer.text}</label>
             </div>
            ))}
        </div>
     </div>
   
  	))



  return (
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