import {BrowserRouter, Route, Routes} from 'react-router-dom'

import LoginForm from './components/LoginForm'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginForm />} />
    </Routes>
  </BrowserRouter>
)

export default App
