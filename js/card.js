
var zz=10;

document.getElementById('f1').value=zz;
var Item=function(id,image,name,price,cart,quantity,total){

    this.id=id;
    this.image=image;
    this.name=name;
    this.price=price;
    this.cart=cart;
    this.quantity=quantity;
    this.total=total;
// console.log(7)

};


function addproduct()
{

   
    console.log(6)
            //  console.log(cart[0])
//      for(var i in cart){
// console.log(9)
//       if(cart[i].name===name)
//          {

//              cart[i].count++;
//              return;
//          }

//      }
//      console.log(3)
if(products.length<12)

{
    
    var item=new Item(parseInt(document.getElementById('f1').value),(document.getElementById('f2').value),(document.getElementById('f3').value),parseInt(document.getElementById('f4').value),Boolean(0),parseInt(document.getElementById('f6').value),parseInt(document.getElementById('f7').value));
    // console.log(cart[0])
    zz=zz+1;
    document.getElementById('f1').value=zz;
    products.push(item);
    console.log(products);
    // console.log(products[9].id);
}

    
 
    
            document.getElementById('row1').innerHTML='';
            for( let index=0;index < products.length;index++)
            {
                

                if(index==9)
                {

                  

    document.getElementById('row1').innerHTML+='<div class="col-sm-4"><div class="card " style="width:17rem;"><img src="images/img1.jpg" class="card-img-top"><div class="card-body text-center"><h3 class="card-title"><div id="s1"></div></h3><p card-text><div id="s2"></div></p><button class="btn btn-primary" onclick="add(10)">ADD TO CART</button></div></div></div>';

   var s1= ( products[index].name).toUpperCase();
    document.getElementById('s1').innerText=s1;
    var s2=  products[index].price;
    document.getElementById('s2').innerText='$ '+s2+'.00';
                }
if(index==10)
{

    document.getElementById('row1').innerHTML+='<div class="col-sm-4"><div class="card " style="width:17rem;"><img src="images/img1.jpg" class="card-img-top"><div class="card-body text-center"><h3 class="card-title"><div id="s3"></div></h3><p card-text><div id="s4"></div></p><button class="btn btn-primary" onclick="add(11)">ADD TO CART</button></div></div></div>';

    var s1= ( products[index].name).toUpperCase();
     document.getElementById('s3').innerText=s1;
     var s2=  products[index].price;
     document.getElementById('s4').innerText='$ '+s2+'.00';

}
if(index==11)
{
        
     document.getElementById('row1').innerHTML+='<div class="col-sm-4"><div class="card " style="width:17rem;"><img src="images/img1.jpg" class="card-img-top"><div class="card-body text-center"><h3 class="card-title"><div id="s5"></div></h3><p card-text><div id="s6"></div></p><button class="btn btn-primary" onclick="add(12)">ADD TO CART</button></div></div></div>';

     var s1= ( products[index].name).toUpperCase();
      document.getElementById('s5').innerText=s1;
      var s2=  products[index].price;
      document.getElementById('s6').innerText='$ '+s2+'.00';
            }


}
}

// // additemcart("apple",10,1)

// additemcart("apple",10,3)
// console.log(88)
// additemcart("pear",10,3)
// additemcart("apple",15,3)
// additemcart("appe",15,3)
// // additemcart("pwar",10,3)
// // additemcart("puu",10,3)

// console.log(cart)
// console.log(cart[0])
//     console.log(cart[0].name)

// var firebaseref=firebase.database().ref();
// firebaseref.child('text').set('some');
function buy(){
 
 
 
  
  var productfirebase=[];

  for(let index=0;index < products.length;index++){
if(products[index].cart)
{
var product={
               name: products[index].name,
               price: products[index].name,
               quantity: products[index].name,
               tatal: products[index].name
}
               productfirebase.push(product);


}
  }
//      firebase.database().ref('cart').push({
//         total:total(),
//         products:productfirebase
// });


swal.fire({
  icon:'success',
  title:'Success',
  text:'operation Completed'

});
a=0;
(document.getElementById('tag').innerText='faraz '+'['+a+']');
clean();

}

function total(){
let total=0;
for(let index=0;index < products.length;index++)
{
  if(products[index].cart)
  {
    total+=products[index].total;
  }
}

return total;


}
var a=0;
var con=0;
var con2=[];//position of table

function clean(){
  for(let index=0;index < products.length;index++)
  {
     products[index].cart=false,
     products[index].quantity=1,
     products[index].total=0,
     con2=[];
     updatecart();
     



}
}

function add(id){


  

 
  for(let index=0;index < products.length;index++)
  {
    
    if(products[index].id!=id||products[index].cart==true)
    {

    }
    else
    {
     
  
    
      products[index].cart=true;
     
      con2.push(products[index].id);
     
      if(index==0){
      document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad"></div></th><td><button class="btn btn-danger " onclick="remove(1)">X</button></td><td><img src="images/cupcake1.jpg" style="width:5rem;height:3rem"></td><td>Choco Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(1)" >-</button><div id="faraz1" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(1)">+</button></td><td>$ 5.00</td></tr>'
      var c=products[index].quantity;
      var cc=con+1;
      document.getElementById('ad').innerText=cc;
      // console.log(c)
      document.getElementById('faraz1').innerText=c;
      products[index].total=products[index].price * products[index].quantity;
      // a=a+1;
      // (document.getElementById('tag').innerText='faraz '+a);

    }
    if(index==1){
      document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad1"></div></th><td><button class="btn btn-danger" onclick="remove(2)">X</button></td><td><img src="images/cupcake2.jpg" style="width:5rem;height:3rem"></td><td>Ice Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(2)" >-</button><div id="asad" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(2)">+</button></td><td>$ 6.00</td></tr>'
      var c=products[index].quantity;
      var cc=con+1;
      document.getElementById('ad1').innerText=cc;
      // console.log(c)
      document.getElementById('asad').innerText=c;
      
      products[index].total=products[index].price * products[index].quantity;
      // a=a+1;
      // (document.getElementById('tag').innerText='faraz '+a);


    }
    if(index==2){
      document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad2"></div></th><td><button class="btn btn-danger" onclick="remove(3)">X</button></td><td><img src="images/cupcake3.jpg" style="width:5rem;height:3rem"></td><td>Vanella Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(3)" >-</button><div id="akram" style="display:inline-block ; width:2rem; text-align:center" ></div><button class="btn btn-primary" onclick="addamount(3)">+</button></td><td>$ 7.00</td></tr>'
      var c=products[index].quantity;
      var cc=con+1;
      document.getElementById('ad2').innerText=cc;
      // console.log(c)
      document.getElementById('akram').innerText=c;
      
      products[index].total=products[index].price * products[index].quantity;
      

    }
    if(index==3){
      document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad3"></div></th><td><button class="btn btn-danger " onclick="remove(4)">X</button></td><td><img src="images/cupcake6.jpg" style="width:5rem;height:3rem"></td><td>Cherry Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(4)" >-</button><div id="akram2" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(4)">+</button></td><td>$ 7.00</td></tr>'
      var c=products[index].quantity;
      var cc=con+1;
      document.getElementById('ad3').innerText=cc;
      // console.log(c)
      document.getElementById('akram2').innerText=c;
      products[index].total=products[index].price * products[index].quantity;
      // a=a+1;
      // (document.getElementById('tag').innerText='faraz '+a);

    }
    if(index==4){
      document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad4"></div></th><td><button class="btn btn-danger " onclick="remove(5)">X</button></td><td><img src="images/cupcake7.jpg" style="width:5rem;height:3rem"></td><td>Mango Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(5)" >-</button><div id="akram3" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(5)">+</button></td><td>$ 8.00</td></tr>'
      var c=products[index].quantity;
      var cc=con+1;
      document.getElementById('ad4').innerText=cc;
      // console.log(c)
      document.getElementById('akram3').innerText=c;
      products[index].total=products[index].price * products[index].quantity;
      // a=a+1;
      // (document.getElementById('tag').innerText='faraz '+a);

    }
    if(index==5){
      document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad5"></div></th><td><button class="btn btn-danger " onclick="remove(6)">X</button></td><td><img src="images/cupcake4.jpg" style="width:5rem;height:3rem"></td><td>Pista Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(6)" >-</button><div id="akram4" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(6)">+</button></td><td>$ 9.00</td></tr>'
      var c=products[index].quantity;
      var cc=con+1;
      document.getElementById('ad5').innerText=cc;
      // console.log(c)
      document.getElementById('akram4').innerText=c;
      products[index].total=products[index].price * products[index].quantity;
      // a=a+1;
      // (document.getElementById('tag').innerText='faraz '+a);

    }
    if(index==6){
      document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad6"></div></th><td><button class="btn btn-danger" onclick="remove(7)">X</button></td><td><img src="images/cupcake9.jpg" style="width:5rem;height:3rem"></td><td>Chocolate cake</td><td><button class="btn btn-primary" onclick="reduceamount(7)" >-</button><div id="akram5" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(7)">+</button></td><td>$ 12.00</td></tr>'
      var c=products[index].quantity;
      var cc=con+1;
      document.getElementById('ad6').innerText=cc;
      // console.log(c)
      document.getElementById('akram5').innerText=c;
      
      products[index].total=products[index].price * products[index].quantity;
      // a=a+1;
      // (document.getElementById('tag').innerText='faraz '+a);


    }
    if(index==7){
      document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad7"></div></th><td><button class="btn btn-danger" onclick="remove(8)">X</button></td><td><img src="images/cupcake10.jpg" style="width:5rem;height:3rem"></td><td>Cream Cake</td><td><button class="btn btn-primary" onclick="reduceamount(8)" >-</button><div id="akram6" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(8)">+</button></td><td>$ 10.00</td></tr>'
      var c=products[index].quantity;
      var cc=con+1;
      document.getElementById('ad7').innerText=cc;
      // console.log(c)
      document.getElementById('akram6').innerText=c;
      
      products[index].total=products[index].price * products[index].quantity;
      // a=a+1;
      // (document.getElementById('tag').innerText='faraz '+a);


    }
    if(index==8){
      document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad8"></div></th><td><button class="btn btn-danger" onclick="remove(9)">X</button></td><td><img src="images/cupcake12.jpg" style="width:5rem;height:3rem"></td><td>Pinapple Cake</td><td><button class="btn btn-primary" onclick="reduceamount(9)" >-</button><div id="akram7" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(9)">+</button></td><td>$ 13.00</td></tr>'
      var c=products[index].quantity;
      var cc=con+1;
      document.getElementById('ad8').innerText=cc;
      // console.log(c)
      document.getElementById('akram7').innerText=c;
      
      products[index].total=products[index].price * products[index].quantity;
      // a=a+1;
      // (document.getElementById('tag').innerText='faraz '+a);


    }
    if(index==9){
        document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad9"></div></th><td><button class="btn btn-danger" onclick="remove(10)">X</button></td><td><img src="images/img1.jpg" style="width:5rem;height:3rem"></td><td><div id="name1"></div></td><td><button class="btn btn-primary" onclick="reduceamount(10)" >-</button><div id="akram8" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(10)">+</button></td><td><div id="price1"></div></td></tr>'
        var q=products[index].name;
        document.getElementById('name1').innerText=q;

        var qq=products[index].price;
        document.getElementById('price1').innerText='$ '+qq+'.00';
        
        var c=products[index].quantity;
        var cc=con+1;
        document.getElementById('ad9').innerText=cc;
        // console.log(c)
        document.getElementById('akram8').innerText=c;
        
        products[index].total=products[index].price * products[index].quantity;
        // a=a+1;
        // (document.getElementById('tag').innerText='faraz '+a);
  
  
      }
      if(index==10){
        document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad10"></div></th><td><button class="btn btn-danger" onclick="remove(11)">X</button></td><td><img src="images/img2.jpg" style="width:5rem;height:3rem"></td><td><div id="name2"></div></td><td><button class="btn btn-primary" onclick="reduceamount(11)" >-</button><div id="akram9" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(11)">+</button></td><td><div id="price2"></div></td></tr>'
        var q1=products[index].name;
        document.getElementById('name2').innerText=q1;

        var qq1=products[index].price;
        document.getElementById('price2').innerText='$ '+qq1+'.00';
      
      
      
      
        var c=products[index].quantity;
        var cc=con+1;
        document.getElementById('ad10').innerText=cc;
        // console.log(c)
        document.getElementById('akram9').innerText=c;
        
        products[index].total=products[index].price * products[index].quantity;
        // a=a+1;
        // (document.getElementById('tag').innerText='faraz '+a);
  
  
      }
      if(index==11){
        document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad11"></div></th><td><button class="btn btn-danger" onclick="remove(12)">X</button></td><td><img src="images/img3.jpg" style="width:5rem;height:3rem"></td><td><div id="name3"></div></td><td><button class="btn btn-primary" onclick="reduceamount(12)" >-</button><div id="akram10" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(12)">+</button></td><td><div id="price3"></div></td></tr>'
        var q2=products[index].name;
        document.getElementById('name3').innerText=q2;

        var qq2=products[index].price;
        document.getElementById('price3').innerText='$ '+qq2+'.00';
       
       
       
       
       
        var c=products[index].quantity;
        var cc=con+1;
        document.getElementById('ad11').innerText=cc;
        // console.log(c)
        document.getElementById('akram10').innerText=c;
        
        products[index].total=products[index].price * products[index].quantity;
        // a=a+1;
        // (document.getElementById('tag').innerText='faraz '+a);
  
  
      }

    con++;
    a=a+1;
      (document.getElementById('tag').innerText='faraz '+'['+a+']');
       
swal.fire({
  // toast:true,
  width:400,
  
  position: 'top-end',
  icon: 'success',
  title: 'Added to Cart',
  showConfirmButton: false,
  timer: 1500
});


  }



}
  
  document.getElementById('total').innerHTML='<tr><th scope="row"><td></td><td></td><td></td><td><h4>Total :</h4></td><td> <div id="faraz"> </div> </td></tr><tr><th scope="row"><td></td><td></td><td></td><td></td><td><button class="btn btn-success" onclick="buy()">Buy</button></td></tr>'
var tottal=total();
document.getElementById('faraz').innerText='$ '+tottal+'.00';
}

function reduceamount(id)
{
     for(index=0;index<products.length;index++)
     {
          if(products[index].id==id)
          {
             if(products[index].quantity>1)
             {
              products[index].quantity=products[index].quantity-1;
              updatecart();
             }
             else
             {

             }

          }
          else
          {

          }

     }

}
function addamount(id)
{

  for(index=0;index<products.length;index++)
  {
       if(products[index].id==id)
       {
          if(products[index].quantity>0)
          {
           products[index].quantity=products[index].quantity+1;
           updatecart();
          }
          else
          {

          }

       }
       else
       {

       }

  }
}



function remove(id){
  console.log(id)
  for(let index=0;index < products.length;index++)
  {
     if(products[index].id==id)
     {
       products[index].cart=false;
       products[index].quantity=1;
       products[index].total=0;
       total();
       for(let index2=0;index2 < con2.length;index2++)
       {

         if(products[index].id==con2[index2])
         {
           console.log(con2)
              con2.splice(index2,1);
              console.log(con2);
              a=a-1;
      (document.getElementById('tag').innerText='faraz '+'['+a+']');

         }
         else
         {

         }

       }
       updatecart();
     }
     else
     {
       updatecart();
     }


  }



}

function updatecart()
{
  con=0;
  // console.log('ooo')
  document.getElementById('tableProducts').innerHTML='';
  for(let index=0; index < con2.length;index++)
  {
    var position=con2[index];
    for(let index3=0;index3 < products.length;index3++)
    {

      if(position==products[index3].id)
      {
        if(index3==0){
          document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad"></div></th><td><button class="btn btn-danger " onclick="remove(1)">X</button></td><td><img src="images/cupcake1.jpg" style="width:5rem;height:3rem"></td><td>Choco Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(1)" >-</button><div id="faraz1" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(1)">+</button></td><td><div id="fa1"><div/></td></tr>'
          var c=products[index3].quantity;
          var cc=con+1;
          document.getElementById('ad').innerText=cc;
          // console.log(c)
          document.getElementById('faraz1').innerText=c;
          var d=products[index3].price * products[index3].quantity;
          document.getElementById('fa1').innerHTML='$ '+d+'.00'; 
          products[index3].total=products[index3].price * products[index3].quantity;
           
    
        }
        if(index3==1){
          document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad2"></div></th><td><button class="btn btn-danger" onclick="remove(2)">X</button></td><td><img src="images/cupcake2.jpg" style="width:5rem;height:3rem"></td><td>Ice Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(2)" >-</button><div id="asad" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(2)">+</button></td><td><div id="fa2"></div></td></tr>'
          var c=products[index3].quantity;
          var cc=con+1;
          document.getElementById('ad2').innerText=cc;
          // console.log(c)
          document.getElementById('asad').innerText=c;
          var d=products[index3].price * products[index3].quantity;
          document.getElementById('fa2').innerHTML='$ '+d+'.00'; 
          products[index3].total=products[index3].price * products[index3].quantity;
    
        }
        if(index3==2){
          document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad3"></div></th><td><button class="btn btn-danger" onclick="remove(3)">X</button></td><td><img src="images/cupcake3.jpg" style="width:5rem;height:3rem"></td><td>Vanella Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(3)" >-</button><div id="akram" style="display:inline-block ; width:2rem; text-align:center" ></div><button class="btn btn-primary" onclick="addamount(3)">+</button></td><td><div id="fa3"></div></td></tr>'
          var c=products[index3].quantity;
          var cc=con+1;
          document.getElementById('ad3').innerText=cc;
          // console.log(c)
          document.getElementById('akram').innerText=c;
          var d=products[index3].price * products[index3].quantity;
          document.getElementById('fa3').innerHTML='$ '+d+'.00'; 
          
          products[index3].total=products[index3].price * products[index3].quantity;
        }
        if(index3==3){
          document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad4"></div></th><td><button class="btn btn-danger " onclick="remove(4)">X</button></td><td><img src="images/cupcake6.jpg" style="width:5rem;height:3rem"></td><td>Cherry Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(4)" >-</button><div id="akram2" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(4)">+</button></td><td><div id="fa4"></div></td></tr>'
          var c=products[index3].quantity;
          var cc=con+1;
          document.getElementById('ad4').innerText=cc;
          // console.log(c)
          document.getElementById('akram2').innerText=c;
          var d=products[index3].price * products[index3].quantity;
          document.getElementById('fa4').innerHTML='$ '+d+'.00'; 
          products[index3].total=products[index3].price * products[index3].quantity;
          // a=a+1;
          // (document.getElementById('tag').innerText='faraz '+a);
    
        }
        if(index3==4){
          document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad5"></div></th><td><button class="btn btn-danger " onclick="remove(5)">X</button></td><td><img src="images/cupcake7.jpg" style="width:5rem;height:3rem"></td><td>Mango Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(5)" >-</button><div id="akram3" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(5)">+</button></td><td><div id="fa5"></div></td></tr>'
          var c=products[index3].quantity;
          var cc=con+1;
          document.getElementById('ad5').innerText=cc;
          // console.log(c)
          document.getElementById('akram3').innerText=c;
          var d=products[index3].price * products[index3].quantity;
          document.getElementById('fa5').innerHTML='$ '+d+'.00'; 
          products[index3].total=products[index3].price * products[index3].quantity;
          // a=a+1;
          // (document.getElementById('tag').innerText='faraz '+a);
    
        }
        if(index3==5){
          document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad6"></div></th><td><button class="btn btn-danger " onclick="remove(6)">X</button></td><td><img src="images/cupcake4.jpg" style="width:5rem;height:3rem"></td><td>Pista Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(6)" >-</button><div id="akram4" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(6)">+</button></td><td><div id="fa6"></div></td></tr>'
          var c=products[index3].quantity;
          var cc=con+1;
          document.getElementById('ad6').innerText=cc;
          // console.log(c)
          document.getElementById('akram4').innerText=c;
          var d=products[index3].price * products[index3].quantity;
          document.getElementById('fa6').innerHTML='$ '+d+'.00'; 
          products[index3].total=products[index3].price * products[index3].quantity;
          // a=a+1;
          // (document.getElementById('tag').innerText='faraz '+a);
    
        }
        if(index3==6){
          document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad7"></div></th><td><button class="btn btn-danger " onclick="remove(7)">X</button></td><td><img src="images/cupcake9.jpg" style="width:5rem;height:3rem"></td><td>Chocolate Cake</td><td><button class="btn btn-primary" onclick="reduceamount(7)" >-</button><div id="akram5" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(7)">+</button></td><td><div id="fa7"></div></td></tr>'
          var c=products[index3].quantity;
          var cc=con+1;
          document.getElementById('ad7').innerText=cc;
          // console.log(c)
          document.getElementById('akram5').innerText=c;
          var d=products[index3].price * products[index3].quantity;
          document.getElementById('fa7').innerHTML='$ '+d+'.00'; 
          products[index3].total=products[index3].price * products[index3].quantity;
          // a=a+1;
          // (document.getElementById('tag').innerText='faraz '+a);
    
        }
        if(index3==7){
          document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad8"></div></th><td><button class="btn btn-danger " onclick="remove(8)">X</button></td><td><img src="images/cupcake10.jpg" style="width:5rem;height:3rem"></td><td>Cream Cake</td><td><button class="btn btn-primary" onclick="reduceamount(8)" >-</button><div id="akram6" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(8)">+</button></td><td><div id="fa8"></div></td></tr>'
          var c=products[index3].quantity;
          var cc=con+1;
          document.getElementById('ad8').innerText=cc;
          // console.log(c)
          document.getElementById('akram6').innerText=c;
          var d=products[index3].price * products[index3].quantity;
          document.getElementById('fa8').innerHTML='$ '+d+'.00'; 
          products[index3].total=products[index3].price * products[index3].quantity;
          // a=a+1;
          // (document.getElementById('tag').innerText='faraz '+a);
    
        }
        if(index3==8){
          document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad9"></div></th><td><button class="btn btn-danger " onclick="remove(9)">X</button></td><td><img src="images/cupcake12.jpg" style="width:5rem;height:3rem"></td><td>Pinapple Cake</td><td><button class="btn btn-primary" onclick="reduceamount(9)" >-</button><div id="akram7" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(9)">+</button></td><td><div id="fa9"></div></td></tr>'
          var c=products[index3].quantity;
          var cc=con+1;
          document.getElementById('ad9').innerText=cc;
          // console.log(c)
          document.getElementById('akram7').innerText=c;
          var d=products[index3].price * products[index3].quantity;
          document.getElementById('fa9').innerHTML='$ '+d+'.00'; 
          products[index3].total=products[index3].price * products[index3].quantity;
          // a=a+1;
          // (document.getElementById('tag').innerText='faraz '+a);
    
        }
        if(index3==9){
            document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad13"></div></th><td><button class="btn btn-danger " onclick="remove(10)">X</button></td><td><img src="images/img1.jpg" style="width:5rem;height:3rem"></td><td><div id=name4></div></td><td><button class="btn btn-primary" onclick="reduceamount(10)" >-</button><div id="akram11" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(10)">+</button></td><td><div id="fa11"></div></td></tr>'
            var cz=products[index3].name;
           
            document.getElementById('name4').innerText=cz;
            
            var c=products[index3].quantity;
            var cc=con+1;
            document.getElementById('ad13').innerText=cc;
            // console.log(c)
            document.getElementById('akram11').innerText=c;
            var d=products[index3].price * products[index3].quantity;
            document.getElementById('fa11').innerHTML='$ '+d+'.00'; 
            products[index3].total=products[index3].price * products[index3].quantity;
            // a=a+1;
            // (document.getElementById('tag').innerText='faraz '+a);
      
          }
          if(index3==10){
            document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad14"></div></th><td><button class="btn btn-danger " onclick="remove(11)">X</button></td><td><img src="images/img2.jpg" style="width:5rem;height:3rem"></td><td><div id=name5></div></td><td><button class="btn btn-primary" onclick="reduceamount(11)" >-</button><div id="akram12" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(11)">+</button></td><td><div id="fa12"></div></td></tr>'
            var cz1=products[index3].name;
           
            document.getElementById('name5').innerText=cz1;
            
            var c=products[index3].quantity;
            var cc=con+1;
            document.getElementById('ad14').innerText=cc;
            // console.log(c)
            document.getElementById('akram12').innerText=c;
            var d=products[index3].price * products[index3].quantity;
            document.getElementById('fa12').innerHTML='$ '+d+'.00'; 
            products[index3].total=products[index3].price * products[index3].quantity;
            // a=a+1;
            // (document.getElementById('tag').innerText='faraz '+a);
      
          }
          if(index3==11){
            document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad15"></div></th><td><button class="btn btn-danger " onclick="remove(12)">X</button></td><td><img src="images/img3.jpg" style="width:5rem;height:3rem"></td><td><div id=name6></div></td><td><button class="btn btn-primary" onclick="reduceamount(12)" >-</button><div id="akram13" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(12)">+</button></td><td><div id="fa13"></div></td></tr>'
            var cz2=products[index3].name;
           
            document.getElementById('name6').innerText=cz2;
            
            var c=products[index3].quantity;
            var cc=con+1;
            document.getElementById('ad15').innerText=cc;
            // console.log(c)
            document.getElementById('akram13').innerText=c;
            var d=products[index3].price * products[index3].quantity;
            document.getElementById('fa13').innerHTML='$ '+d+'.00'; 
            products[index3].total=products[index3].price * products[index3].quantity;
            // a=a+1;
            // (document.getElementById('tag').innerText='faraz '+a);
      
          }
           con++;
    }

  }


}
if(total()==0)
{
  document.getElementById('total').innerHTML='';
}
else
{
  document.getElementById('total').innerHTML='<tr><th scope="row"><td></td><td></td><td></td><td><h4>Total :</h4></td><td> <div id="faraz"> </div> </td></tr><tr><th scope="row"><td></td><td></td><td></td><td></td><td><button class="btn btn-success" onclick="buy()">Buy</button></td></tr>'
  var tottal=total();
  document.getElementById('faraz').innerText='$ '+tottal+'.00';

}
}


    var products=[{
        id:1,
        image:'images/img1.jpg',
        name:'Choc Cupcake',
        price:5,
        cart:false,
        cart2:false,
        quantity:1,
        total:0
      },
      
      {
        id:2,
        image:'../images/img2.jpg',
        name:'Ice Cupcake',
        price:6,
        cart:false,
        cart2:false,
        quantity:1,
        total:0
      },
      {
        id:3,
        image:'../images/img3.jpg',
        name:'vanella Cupcake',
        price:7,
        cart:false,
        quantity:1,
        total:0,
        cart2:false
      },
      {
        id:4,
        image:'/images/img3.jpg',
        name:'vanella Cupcake',
        price:7,
        cart:false,
        quantity:1,
        total:0,
        cart2:false
      },
      {
        id:5,
        image:'/images/img3.jpg',
        name:'vanella Cupcake',
        price:8,
        cart:false,
        quantity:1,
        total:0,
        cart2:false
      },
      {
        id:6,
        image:'/images/img3.jpg',
        name:'vanella Cupcake',
        price:9,
        cart:false,
        quantity:1,
        total:0,
        cart2:false
      },
      {
        id:7,
        image:'/images/img3.jpg',
        name:'vanella Cupcake',
        price:12,
        cart:false,
        quantity:1,
        total:0,
        cart2:false
      },
      {
        id:8,
        image:'/images/img3.jpg',
        name:'vanella Cupcake',
        price:13,
        cart:false,
        quantity:1,
        total:0,
        cart2:false
      },
      {
        id:9,
        image:'/images/img3.jpg',
        name:'vanella Cupcake',
        price:13,
        cart:false,
        quantity:1,
        total:0,
        cart2:false
      }
    ];

    




// (()=>{

//   for(let index=0;index < products.length;index++)
//   {
//     if(index==0){
// document.getElementById('row1').innerHTML+='<div class="card m-2" style="width:17rem;"><img src="images/img1.jpg" class="card-img-top"><div class="card-body text-center"><h3 class="card-title">Apple</h3><p card-text>$ 20.00</p><button class="btn btn-primary" onclick="add(1)">ADD TO CART</button></div></div>';
//   }
//   if(index==1){
//     document.getElementById('row1').innerHTML+='<div class="card m-2" style="width:17rem;"><img src="images/img2.jpg" class="card-img-top"><div class="card-body text-center"><h3 class="card-title">Pear</h3><p card-text>$ 30.00</p><button class="btn btn-primary" onclick="add(2)">ADD TO CART</button></div></div>';
//   }
//   if(index==2){
//     document.getElementById('row1').innerHTML+='<div class="card m-2" style="width:17rem;"><img src="images/img3.jpg" class="card-img-top"><div class="card-body text-center"><h3 class="card-title">banana</h3><p card-text>$ 10.00</p><button class="btn btn-primary" onclick="add(3)">ADD TO CART</button></div></div>';
//   }
// }

// })();




 
      
 
       


