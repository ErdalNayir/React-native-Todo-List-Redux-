import { Text, View } from "react-native";
import Router from "./src/Router";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
