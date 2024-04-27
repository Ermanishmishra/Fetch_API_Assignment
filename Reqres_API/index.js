let fetchUserBtn = document.getElementById("fetchUserBtn")

let displayData = document.getElementById("displayData")


fetchUserBtn.addEventListener("click", fetchData)


async function fetchData(){
    
    let res = await fetch("https://reqres.in/api/users?page=2")

    let data = await res.json()
    showData(data.data)
    console.log(data.data);
}


function showData(Array){
    displayData.innerHTML = ""
    Array.forEach((element,i) => {
        displayData.innerHTML += `
        <div class= "user_class">
        <img src="${element.avatar}" alt="">
        <h3 class="Title">${element.first_name}</h3>
        <h4 class="price">${element.last_name}</h4>
        <p class="price">${element.email}</h4>

        </div>
        ` 
    });

}