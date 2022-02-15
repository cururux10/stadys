import React,{component} from 'react';
import './menu.css';

import { Link ,Route,Routes} from 'react-router-dom';
import Notice from './Notice.js';
import Mainpage from './mainpage.js';
import Menupage from './menupage.js';
import Business from './business.js';
import Business_registration from './business_registration.js';
import Business_info from './business_info.js';
import Userlist from './userlist.js';
import User_info from './user_info.js';
import Sales_list from './sales_list.js';
import Sales_info from './sales_info.js';

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
            <div className="admin_box"><Link className="ADMIN-PAGE" to="/">ADMIN PAGE</Link></div>
              <div className="Menu">
                <div className="_box"><Link className="menu_font" to="/userlist">유저 리스트</Link></div>
                <div className="_box2"><Link className="menu_font" to="/business">업체 신청 관리</Link></div>
                <div className="_box2"><Link to="/sales" className="menu_font">판매 신청 관리</Link></div>
                <div className="_box2"><Link to="/noticePage" className="menu_font">공지 관리</Link></div>
                <div className="_box2"><Link to="/menupage" className="menu_font">메뉴 관리</Link></div> 
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
            <Route path="/userlist" name="userlist" element={<Userlist/>}/>
            <Route path="/userlist/info" name="userlist_info" element={<User_info/>}/>
            <Route path="/business" name="business" element={<Business/>}/>
            <Route path="/business/registration" name="busi_regi" element={<Business_registration/>}/>
            <Route path="/business/info" name="business_info" element={<Business_info/>}/>
            <Route path="/sales" name="sales_list" element={<Sales_list/>}/>
            <Route path="/sales/info" name="sales_info" element={<Sales_info/>}/>
            <Route path="/noticePage" name="notice" element={<Notice/>}/>
            <Route path="/menupage" name="menu" element={<Menupage/>}/>
        </Routes>
        </div>
      </div>
    )
};

export default main;
