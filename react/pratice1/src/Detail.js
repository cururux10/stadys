import { useEffect, useState } from 'react'; 
import { useHistory,useParams } from 'react-router-dom/cjs/react-router-dom.min'; //npm install react-router-dom
import styled from 'styled-components'; //style을 사용하면 컴포넌트에 직접 형태를 부여할수있다.
import './Detail.scss'

function Detail(props){
    let [alart,setalart] = useState(true); 
    let [inputData,setinputData] =useState('');
    let {id} = useParams();     //url에서 받는 파라미터가 저장되는 공간이다.
    let history = useHistory(); //다른 페이지에 이동하게 해주는 기능을 가지고 이전 페이지에 대한 정보 또한 가지고있다.
    let founditem =props.shoes.find(function(item){
        return item.id == id
    })

    useEffect(()=>{
     let 타이머 = setTimeout(() => {setalart(false)}, 2000); // 단위는 ms으로 2초동안 타이머가 돌아가고 멈춤을 의미한다
     return ()=>{clearTimeout(타이머)} // 타이머를 제거한다
    },[alert]); //alert값이 0이 아닐경우에만 작동하게하는 것이다


    return (
        <div className="container">
            <!--e는 이벤트를 의미하고 onchange는 변화가 있을 경우를 의미한다 -->
            <input onChange={(e)=>{setinputData(e.target.value)}}/>

            { <!--html을 작성하는 부분에서는 if문을 사용할수없기 때문에 3항 연산자를 이용하여 if를 대신할수있다.-->
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
                    history.goBack(); <!--뒤로가기-->
                }}>뒤로가기</button> 
                <button className="btn btn-danger" onClick={()=>{
                    history.push('/'); <!--해당url로 이동-->
                }}>홈으로</button> 
            </div>
            </div>
        </div> 
    )
}

export default Detail
