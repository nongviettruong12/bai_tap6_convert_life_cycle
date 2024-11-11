
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LifecycleDemo from './page/Dashboard'
import Add from './page/Add'
import RefactorLifecycle from './page/Hooks'
function App() {

  return (
    <>
      <Routes>
        <Route path='/'Component={LifecycleDemo}/>
        <Route path='/add'Component={Add}/>
        <Route path='/hooks'Component={RefactorLifecycle} />
      </Routes>
    </>
  )
}

export default App
