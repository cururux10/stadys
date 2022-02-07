import { useState } from 'react';
import './App.css';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';
import Cart from './Cart.js';
import { useHistory,useParams } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  let [shoes,setshoes] = useState(Data);

  return (
    <div className="App">
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">shoeshop</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"> <Link to="/">Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to="/Detail">Detail</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to="/cart">Cart</Link></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/"> 
        <div class="background">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p>Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
            <button class="btn btn-primary btn-lg" type="button">Example button</button>
          </div>
        </div>
        <div>
          <div class="row">
            {
              shoes.map((a,i)=>{
                return <Card shoes={shoes[i]} i={i} key={i}/>
              })
            }
          </div>
        </div>
        <button class="btn btn-primary" onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{
            setshoes([...shoes,...result.data])
           })
          .catch(()=>{

           })
        }}>더보기</button>
        </Route>
        <Route exact path="/detail/:id">
            <Detail shoes={shoes}/>
        </Route>
        <Route path="/detail">
        <div class="row">
            {
              shoes.map((a,i)=>{
                return <Card shoes={shoes[i]} i={i} key={i}/>
              })
            }
          </div>
          <button class="btn btn-primary" onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{
            setshoes([...shoes,...result.data])
           })
          .catch(()=>{

           })
        }}>더보기</button>
        </Route>
      </Switch>
      <Route path="/Cart">
        <Cart></Cart>
      </Route>
    </div>
  );
}

function Card(props){
  let history = useHistory();
  return(
    <div class="col-md-4" onClick={()=>{history.push('/detail/'+props.shoes.id)}}>
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width='100%'/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}

export default App;
