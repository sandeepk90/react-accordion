import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions,setQuestion]=useState(data);

  return (
    <main>
      <div className='container'>
        <div>
        <h3>questions and answers about login</h3>
        <div className='underline'></div>
        </div>
    <section className='info'>
      {questions.map((question)=>{
        return <SingleQuestion key='question.id' {...question}/>
        
      })}
    </section>
      </div>
      </main>
  );
}

export default App;
