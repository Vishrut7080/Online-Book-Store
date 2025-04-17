const btn = document.querySelectorAll(".card>button");

btn.forEach(bt => {
    bt.addEventListener('click', () => {
        console.log("Check");
    })
})
