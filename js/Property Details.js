// localStorage.clear();
let allproducts = document.getElementById('allproducts')
let noproduct = document.getElementById('noproduct')
//  console.log(noproduct,allproducts);

for (let i = 0; i < localStorage.length; i++) {
  // console.log(localStorage);
  let product = localStorage.getItem(localStorage.key(i))
  let data = JSON.parse(product)
  allproducts.innerHTML += `
      <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
        <img src="${data.image}" class="img-fluid" alt="..."> 
         </div>
         <div class="col-md-8 card-body">
       <div class="">
      <div class=card-title>
        <h6>${data.titi}</h6>
        <p> ${data.price}</p>
      </div>
      <div class="link"> <a href="">
          <h5>${data.des}</h5>
        </a></div>
      <div class="Bedrooms mt-2" style="margin-left: 20%;">
      ${data.bed1}
        <i class="fa-solid fa-trash-can  delete ${data.titi}" style="margin-left: 40%; color: black; font-size: 40px;" ></i>
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
// display
if(allproducts.childElementCount >0 ){
  noproduct.style.display ='none';
}
else{noproduct.display.style='block'};


// delete
document.addEventListener ( 'click' , (e)=>{


  if(e.target.classList.contains('delete'))
  { 

   let Productname = e.target.classList[3];
   localStorage.removeItem(Productname)
   console.log(localStorage);
  //  window.location.reload();

     
  } 

} )