import './App.css';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';

function App() {
  var str = "Riddh Modi."
  return (
    <div className="App">
      <Header></Header>
      {/* <Home></Home> */}
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
