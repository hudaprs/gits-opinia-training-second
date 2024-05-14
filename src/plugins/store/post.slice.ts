import { createAsyncThunk } from '@reduxjs/toolkit'
import { PostState, SET_POST_LIST } from './post.reducer'
import { AxiosRequestConfig } from 'axios'
import { axios } from '../axios'

export const getPostList = createAsyncThunk(
	'post/fetchList',
	async (config: AxiosRequestConfig, { dispatch, rejectWithValue }) => {
		try {
			const response = await axios.get('/posts', config)
			const data = response.data as PostState[]

			dispatch(SET_POST_LIST(data))

			return data
		} catch (err) {
			throw rejectWithValue({
				error: err
			})
		}
	}
)
