import React,{component} from 'react';
import './menu.css';

import { Link ,Route,Routes} from 'react-router-dom';
import Notice from './Notice.js';
import Mainpage from './mainpage.js';
import Menupage from './menupage.js';
import Business from './business.js';
import Business_registration from './business_registration.js';
import Business_info from './business_info.js';


const main = () => {
    return (
      <div className="App">
        <header>
          <img src="/img/Logo.png" className="Logo"></img>
          <img src="/img/ic_wallet.png" className="ic_wallet"></img>
        </header>
        <div className="main_content">
          <div className="Menu_bar">
            <div className="Menu_box">
            <Link to="/" activeClassName="active"><div className="admin_box"><span className="ADMIN-PAGE">ADMIN PAGE</span></div></Link>
              <div className="Menu">
                <Link to="/userlist" activeClassName="active"><div className="_box"><span className="menu_font">유저 리스트</span></div></Link>
                <Link to="/business" activeClassName="active"><div className="_box2"><span className="menu_font">업체 신청 관리</span></div></Link>
                <Link to="/sold" activeClassName="active"><div className="_box2"><span className="menu_font">판매 신청 관리</span></div></Link>
                <Link to="/noticePage" activeClassName="active"><div className="_box2"><span className="menu_font">공지 관리</span></div></Link>
                <Link to="/menupage" activeClassName="active"><div className="_box2"><span className="menu_font">메뉴 관리</span></div> </Link>
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
            <Route path="/" name="home" element={<Mainpage/>}/>
            <Route path="/noticePage" name="notice" element={<Notice/>}/>
            <Route path="/menupage" name="menu" element={<Menupage/>}/>
            <Route path="/business" name="business" element={<Business/>}/>
            <Route path="/business/registration" name="busi_regi" element={<Business_registration/>}/>
            <Route path="/business/info" name="business_info" element={<Business_info/>}/>
        </Routes>
        </div>
      </div>
    )
};

export default main;
