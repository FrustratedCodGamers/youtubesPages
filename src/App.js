import NavBar from './NavBar'
import Home from './Home'
import { useEffect, useState } from 'react';

import './App.css';

const App = () => {

  const current_theme = localStorage.getItem('current_theme');

  const [theme, setTheme] = useState(current_theme ? current_theme: 'light');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme} setSearchQuery={setSearchQuery} />
      <Home searchQuery={searchQuery}/>
    </div>
  )
}

export default App;
