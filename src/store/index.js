import { createStore } from 'redux';

// 引入reducer
import reducer1 from './reducers/reducer1';

// 创建store
const store = createStore(reducer1);
export default store;
