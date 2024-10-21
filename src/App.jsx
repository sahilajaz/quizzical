import BootScreen from "./components/BootScreen";
import {Route , Routes} from 'react-router-dom'
import QuestionsScreen from "./components/QuestionsScreen";

function App() {
  

  return (
    <main className="bg-[#021220] min-h-screen w-full flex justify-center">
        <div className="conatiner w-[340px]  sm:w-[600px] sm:h-[600px] mt-10 relative ml-6 sm:ml-0">
        <img
        src="../src/assets/yellow.png"
        className="h-9 sm:h-20 absolute left-[260px]  sm:left-[510px] mt-2"
      />
      <div className="bg-[#f5f7fb] w-[300px] sm:w-[600px] sm:h-[500px] h-[300px] mt-2 flex justify-center items-center">
      <Routes>
        <Route path="/" element={<BootScreen/>}/>
        <Route path="/question/:categoryNumber" element={<QuestionsScreen/>}/>
      </Routes>
      </div>
      <img
        src="../src/assets/blue.png"
        className="h-8 sm:h-20 absolute right-[298px] top-[276px] left-[1px] sm:top-[428px] "
      />
        </div>
    </main>
  )
}

export default App;
