import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import NotFoundPage from './pages/NotFoundPage';
// import './App.scss';


const App = () => {
  const match = useRoutes(routes);
  return match || <NotFoundPage/>;

};

export default App;
