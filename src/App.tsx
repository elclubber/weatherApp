import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'; 
import './App.css';
import './components/weatherMap/weatherMap.css';
import './components/SearchBar/searchBar.css';
import Main from './container/main';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div >
    </Provider>
  );
}

export default App;
