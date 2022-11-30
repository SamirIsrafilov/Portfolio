
import React, {Fragment, useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css';
import { MdKeyboardArrowUp } from 'react-icons/md';
import 'alertifyjs/build/css/alertify.min.css';
import AppRouter from './routers/AppRouter';

const App = () => {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 1000));
  }
  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <div>
      <AppRouter />
      <a className='top' href='#'><MdKeyboardArrowUp /></a>
    </div>
  )
}


export default App
