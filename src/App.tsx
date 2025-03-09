import { BrowserRouter, Routes, Route } from 'react-router'
import { QueryClientProvider } from '@tanstack/react-query'

import HomePage from "./pages/HomePage"
import StudentsPage from './pages/StudentsPage'
import MoviesPage from './pages/MoviesPage'
import { client } from './api/query-client'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return <Provider store={store}>
      <QueryClientProvider client={client}>
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
  </Provider>
  
 
}

export default App
