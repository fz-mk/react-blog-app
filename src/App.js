import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import { useState, useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { useStoreActions } from 'easy-peasy';

function App() {
  const setPosts = useStoreActions(action => action.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <div className="App">

      <Header title={"React JS Blog"} />
      <Nav />

      <DataProvider>
        <Routes>
          <Route exact path='/' element={<Home
            isLoading={isLoading}
            fetchError={fetchError}
          />} />

          <Route exact path='/post' element={<NewPost />} />

          <Route exact path='/edit/:id' element={<EditPost />} />

          <Route exact path='/post/:id' element={<PostPage />} />

          <Route exact path='/about' element={<About />} />

          <Route path='*' element={<Missing />} />
        </Routes>

      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;