import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const {id} = useParams();
  return (
    <div><br />Post {id}</div>
  )
}

export default Post