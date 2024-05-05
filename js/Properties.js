// localStorage.clear();
function print(id){
    let image = document.getElementById('image' + id).src;
    let titi = document.getElementById("titi"+id).innerText;
    let price = document.getElementById("price"+id).innerText;
    let des =document.getElementById("des"+id).innerText;
    let bed1 =document.getElementById("bed"+id).innerText;
    let badrooms =document.getElementById("badrooms"+id).innerText;
  
     
       let Object ={
        'image' : image,
          'titi':titi,
       'price':price,
      'des':des,
      'bed1':bed1,
      'badrooms':badrooms,
       }

       localStorage.setItem('Product'+ id ,JSON.stringify(Object))
      //  console.log(localStorage);
 }

 