document.querySelector('#button').addEventListener('click', findDetail)

async function findDetail() {
    let name = document.querySelector('.name').value.toLowerCase()

    try {
        const response = await fetch(`http://localhost:8000/api/actors/${name}`)
        const data = await response.json()

        console.log(data)
        // document.querySelector('h2').innerText = data.birthName
    } catch (err) {
        console.log(err)
    }
}
