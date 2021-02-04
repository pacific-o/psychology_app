import React , {useEffect, useState} from 'react';


const TestsList = (props) => {

  const [data, setQustionsData] = useState([])

  useEffect(() => {
     fetch("http://37.152.178.76:54000/api/assessments/1")
     .then(res => res.json())
     .then(data => {
      console.log(data);
    console.log(data.data.questions);
    setQustionsData(data.data.questions)
  })
  },[])

  const questionCard = data.map(item => (
     <div className="card">
        <p>{item.text}</p>
        <div className="answer p-h" style={{gridTemplateColumns: `repeat(${item.answers.length}, 1fr)`}}>
         {item.answers.map(answer => (
          <form>
             <label for={answer.text}>{answer.text}</label>
             <input type="radio" name={answer.text} value={answer.text} />
          </form>
          ))}
        </div>
     </div>
   
  	))



  return (
    <div className="cards-container">
      <div className="cards" style={{gridTemplateColumns: `repeat(${data.length}, 1fr)`}}>
         {questionCard}
      </div>
      <div className="card-navigation mt-h-1">
         <span><i class="fas fa-arrow-left" aria-hidden="true"></i></span>
         <span>1</span>
         <span>/</span>
         <span>3</span>
         <span><i class="fas fa-arrow-right" aria-hidden="true"></i></span>       
         </div>
    </div>
  )
}

export default TestsList;