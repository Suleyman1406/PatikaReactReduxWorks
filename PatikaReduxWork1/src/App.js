import Content from "./Components/Content";
import Header from "./Components/Header";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./Components/Footer";
const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Content />
      </Container>
      <Footer />
    </Provider>
  );
}

export default App;
