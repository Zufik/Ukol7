const form = document.querySelector("form")
const textovePolicko = document.querySelector ("input")

const register = (evt) => {
    evt.preventDefault ()
    const input = document.querySelector("input")
    const email =input.value
    form.textContent = "A je to doma!!!"
}

const redBoarder = (evt) => {
    if (textovePolicko.value === "" || !textovePolicko.value.includes ("@")){
        textovePolicko.classList.add("redBoarder")
        console.log("chyba")
    } else {
        textovePolicko.classList.remove ("redBoarder")

    }
}

form.addEventListener ("submit",register )
textovePolicko.addEventListener ("input",redBoarder)

