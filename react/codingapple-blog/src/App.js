


import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, set글제목] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [date, setDate] = useState('7월 5일 발행')
  let [따봉, set따봉] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, set입력값] = useState(0);
  

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color : 'grey', fontSize : '16px'}}>ReactBlog</h4>
      </div>
      
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        set글제목(copy);}}>글수정</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        set글제목(copy);
      }}>정렬</button>
      
      {
        글제목.map(function(a,i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(!modal); setTitle(i)}} >
                {글제목[i]}
                <span onClick={()=>{ set따봉(따봉+1)}}>👍🏻</span>{따봉} 
              </h4>
              <p>{date}</p>
              <button onClick={()=>{
                let copy = [...글제목]
                copy.splice(i, 1);
                set글제목(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{set입력값(e.target.value); console.log(입력값)}}></input>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값)
        set글제목(copy)
      }}>글발행</button>

      {
modal === true ? <Modal color={'orange'} title={title} set글제목={set글제목} 글제목={글제목}/> : null 
}
      
      
      {/* <div className='list'>
      <h4>{글제목[0]} <span onClick={함수}>👍🏻</span> {따봉} </h4>
      <p>{date}</p>
      </div>
      <div className='list'>
      <h4>{글제목[1]}</h4>
      <p>{date}</p> 
      </div>
      <div className='list'>
      <h4 onClick={() => {setModal(!modal)}}>{글제목[2]}</h4>
      <p>{date}</p>
      </div>
      {
        modal === true ? <Modal color={'orange'} title={title} set글제목={set글제목} 글제목={글제목}/> : null 
      } */}
    </div>
  );
}

function Modal(props){

  return (
      <div className='modal' style={{background : props.color}}>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
