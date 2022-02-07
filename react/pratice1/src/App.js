import { useState } from 'react';
import './App.css';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom'; // npm install react-router-dom
import Detail from './Detail';
import axios from 'axios'; // npm install axios

function App() {

  let [shoes,setshoes] = useState(Data); //react에서 데이터를 관리하는 것으로 이 데이터는 직접적으로는 변경이 불가능하고 처음선언이 선언한 변경함수로 변경이 가능하다

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
                <a class="nav-link active" aria-current="page"> <Link to="/">Home</Link></a> <!-- link 또한 다른 url로 이동하게 해주는 것으로 이름그대로 대상에게 링크를 거는것이다 대상을 누르면 to에 입력된 url로 이동한다.
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
      <Switch>  <!-- 전체 route중에서 일치하는 첫번째만 적용하는 기능이다. -->
        <Route exact path="/">  <!-- exact는 정확히 일치할경우에만 작동하게 하는 것이다. -->
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
              shoes.map((a,i)=>{ // map에서 a는 전체 인덱스를 의미하고 i는 현제 인덱스를 의미한다
                return <Card shoes={shoes[i]} i={i} key={i}/> <!-- 하위 컴포넌트에서 상위 컴포넌트의 값을 사용하기 위해서는 이와 같이 키값과 값의 형태로 넣어주어야 한다->
              })
            }
          </div>
        </div>
        <button class="btn btn-primary" onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{ //통신성공시
            setshoes([...shoes,...result.data]) //대량의 자료도 한번에 추가저장이 가능하다
           })
          .catch(()=>{ //통신실패시

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
    </div>
  );
}

function Card(props){ <!-- 컴포넌트를 이와 같이 함수형태로도 저장이 가능하다 -->
  return(
    <div class="col-md-4">
      <Link to={'/detail/'+props.i}>
        <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width='100%'/>
      </Link>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}

export default App; <!-- 다른 파일에서 사용하기 위해서는 export를 해주어야 한다. -->
