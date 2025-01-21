import './App.css'
import Result from './components/Result.jsx'
import Summary from './components/Summary.jsx'
function App() {
 

  return (
    <>
    <main className="bg-very-light-blue h-screen w-screen grid place-content-center">
        <div className="desktop:w-[736px] desktop:h-[512px] w-[375px] h-auto  bg-white rounded-[2rem] flex  desktop:flex-row flex-col">
          <Result />
          <Summary />
        </div>
     </main>
    </>
  )
}

export default App
