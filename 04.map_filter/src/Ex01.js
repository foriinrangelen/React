import React, { useState } from 'react'
import memberList from './data/members.json'

const Ex01 = () => {
    console.log(memberList)


    const [members, setMembers] = useState(memberList)


    return (
        <div>
            {members.map(item => (
                <p key={item.id}>
                    <span>이름:{item.name}</span><br />
                    <span>업무:{item.task}</span>
                </p>
            ))}
        </div>
    )
}

export default Ex01