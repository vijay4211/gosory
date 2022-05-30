// Add the coffee to local storage with key "coffee"
// https://masai-mock-api.herokuapp.com/coffee/menu




const url = "https://masai-mock-api.herokuapp.com/coffee/menu";


fetch(url)

.then(function(res){
    // console.log(res)
    return res.json()
})
.then(function(res){
    // console.log(res)
  let data = res.menu.data
//   console.log(data)

append(data)

})
.catch(function(err){
    console.log(err)
})


function append(data)
{
    console.log(data)

data.forEach(function(el,index){


    let div = document.createElement("div")
    let image = document.createElement("img")
    image.src = el.image

    let title = document.createElement("p")
    title.innerText = el.title

    let price = document.createElement("p")
    price.innerText.el.price

    let btn = document.createElement("button")
    btn.innerText ="Add to Bucket"
    btn.addEventListener("click",function(){
        addItem(el,index)
    })

    div.append(image.title,price,btn)

    document.getElementById("menu").append(div)


})

}

function addItem(el,index)
{
    
}



// description: "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy."
// id: 10
// image: "https://images.unsplash.com/photo-1623859763838-a304cbfd4901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
// ingredients: ['Long pulled espresso']
// price: 765
// title: "Lungo"