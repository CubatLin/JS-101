// 程式碼寫在這裡

//-------------------------------------------//
// //wrong version
// let num = document.querySelector('#counter')
// const plus = document.querySelector('#plus')
// const minus = document.querySelector('#minus')

// function result(num, action){
//     if (action == plus){
//         num = num+1
//         return num 
//     }
//     else if (action == minus){
//         num = num -1 
//             if (num<=0){return 0}            
//             else {return num}
//     }
// }

// plus.addEventListener('click',result())
// minus.addEventListener('click',result())
//-------------------------------------------//

//-------------------------------------------//
// //wrong version
// document.addEventListener('DOMContentLoaded',()=>{
//     let num = document.querySelector('#counter')
//     const plus = document.querySelector('#plus')
//     const minus = document.querySelector('#minus')

//     plus.addEventListener('click',()=>{
//         num = Number(num)+1        
//         })

//     minus.addEventListener('click',()=>{
        
//         if (Number(num)>0){
//             num = Number(num)-1        
//         }        
//     })
// })


// CORRECT!
document.addEventListener('DOMContentLoaded',()=>{
    const num = document.querySelector('#counter')
    const plus = document.querySelector('#plus')
    const minus = document.querySelector('#minus')

    plus.addEventListener('click',()=>{
        let v = Number(num.value)
        v = v + 1
        num.value=v
    })

    minus.addEventListener('click',()=>{
        let v = Number(num.value)
        if (v>0){
            v = v + 1
            num.value = v         
        }        
    })        
})
