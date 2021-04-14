import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRouter } from './Router';

const App: FC = () => {
  const router = useRouter(true);
  return <Router>{router}</Router>;
};

export default App;
