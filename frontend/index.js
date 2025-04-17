const btn = document.querySelectorAll(".card>button");

// extracting button from an array of buttons
btn.forEach(bt => {
    // function for clicking the cutton
    bt.addEventListener('click', () => {
        createModal();
        console.log("Check")
    })
})

function createModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal", "flex")
    const innermodal = document.createElement("div")
    innermodal.classList.add("innermodal")





    modal.appendChild(innermodal)




    console.log(modal)
    document.body.appendChild(modal)
}