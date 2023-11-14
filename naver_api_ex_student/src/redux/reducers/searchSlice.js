import { createSlice } from "@reduxjs/toolkit";

// createSlice(): state,reducer 함수를 정의하는 함수
// - state 초기화
// - state 변경하는 함수 정의 => reducer

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: []
    },
    reducers: {
        // reduer 함수 정의 시, 매개변수에 반드시 state 정의
        // 정의한 state는 initialState에 접근할 수 있음
        addSearch: (state, action) => {
            state.search = state.search.concat(action.payload)
            console.log("현재 배열값", state.search)
        }
    },



    // 넘겨받은 숫자를 이용해서 state를 변경하는 함수 정의하기
    // action=> { type, payload } 형태로 반환
    // type: 명령타입 ex) 숫자를 증가해라(increment), 감소해라(decrement)
    // payload: 외부로부터 넘겨받은 데이터를 저장하는 속성

})
// 컴포넌트에서 reducer함수를 실행할 수 있게 내보내기
// export const { increment, decrement, increment2, incrementByAmount } = counterSlice.actions
export const searchReducerActions = searchSlice.actions

// store에서 접근할 수 있도록 내보내기
export default searchSlice.reducer