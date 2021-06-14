import MessageReducer from "./MessageReducer";
import PostReducer from "./PostReducer";
import SidebarReducer from "./SidebareReducer";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
	PostsPage : PostReducer,
	MessagesPage : MessageReducer,
	sidebar : SidebarReducer
});



let store = createStore(reducers);
export default store