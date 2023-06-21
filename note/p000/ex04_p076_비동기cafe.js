/* 주문받은대로 처리하기 */
// 주문1) 1.7초만에 아메리카노가 나왔습니다. (1 ~ 2초 사이의 랜덤값)
// 주문2) 3.5초만에 라떼가 나왔습니다. (2 ~ 3.5초 사이의 랜덤값)
// 주문3) 4.1초만에 카푸치노가 나왔습니다. (3 ~ 5초 사이의 랜덤값)
// 주문4) 2.2초만에 에스프레소가 나왔습니다. (2 ~ 3초 사이의 랜덤값)
// Math.random() => 0 ~ 0.99999...

const 아메리카노 = () => {
    return new Promise((res, rej) => {
        const delay = Math.random() * (2 - 1) + 1
        setTimeout(() => {
            console.log('주문하신 아메리카노입니다', '소요시간 : ' + delay.toFixed(2) + '초')
            res(1)
        }, delay*1000)
    })
}

const 라떼 = () => {
    return new Promise((res, rej) => {
        const delay = Math.random() * (3.5 - 2) + 2
        setTimeout(() => {
            console.log('주문하신 라떼입니다', '소요시간 : ' + delay.toFixed(2) + '초')
            res(2)
        }, delay*1000)
    })
}

const 카푸치노 = () => {
    return new Promise((res, rej) => {
        const delay = Math.random() * (5 - 3) + 3
        setTimeout(() => {
            console.log('주문하신 카푸치노입니다', '소요시간 : ' + delay.toFixed(2) + '초')
            res(3)
        }, delay*1000)
    })
}

const 에스프레소 = () => {
    return new Promise((res, rej) => {
        const delay = Math.random() * (3 - 2) + 2
        setTimeout(() => {
            console.log('주문하신 에스프레소입니다', '소요시간 : ' + delay.toFixed(2) + '초')
            res(4)
        }, delay*1000)
    })
}

아메리카노().then(라떼).then(카푸치노).then(에스프레소)