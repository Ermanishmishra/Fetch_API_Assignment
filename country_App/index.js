let container = document.getElementById("container");

let selectTag = document.getElementById("select")


selectTag.addEventListener("change",function(){
    console.log(selectTag.value);

    fetchData(selectTag.value)
    // showData()
})
async function fetchData(order){

    let API_LINK = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries"
    
    if(order != undefined){

        API_LINK += "?sort=population&order=" + order
    }

    try {
        let res = await fetch(API_LINK)

        let getData = await res.json()
        showData(getData.data)
        console.log(getData.data)
    } catch (error) {
        console.log(error)
        
    }
}


function showData(data){
    container.innerHTML = "";
    data.forEach(function(ele){

        let subDiv = document.createElement("div")

        subDiv.className = "subclass"

        let h3 = document.createElement("h3")

        h3.innerHTML = `Country:- ${ele.country}`;

        let rank = document.createElement("h4")
        
        rank.innerHTML = `Rank:- ${ele.Rank}`;

        let h5 = document.createElement("h5")

        h5.innerHTML = `Population:- ${ele.population}`;

        subDiv.append(rank,h3,h5)

        container.append(subDiv)
    })
}
fetchData()