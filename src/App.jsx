// App.jsx (yoki asosiy sahifa komponenti)
import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1">
        {/* Bu yerda sizning asosiy kontentingiz bo'ladi */}
        <div className="p-6">Bu yerda sahifa kontenti joylashadi.</div>
      </main>
      {/* Footer har doim pastda */}
      <Footer/>
    </div>
  );
};

export default App;