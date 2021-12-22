import axios from 'axios'
import React, { useState, useEffect } from 'react'

function SingleDataFetch() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleClick}>Change Title</button>
            <div>{post.title}</div>
        </div>
    )
}

export default SingleDataFetch
