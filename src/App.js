import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/main.js';
import Footer from './components/Footer/footer.js';
import background from './background.jpg';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
