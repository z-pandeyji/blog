import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home />
      <Footer></Footer>
    </div>
  );
}

export default App;
