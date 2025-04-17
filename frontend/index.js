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
    innermodal.classList.add("innermodal", "flex")
    innermodal.innerHTML = `<div id="modal-image">
                              <img src="" alt="">
                          </div>
                          <div id="modal-detials">
                              <p><div>Hello</div></p>
                          </div>`




    modal.appendChild(innermodal)




    console.log(modal)
    document.body.appendChild(modal)
}

