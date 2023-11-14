import { configureStore } from '@reduxjs/toolkit'
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import searchRudecer from './reducers/searchSlice'


// import logger from 'redux-logger'
// 하나의 app 에 하나의 store
export default configureStore({
    reducer: {
        search: searchRudecer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})