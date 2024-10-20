import BootScreen from "./components/BootScreen";
import {Route , Routes} from 'react-router-dom'
import QuestionsScreen from "./components/QuestionsScreen";

function App() {
  

  return (
    <main className="bg-[#021220] min-h-screen w-full flex justify-center">
        <div className="conatiner w-[340px]  sm:w-[600px] sm:h-[600px] mt-10 relative">
        <img
        src="../src/assets/yellow.png"
        className="h-9 sm:h-20 absolute left-[300px] sm:left-[410px] xl:left-[410px] mt-2"
      />
      <Routes>
        <Route path="/" element={<BootScreen/>}/>
        <Route path="/question/:category" element={<QuestionsScreen/>}/>
      </Routes>
      <img
        src="../src/assets/blue.png"
        className="h-8 sm:h-20 absolute right-[298px] top-[276px] sm:left-[1px] sm:top-[428px] "
      />
        </div>
    </main>
  )
}

export default App;
