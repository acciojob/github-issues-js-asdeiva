// // Add the API URL
// const url = "https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5";
// // To fetch data from an API using .then

// let pageNo = document.querySelector('.page')
// let dis = document.getElementById('errorDisp')
// let prevBtn = document.getElementById('load_prev')
// let nextBtn = document.getElementById('next_prev')

// var pageNumber = 1;

// async function fetchData(pageNumber) {
//   const response = await fetch(
//     `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`
//   );
//   const data = await response.json();
//   pageNo.innerHTML = `Page Number : ${pageNumber}`
//   let key = Object.keys(data[0])
//   let val = Object.values(data[0])
//   display(data,key,val)
//   console.log("DATA",data, key, val);
  
  
// }

// fetchData(1)

// prevBtn.onclick = ()=>{
//   if (pageNumber == 2) {
//     disableButton(prevBtn)
//   } else {
//     enableButton(prevBtn)
//   }
//   pageNumber--;
//   pageNo.innerHTML = `Page Number : ${pageNumber}`
//   fetchData(pageNumber);
// }

// function display(data,key, val){

//   // dis.innerHTML = `<li>${key[0]} : ${val[0]}</li>`
//   for (let i = 0; i < data.length; i++) {
//     dis.innerHTML = `<li>${key[i]} : ${val[i]}</li>`
//   }  
// }

// nextBtn.onclick = ()=>{
//   pageNumber++;
//   if (pageNumber == 2) {
//     enableButton(prevBtn)
//   }
//   pageNo.innerHTML = `Page Number : ${pageNumber}`
//   fetchData(pageNumber);
// }

// function disableButton(btn) {
//   console.log("btn disabled");
//   btn.disabled = true;
// }

// function enableButton(btn) {
//   console.log("btn enabled");
//   btn.disabled = false;
// }


let dis = document.getElementById('errorDisp')
const pageNumberH3 = document.querySelector('.page')
var pageNumber = 1;

async function fetchData(pageNumber) {
  const response = await fetch(
    `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`
  );
  const data = await response.json();
  console.log("DATA", data);
  let key = Object.keys(data)
  let val = Object.values(data)
  display(data, key,val)
}
function display(data,key,val){
console.log(pageNumber);
    // dis.innerHTML = `<li>${key[0]} : ${val[0]}</li>`
    for (let i = 0; i < data.length; i++) {
      dis.innerHTML = `<li>${key[i]} : ${val[i]}</li>`
    }  
  }
function loadNext() {
  pageNumber++;
  console.log(pageNumber);
  if (pageNumber == 2) {
    document.getElementById("load_prev").disabled = false;
  }
  pageNumberH3.innerHTML = `Page Number : ${pageNumber}`;
  fetchData(pageNumber);
}

function loadPrev() {
  console.log(pageNumber);
  if (pageNumber == 2) {
    document.getElementById("load_prev").disabled = true;
  } else {
    document.getElementById("load_prev").disabled = false;
  }
  pageNumber--;
  pageNumberH3.innerHTML = `Page Number : ${pageNumber}`;
  fetchData(pageNumber);
}

fetchData(1);