async function timeOUt(url, timeout) {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeout)
    );
    try {
    const fetchPromise = fetch(url).then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
    const result = await Promise.race([fetchPromise, timeoutPromise]);
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  
  timeOUt('https://jsonplaceholder.typicode.com/post', 5000)
    .then(data => console.log('Data fetched:', data))
    .catch(error => console.error('Error:', error));
  