import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";
import "./app.scss";

if (process.env.NODE_ENV !== "production" && process.env.TARO_ENV === "h5") {
  require("nerv-devtools");
}

class App extends Component {
  config: Taro.Config = {
    pages: ["pages/index/index", "components/MyLifeTime/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
