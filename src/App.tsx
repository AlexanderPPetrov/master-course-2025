import { BrowserRouter, Routes, Route } from 'react-router'

import HomePage from "./pages/HomePage"
import StudentsPage from './pages/StudentsPage'
import MoviesPage from './pages/MoviesPage'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' 
             element={<HomePage/>}/>
      <Route path='/students' 
             element={<StudentsPage/>}/>
      <Route path='/movies' 
             element={<MoviesPage/>}/>
    </Routes>
  </BrowserRouter>
 
}

export default App
