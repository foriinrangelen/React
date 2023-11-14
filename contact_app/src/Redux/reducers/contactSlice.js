import { createSlice } from "@reduxjs/toolkit";
// createSlice(): state,reducer 함수를 정의하는 함수
// - state 초기화
// - state 변경하는 함수 정의 => reducer

// name: reducer의 특정이름을 정의하는 속성
// initialState: state를 초기화하는 속성
// reducers: 컴포넌트에서 state변경요청 시 수행하는 Action기능을 정의하는 속성
export const contactSlice = createSlice({
    name: 'contact',
    // initialState:0 도 가능
    initialState: {
        contacts: [],
        keyboard: ""
    },
    reducers: {
        // reduer 함수 정의 시, 매개변수에 반드시 state 정의
        // 정의한 state는 initialState에 접근할 수 있음
        addContact: (state, action) => {
            state.contacts = state.contacts.concat(action.payload)
            console.log("액션페이로드", action.payload)
            console.log("현재 배열값", state.contacts)

        },
        SearchContact: (state, action) => {

        },


        // 넘겨받은 숫자를 이용해서 state를 변경하는 함수 정의하기
        // action=> { type, payload } 형태로 반환
        // type: 명령타입 ex) 숫자를 증가해라(increment), 감소해라(decrement)
        // payload: 외부로부터 넘겨받은 데이터를 저장하는 속성
        incrementByAmount: (state, action) => {
            console.log('counterSlice action: ', action)
            state.count += action.payload.num
        }
    }
})
// 컴포넌트에서 reducer함수를 실행할 수 있게 내보내기
// export const { increment, decrement, increment2, incrementByAmount } = counterSlice.actions
export const ContactReducerActions = contactSlice.actions

// store에서 접근할 수 있도록 내보내기
export default contactSlice.reducer
