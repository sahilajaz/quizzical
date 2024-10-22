import React from 'react';
import he from 'he';

const QuestionCard = ({ question, correctAns }) => {
  const { correct_answer, incorrect_answers } = question;

  const allAnswers = [correct_answer, ...incorrect_answers];

  return (
    <div className='container py-2'>
      <div>
        <p className="text-lg mb-2">{he.decode(question.question)}</p>
        <div className="btn flex flex-wrap gap-2">
          {allAnswers.map((answer, index) => (
            <button 
              key={index} 
              className='border border-[#293264] w-auto  min-w-[50px] h-[30px] rounded-lg mb-3 text-[0.8rem] px-2 py-1 hover:bg-[#d3d3d3] transition-colors duration-200'
            >
              {he.decode(answer)}
            </button>
          ))}
          <div className='w-[700px]  border-[0.79px] border-[#DBDEF0]'/>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
