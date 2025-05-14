import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MovieView from './components/movie-view/MovieView';
import { useFetch } from './hooks/useFetch';

const App = () => {
  const {data,error,loading} = useFetch("/discover/movie")

  return (
    <div className="container mx-auto flex flex-col">
      <Header/>
      <main className="flex-1">
        <MovieView  movies={data?.results}/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;