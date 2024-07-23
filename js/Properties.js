// localStorage.clear();
function print(id){
    let image = document.getElementById('image' + id).src;
    let title = document.getElementById("title"+id).innerText;
    let price = document.getElementById("price"+id).innerText;
    let des =document.getElementById("des"+id).innerText;
    let bed1 =document.getElementById("bed"+id).innerText;
    let badrooms =document.getElementById("badrooms"+id).innerText;
  
       let Object ={
        'image' : image,
          'title':title,
       'price':price,
      'des':des,
      'bed1':bed1,
      'badrooms':badrooms,
       }
         console.log(title);
      
      localStorage.setItem('Vlienema' + id , JSON.stringify(Object) );
              
 }
