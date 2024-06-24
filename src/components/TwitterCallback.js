import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TwitterCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const username = params.get('username');
    const accessToken = params.get('accessToken');
    const socialNetwork = params.get('socialNetwork');

    if (userId && username && accessToken && socialNetwork) {
      localStorage.setItem('userId', userId);
      localStorage.setItem('username', username);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('socialNetwork', socialNetwork);
      alert('Twitter account linked successfully!');
      navigate('/');
    } else {
      alert('Failed to link Twitter account.');
      navigate('/');
    }
  }, [navigate]);

  return <div>Redirecting...</div>;
}

export default TwitterCallback;
