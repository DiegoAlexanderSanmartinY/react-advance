import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '..';

export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>
        {/* Rutas hijas iran aqui */}

        <ul>
            <li>
                <NavLink to="lazy1">Lazy 1</NavLink> 
            </li>
            <li>
                <NavLink to="lazy2">Lazy 1</NavLink> 
            </li>
            <li>
                <NavLink to="lazy3">Lazy 1</NavLink> 
            </li>
        </ul>

        <Routes>
            <Route path='lazy1' element={<LazyPage1 />}></Route>
            <Route path='lazy2' element={<LazyPage2 />}></Route>
            <Route path='lazy3' element={<LazyPage3 />}></Route>
            <Route path='*' element={< Navigate replace to="lazy1"/>} />
        </Routes>
    </div>
  )
}

export default LazyLayout;
