import './App.css'
import Welcome from './components/Welcome';
import Chatbot from './components/Chatbot';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
      </Routes>
    </Router>
  )
}

export default App
