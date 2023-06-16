const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const PORT = 3000

const _path = path.join(__dirname, './4ex_dist')
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))
app.get('/data', (req, res) => {
    const name = req.query.name
    const age = req.query.age
    const gender = req.query.gender
    const content = req.query.content
    const date = req.query.date

    const arrT = ["나이", "성별", "자기소개", "가입일"]
    const arrC = [age, gender, content, date]

    let list = ``
    // alert 부분
    list += `<script>`
    list += `alert("오늘은 ${date} ${name} 님 환영합니다.")`
    list += `</script>`

    // 표 부분
    list += `<div style="display: flex; align-items: center; flex-direction: column;">`
    list += `<h2><mark>${name}</mark>님 어서오세요</h2>`
    list += `<p style="background-color: red; color: white; font-weight: bold; display: inline-block;">${name}님의 개인정보</p>`
    list += `<table style="border-collapse: collapse; text-align: center;">`
    for(let i = 0; i<arrC.length; i++){
        list += `<tr style="border: 1px solid black;">
        <td style="border: 1px solid black; background-color: plum;">${arrT[i]}</td>
        <td style="border: 1px solid black;">${arrC[i]}</td></tr>`
    }
    list += `</table>`
    list += `</div>`
    
    // 모달창
    list += `<div class="modal" style="background-color: plum; display: none">`
    list += `<div id="modal_body">`
    list += `<div id="name"><span>이름</span><span id="nameIn">${name}</span></div>`
    list += `<div id="age"><span>나이</span><span id="ageIn">${age}</span></div>`
    list += `<div id="gender"><span>성별</span><span id="genderIn">${gender}</span></div>`
    list += `<div id="content"><span>내용</span><span id="contentIn">${content}</span></div>`
    list += `<div id="date"><span>날짜</span><span id="dateIn">${date}</span></div>`
    list += `<div id="close"><button id="modalclo">닫기</button></div>`
    list += `</div></div>`
    list += `<button id="modalop">모달창열기</button>`
    // 모달창 스크립트 구문
    list += `<script>
        const modal = document.querySelector(".modal");
        const btnop = document.getElementById("modalop");
        const btnclo = document.getElementById("modalclo");
        btnop.addEventListener("click", () => {
            modal.style.display = "inline-block";
        });
        btnclo.addEventListener("click", () => {
            modal.style.display = "none";
        });
        </script>`

    res.send(list)
})

app.listen(PORT, () => {
    console.log(`너의 서버는? ${PORT}!`)
})
