import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Post from './components/pages/SinglePost/SinglePost';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import About from './components/pages/About/About';
import NoMatch from './components/pages/NoMatch/NoMatch';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

const App = () => {
  return (
    <Container className='p-0'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/post/:id' element={<Post/>} />
        <Route path='/post/add' element={<AddPost/>} />
        <Route path='/post/edit/:id' element={<EditPost/>} />
        <Route path='*' element={<NoMatch/>} />
      </Routes>
      <Footer/>
    </Container>
  );
};

export default App;
