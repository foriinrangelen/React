import React, { useRef } from 'react'

const Ex01 = () => {

    let inputRef = useRef('')

    const handleClick = () => {
        let input = document.querySelector('input[type="text"]')
        console.log(input.value)

    }
    const handleClick2 = () => {
        console.log(inputRef)
        console.log(inputRef.current.value)

    }


    return (
        <div>
            <form>
                <input type="text" />
                <input type="button" value="클릭" onClick={handleClick} />
            </form>
            <form>
                <input type="text" ref={inputRef} />
                <input type="button" value="클릭" onClick={handleClick2} />
            </form>
        </div>
    )
}

export default Ex01