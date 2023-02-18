import { useState, useEffect } from 'react';

import { PAGES } from './constants';

import { Main, Landing, Login, Admin } from './pages';

import './styles/App.css'

const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;

const App = () => {
  const [page, setPage] = useState('landing');

  const [landing, login, main, admin] = PAGES;

  useEffect(() => {
    if (!userData) {
      setPage(landing);
    } else {
      setPage(main);
    }
  }, [landing, main]);

  switch (page) {
    case landing:
      return <Landing setPage={setPage} />;
    case login:
      return <Login setPage={setPage} />;
    case main:
      return <Main setPage={setPage} />;
    default:
      return <Landing setPage={setPage} />;
    case admin:
      return <Admin setPage={setPage} />;
  }
};

export default App;
