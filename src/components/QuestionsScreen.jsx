import {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Loader from './Loader';
import QuestionCard from './QuestionCard';


const QuestionsScreen = () => {
   const[questions , setQuestions] = useState()
   const { categoryNumber } = useParams() 

   
   const baseUrl = `https://opentdb.com/api.php?amount=10&category=${categoryNumber}`;  
   const anyCateoryBaseUrl = 'https://opentdb.com/api.php?amount=10'

   const fetchQuestions = async () => {
    try {
      const res = categoryNumber == 0 
        ? await axios.get(anyCateoryBaseUrl)
        : await axios.get(baseUrl);
      setQuestions(res.data.results);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  }
   
   
     
    useEffect(() => {
       fetchQuestions()
    } , []) 
    
    
    
  return (
    questions ? (
      questions.map((question, index) => (
        <QuestionCard key={index} question={question} />
      ))
    ) : (
      <Loader />
    )
  )
}

export default QuestionsScreen
