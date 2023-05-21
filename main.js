async function getAll(){
    let url = `http://127.0.0.1:4400/`;
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
  
    //DOM Operation
    for(let item of data){
    let parent = document.querySelector("#parent");
    let existingElement = parent.innerHTML;
    let newElement = `<h1>${item.message}</h1>`;

    parent.innerHTML = newElement + existingElement;
    }
}

async function add(){
    let inputTodoTag =  document.querySelector("#todoid");
    let todoValue = inputTodoTag.value || "hardCoded";
   
    let url = `http://127.0.0.1:4400/add`;
   let data ={message : todoValue};

   await fetch (url, {
    method : "post",
    body:JSON.stringify(data),
    headers:{
        "Content-Type" : "application/json",
    },
   });

   //clear the box
   inputTodoTag.value = "";

   //refresh
   getAll();

}