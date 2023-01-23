import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'; 
import './App.css';
import Header from './container/header';
import Content from './container/content';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Content />
      </div >
    </Provider>
  );
}

export default App;
