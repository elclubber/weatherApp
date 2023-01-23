import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../components/SearchBar';
import { setCity } from '../store/reducer';




const Header = ({ }) => {
    const dispatch = useDispatch();
    const handleSearch = (value: string) => {
        dispatch(setCity(value));
    }

    return (
        <header className="App-header">
            <div className="title">Meteo 
                <span>
                    <a href="http://www.celaneo.com/" className="logo-celaneo" data-cursor-action="" title="revenir à l'accueil">
                         Cela<b>neo</b>
                    </a>
                </span>
            </div>
            <SearchBar onSearch={handleSearch} />
        </header>
    );
}

export default Header;