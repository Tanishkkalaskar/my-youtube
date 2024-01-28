import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header></Header>
        <Body></Body>
        {/**
       * App
        header
        Body
          sidebar
            menu-items
          button-list
          video-container
            videos-card 
       */}
      </div>
    </Provider>
  );
}

export default App;
