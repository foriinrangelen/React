import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import todoRudecer from './reducers/todoSlice'


import logger from 'redux-logger'
// 하나의 app 에 하나의 store
export default configureStore({
    reducer: {
        todo: todoRudecer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})