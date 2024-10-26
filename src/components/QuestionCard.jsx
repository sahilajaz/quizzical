import {useState} from 'react';
import he from 'he';


const QuestionCard = ({ data }) => {
  const[clicked , setClicked] = useState(null)

  const optionBtnClicked = (id) => {
    setClicked(id)
  }

  const ccc = (id) => {
      console.log(id)
  }

 

  
  return (
    <div className="container py-2 border-b-[1px] border-[#DBDEF0]">
      <p className="text-xl font-semibold mb-2">{he.decode(data.question)}</p>
      <div className="flex flex-wrap gap-2">
        {data.questionOptions.map((option, i) => (
          <button
            key={i}
            className={`border border-[#293264] w-auto min-w-[50px] h-[30px] rounded-lg mb-3 text-[0.8rem] px-2 py-1 ${clicked === i ? 'bg-[#d3d3d3]' : 'hover:bg-[#d3d3d3]'} transition-colors duration-200`}
            onClick={() => {
              optionBtnClicked(i) , 
              ccc(data.id)
            }}
          >
            {he.decode(option)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard;


 
  


  

  
 

  



// {allAnswer.map((answer, index) => (
//   <button 
//     key={index} 
//     className={
//       clickedIdx === index ? 'border border-[#293264] w-auto  min-w-[50px] h-[30px] rounded-lg mb-3 text-[0.8rem] px-2 py-1 bg-[#d3d3d3] transition-colors duration-200' :
//       'border border-[#293264] w-auto  min-w-[50px] h-[30px] rounded-lg mb-3 text-[0.8rem] px-2 py-1 hover:bg-[#d3d3d3] transition-colors duration-200'
//     }
//     onClick={()=>setClickedIdx(index)} 
//   >
//     {he.decode(answer)}
//   </button>
// ))}