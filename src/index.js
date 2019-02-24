import axios from "axios";

const search = "cat";
const key = "cSY7uF4g6yCC7gx8ls4EJS7GBkEBhOKq";
const limit = 3;

const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

axios.get(url).then(res => {
  console.log(res.data);
  const data = res.data.data;
  const imageUrl = data[0].images.downsized.url;
  console.log(imageUrl);
  const img = document.createElement("img");
  img.src = imageUrl;
  document.body.appendChild(img);
});

// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
