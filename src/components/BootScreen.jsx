import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const questionCategory = [
  { id: 1, category: "Any Category" , categoryNum: 0},
  { id: 2, category: "Entertainment: Books" , categoryNum: 10},
  { id: 3, category: "Entertainment: Film" , categoryNum: 11},
  { id: 4, category: "Entertainment: Music" , categoryNum: 12},
  { id: 5, category: "Entertainment: Musicals & Theatres" , categoryNum: 13},
  { id: 6, category: "Entertainment: Television" , categoryNum: 14},
  { id: 7, category: "Entertainment: Video Games" , categoryNum: 15 },
  { id: 8, category: "Entertainment: Board Games" , categoryNum: 16},
  { id: 9, category: "Science & Nature" , categoryNum: 17},
  { id: 10, category: "Science: Computers" , categoryNum: 18},
  { id: 11, category: "Science: Mathematics" , categoryNum: 19 },
  { id: 12, category: "Mythology" , categoryNum: 20},
  { id: 13, category: "Sports" , categoryNum: 21},
  { id: 14, category: "Geography" , categoryNum: 22},
  { id: 15, category: "Politics" , categoryNum: 24},
  { id: 16, category: "Art" , categoryNum: 25},
  { id: 17, category: "Celebrities" , categoryNum: 26},
  { id: 18, category: "Animals" , categoryNum: 27},
  { id: 19, category: "Vehicles" , categoryNum:  28},
  { id: 20, category: "Entertainment: Comics" , categoryNum: 29}
]

const BootScreen = () => {

  const [category, setCategory] = useState({
    category: "Any Category",
    categoryNumber: 0
  })

  

  const navigate = useNavigate()

  const startQuiz = (e) => {
    e.preventDefault();
    navigate(`/question/${category.categoryNumber}`); 
  }


  const handleCategoryChange = (e) => {
    const selectedCategory = questionCategory.find(el => el.category == e.target.value)
     if(selectedCategory) {
      setCategory(
        {
          category: selectedCategory.category,
          categoryNumber: selectedCategory.categoryNum
        }
      )
     }
  }


  return (
    <div className="bg-[#f5f7fb] w-[300px] sm:w-[600px] sm:h-[500px] h-[300px] mt-2 flex justify-center items-center">
      <div className="flex flex-col items-center px-10 py-3 gap-3">
      <img
        src="../src/assets/yellow.png"
        className="h-9 sm:h-20 absolute left-[260px]  sm:left-[510px] top-2"
      />
        <div className="text-center mt-10 md:mt-24">
          <h2 className="text-[#293264] text-2xl sm:text-3xl font-serif mb-2">Quizzical</h2>
          <h5 className="text-[#293264] sm:font-bold">Let us have a quiz!</h5>
        </div>
        <form className='w-full' onSubmit={startQuiz}>
          <div className='py-5 px-3 w-full flex flex-col items-center justify-center gap-4'>
            <select 
              name='questionCategory' 
              id='questionCategory' 
              className='p-2 border border-slate-800 w-64 sm:w-80 h-10 box-border rounded-lg'
              onChange={handleCategoryChange}
            >
              {questionCategory.map(el => (
                <option key={el.id} value={el.category}>
                  {el.category}
                </option>
              ))}
            </select>
          <button 
            type="submit" 
            className="bg-[#4D5B9E] text-white px-5 py-1 rounded-xl font-bold"
          >
            Start Quiz
          </button>
          </div>
          <img
        src="../src/assets/blue.png"
        className="h-8 sm:h-20 absolute right-[298px] top-[276px] left-[1px] sm:top-[428px] "
      />
        </form>
      </div>
      </div>

  );
};

export default BootScreen;
