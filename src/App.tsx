import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import ErrorPage from './pages/Error';

const App = () => {
  const match = useRoutes(routes);
  return match || <ErrorPage/>;
};

export default App;
