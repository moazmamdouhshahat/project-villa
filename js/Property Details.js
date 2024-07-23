// localStorage.clear();  
let allproducts = document.getElementById('allproducts')
let noproduct = document.getElementById('noproduct')
//  console.log(noproduct,allproducts);
// console.log(localStorage);
for (let i = 0; i < localStorage.length; i++) {
  // console.log(localStorage);
  let vlienema = localStorage.getItem(localStorage.key(i))
  let data = JSON.parse(vlienema)
  allproducts.innerHTML += `
      <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
        <img src="${data.image}" class="img-fluid" alt="..."> 
         </div>
         <div class="col-md-8 card-body">
       <div class="">
      <div class=card-title>
        <h6>${data.title}</h6>
        <p> ${data.price}</p>
      </div>
      <div class="link"> <a href="">
          <h5>${data.des}</h5>
        </a></div>
      <div class="Bedrooms mt-2" style="margin-left: 20%;">
      ${data.bed1}
        <i <i class="fa-solid fa-trash-can delete ${data.title}"style="margin-left: 30%; color: black; font-size: 40px;" ></i>
      </div>
      <div class="Bedrooms" style="margin-left: 40px; font-size: 20px; color:black">
      ${data.badrooms}

      </div>
      <div class="border" id="porder6"> </div>
      <a href="#" class="btn" onclick="print(6)">Schedule a visit</a>
    </div>
  </div>
      </div>
    </div>
      `
}

if (allproducts.childElementCount > 0) {
  noproduct.style.display='none'
}
else{noproduct.style.display='block'};


//  delet

document.addEventListener( 'click' ,(e)=> {
  if( e.target.classList.contains('delete') ){
      
    console.log(e.target.classList);
    let productname=e.target.classList[4]
  
    localStorage.removeItem(productname)
      console.log(localStorage);


      //  window.location.reload()
      // // console.log(e.target.classlist);
  }
})