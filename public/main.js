const deleteBtns = document.querySelectorAll('.fa-xmark')
const updateBtn = document.querySelector('.updateInfo')

deleteBtns.forEach(btn => btn.addEventListener('click', () => {
    deleteBook(btn)
}))

updateBtn.addEventListener('click', updateDetails)


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
    } catch (err) {
        console.error(err)
    }

}


async function updateDetails() {
    let name = document.querySelector('input[name="nameChange"]').value.trim()
    let authorNew = document.querySelector('input[name="authorChange"]').value.trim()
    let locationNew = document.querySelector('input[name="locationChange"]').value.trim()
    let categoryNew = document.querySelector('input[name="categoryChange"]').value.trim()
    console.log(name, author, location, category)
    const response = await fetch('/updatedetails', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            author: authorNew,
            location: locationNew,
            category: categoryNew
        })
    })
    let data = await response.json()
    console.log(data)
    location.reload()
}