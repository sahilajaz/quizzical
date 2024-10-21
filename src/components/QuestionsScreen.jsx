import {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axois from "axios";

const QuestionsScreen = () => {
   const[questions , setQuestions] = useState()
   const { categoryNumber } = useParams(); 

   const baseUrl = `https://opentdb.com/api.php?amount=10&category=${categoryNumber}`;  
   const anyCateoryBaseUrl = 'https://opentdb.com/api.php?amount=10'


    useEffect(() => {
       categoryNumber == 0 ? axois.get(anyCateoryBaseUrl).then((res) => setQuestions(res.data.results)) 
       : axois.get(baseUrl).then((res) => setQuestions(res.data.results))
    } , []) 
    
    
    
  return (
    <div>
      
    </div>
  )
}

export default QuestionsScreen
