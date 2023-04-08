import {Col} from 'react-bootstrap';

function Card(props) {
    return (
      <Col className="col">
                {/* <img src={process.env.PUBLIC_URL + '/shoes1.jpg'} width="80%"/> 
                위와같이 짜는게 public폴더 이미지 쓰는 권장방식 */}
                <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) +'.jpg'} width="80%" />
                <h4>{props.shoes.title}</h4>
                <p>{props.shoes.content}</p>
      </Col>
  
  )
  }

export default Card