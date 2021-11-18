import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserRequested } from '../redux/actions';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserRequested());
  }, []);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default Home;
