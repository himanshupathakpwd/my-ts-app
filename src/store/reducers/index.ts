import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from '../slices';

const rootReducer = combineReducers({
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
// {posts: PostsState, comments: CommentsState, users: UsersState}

export default rootReducer;
