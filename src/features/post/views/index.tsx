// React
import { useState, useEffect, useCallback } from 'react'

// React Router DOM
import { useNavigate } from 'react-router'

// Custom Hooks
import { useRequestSaver } from '../../app/hooks/request-saver'
import { useAppDispatch } from '../../../plugins/store/hook'
import { getPostList } from '../../../plugins/store/post.slice'

const PostIndex = () => {
	// Common State
	const [isFirstTimeLoaded, setIsFirstTimeLoaded] = useState(true)

	// Navigation
	const navigate = useNavigate()

	// Hooks
	const requestSaver = useRequestSaver()
	const dispatch = useAppDispatch()

	/**
	 * @description Load post list
	 *
	 * @return {Promise<void>} Promise<void>
	 */
	const fetchPostList = useCallback(async (): Promise<void> => {
		try {
			await dispatch(
				getPostList({
					...requestSaver.requestSaverSetCancellation('FETCH_POST_LIST')
				})
			).unwrap()
		} catch (_) {
			//
		}
	}, [dispatch, requestSaver])

	/**
	 * @description Fetch initial when first time came to this page
	 *
	 * @return {Promise<void>} Promise<void>
	 */
	const fetchInitial = useCallback(async (): Promise<void> => {
		try {
			await fetchPostList()
		} finally {
			setIsFirstTimeLoaded(false)
		}
	}, [fetchPostList])

	// Do when user came to this page
	useEffect(() => {
		if (isFirstTimeLoaded) fetchInitial()

		// Do when user came out from this page
		return () => {
			if (!isFirstTimeLoaded) requestSaver.requestSaverAbortAll()
		}

		// eslint-disable-next-line
	}, [isFirstTimeLoaded])

	return (
		<div className='card'>
			<h1>Hey, you in Post page</h1>

			<div className='force-center'>
				<button type='button' onClick={() => navigate('/')}>
					Back To Home
				</button>
				<button type='button' onClick={() => navigate('/todos')}>
					Go To Todo
				</button>
			</div>
		</div>
	)
}

export { PostIndex }
