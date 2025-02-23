import { BrowserRouter, Routes, Route } from 'react-router'

import HomePage from "./pages/HomePage"
import StudentsPage from './pages/StudentsPage'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' 
             element={<HomePage/>}/>
      <Route path='/students' 
             element={<StudentsPage/>}/>

    </Routes>
  </BrowserRouter>
 
}

export default App
