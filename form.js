const form = document.querySelector("form")

const observer = new ResizeObserver(entries => {
console.log(entries)
    const formElement = entries[0]
    const isResized = formElement.contentRect.height > 350
    formElement.target.input.style.width = isResized ? "25vw" : "300px"
})

observer.observe(form)
