import React from 'react'

const BootScreen = () => {
  return (
    <div className="open-screen bg-white sm:w-[500px] sm:h-[500px] h-[300px] mt-2 flex justify-center items-center">
    <div className="flex flex-col items-center p-20 gap-3">
      <h2 className="text-[#293264] text-2xl sm:text-3xl font-serif">Quizzical</h2>
      <h5 className="text-[#293264] sm:font-bold">Let us have a quiz!</h5>
      <button className="bg-[#293264] text-white px-4 py-1 rounded-lg sm:text-xl font-bold">Start Quiz</button>
    </div>
  </div>
  )
}

export default BootScreen
