
import './Notice.css';

function Notice() {
    return (
        <div className="table_content">
           <div className="search_bar">
              <img src="img\notice.png"></img>
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
        </div>
    )
}

export default Notice;