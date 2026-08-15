fetch('http://localhost:3000/')
  .then(res => {
    console.log("Status:", res.status);
    return res.text();
  })
  .then(text => console.log(text.substring(0, 1000))) // Print first 1000 chars of the HTML
  .catch(console.error);
