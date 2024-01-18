import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostList from './pages/PostList/PostList';
import { PostDetails } from './pages/PostDetails/PostDetails';
import NotFoundError from './pages/NotFoundError/NotFoundError';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<PostList />} />
        <Route path='/posts/:id' element={<PostDetails />} />
        <Route path='*' element={<NotFoundError />} />
      </Routes>
    </>
  )
};

export default App;
