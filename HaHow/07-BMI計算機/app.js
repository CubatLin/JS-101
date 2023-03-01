// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
function BMI_Calculus(h, w){    
    return w / (h**2)
}


document.addEventListener('DOMContentLoaded', () => {
    let height = document.querySelector('#bodyHeight')
    let weight = document.querySelector('#bodyWeight')
    let bmi_res = document.querySelector('#resultText')
    let btn = document.querySelector('button')
    
        btn.addEventListener('click', () => {
            let h = Number(height.value) /100
            let w = Number(weight.value)
            bmi_res.textContent = BMI_Calculus(h, w).toFixed(2) // 取到小數點第二位, 但會強制轉成字串
        })
})



