const btn = document.querySelector('#removeBtn')


btn.addEventListener("click", () => {
    const lastOne = document.querySelector
    ("li:last-child")

    if (lastOne){
        lastOne.remove()
    }
})