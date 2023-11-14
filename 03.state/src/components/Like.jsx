import React from 'react'
import { useState } from 'react'

const Like = () => {
  const [heart, setHeart] = useState('🤍')
  const [count, setCount] = useState(0)

  const heartChange = () => {
    if (count === 0) {
      setCount(count + 1)
      setHeart('❤️')
    } else {
      setHeart('🤍')
      setCount(count - 1)
    }
  }
  return (
    <div>
      <span onClick={heartChange}>{heart}</span> 좋아요{count}
    </div>
  )
}

export default Like
