async function getAll(){
    let url = `http://127.0.0.1:4400/`;
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
}

async function add(){
   let url = `http://127.0.0.1:4400/add`;
   let data ={message : "HardCoded"};

   await fetch (url, {
    method : "post",
    body:JSON.stringify(data),
    headers:{
        "Content-Type" : "application/json",
    },
   });
}