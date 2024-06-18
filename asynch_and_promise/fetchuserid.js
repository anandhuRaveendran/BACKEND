async function fetchAndFilterPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      const user1Posts = posts.filter(post => post.userId === 1);
      user1Posts.forEach(post => console.log(post.title));
    } catch (error) {
      console.error(error);
    }
  }

fetchAndFilterPosts();