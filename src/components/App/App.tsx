import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import PostList from '../../pages/PostList/PostList';
import { PostDetails } from '../../pages/PostDetails/PostDetails';
import NotFoundError from '../../pages/NotFoundError/NotFoundError';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<PostList />} />
        <Route path='/posts/:id' element={<PostDetails />} />
        <Route path='*' element={<NotFoundError />} />
      </Routes>
      <Footer />
    </>
  )
};

export default App;