import './menupage.css';

function menupage() {
    return(
        <div className='table_content'>
            <div className="search_bar">
                <img className='menu_btn' src='img/menu_btn.png'/>
            </div>
            <table>
                <tr>
                    <th>메뉴 관리</th>
                </tr>
            </table>
            <div>
                <img className='g_btn' src='img/gray_btn.png'/>
                <img className='g_btn' src='img/gray_btn.png'/>
                <img className='g_btn' src='img/gray_btn.png'/>
                <img className='g_btn' src='img/gray_btn.png'/>
            </div>
            <img className='b_btn' src='img/blue_btn.png'/>
        </div>
    )
}

export default menupage;