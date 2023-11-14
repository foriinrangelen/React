function AppSample() {
    let now = new Date();
    const a = now.getFullYear()
    const b = now.getMonth() + 1
    const c = now.getDate()
    let d = prompt('이름을 입력하세요!')
    let text = ''
    if (b === 3 || b === 4 || b === 5) text = '봄';
    if (b === 6 || b === 7 || b === 8) text = '여름';
    if (b === 9 || b === 10 || b === 11) text = '가을';
    if (b === 12 || b === 1 || b === 2) text = '겨울';
    console.log(text)

    return (
        <div>
            {/* <div>Hello AppSample</div> */}
            <h1>{a}.{b}.{c}</h1>
            <hr></hr>
            <h2>{d}님 지금은 {text}입니다. 좋은하루 보내세요😊</h2>
        </div>
    )

}

export default AppSample