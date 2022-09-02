const form = document.querySelector(".form")
const header = document.querySelector(".header")
const image = document.querySelector("img")

const observer = new ResizeObserver(entries => {
console.log(entries)
    const formElement = entries[0]
    const headerElement = entries[1]
    const imageElement = entries[2]
    const isResized = formElement.contentRect.height > 350
    headerElement.target.style.paddingTop = isResized ? "0vh" : "24vh"
    imageElement.target.style.height = isResized ? "100vh" : "124vh"
})

observer.observe(form)
observer.observe(header)
observer.observe(image)

function verifyPassword(){
    const password = document.querySelector("input[name=pass]");
    const confirm = document.querySelector("input[name=cpass]");
    if(password.value == confirm.value){
        confirm.setCustomValidity('');
    } else {
        confirm.setCustomValidity('Passwords do not match');
    }
}
