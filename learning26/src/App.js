import './App.css';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { UseStateCom } from './components/UseStateCom';
import { UseStateCom2 } from './components/UseStateCom2';
import { UseStateCom3 } from './components/UseStateCom3';

function App() {
  var str = "Riddh Modi."
  return (
    <div className="App">
      <Header></Header>
      {/* <Home></Home> */}
      {/* <Content></Content> */}
      {/* <UseStateCom></UseStateCom> */}
      {/* <UseStateCom2></UseStateCom2> */}
      <UseStateCom3></UseStateCom3>
      <Footer></Footer>
    </div>
  );
}

export default App;
