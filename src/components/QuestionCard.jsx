import { useEffect, useState } from 'react'
import he from 'he'

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
      bgColor = "bg-[#D6DBF5]"
    } else if (quizSubmit && correctOption) {
      bgColor = "bg-[#94D7A2]"
    } else if (quizSubmit && incorrectOption) {
      bgColor = "bg-[#F8BCBC]"
    }

    return { option, bgColor }
  })

  const difficultyColor = data.difficulty === "easy"
    ? "bg-green-500"
    : data.difficulty === "medium"
    ? "bg-yellow-500"
    : "bg-red-500"

  useEffect(() => {
    setClicked(null)
  }, [quizSubmit])

  return (
    <div className="container py-2 border-b-[1px] border-[#DBDEF0]">
      <p className="text-sm sm:text-[1.1rem] leading-6 text-justify font-medium mb-2 ">{he.decode(data.question)}</p>
      <div className='flex justify-between items-center'>
        <div className="flex flex-wrap gap-2">
          {options.map((optionData, i) => (
            <button
              key={i}
              className={`border border-[#293264] w-auto min-w-[50px] h-[30px] rounded-lg mb-3 text-[0.8rem] px-2 py-1 transition-colors duration-200 ${clicked === i && !quizSubmit ? 'bg-gray-300' : optionData.bgColor}`}
              onClick={() => {
                setClicked(i)
                OptionSelection(data.id, optionData.option)
              }}
            >
              {he.decode(optionData.option)}
            </button>
          ))}
        </div>
        <div className="question-difficulty hidden sm:flex items-center gap-2">
          <span className={`h-3 w-3 rounded-full ${difficultyColor}`}></span>
          <span className='text-[9px]'>{data.difficulty}</span>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
