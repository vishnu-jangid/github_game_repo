/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/configureStore";
import Game from "./src/game/game";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
