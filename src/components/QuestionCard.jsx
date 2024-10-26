import { useEffect, useState } from 'react';
import he from 'he';

const QuestionCard = ({ data, OptionSelection, selectedOption, quizSubmit }) => {
  const [clicked, setClicked] = useState(null)

  const options = data.questionOptions.map((option) => {
    const isSelected = selectedOption.find((e) => (
      e.questionId === data.id && e.option === option
    ))

    const correctOption = quizSubmit && data.correct_answer === option
    const incorrectOption = quizSubmit && isSelected && data.correct_answer !== isSelected.option

    
    let bgColor = ''
    if (isSelected && !quizSubmit) {
      bgColor = "#D6DBF5"
    } else if (quizSubmit && correctOption) {
      bgColor = "#94D7A2"
    } else if (quizSubmit && incorrectOption) {
      bgColor = "#F8BCBC"
    }

    return { option, bgColor }
  })

  useEffect(() => {
    setClicked(null)
  }, [quizSubmit])
 
   console.log(options)
  return (
    <div className="container py-2 border-b-[1px] border-[#DBDEF0]">
      <p className="text-xl font-semibold mb-2">{he.decode(data.question)}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((optionData, i) => (
          <button
            key={i}
            style={{ backgroundColor: clicked === i && !quizSubmit ? '#d3d3d3' : optionData.bgColor }}
            className={`border border-[#293264] w-auto min-w-[50px] h-[30px] rounded-lg mb-3 text-[0.8rem] px-2 py-1 transition-colors duration-200`}
            onClick={() => {
              setClicked(i);
              OptionSelection(data.id, optionData.option);
            }}
          >
            {he.decode(optionData.option)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
