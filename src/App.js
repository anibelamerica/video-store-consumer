import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Customers from './Components/Customers';
import Library from './Components/Library';
import Search from './Components/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCustomer: undefined,
      selectedMovie: undefined
    }
  }

  selectMovie = (movie) => {
    console.log(movie);
    this.setState({
      selectedMovie: movie
    });
  };

  selectCustomer = (customer) => {
    console.log(customer);
    this.setState({
      selectedCustomer: customer
    });
  };

  url = "http://localhost:3000/"

  render() {
    return (
      <div className="App">
        <Router>
         <div>
           <ul>
             <li>
               <Link to="/search">Search</Link>
             </li>
             <li>
               <Link to="/library">Library</Link>
             </li>
             <li>
               <Link to="/customers">Customers</Link>
             </li>
           </ul>

           <div>
             <p>Selected Movie</p>
             {this.state.selectedMovie && <p>{this.state.selectedMovie.title}</p>}
           </div>
           <div>
             <p>Selected Customer</p>
             {this.state.selectedCustomer && <p>{this.state.selectedCustomer.name}</p>}
           </div>

           <Route path="/search" component={Search} />
           <Route
             path="/library"
             render={() => <Library selectMovieCallback={this.selectMovie} baseUrl={this.url}/>}
           />
           <Route path='/customers'
             component={() => <Customers baseUrl={this.url} selectCustomerCallback={this.selectCustomer}/>}
             />
         </div>
        </Router>

      </div>
    );
  }
}

export default App;
