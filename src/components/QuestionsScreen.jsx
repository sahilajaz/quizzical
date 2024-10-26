import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Loader from './Loader'
import QuestionCard from './QuestionCard'
import { nanoid } from 'nanoid'

const QuestionsScreen = () => {
  const [questiondata, setQuestionData] = useState([])
  const [selectedOption, setSelectedOption] = useState([])
  const [quizSubmit, setQuizSubmit] = useState(false)
  const [countCorrect, setCountCorrect] = useState(0)
  const [resetQuiz, setResetQuiz] = useState(false) 
  const [loading, setLoading] = useState(true) 
  const { categoryNumber } = useParams()

  const baseUrl = `https://opentdb.com/api.php?amount=10&category=${categoryNumber}`
  const anyCategoryBaseUrl = 'https://opentdb.com/api.php?amount=10'

  const fetchQuestions = async () => {
    setLoading(true) 
    try {
      const res = categoryNumber == 0 
        ? await axios.get(anyCategoryBaseUrl)
        : await axios.get(baseUrl)

      const formattedQuestions = res.data.results.map(q => {
        q.questionOptions = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5)
        q.id = nanoid()
        return q
      })
      setQuestionData(formattedQuestions)
      setSelectedOption([]) 
      setQuizSubmit(false)
      setResetQuiz(prev => !prev) 
    } catch (error) {
      console.error('Error fetching questions:', error)
    } finally {
      setLoading(false)
    }
  }

  const OptionSelection = (questionId, option) => {
    setSelectedOption(prevOption => {
      const newOption = prevOption.filter(e => e.questionId !== questionId)
      newOption.push({ questionId, option }) 
      return newOption
    })
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  useEffect(() => {
    if (quizSubmit) {
      let count = 0;
      selectedOption.forEach(option => {
        const correctOption = questiondata.find(e => 
          e.id === option.questionId && e.correct_answer === option.option
        );
        if (correctOption) count++;
      });
      setCountCorrect(count);
    }
  }, [quizSubmit, questiondata, selectedOption]);
  

  const loadingScreen = "bg-[#f5f7fb] w-[300px] sm:w-[600px] flex flex-col items-center justify-center sm:h-[500px] h-[300px] mt-2"
  const questionScreen = "bg-[#f5f7fb] w-[330px] sm:w-[700px] h-auto mt-2 relative"

  return (
    <div className={loading ? loadingScreen : questionScreen}>
      <div className='py-1 px-10 relative'>
        {loading ? (
          <Loader />
        ) : (
          questiondata.map((question, index) => (
            <QuestionCard 
              key={index} 
              data={question}
              OptionSelection={OptionSelection}
              quizSubmit={quizSubmit}
              selectedOption={selectedOption}  
              resetQuiz={resetQuiz}
            />
          ))
        )}
      </div>
      <div className='w-full py-4 flex justify-center relative'>
        {
          !loading && questiondata.length > 0 && questiondata.length === selectedOption.length && !quizSubmit && (
            <button  
              className="bg-[#4D5B9E] text-white px-5 py-1 rounded-xl font-bold tex-sm" 
              onClick={() => setQuizSubmit(true)}
            >
              Check Answers
            </button>
          )
        }
        {
          !loading && questiondata.length > 0 && questiondata.length !== selectedOption.length && !quizSubmit && (
            <button  
              className="bg-[#4D5B9E] text-white px-5 py-1 rounded-xl font-bold tex-sm" 
              onClick={() => fetchQuestions()}
            >
              New Quiz
            </button>
          )
        }
        {
          quizSubmit && !loading && (
            <div className='flex gap-3 py-5'>
            <h6>You scored {countCorrect}/{questiondata.length}</h6>
            <button  
            className="bg-[#4D5B9E] text-white px-5 py-1 rounded-xl font-bold tex-sm" 
            onClick={() => fetchQuestions()}
            >
              New Quiz
            </button>
           </div>
          )
        }
      </div>
    </div>
  )
}

export default QuestionsScreen
