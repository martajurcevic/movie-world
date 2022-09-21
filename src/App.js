import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Blank from './pages/Blank';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<Blank />} />
                    <Route path='/' element={<Blank />} />
                    <Route path='/top rated' element={<Blank />} />
                    <Route path='/genres' element={<Home />} />
                    <Route path='/upcoming' element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;