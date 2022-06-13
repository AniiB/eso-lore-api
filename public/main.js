let deleteBtns = document.querySelectorAll('.fa-xmark')

deleteBtns.forEach(btn => btn.addEventListener('click', () => {
    deleteBook(btn)
}))


async function deleteBook(btn) {
    try {
        let name = btn.parentElement.firstElementChild.innerText

        const response = await fetch('/deletebook', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        })

        let data = await response.json()
        console.log(data)
        location.reload()
    } catch(err) {
        console.error(err)
    }

}