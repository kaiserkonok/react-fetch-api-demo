import './App.css'
import { useState, useEffect } from 'react'

function Posts() {
  const [posts, setPosts] = useState([])
  const url = 'http://jsonplaceholder.typicode.com/posts/'
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0, 10))
      })
  }, [])
  return (
    <div className="container">
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Posts;