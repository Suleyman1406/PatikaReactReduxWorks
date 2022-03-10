import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { CitiesProvider } from './context/CitiesContext';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <CitiesProvider>
      <WeatherProvider>
        <Header/>
        <Main/>
      </WeatherProvider>
    </CitiesProvider>
  );
}

export default App;
