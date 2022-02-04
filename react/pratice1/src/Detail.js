import { useEffect, useState } from 'react';
import { useHistory,useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import './Detail.scss'

function Detail(props){
    let [alart,setalart] = useState(true);
    let [inputData,setinputData] =useState('');
    let {id} = useParams();
    let history = useHistory();
    let founditem =props.shoes.find(function(item){
        return item.id == id
    })

    useEffect(()=>{
     let 타이머 = setTimeout(() => {setalart(false)}, 2000);
     return ()=>{clearTimeout(타이머)}
    },[alert]);


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
                <button className="btn btn-danger">주문하기</button> 
                <button className="btn btn-danger" onClick={()=>{
                    history.goBack();
                }}>뒤로가기</button> 
                <button className="btn btn-danger" onClick={()=>{
                    history.push('/');
                }}>홈으로</button> 
            </div>
            </div>
        </div> 
    )
}

export default Detail