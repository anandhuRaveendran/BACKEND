async function fetchWithRetry(url, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response;
      } catch (error) {
        if (attempt === retries) {
          throw new Error(`Failed to fetch after ${retries} retries: ${error.message}`);
        }
      }
    }
  }
  
  fetchWithRetry('https://jsonplaceholder.typicode.com/post/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  