import React from 'react';
import cn from 'classnames';

// import s from './App.module.scss';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';

const App = () => {
  return (
    <>
      <Header />
      {/* <div className={cn(s.header, 'color')}> */}
      <div>
        <div>This is App Component!</div>
      </div>
      <Footer />
    </>
  );
};

export default App;
