import axios from 'axios'; //서버에서 데이터를 가져올때 좀더 편하게 가져올수 있게 해주는 것이다.
import { useEffect, useState } from 'react';
import { useHistory,useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import './Detail.scss'
import {Nav} from 'react-bootstrap'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux';

function Detail(props){ 
    let [alart,setalart] = useState(true); 
    let [inputData,setinputData] =useState('');

    let {id} = useParams();             //url에서 가져오는 값이다
    let [pressedtab,setpressedtab]=useState(0);
    let [switch_tab,setswitch_tab]=useState(false);
    let history = useHistory();        //다른 url로 이동하게 해주는 기능을 가지고 있다.
    let founditem =props.shoes.find(function(item){ 
        return item.id == id
    })

    useEffect(()=>{ //변화가 있을 때마다 작동한다.


        let 타이머 = setTimeout(() => {setalart(false)}, 2000); // 타이머로 단위는 ms이다 함수안에 들어가는 것은 종료시 작동하는 것이다.
        return ()=>{clearTimeout(타이머)} //타이머를 제거하는 것이다.
    },[]); //[]부분은 조건으로 비어있을 경우 처음시작때 1번작동하고 더이상 작동하지 않음을 의미한다.


    return (
        <div className="container">
            {/*<!-- 이벤트 핸들러로 onchange는 변화가 있을 시를 의미한다. -->*/}
            <input onChange={(e)=>{setinputData(e.target.value)}}/>

            { //내부에서 if문이 사용이 불가능하기 때문에 그 대신 3항 연산자를 대신 사용한다.
                alart === true
                ?(<div className="my-alert2">
                    <p>재고가 없어요</p>
                </div>)
                :null
            }
            <div className="row">

                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes'+(founditem.id+1)+'.jpg'} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{founditem.title}</h4>
                    <p>{founditem.content}</p>
                    <p>{founditem.price}원</p>
                    <button className="btn btn-danger"onClick={()=>{
                        props.dispatch( {type:'항목추가',데이터 : {id : founditem.id, name : founditem.title, quan : 1}} );
                        history.push('/cart')
                        }} >주문하기</button> 
                    <button className="btn btn-danger" onClick={()=>{
                        history.goBack();{/*<!-- 뒤로가기를 의미한다 -->*/}
                    }}>뒤로가기</button> 
                    <button className="btn btn-danger" onClick={()=>{
                        history.push('/');{/*<!-- 해당 url로 이용한다. -->*/}
                    }}>홈으로</button> 
                </div>
            </div>
            <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{setswitch_tab(false); setpressedtab(0)}}>
                        Active
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={ ()=>{setswitch_tab(false); setpressedtab(1)} }>
                        Option 2
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <CSSTransition in={switch_tab} className="wow" timeout={500}>
                <TabContent pressedtab={pressedtab} setswitch_tab={setswitch_tab}/>
            </CSSTransition>
 

        </div> 
    )
}


 function TabContent(props){

    useEffect(()=>{
        props.setswitch_tab(true);
    })

    if(props.pressedtab === 0){
        return <div>{props.pressedtab}번째 내용</div>
    }
    else if(props.pressedtab === 1){
        return <div>{props.pressedtab}번째 내용</div>
    }
    else if(props.pressedtab === 2){
        return <div>{props.pressedtab}번째 내용</div>
    }


}
    function state를props화(state){
    return ({
      state : state.reducer,
      alert열렸니 : state.reducer2
    })
  }
  
  export default connect(state를props화)(Detail)