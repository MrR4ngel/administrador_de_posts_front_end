import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import TwitterCallback from './components/TwitterCallback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />        {/* Definindo a página de login como a frontpage */}
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/twitter-callback" element={<TwitterCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
