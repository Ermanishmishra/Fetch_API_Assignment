let container = document.getElementById("container");

async function fetchData(){
    // console.log("hello");

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos")
        let data = await res.json()

        // console.log(data);
        showData(data)
    } catch (error) {
        console.log(error)
    }
}

function showData(data){
    data.forEach((element) => {
        let subDiv = document.createElement("div")
        subDiv.className = "sub"
        let h4 = document.createElement("h4");
        h4.innerHTML = element.title;

        let checkbox = document.createElement("input")

        checkbox.setAttribute("type","checkbox")

        checkbox.checked = element.completed;

        subDiv.append(h4,checkbox)

        container.append(subDiv)
    });
}