async function fetchUrlsInParallel(urls) {
    const fetchPromises = urls.map(url => {
      const start = Date.now();
      return fetch(url).then(response => ({
        url,
        duration: Date.now() - start
      }));
    });
  
    const results = await Promise.all(fetchPromises);
    const longest = results.reduce((a, b) => (a.duration > b.duration ? a : b));
  
    console.log(`Longest request: ${longest.url} took ${longest.duration}ms`);
  }
  
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  fetchUrlsInParallel(urls);
  