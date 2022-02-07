import axios from 'axios';
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
    let {id} = useParams();
    let [pressedtab,setpressedtab]=useState(0);
    let [switch_tab,setswitch_tab]=useState(false);
    let history = useHistory();
    let founditem =props.shoes.find(function(item){
        return item.id == id
    })

    useEffect(()=>{


        let 타이머 = setTimeout(() => {setalart(false)}, 2000);
        return ()=>{clearTimeout(타이머)}
    },[]);


    return (
        <div className="container">
            
            <input onChange={(e)=>{setinputData(e.target.value)}}/>

            {
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
                        history.goBack();
                    }}>뒤로가기</button> 
                    <button className="btn btn-danger" onClick={()=>{
                        history.push('/');
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
    return {
      state : state.reducer,
      alert열렸니 : state.reducer2
    }
  }
  
  export default connect(state를props화)(Detail)
  