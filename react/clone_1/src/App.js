import './App.css';
import { useTable } from 'react-table'; //npm install react-table
import styled from 'styled-components'; //npm install styled-components
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <img src="/img/Logo.png" class="Logo"></img>
        <img src="img\ic_wallet.png" class="ic_wallet"></img>
      </header>
      <div className="main_content">
        <div className="Menu_bar">
          <div className="Menu_box">
            <div className="admin_box"><span className="ADMIN-PAGE">ADMIN PAGE</span></div>
            <div className="Menu">
              <div className="_box"><span className="menu_font">유저 리스트</span></div>
              <div className="_box2"><span className="menu_font">업체 신청 관리</span></div>
              <div className="_box2"><span className="menu_font">판매 신청 관리</span></div>
              <div className="_box2"><span className="menu_font">공지 관리</span></div>
              <div className="_box2"><span className="menu_font">메뉴 관리</span></div>  
            </div>
          </div>
          <footer>
            <span className="Copyright2021-Divine-Land-NFT-All-rights-reserved">
            <p>Copyright@2021.
            Divine Land NFT<br/>
            All rights reserved.</p>
            </span>
          </footer>
        </div>
        <Routes>
          <div className="table_content">
            <Route path="/">
              <div className="search_bar">
                <img src="img\팰리즈소개.png"></img>
                <img src="img\search_box.png"></img>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성일</th>
                    <th>조회</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>공지사항</td>
                    <td>2021-12-06</td>
                    <td>1111</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>공지사항</td>
                    <td>2021-12-06</td>
                    <td>1234</td>
                  </tr>
                </tbody>
              </table>
            </Route>
            
          </div>
        </Routes>
      
      </div>
    </div>
  );
}

export default App;
