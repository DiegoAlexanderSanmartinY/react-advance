import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../assets/react.svg'
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="lazy2/" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="lazy1" element={ <h1><LazyPage1/></h1> } />
                    <Route path="lazy2" element={ <h1><LazyPage2/></h1> } />
                    <Route path="lazy3" element={ <h1><LazyPage3/></h1> } />
                    
                    <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
