const form = document.querySelector(".form")
const header = document.querySelector(".header")

const observer = new ResizeObserver(entries => {
console.log(entries)
    const formElement = entries[0]
    const headerElement = entries[1]
    const isResized = formElement.contentRect.height > 350
    headerElement.target.style.paddingTop = isResized ? "0vh" : "24vh"
})

observer.observe(form)
observer.observe(header)
