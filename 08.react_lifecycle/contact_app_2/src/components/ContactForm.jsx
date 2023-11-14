import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ContactReducerActions } from '../redux/reducers/contactSlice'
import { v4 as uuidv4 } from 'uuid'

const ContactForm = () => {
  const dispatch = useDispatch()

  //1.여러 개의 input의 값을 접근해야 할 경우 useRef()를 배열로 초기화!
  const inputRef = useRef([])

  const handleSubmit = (e) => {
    // submit 이벤트 기능 막기
    e.preventDefault()

    //3.inputRef.current[인덱스]로 input요소 값 접근!
    dispatch(
      ContactReducerActions.addContact({
        id: uuidv4(),
        name: inputRef.current[0].value,
        phone: inputRef.current[1].value,
      }),
    )

    inputRef.current[0].value = ''
    inputRef.current[1].value = ''
    inputRef.current[0].focus()
  }

  return (
    <div>
      <form className="contact-form">
        <p>
          {/* 2.inputRef 연결 시, 배열의 인덱스를 이용해서 event객체를 저장 */}
          <input
            type="text"
            placeholder="이름을 입력해주세요."
            ref={(e) => (inputRef.current[0] = e)}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="전화번호를 입력해주세요."
            ref={(e) => (inputRef.current[1] = e)}
          />
        </p>
        <p>
          <input type="submit" onClick={handleSubmit} value="등록" />
        </p>
      </form>
    </div>
  )
}

export default ContactForm
