import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchuser } from '../redux/contentSlice'

export const Content = () => {
    const dispatch = useDispatch()
    const contentData = useSelector((state) => state.content)
    console.log(contentData)

    useEffect(() => {
        // console.log('useEffect...')
        dispatch(fetchuser())
    }, [])
    return (
        <div>
            <h1>Content....</h1>
            {
                contentData.isLoading && <h1>Loading...</h1>
            }
        </div>
    )
}
