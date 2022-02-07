import { useState } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Data from './data.js';
import Detail from './Detail';

function App() {

  let [shoes,setshoes] = useState(Data); //[초기값,값을 변경할때 쓸함수명] 이러한 형태로 되어있다 값을 바꿀때에는 반드시 후자에 있는 변경함수로 실행하여야 한다.

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
                <a class="nav-link active" aria-current="page"> <Link to="/">Home</Link></a> <!-- link는 이름그대로 링크로 to="url"로 이동시켜준다-->
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to="/Detail">Detail</Link></a>
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
      <Switch> <!-- switch내부에서 일치하는 첫번째 path만 랜더링하는 기능을 가지고있다. -->
        <Route exact path="/"> <!-- exact는 path와 정확히 일치할 경우에만 랜더링을 한다.  -->
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
              shoes.map((a,i)=>{ // a는 표시하고자하는 전체의 목록이고 i는 현제 index를 의미한다.
                return <Card shoes={shoes[i]} i={i} key={i}/> //표시하는 컴포넌트에서 쓰고자하는 자료들은 다음과 같이 key값=자료 의 형태로 전달하여야 한다.
              })
            }
          </div>
        </div>
        </Route>
        <Route exact path="/detail/:id">
            <Detail shoes={shoes}/> 
        </Route>
        <Route path="/:id">
            <div>!!!!!!!!!</div>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props){ //이러한 형식으로 컴포넌트를 만들수있다. 외부에서 데이터를 가져올경우 함수에 props를 넣어서 사용해야한다
  return(
    <div class="col-md-4">
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width='100%'/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}

export default App; <!-- 파일을 다른 파일에서 사용하기위해서는 export default를 이용하여 설정해주어야 다른 파일에서 사용이 가능해진다.-->
