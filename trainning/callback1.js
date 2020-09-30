function getData(callback){
setTimeout(() => {
    console.log("get data");
    callback()
}, 3000);
}

function showData(){
    console.log("show data");
}

getData(() => {
    showData()
})