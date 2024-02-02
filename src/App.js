import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Maincontianer from "./components/Maincontianer";
import SearchResults from "./components/SearchResults";
import WatchPage from "./components/WatchPage";
import appStore from "./utils/appStore";

function App() {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Maincontianer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/results",
          element: <SearchResults />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRoutes} />
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
