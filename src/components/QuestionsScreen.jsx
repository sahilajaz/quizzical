import {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Loader from './Loader';
import QuestionCard from './QuestionCard';
import {nanoid} from 'nanoid'


const QuestionsScreen = () => {
   const[questiondata , setQuestionData] = useState()
   const { categoryNumber } = useParams() 
  
  const baseUrl = `https://opentdb.com/api.php?amount=10&category=${categoryNumber}`  
   const anyCateoryBaseUrl = 'https://opentdb.com/api.php?amount=10'

   const fetchQuestions = async () => {
    try {
      const res = categoryNumber == 0 
        ? await axios.get(anyCateoryBaseUrl)
        : await axios.get(baseUrl)
        
        const formattedQuestions = res.data.results.map(q => {
          q.questionOptions = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);
          q.id = nanoid();
          return q
        })
        
  
      setQuestionData(formattedQuestions)
    } catch (error) {
      console.error('Error fetching questions:', error)
    }
  };
  

    useEffect(() => {
       fetchQuestions()
    } , []) 

    
    
    
  
   const loadingScreen = "bg-[#f5f7fb] w-[300px] sm:w-[600px] flex flex-col items-center justify-center sm:h-[500px] h-[300px] mt-2"
   const questionScreen = "bg-[#f5f7fb] w-[330px] sm:w-[700px] h-auto mt-2 relative"
    
  
   return (
    <div className={questiondata && questiondata.length > 0 ? questionScreen : loadingScreen}>
      <div className='py-1 px-10 relative'>
        {questiondata && questiondata.length > 0 && (
          <img
            src="../src/assets/yellow.png"
            className="h-9 sm:h-16 absolute left-[290px] sm:left[420px]  md:left-[626px] top-[0.5px]"
          />
        )}
  
        {questiondata && questiondata.length > 0 ? (
          questiondata.map((question, index) => (
            <QuestionCard 
              key={index} 
              data={question}  
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <div className='w-full py-4 flex justify-center relative'>
        {questiondata && questiondata.length > 0 && (
          <button  
            className="bg-[#4D5B9E] text-white px-5 py-1 rounded-xl font-bold tex-sm" 
            onClick={fetchQuestions}
          >
            New Quiz
          </button>
        )}
      </div>
    </div>
  );
  

}

export default QuestionsScreen