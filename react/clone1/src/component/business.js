import './business.css';
import {Link} from 'react-router-dom';

function business(){
    return (
        <div className='table_content'>
            <div className="search_bar">
                <button className='busi_btn'>Business registration List</button>
            </div>
            <table>
                <tr>
                    <th>NAME</th>
                    <th>BUSINESS NAME</th>
                    <th>APPLICATION DATE</th>
                    <th>INFO</th>
                </tr>
                <tr>
                    <td><img classname='userimg' src='img/user.png'/><span className='img_text'>menber_1NFT</span></td>
                    <td>NFT-COMPANY-1</td>
                    <td>2021-12-03</td>
                    <td><Link to='info'><img src='img/viewmore.png'/></Link></td>
                </tr>
                <tr>
                    <td><img classname='userimg' src='img/user.png'/><span className='img_text'>menber_1NFT</span></td>
                    <td>NFT-COMPANY-2</td>
                    <td>2021-12-02</td>
                    <td><Link to='info'><img src='img/viewmore.png'/></Link></td>
                </tr>
            </table>
            <Link to='registration'><img className='b_btn' src='img/business_regi.png'/></Link>
        </div>
    )
}

export default business;