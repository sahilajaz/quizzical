import BootScreen from "./components/BootScreen";
import {Route , Routes} from 'react-router-dom'
import QuestionsScreen from "./components/QuestionsScreen";

function App() {
  
  

  return (
    <main className="bg-[#021220] min-h-screen w-full flex justify-center">
        <div className="conatiner min-w-[340px] w-auto sm:w-[600px] h-auto sm:min-h-[600px] mt-10 relative ml-6 sm:ml-0">
      <Routes>
        <Route path="/" element={<BootScreen/>}/>
        <Route path="/question/:categoryNumber" element={<QuestionsScreen/>}/>
      </Routes>
      </div>
    </main>
  )
}

export default App;
