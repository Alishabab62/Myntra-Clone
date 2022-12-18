let loading=true;
fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((data2)=>{
    console.log(data2);
}).catch((e)=>{
    console.log(e);
}).finally(()=>{
    loading=false;
    console.log("Done");
});
