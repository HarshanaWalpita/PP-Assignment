import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewsCard from "./components/News/NewsCard";
import Footer from "./components/Footer";
import Articles from "./components/Articles";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/articles' component={Articles} />
          <Route path='/news' component={NewsCard} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
