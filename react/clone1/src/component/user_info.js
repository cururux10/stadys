import './user_info.css'
import { CopyToClipboard } from "react-copy-to-clipboard";

function user_info(){
    return(
        <div className='table_content'>
            <div className="search_bar">
                <button className='user_info_btn'>User Info</button>
            </div>
            <div>
                <img className='user_label' src='/img/user.png'/>
                <span className='img_text'>menber_1NFT</span>
            </div>
            <div className='line'></div>
            <div className='input_box_list'>
                <div class="row">
                    <div className='input_label'>Name</div> 
                    <div className="input_text_bind">member_1NFT</div>
                </div>
                <div class="row">
                    <div className='input_label'>Contract</div> 
                    <div className='input_text_bind'>0x898f2afc07924f5a4f9612449e4c4f8
                        <CopyToClipboard text="0x898f2afc07924f5a4f9612449e4c4f8">
                                <img className='text_copy_btn' src='/img/copy.png'/>
                        </CopyToClipboard>
                    </div>
                </div>
                <div class="row">
                    <div className='input_label'>Grade</div> 
                    <div className='input_text_bind'>User</div>
                </div>
                <div class="row">
                    <div className='empty_space'>*Business Info</div>
                </div>
                <div class="row">
                    <div className='input_label'>Business Name</div> 
                    <div className='input_text_bind'>NFT Company</div>
                </div>
                <div class="row">
                    <div className='input_label'>Business Number</div> 
                    <div className='input_text_bind'>106-81-85412</div>
                </div>                
                <div class="row">
                    <div className='input_label'>Business Contact</div> 
                    <div className='input_text_bind'>02-125-4568</div>
                </div>                
            </div>
            <img className='List_btn' src='/img/List_btn.png'/>            
        </div>
    )
}

export default user_info;