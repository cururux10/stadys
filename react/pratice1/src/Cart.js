import React from "react";
import { Table } from "react-bootstrap";
import {connect} from 'react-redux';

function Cart(props){
    return(
        <div>
            <Table striped bordered hover>
                <tr>
                    <td>id</td>
                    <td>Name</td>
                    <td>quan</td>
                    <td>#</td>
                </tr>
                {
                    props.state.map((a,i)=>{
                        return(
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.quan}</td>
                                <td>
                                    <button onClick={()=>{props.dispatch({type: '수량증가', data : i})}}> + </button>
                                    <button onClick={()=>{props.dispatch({type: '수량감소', data : i})}}> - </button>
                                </td>
                            </tr>
                        )
                    })
                }  
            </Table>
            { props.alert_open === true
                ? (<div className="my-alert2">
                        <p>지금 구매하시면 20% 할인</p>
                        <button onClick={()=>{props.dispatch({type : 'alert닫기'})}}>닫기</button>
                   </div> )
            : null
            }
        </div>
    )
}

function getstore(state){
    return{
        state : state.reducer,
        alert_open: state.reducer2
    }
}

export default connect(getstore)(Cart);