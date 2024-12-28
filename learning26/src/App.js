import './App.css';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { AboutNetflix } from './components/netflix/AboutNetflix';
import { ContactNetflix } from './components/netflix/ContactNetflix';
import { Error404 } from './components/netflix/Error404';
import { NetflixDashboard } from './components/netflix/NetflixDashboard';
import { NetflixHome } from './components/netflix/NetflixHome';
import { NetflixMovies } from './components/netflix/NetflixMovies';
import { NetflixPlayMovie } from './components/netflix/NetflixPlayMovie';
import { NetflixPlaySeries } from './components/netflix/NetflixPlaySeries';
import { NetflixSeries } from './components/netflix/NetflixSeries';
import { UseStateCom } from './components/UseStateCom';
import { UseStateCom2 } from './components/UseStateCom2';
import { UseStateCom3 } from './components/UseStateCom3';
import {Routes,Route} from "react-router-dom";

function App() {
  var str = "Riddh Modi."
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/netflixhome' element={<NetflixHome/>}></Route>
        <Route path='/' element={<NetflixDashboard/>}></Route>
        <Route path='/netflixdashboard' element={<NetflixDashboard/>}></Route>
        <Route path='/netflixmovies' element={<NetflixMovies/>}></Route>
        <Route path='/*' element={<Error404/>}> </Route>
        <Route path='/netflixdashboard/aboutnetflix' element={<AboutNetflix/>}></Route>
        <Route path='/netflixdashboard/contactnetflix' element={<ContactNetflix/>}></Route>
        <Route path='/netflixmovies/play/:id' element={<NetflixPlayMovie/>}></Route>
        <Route path='/netflixseries' element={<NetflixSeries/>}></Route>
        <Route path='/netflixseries/play/:id/:name' element={<NetflixPlaySeries/>}></Route>
      </Routes>
      {/* <Header></Header> */}
      {/* <Home></Home> */}
      {/* <Content></Content> */}
      {/* <UseStateCom></UseStateCom> */}
      {/* <UseStateCom2></UseStateCom2> */}
      {/* <UseStateCom3></UseStateCom3> */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
