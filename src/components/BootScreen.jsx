import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const questionCategory = [
  { id: 1, category: "Any Category" },
  { id: 2, category: "Entertainment: Books" },
  { id: 3, category: "Entertainment: Film" },
  { id: 4, category: "Entertainment: Music" },
  { id: 5, category: "Entertainment: Musicals & Theatres" },
  { id: 6, category: "Entertainment: Television" },
  { id: 7, category: "Entertainment: Video Games" },
  { id: 8, category: "Entertainment: Board Games" },
  { id: 9, category: "Science & Nature" },
  { id: 10, category: "Science: Computers" },
  { id: 11, category: "Science: Mathematics" },
  { id: 12, category: "Mythology" },
  { id: 13, category: "Sports" },
  { id: 14, category: "Geography" },
  { id: 15, category: "Politics" },
  { id: 16, category: "Art" },
  { id: 17, category: "Celebrities" },
  { id: 18, category: "Animals" },
  { id: 19, category: "Vehicles" },
  { id: 20, category: "Entertainment: Comics" },
  { id: 21, category: "Science: Gadgets" },
  { id: 22, category: "Entertainment: Japanese Anime & Manga" },
  { id: 23, category: "Entertainment: Cartoon & Animations" }
]

const BootScreen = () => {
  const [category, setCategory] = useState("Any Category")
  const navigate = useNavigate()

  const startQuiz = (e) => {
    e.preventDefault()
    navigate(`/question/${category}`)
  }


  return (
    <div className="open-screen bg-white sm:w-[500px] sm:h-[500px] h-[300px] mt-2 flex justify-center items-center">
      <div className="flex flex-col items-center p-10 gap-3">
        <div className="text-center">
          <h2 className="text-[#293264] text-2xl sm:text-3xl font-serif">Quizzical</h2>
          <h5 className="text-[#293264] sm:font-bold">Let us have a quiz!</h5>
        </div>
        <form className='flex flex-col w-full items-center' onSubmit={startQuiz}>
          <div className='py-3 px-1 w-full'>
            <select 
              name='questionCategory' 
              id='questionCategory' 
              className='p-2 border border-black w-full h-10 box-border rounded-lg'
              onChange={(e) => setCategory(e.target.value)}
            >
              {questionCategory.map(el => (
                <option key={el.id} value={el.category}>
                  {el.category}
                </option>
              ))}
            </select>
          </div>
          <button 
            type="submit" 
            className="bg-[#293264] text-white px-5 py-1 rounded-lg font-bold"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default BootScreen;
