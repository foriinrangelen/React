import React from 'react'
import {useSelector} from 'react-redux'
import SerachBox from './SerachBox';
import ContactItem from './ContactItem';
import { useState } from 'react';
import { useEffect } from 'react';

const ContactList = () => {

  // store에서 특정 state가 아닌 모두 가져와야 할 경우 reducer접근까지만 한다!
  // state.contact -> contactReducer에 정의된 initialState 모두 접근
  // 객체형태로 정의되어 있기 때문에 구조분해로 각각 받아와서 저장한다
  const {contacts, keyword} = useSelector(state=>state.contact)

  // contacts state의 원본데이터를 훼손하면 안되기 때문에
  // 검색키워드에 따라 리스트가 달라지도록 filter state를 정의해줘야 한다
  const [filter, setFilter] = useState([])

  console.log(contacts, keyword);

  // 연락처 추가 또는 검색 시 state 변화를 감지하여 filter stated의 값을 업데이트해줘야 한다.
  useEffect(()=>{
    if(keyword===''){
        setFilter(contacts)
    }else{
        let list = contacts.filter((item)=>item.name.includes(keyword))
        setFilter(list)
    }
  },[contacts,keyword])

  return (
    <div className='contact-list-box'>
        <SerachBox/>
        총 연락처:{filter.length}
        <hr></hr>
        {filter.map((item)=>(
            <ContactItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default ContactList