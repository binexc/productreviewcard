import './App.scss'
import { useState, createContext } from 'react'
import {CardBackground} from './Components/CardBackground'

const MOBILE_BREAK_POINT:number = 700;

export const isSmallFormFactorContext = createContext<boolean | undefined>(false)

function App() {
  const [isSmallFormFactor, setIsSmallFormFactor] = useState<boolean | undefined>(undefined) //Won't know until we start

  const determinSmallFormFactorState = (width:number) => {setIsSmallFormFactor((width <= MOBILE_BREAK_POINT))}
  
  window.addEventListener('resize', () => {
    determinSmallFormFactorState(window.innerWidth)
  })
  
  if( (document.readyState !== 'loading') && (isSmallFormFactor === undefined) ) {
    determinSmallFormFactorState(window.innerWidth)
  }

  return (
    <>
      <isSmallFormFactorContext.Provider value={isSmallFormFactor}>
        <CardBackground />
      </isSmallFormFactorContext.Provider>
    </>
  );
}

export default App;
