// frontend/src/utilities/utilities.js

// Função de exemplo para buscar posts
export async function fetchPosts() {
  // Simulação de chamada API
  return [
    { id: 1, title: 'Post 1', content: 'Content of post 1' },
    { id: 2, title: 'Post 2', content: 'Content of post 2' },
  ];
}

// Função de exemplo para deletar um post
export async function deletePost(postId) {
  // Simulação de exclusão de post
  return;
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
