import "./App.css";
import Content from "./Components/Content";
import Header from "./Components/Header";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Footer from "./Components/Footer";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Content />
      <Footer />
    </Provider>
  );
}

export default App;
