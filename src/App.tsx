import { BrowserRouter, Routes, Route } from 'react-router'
import { QueryClientProvider } from '@tanstack/react-query'

import HomePage from "./pages/HomePage"
import StudentsPage from './pages/StudentsPage'
import MoviesPage from './pages/MoviesPage'
import { client } from './api/query-client'

function App() {
  return <QueryClientProvider client={client}>
        <BrowserRouter>
            <Routes>
              <Route path='/' 
                    element={<HomePage/>}/>
              <Route path='/students' 
                    element={<StudentsPage/>}/>
              <Route path='/movies' 
                    element={<MoviesPage/>}/>
            </Routes>
          </BrowserRouter>
  </QueryClientProvider>
  
 
}

export default App
