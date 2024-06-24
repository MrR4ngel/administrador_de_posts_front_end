import React from 'react';

const Posts = () => {
  return (
    <ul className="posts-list">
      <li className="post-item">
        <p>Post content goes here...</p>
        <div className="countdown" data-target="2024-06-28T12:00:00">Time left: 2d 10h 30m 15s</div>
        <div className="post-actions">
          <label>Edit:</label>
          <button className="action-button">Edit</button>
          <button className="action-button delete-button"></button>
        </div>
      </li>
      {/* Mais itens de postagem aqui, se necessário */}
    </ul>
  );
};

export default Posts;
