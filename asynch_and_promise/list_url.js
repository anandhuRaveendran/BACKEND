async function fetchUrls(urls) {
    for (const url of urls) {
      const start = Date.now();
      await fetch(url);
      const duration = Date.now() - start;
      console.log(`Fetched ${url} in ${duration}ms`);
    }
  }
  
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  fetchUrls(urls);