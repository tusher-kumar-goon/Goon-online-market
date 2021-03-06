// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Service from './components/Service/Service';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Instructor from './components/Instructor/Instructor';





function App() {
  return (
    <div className="App">
      <Router>
        <Header>
        </Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/service'>
            <Service></Service>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/instructor'>
            <Instructor></Instructor>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Route>
          <Footer></Footer>
        </Route>
      </Router>
    </div>
  );
}

export default App;
