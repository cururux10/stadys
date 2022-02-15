import './sales_info.css';

function sales_info(){
    return(
        <div className='table_content'>
            <div className="search_bar">
                <button className='sales_btn_info'>Sales Registration Info</button>
            </div>
            <div className='line'></div>
            <div className='input_box_list'>
                <div class="row">
                    <div className='input_label'>Name</div> 
                    <div className="input_text_bind"><input className='input_text' placeholder='내용을 입력해주세요'/></div>
                </div>
                <div class="row">
                    <div className='input_label'>Contract</div> 
                    <div className='input_text_bind'><input className='input_text' placeholder='내용을 입력해주세요'/></div>
                </div>
                <div class="row">
                    <div className='input_label'>Grade</div> 
                    <div className='input_text_bind'><input className='input_text' placeholder='내용을 입력해주세요'/></div>
                </div>
                <div class="row">
                    <div className='empty_space'>*Business Info</div>
                </div>
                <div class="row">
                    <div className='input_label'>Business Name</div> 
                    <div className='input_text_bind'><input className='input_text' placeholder='내용을 입력해주세요'/></div>
                </div>
                <div class="row">
                    <div className='input_label'>Business Number</div> 
                    <div className='input_text_bind'><input className='input_text' placeholder='내용을 입력해주세요'/></div>
                </div>                
                <div class="row">
                    <div className='input_label'>Business Contact</div> 
                    <div className='input_text_bind'><input className='input_text' placeholder='내용을 입력해주세요'/></div>
                </div>                
                <div class="row">
                    <div className='input_label'>Business Address</div> 
                    <div className='input_text_bind'><input className='input_text' placeholder='내용을 입력해주세요'/></div>
                </div>                
            </div>
            <img className='List_btn' src='/img/List_btn.png'/>
            <img className='Register_btn' src='/img/Register_btn.png'/>
            
        </div>
    )
}

export default sales_info;