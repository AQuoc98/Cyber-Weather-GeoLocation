// Callback la tinh nang cua ES5 --> handle Async trong JS
// Callback la mot function, duoc goi nhu la 1 tham so cua 1 function khac
// Callback giong nhu mot thang diep vien, no dung doi xem cai ham callService da duoc thuc hien xong hay chua, neu ma callService thuc hien ==> goi printData(), neu chua thi tiep tuc diu
// 
var x;
function callService(callback) {
  setTimeout(() => {
    console.log("callService")
    x = 9;
    callback();
  }, 2000);
}

function printData() {
  console.log("printData")
  console.log("x = ", x)
}

// callService()
// printData()

callService(() => {
  printData()
})

callService(printData)