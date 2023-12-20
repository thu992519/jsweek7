


let data = [
   
];
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
.then((res) => {
// console.log(res);
data=res.data.data;
// console.log(data);
render(data);
showChart(data);

});

function render(){
   let str=` `;
  let list=document.querySelector(".ticketCard-area");
  data.forEach((item,index)=>{
      let content=`<li class="ticketCard">
      <div class="ticketCard-img">
        <a href="#">
          <img src="${item.imgUrl}" alt="">
        </a>
        <div class="ticketCard-region">${item.area}</div>
        <div class="ticketCard-rank">${item.rate}</div>
      </div>
      <div class="ticketCard-content">
        <div>
          <h3>
            <a href="#" class="ticketCard-name">${item.name}</a>
          </h3>
          <p class="ticketCard-description">
          ${item.description}
          </p>
        </div>
        <div class="ticketCard-info">
          <p class="ticketCard-num">
            <span><i class="fas fa-exclamation-circle"></i></span>
            剩下最後 <span id="ticketCard-num">  ${item.group} </span> 組
          </p>
          <p class="ticketCard-price">
            TWD <span id="ticketCard-price"> ${item.price}</span>
          </p>
        </div>
      </div>
    </li>`
    str+=content;
  })
  list.innerHTML=str;
let textcount=document.querySelector("#searchResult-text");
textcount.innerHTML=`本次搜尋共 ${data.length} 筆資料`;

};


// function update(){
//     let obj={};
//     let name=document.querySelectorAll(".ticketCard-name");
//     let imgUrl=document.querySelectorAll(".ticketCard-img img");
//     let area=document.querySelectorAll(".ticketCard-region");
//     let description=document.querySelectorAll(".ticketCard-description");
//     let group=document.querySelectorAll("#ticketCard-num");
//     let price=document.querySelectorAll("#ticketCard-price");
//     let rate=document.querySelectorAll(".ticketCard-rank");
 
//      for(let i=2;i>-1;i--){
//       obj={
//         "id": data.length,
//       "name": name[i].innerHTML,
//       "imgUrl": imgUrl[i].src,
//       "area": area[i].innerHTML,
//       "description": description[i].innerHTML,
//       "group": group[i].innerHTML,
//       "price": price[i].innerHTML,
//       "rate": rate[i].innerHTML,
//       }
//       data.unshift(obj);
//      }
//   }
//   // update();



function init(){
  let str=` `;
  let list=document.querySelector(".ticketCard-area");
  data.forEach((item,index)=>{
      let content=`<li class="ticketCard">
      <div class="ticketCard-img">
        <a href="#">
          <img src="${item.imgUrl}" alt="">
        </a>
        <div class="ticketCard-region">${item.area}</div>
        <div class="ticketCard-rank">${item.rate}</div>
      </div>
      <div class="ticketCard-content">
        <div>
          <h3>
            <a href="#" class="ticketCard-name">${item.name}</a>
          </h3>
          <p class="ticketCard-description">
          ${item.description}
          </p>
        </div>
        <div class="ticketCard-info">
          <p class="ticketCard-num">
            <span><i class="fas fa-exclamation-circle"></i></span>
            剩下最後 <span id="ticketCard-num">  ${item.group} </span> 組
          </p>
          <p class="ticketCard-price">
            TWD <span id="ticketCard-price"> ${item.price}</span>
          </p>
        </div>
      </div>
    </li>`
    str+=content;
  })
  list.innerHTML=str;
let textcount=document.querySelector("#searchResult-text");
textcount.innerHTML=`本次搜尋共 ${data.length} 筆資料`;
}
//   init();




//   function newdata(){
//     let obj={};
//     let form=document.querySelector(".addTicket-form");
//      obj={
//         "id": data.length,
//       "name": form.elements['套票名稱'].value,
//       "imgUrl": form.elements['圖片網址'].value,
//       "area": form.elements['景點地區'].value,
//       "description": form.elements['套票描述'].value,
//       "group": form.elements['套票組數'].value,
//       "price": form.elements['套票金額'].value,
//       "rate": form.elements['套票星級'].value
//     }
//     console.log(obj);
//     data.push(obj);
//     init();
//   }


const regionSearch = document.querySelector(".regionSearch");
console.log(regionSearch.value);
regionSearch.addEventListener("change",selectrengion );
function selectrengion() {
let count=0;
let str = ``;
let list = document.querySelector(".ticketCard-area")
let obj = {};
if (regionSearch.value === "台北") {

  data.forEach((item, index) => {
    if (item.area === "台北") {
       count++;
      // console.log(count);
      let content = `<li class="ticketCard">
            <div class="ticketCard-img">
              <a href="#">
                <img src="${item.imgUrl}" alt="">
              </a>
              <div class="ticketCard-region">${item.area}</div>
              <div class="ticketCard-rank">${item.rate}</div>
            </div>
            <div class="ticketCard-content">
              <div>
                <h3>
                  <a href="#" class="ticketCard-name">${item.name}</a>
                </h3>
                <p class="ticketCard-description">
                ${item.description}
                </p>
              </div>
              <div class="ticketCard-info">
                <p class="ticketCard-num">
                  <span><i class="fas fa-exclamation-circle"></i></span>
                  剩下最後 <span id="ticketCard-num">  ${item.group} </span> 組
                </p>
                <p class="ticketCard-price">
                  TWD <span id="ticketCard-price"> ${item.price}</span>
                </p>
              </div>
            </div>
          </li>`;
      str += content;
    }
    list.innerHTML = str;
  })
} else if (regionSearch.value === "台中") {
  
  data.forEach((item, index) => {
    if (item.area === "台中") {
       count++;
      // console.log(count);
      let content = `<li class="ticketCard">
            <div class="ticketCard-img">
              <a href="#">
                <img src="${item.imgUrl}" alt="">
              </a>
              <div class="ticketCard-region">${item.area}</div>
              <div class="ticketCard-rank">${item.rate}</div>
            </div>
            <div class="ticketCard-content">
              <div>
                <h3>
                  <a href="#" class="ticketCard-name">${item.name}</a>
                </h3>
                <p class="ticketCard-description">
                ${item.description}
                </p>
              </div>
              <div class="ticketCard-info">
                <p class="ticketCard-num">
                  <span><i class="fas fa-exclamation-circle"></i></span>
                  剩下最後 <span id="ticketCard-num">  ${item.group} </span> 組
                </p>
                <p class="ticketCard-price">
                  TWD <span id="ticketCard-price"> ${item.price}</span>
                </p>
              </div>
            </div>
          </li>`;
      str += content;
    }
    list.innerHTML = str;
  })
} else if (regionSearch.value === "高雄") {
  data.forEach((item, index) => {
    if (item.area === "高雄") {
       count++;
      // console.log(count);
      let content = `<li class="ticketCard">
            <div class="ticketCard-img">
              <a href="#">
                <img src="${item.imgUrl}" alt="">
              </a>
              <div class="ticketCard-region">${item.area}</div>
              <div class="ticketCard-rank">${item.rate}</div>
            </div>
            <div class="ticketCard-content">
              <div>
                <h3>
                  <a href="#" class="ticketCard-name">${item.name}</a>
                </h3>
                <p class="ticketCard-description">
                ${item.description}
                </p>
              </div>
              <div class="ticketCard-info">
                <p class="ticketCard-num">
                  <span><i class="fas fa-exclamation-circle"></i></span>
                  剩下最後 <span id="ticketCard-num">  ${item.group} </span> 組
                </p>
                <p class="ticketCard-price">
                  TWD <span id="ticketCard-price"> ${item.price}</span>
                </p>
              </div>
            </div>
          </li>`;
      str += content;
    }
    list.innerHTML = str;
  })
}
else{
init();
 count=data.length;
}
 let textcount=document.querySelector("#searchResult-text");
textcount.innerHTML=`本次搜尋共 ${count} 筆資料`;
}

//C3

// console.log(data);
let chartdata={};
function showChart(data){
// console.log(data);
data.forEach((item)=>{
    if( chartdata[item.area]===undefined){
      chartdata[item.area]=1;
    }else{
      chartdata[item.area]+=1;
    }
})
console.log(chartdata["台中"]);
let dataChart=[];
let newArea = Object.keys(chartdata);
// console.log(newArea);
newArea.forEach((item)=>{
  
  let ary=[];
  // console.log(chartdata[item])
  ary.push(item);
  ary.push(chartdata[item]);
 dataChart.push(ary);
})
 console.log(dataChart);

let chart = c3.generate({
  bindto: "#chart",
  data: {
    columns: dataChart,
    type: "donut",
    colors: {
      高雄: "#E68618",
      台北: "#26C0C7",
      台中: "#5151D3"
    }
  },
  donut: {
    title: "套票地區比重",
    width: 20
  },
  tooltip: {
    show: false
  }
});



} 



