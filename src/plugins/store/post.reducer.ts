import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PostState {
	id: number
	body: string
	title: string
	userId: number
}

const initialState: {
	postList: PostState[]
} = {
	postList: []
}

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		SET_POST_LIST: (state, { payload }: PayloadAction<PostState[]>) => {
			state.postList = payload
		}
	}
})

// Action creators are generated for each case reducer function
export const { SET_POST_LIST } = postSlice.actions

export default postSlice.reducer
