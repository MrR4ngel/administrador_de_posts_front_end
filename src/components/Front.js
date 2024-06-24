import React, { useEffect, useState } from 'react';
import './Front.css';

function Front() {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Olá');

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div>
      <h1>Postmanager</h1>
      <h2 id="greeting">{userName}!</h2>
      <button id="logoutButton" onClick={handleLogout}>Logout</button>
      <h2>Link Social Media Accounts</h2>
      <button type="button" id="linkTwitter">Link Twitter</button>
      <button type="button" id="linkFacebook">Link Facebook</button>
      <button type="button" id="linkLinkedIn">Link LinkedIn</button>
      <h2>Create Post</h2>
      <form id="postForm">
        <textarea id="postContent" placeholder="Enter post content"></textarea>
        <input type="datetime-local" id="postSchedule" placeholder="Schedule Date" />
        <button type="submit">Create Post</button>
      </form>
      <h2>Post Dashboard</h2>
      <ul id="postsList"></ul>
    </div>
  );
}

export default Front;
