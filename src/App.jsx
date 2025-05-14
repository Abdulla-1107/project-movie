import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1">
        <div className="p-6"></div>
      </main>
      <Footer/>
    </div>
  );
};

export default App;