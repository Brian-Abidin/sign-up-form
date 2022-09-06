const form = document.querySelector(".formbg")
const first = document.querySelector(".first")
const image = document.querySelector("img")

const observer = new ResizeObserver(entries => {
console.log(entries)
    const formElement = entries[0]
    const firstElement = entries[1]
    const imageElement = entries[2]
    const isResized = formElement.contentRect.height > 350
    firstElement.target.style.paddingTop = isResized ? "0vh" : "24vh"
    imageElement.target.style.height = isResized ? "100vh" : "100vh"
})

observer.observe(form)
observer.observe(first)
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

document.getElementById("submitbtn").addEventListener("click", function(){
    document.getElementById("form").className="submitted";
})