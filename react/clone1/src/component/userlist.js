import './userlist.css'
import {Link, useNavigate} from 'react-router-dom';

function userlist() {
    // let navigate= useNavigate();
    return (
        <div className='table_content'>
        <div className="search_bar">
            <button className='user_list_btn'>User List</button>
            <img src="img\search_box.png"></img>
        </div>
        <table>
            <tr>
                <th>NAME</th>
                <th>CONTRACT ADDRESS</th>
                <th>GRADE</th>
                <th>INFO</th>
            </tr>
            {/* {
                props.state.map((a,i)=>{
                    return(
                        <tr key={i}>
                            <td><img classname='userimg' src={'img/user'+i+'.png'}/><span className='img_text'>{a.name}</span></td>
                            <td>{a.serial}</td>
                            <td>{a.grade}</td>
                            <td><img onClick={()=>{history.push('/info/'+i)}} src='img/viewmore.png'/></td>
                        </tr>
                    )
                })
            } */}
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
        <img className='user_b_btn' src='img/user_edit.png'/>
    </div>
    )
}

export default userlist;