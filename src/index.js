import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = { gifUrlList: [] };
  }

  renderImageList(list) {
    const imageList = list.map(url => {
      return <img src={url} />;
    });
    return imageList;
  }
  // ライフサイクルメソッドがある
  componentDidMount() {
    this.giphyApi();
  }
  render() {
    // console.log(this.state.gifUrlList);
    return <div>{this.renderImageList(this.state.gifurlList)}</div>;
  }

  giphyApi() {
    const search = "cat";
    const key = "cSY7uF4g6yCC7gx8ls4EJS7GBkEBhOKq";
    const limit = 3;

    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

    axios.get(url).then(res => {
      console.log(res.data);
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);
      this.setState({ gifUrlList: imageUrlList });
    });
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
