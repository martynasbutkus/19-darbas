const table = document.getElementById("list")
const checkbox = document.querySelector("input[type='checkbox']")
    
checkbox.addEventListener("change", function () {
fetch('https://polar-chartreuse-silverfish.glitch.me/')
.then(res => res.json())
.then(data => {
    const filteredData = checkbox.checked ? data.filter(item => item.vip === true) : data
    updateList(filteredData)
})
})

fetch('https://polar-chartreuse-silverfish.glitch.me/')
.then(res => res.json())
.then(data => {
    updateList(data)
})
    
function updateList(data) {
    table.innerHTML = ""
    
    for (let i = 0; i < data.length; i++) {
        const id = data[i].id
        let name = data[i].name
        let fav_color = data[i].fav_color
        let vip = data[i].vip
        let image = data[i].image
    
        const listItem = document.createElement("div")
        listItem.innerHTML = `
        <img src="${image}" alt="${name} Image">
        <div class="people">
            <p>ID: ${id}</p>
            <p>Name: ${name}</p>
            <p>Favorite Color: ${fav_color}</p>
            <p>VIP: ${vip}</p>
        </div>
        `
        table.appendChild(listItem)
    }
}
  