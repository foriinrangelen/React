import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ContactReducerActions } from '../Redux/reducers/contactSlice'
import { v4 as uuidv4 } from 'uuid'

const ContactForm = () => {
  const dispatch = useDispatch()
  let nameRef = useRef()
  let telRef = useRef()

  const userInfo = () => {
    let a = nameRef.current.value
    let b = telRef.current.value
    console.log(a)
    console.log(b)
    dispatch(
      ContactReducerActions.addContact({ id: uuidv4(), name: a, phone: b })
    )
  }
  return (
    <div>
      <h1>연락처 App</h1>
      <input type="text" ref={nameRef} />
      <br />
      <input type="text" ref={telRef} />
      <br />
      <button onClick={userInfo}>등록</button>
    </div>
  )
}

export default ContactForm

// const Ex02 = () => {
//   let idRef = useRef()
//   let pwRef = useRef()
//   const allRight24 = () => {
//     let a = idRef.current.value
//     let b = pwRef.current.value
//     if (a === 'smart' && b === '1234') alert(`환영합니다~! ${a}님`)
//     else alert('로그인 실패...')
//   }

//   return (
//     <div>
//       <form>
//         id
//         <input type="text" ref={idRef} />
//         <br />
//         pw
//         <input type="text" ref={pwRef} />
//         <input type="button" value="로그인" onClick={allRight24} />
//       </form>
//     </div>
//   )
// }
