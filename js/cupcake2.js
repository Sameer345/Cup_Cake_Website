AOS.init();


// var zz=10;


// document.getElementById('f1').value=zz;
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

function updateproductcard()
{ 
  var ml=0;
  var updateproductcard=document.getElementById('f00').value;
  for(var i=0;i<products.length;i++)
  {
    if(products[i].name==updateproductcard)
    {
      document.getElementById('f001').value= products[i].id;
      document.getElementById('f002').value= products[i].name;
      document.getElementById('f003').value= products[i].price;
      ml=1;
    }
  }
  if(ml!=1)
  {
    alert('The Product of this name is not exist')
  }
}
function updateproductcard2()
{
  var updateproductcard2=document.getElementById('f00').value;
  for(var i=0;i<products.length;i++)
  {
    if(products[i].name==updateproductcard2)
    {
      products[i].id=parseInt( document.getElementById('f001').value);
      products[i].name=document.getElementById('f002').value;
      products[i].price=parseInt( document.getElementById('f003').value);
       document.getElementById('f001').value="";
       document.getElementById('f002').value="";
       document.getElementById('f003').value="";
        document.getElementById('f00').value="";
      console.log(products)
      updateproductcard3();
      swal.fire({
        // toast:true,
        width:400,
        
        position: 'top-end',
        icon: 'success',
        title: 'Product Updated',
        showConfirmButton: false,
        timer: 1500
      });


    }
  }
 
}

function updateproductcard3()
{
  document.getElementById('row1').innerHTML='';
           
  for( let index=0;index < products.length;index++)
  {
      

      if(index==9)
      {

      //  con4.push( products[index].name)
document.getElementById('roo').innerHTML='<h3>New Products</h3>'
document.getElementById('row1').innerHTML+='<div class="col-sm-4"><div class="card mt-3 " ><div class=inner><img src="images/cup95.jpg" class="card-img-top" style="height:9.5rem"></div><div class="card-body text-center"><h3 class="card-title"><div id="s1"></div></h3><p card-text><div id="s2"></div></p><button class="btn btn-primary" onclick="add(10)">ADD TO CART</button></div></div></div>';

var s1= ( products[index].name).toUpperCase();
document.getElementById('s1').innerText=s1;
var s2=  products[index].price;
document.getElementById('s2').innerText='$ '+s2+'.00';
      }
if(index==10)
{

// con4.push( products[index].name)
document.getElementById('row1').innerHTML+='<div class="col-sm-4"><div class="card mt-3" ><div class=inner><img src="images/cup96.jpg" class="card-img-top" style="height:9.5rem"></div><div class="card-body text-center"><h3 class="card-title"><div id="s3"></div></h3><p card-text><div id="s4"></div></p><button class="btn btn-primary" onclick="add(11)">ADD TO CART</button></div></div></div>';

var s1= ( products[index].name).toUpperCase();
document.getElementById('s3').innerText=s1;
var s2=  products[index].price;
document.getElementById('s4').innerText='$ '+s2+'.00';

}
if(index==11)
{
          
// con4.push( products[index].name)
document.getElementById('row1').innerHTML+='<div class="col-sm-4"><div class="card mt-3" ><div class=inner><img src="images/cup97.jpg" class="card-img-top" style="height:9.5rem"></div><div class="card-body text-center"><h3 class="card-title"><div id="s5"></div></h3><p card-text><div id="s6"></div></p><button class="btn btn-primary" onclick="add(12)">ADD TO CART</button></div></div></div>';

var s1= ( products[index].name).toUpperCase();
document.getElementById('s5').innerText=s1;
var s2=  products[index].price;
document.getElementById('s6').innerText='$ '+s2+'.00';
  }


}

}


function addproduct()
{
  
  var i=0;
   
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
    for(let index=0;index<products.length;index++)
    {
      if(products[index].id==document.getElementById('f1').value)
      {
            i=1;
            swal.fire({
              icon:'error',
              title:'You are using old id',
              text:'This is Id is already exist'
            
            });
      }
    }
    if(i!=1)
    {
    var item=new Item(parseInt(document.getElementById('f1').value),('img1.jpg'),(document.getElementById('f3').value),parseInt(document.getElementById('f4').value),(Boolean(0)),1,0);
    // console.log(cart[0])
    // zz=zz+1;
    // document.getElementById('f1').value=zz;
    products.push(item);
    console.log(products);
    document.getElementById('f3').value='';
    document.getElementById('f4').value='';
  
    // document.getElementById('cono').style.display='none';
    swal.fire({
      // toast:true,
      width:400,
      
      position: 'top-end',
      icon: 'success',
      title: 'Product Created',
      showConfirmButton: false,
      timer: 1500
    });
    // document.getElementById('pioneer').style.display='block';
   

    // console.log(products[9].id);
}
}

    
 
    
            document.getElementById('row1').innerHTML='';
           
            for( let index=0;index < products.length;index++)
            {
                

                if(index==9)
                {

                //  con4.push( products[index].name)
document.getElementById('roo').innerHTML='<h3>New Products</h3>'
    document.getElementById('row1').innerHTML+='<div class="col-md-4"><div class="card mt-3 " ><div class=inner><img src="images/cup95.jpg" class="card-img-top"style="height:9.5rem"></div><div class="card-body text-center"><h3 class="card-title"><div id="s1"></div></h3><p card-text><div id="s2"></div></p><button class="btn btn-primary" onclick="add(10)">ADD TO CART</button></div></div></div>';

   var s1= ( products[index].name).toUpperCase();
    document.getElementById('s1').innerText=s1;
    var s2=  products[index].price;
    document.getElementById('s2').innerText='$ '+s2+'.00';
                }
if(index==10)
{

  // con4.push( products[index].name)
    document.getElementById('row1').innerHTML+='<div class="col-md-4"><div class="card mt-3" ><div class=inner><img src="images/cup96.jpg" class="card-img-top" style="height:9.5rem"></div><div class="card-body text-center"><h3 class="card-title"><div id="s3"></div></h3><p card-text><div id="s4"></div></p><button class="btn btn-primary" onclick="add(11)">ADD TO CART</button></div></div></div>';

    var s1= ( products[index].name).toUpperCase();
     document.getElementById('s3').innerText=s1;
     var s2=  products[index].price;
     document.getElementById('s4').innerText='$ '+s2+'.00';

}
if(index==11)
{
                    
  // con4.push( products[index].name)
     document.getElementById('row1').innerHTML+='<div class="col-md-4"><div class="card mt-3" ><div class=inner><img src="images/cup97.jpg" class="card-img-top" style="height:9.5rem"></div><div class="card-body text-center"><h3 class="card-title"><div id="s5"></div></h3><p card-text><div id="s6"></div></p><button class="btn btn-primary" onclick="add(12)">ADD TO CART</button></div></div></div>';

     var s1= ( products[index].name).toUpperCase();
      document.getElementById('s5').innerText=s1;
      var s2=  products[index].price;
      document.getElementById('s6').innerText='$ '+s2+'.00';
            }


}
}
let alltotal=0;
var productfirebase=[];


function buy(){
 
 
 
    // swal("HAKKA!", "You clicked the button!", "success", {
    //   button: "Aww yiss!",
    // });
    
  
    for(let index=0;index < products.length;index++){
  if(products[index].cart)
  {
  var product={
                 name: products[index].name,
                 price: products[index].price,
                 quantity: products[index].quantity,
                 total: products[index].total
  }
                 productfirebase.push(product);
  
  
  }
    }

    localStorage.setItem('ORDERS',JSON.stringify( productfirebase));
  
    alltotal+=total();
    localStorage.setItem('TOTAl',JSON.stringify(alltotal));
    // localStorage.setItem('ORDER',JSON.stringify('faraz'));
    console.log(localStorage.length)
  //      firebase.database().ref('cart').push({
  //         total:total(),
  //         products:productfirebase
  // });
  
  // Swal({
  //   type:'success',
  //   tittle:'Success',
  //   text:'operation Completed'
  
  // });
  swal.fire({
    icon:'success',
    title:'Success',
    text:'operation Completed'
  
  });
  gakka();
  setTimeout(()=>{
    a=0;
    (document.getElementById('tag').innerText='Shopping Cart '+'['+a+']');
    clean();
  },1000)
  // a=0;
  // (document.getElementById('tag').innerText='Shopping Cart '+'['+a+']');
  // clean();
  
  
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
  //  console.log(id)
    console.log(5);
    // var a=0;
    
   
    for(let index=0;index < products.length;index++)
    {
      // var z;
      if(products[index].id!=id||products[index].cart==true)
      {
  
      }
      else
      {
       
    
        // console.log(a);
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
        document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad7"></div></th><td><button class="btn btn-danger" onclick="remove(8)">X</button></td><td><img src="images/cupcake10.jpg" style="width:5rem;height:3rem"></td><td>Cream Cake</td><td><button class="btn btn-primary" onclick="reduceamount(8)" >-</button><div id="akram6" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(8)">+</button></td><td>$ 13.00</td></tr>'
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
        document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad88"></div></th><td><button class="btn btn-danger" onclick="remove(9)">X</button></td><td><img src="images/cupcake12.jpg" style="width:5rem;height:3rem"></td><td>Pinapple Cake</td><td><button class="btn btn-primary" onclick="reduceamount(9)" >-</button><div id="akram7" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(9)">+</button></td><td>$ 10.00</td></tr>'
        var c=products[index].quantity;
        var cc=con+1;
        document.getElementById('ad88').innerText=cc;
        // console.log(c)
        document.getElementById('akram7').innerText=c;
        
        products[index].total=products[index].price * products[index].quantity;
        // a=a+1;
        // (document.getElementById('tag').innerText='faraz '+a);
  
  
      }
      if(index==9){
        document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad9"></div></th><td><button class="btn btn-danger" onclick="remove(10)">X</button></td><td><img src="images/cup95.jpg" style="width:5rem;height:3rem"></td><td><div id="name1"></div></td><td><button class="btn btn-primary" onclick="reduceamount(10)" >-</button><div id="akram8" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(10)">+</button></td><td><div id="price1"></div></td></tr>'
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
        document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad10"></div></th><td><button class="btn btn-danger" onclick="remove(11)">X</button></td><td><img src="images/cup96.jpg" style="width:5rem;height:3rem"></td><td><div id="name2"></div></td><td><button class="btn btn-primary" onclick="reduceamount(11)" >-</button><div id="akram9" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(11)">+</button></td><td><div id="price2"></div></td></tr>'
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
        document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad11"></div></th><td><button class="btn btn-danger" onclick="remove(12)">X</button></td><td><img src="images/cup97.jpg" style="width:5rem;height:3rem"></td><td><div id="name3"></div></td><td><button class="btn btn-primary" onclick="reduceamount(12)" >-</button><div id="akram10" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(12)">+</button></td><td><div id="price3"></div></td></tr>'
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
        (document.getElementById('tag').innerText='Shopping Cart '+'['+a+']');
         
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
    
    document.getElementById('total').innerHTML='<tr><th scope="row"></th><td></td><td></td><td></td><td><h4 onclick="paypal()">Total :</h4></td><td> <div id="faraz"> </div> </td></tr><tr><th scope="row"><td></td><td></td><td></td><td></td><td><button class="btn btn-success" onclick="buy()"  >Buy</button></td></tr>'
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
    updatecart();
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
        (document.getElementById('tag').innerText='Shopping Cart '+'['+a+']');
                
  
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

  function remove1(name)
  {
    name=document.getElementById('f0').value;
    // document.getElementById('cono').style.display='none';

    // document.getElementById('pioneer').style.display='block';
   
   

for(let index=0;index<products.length;index++)
{
  
  
           if(products[index].name==name)
           {
             products.splice(index,1)
             con2.splice(index,1)
             update();
             updatecart();
             if(a>0)
             {
             a=a-1;
        (document.getElementById('tag').innerText='Shopping Cart '+'['+a+']');
             break;

           }
           swal.fire({
            // toast:true,
            width:400,
            
            position: 'top-end',
            icon: 'success',
            title: 'Product Deleted',
            showConfirmButton: false,
            timer: 1500
          });
          document.getElementById('f0').value="";
          }
  
}


  }

  function update()
  {
    document.getElementById('row1').innerHTML='';
    document.getElementById('roo').innerHTML='';
           
    for( let index=0;index < products.length;index++)
    {
        

        if(index==9)
        {

        //  con4.push( products[index].name)
document.getElementById('roo').innerHTML='<h3>New Products</h3>'
document.getElementById('row1').innerHTML+='<div class="col-sm-4"><div class="card mt-3 "><div class=inner><img src="images/cup95.jpg" class="card-img-top" style="height:9.5rem"></div><div class="card-body text-center"><h3 class="card-title"><div id="s1"></div></h3><p card-text><div id="s2"></div></p><button class="btn btn-primary" onclick="add(10)">ADD TO CART</button></div></div></div>';

var s1= ( products[index].name).toUpperCase();
document.getElementById('s1').innerText=s1;
var s2=  products[index].price;
document.getElementById('s2').innerText='$ '+s2+'.00';
        }
if(index==10)
{

// con4.push( products[index].name)
document.getElementById('row1').innerHTML+='<div class="col-sm-4"><div class="card mt-3" ><div class=inner><img src="images/cup96.jpg" class="card-img-top" style="height:9.5rem"></div><div class="card-body text-center"><h3 class="card-title"><div id="s3"></div></h3><p card-text><div id="s4"></div></p><button class="btn btn-primary" onclick="add(11)">ADD TO CART</button></div></div></div>';

var s1= ( products[index].name).toUpperCase();
document.getElementById('s3').innerText=s1;
var s2=  products[index].price;
document.getElementById('s4').innerText='$ '+s2+'.00';

}
if(index==11)
{
            
// con4.push( products[index].name)
document.getElementById('row1').innerHTML+='<div class="col-sm-4"><div class="card mt-3" ><div class=inner><img src="images/cup97.jpg" class="card-img-top" style="height:9.5rem"></div><div class="card-body text-center"><h3 class="card-title"><div id="s5"></div></h3><p card-text><div id="s6"></div></p><button class="btn btn-primary" onclick="add(12)">ADD TO CART</button></div></div></div>';

var s1= ( products[index].name).toUpperCase();
document.getElementById('s5').innerText=s1;
var s2=  products[index].price;
document.getElementById('s6').innerText='$ '+s2+'.00';
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
      {console.log('too')
  
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
            document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad13"></div></th><td><button class="btn btn-danger " onclick="remove(10)">X</button></td><td><img src="images/cup95.jpg" style="width:5rem;height:3rem"></td><td><div id=name4></div></td><td><button class="btn btn-primary" onclick="reduceamount(10)" >-</button><div id="akram11" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(10)">+</button></td><td><div id="fa11"></div></td></tr>'
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
            document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad14"></div></th><td><button class="btn btn-danger " onclick="remove(11)">X</button></td><td><img src="images/cup96.jpg" style="width:5rem;height:3rem"></td><td><div id=name5></div></td><td><button class="btn btn-primary" onclick="reduceamount(11)" >-</button><div id="akram12" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(11)">+</button></td><td><div id="fa12"></div></td></tr>'
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
            document.getElementById('tableProducts').innerHTML+='<tr><th scope="row"><div id="ad15"></div></th><td><button class="btn btn-danger " onclick="remove(12)">X</button></td><td><img src="images/cup97.jpg" style="width:5rem;height:3rem"></td><td><div id=name6></div></td><td><button class="btn btn-primary" onclick="reduceamount(12)" >-</button><div id="akram13" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(12)">+</button></td><td><div id="fa13"></div></td></tr>'
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
          name:'Cherry Cupcake',
          price:7,
          cart:false,
          quantity:1,
          total:0,
          cart2:false
        },
        {
          id:5,
          image:'/images/img3.jpg',
          name:'Mango Cupcake',
          price:8,
          cart:false,
          quantity:1,
          total:0,
          cart2:false
        },
        {
          id:6,
          image:'/images/img3.jpg',
          name:'Pista Cupcake',
          price:9,
          cart:false,
          quantity:1,
          total:0,
          cart2:false
        },
        {
          id:7,
          image:'/images/img3.jpg',
          name:'Chocolate Cupcake',
          price:12,
          cart:false,
          quantity:1,
          total:0,
          cart2:false
        },
        {
          id:8,
          image:'/images/img3.jpg',
          name:'Creame Cupcake',
          price:13,
          cart:false,
          quantity:1,
          total:0,
          cart2:false
        },
        {
          id:9,
          image:'/images/img3.jpg',
          name:'Pinapple Cupcake',
          price:10,
          cart:false,
          quantity:1,
          total:0,
          cart2:false
        }
      ];
      function backed()
      {document.body.style.backgroundImage="none";
        document.getElementById('pioneer').style.display='block';
      document.getElementById('cono').style.display='none';
     
      }
      function submit()
      {
          var x=document.getElementById('la');
      var p=document.getElementById('la1');
          console.log(7)
      
          if(x.value==""&&p.value=="")
          {

            document.getElementById('la').value='';
            document.getElementById('la1').value='';
              var dt=document.getElementById('noo');
      dt.setAttribute('data-dismiss','modal')
      document.body.style.backgroundImage="none";
      document.getElementById('pioneer').style.display='none';
      document.getElementById('cono').style.display='block';
      document.getElementById('coco').style.display='block';
      document.getElementById('bottom').style.display="none";
    
      document.getElementById('nametr').style.display="none";
      document.getElementById('deleteproductdiv').style.display="none";
        document.getElementById('tablerecordsdiv').style.display="none";
        document.getElementById('tablerecordssdiv').style.display="none";
        document.getElementById('updateproductdiv').style.display="none";
        document.getElementById('addproductsdiv').style.display="none";
        document.getElementById('localstoragediv').style.display="none";
        document.getElementById('backbutton').style.display="none";
              // document.getElementById('no').innerText="";
              // document.getElementById('no').innerHTML="<a class='btn btn-success' onclick='show()'>ADD PRODUCTS</a>";
              // document.getElementById('modall').style.display='none';
      
          }
      }
      function clearstorage()
      {
        localStorage.removeItem('ORDERS');
        localStorage.removeItem('TOTAl');
        document.getElementById('tableProducts2').innerHTML='';
        document.getElementById('total2').innerHTML='';
        document.getElementById('bottom').innerHTML='';
        productfirebase=[];
        alltotal=0;
        read();
        
      }
      // document.getElementById('btna').k= function(){}
      
        function nakka(i6)
        { 
          if(i6==0)
          {
        var ty=(parseInt(document.getElementById('newname2').value) * parseInt(document.getElementById("newname3").value))
        console.log(ty)
        document.getElementById('newname4').value=ty;
          }
          if(i6==1)
          {
        var ty=(parseInt(document.getElementById('newname6').value) * parseInt(document.getElementById("newname7").value))
        console.log(ty)
        document.getElementById('newname8').value=ty;
          }
          if(i6==2)
          {
        var ty=(parseInt(document.getElementById('newname10').value) * parseInt(document.getElementById("newname11").value))
        console.log(ty)
        document.getElementById('newname12').value=ty;
          }
          if(i6==3)
          {
        var ty=(parseInt(document.getElementById('newname14').value) * parseInt(document.getElementById("newname15").value))
        console.log(ty)
        document.getElementById('newname16').value=ty;
          }
      }
     
      
      
      
        //  console.log(parseInt( document.getElementById('newname3').value)*parseInt( document.getElementById('newname2')));
      //  document.getElementById('newname4').value=ty;
      
      function updt(i3)
      {
        let names4=JSON.parse(localStorage.getItem('ORDERS'))
         document.getElementById('nameTR').innerHTML='';
         for( var i=0;i<names4.length;i++)
         {
           if(i==i3)
           {
            
            if(i3==0)
            {
              console.log('kkkk')
            document.getElementById('nameTR').innerHTML+='<div class="bg-dark border border-danger text-white mb-2 card"><div class="card-body ltt"><p >Name:</p><input class="mb-2 form-control" id="newname1" placeholder="Enter Name"></input><p >Quantity:</p><input class="mb-2 form-control" id="newname2" placeholder="Enter Quantity" ></input><p >Price:</p><input class="mb-2 form-control" id="newname3" placeholder="Enter Price" ></input><p >Total:</p><input class="mb-2 form-control" id="newname4" placeholder="Enter Total" onclick="nakka(0)"></input><button class="btn btn-success col-5 text-white " onclick="updt2(0)"><i class="fas fa-edit"></i>Update</button><button class="btn btn-danger col-5 text-white pd" onclick="read()"><i class="fas fa-ban"></i> Cancel</button></div> </div>'
          
            // document.getElementById('newname4').value=document.getElementById('newname2').value*document.getElementById('newname3').value;
           
          // document.getElementById('newname4').value=document.getElementById('newname2').value*document.getElementById('newname3').value;
           }
           if(i3==1)
           {
           document.getElementById('nameTR').innerHTML+='<div class="bg-dark border border-danger text-white mb-2 card"><div class="card-body ltt"><p >Name:</p><input class="mb-2 form-control" id="newname5" placeholder="Enter Name"></input><p >Quantity:</p><input class="mb-2 form-control" id="newname6" placeholder="Enter Quantity"></input><p >Price:</p><input class="mb-2 form-control" id="newname7" placeholder="Enter Price"></input><p >Total:</p><input class="mb-2 form-control" id="newname8" placeholder="Enter Total" onclick="nakka(1)"></input><button class="btn btn-success col-5 text-white " onclick="updt2(1)"><i class="fas fa-edit"></i>Update</button><button class="btn btn-danger col-5 text-white pd" onclick="read()"><i class="fas fa-ban"></i> Cancel</button></div> </div>'
  
         
          }
          if(i3==2)
          {
          document.getElementById('nameTR').innerHTML+='<div class="bg-dark border border-danger text-white mb-2 card"><div class="card-body ltt"><p >Name:</p><input class="mb-2 form-control" id="newname9" placeholder="Enter Name"></input><p >Quantity:</p><input class="mb-2 form-control" id="newname10" placeholder="Enter Quantity"></input><p >Price:</p><input class="mb-2 form-control" id="newname11" placeholder="Enter Price"></input><p >Total:</p><input class="mb-2 form-control" id="newname12" placeholder="Enter Total" onclick="nakka(2)"></input><button class="btn btn-success col-5 text-white " onclick="updt2(2)"><i class="fas fa-edit"></i>Update</button><button class="btn btn-danger col-5 text-white pd" onclick="read()"><i class="fas fa-ban"></i> Cancel</button></div> </div>'
 
        
         }
         if(i3==3)
         {
         document.getElementById('nameTR').innerHTML+='<div class="bg-dark border border-danger text-white mb-2 card"><div class="card-body ltt"><p >Name:</p><input class="mb-2 form-control" id="newname13" placeholder="Enter Name"></input><p >Quantity:</p><input class="mb-2 form-control" id="newname14" placeholder="Enter Quantity"></input><p >Price:</p><input class="mb-2 form-control" id="newname15" placeholder="Enter Price"></input><p >Total:</p><input class="mb-2 form-control" id="newname16" placeholder="Enter Total" onclick="nakka(3)"></input><button class="btn btn-success col-5 text-white " onclick="updt2(3)"><i class="fas fa-edit"></i>Update</button><button class="btn btn-danger col-5 text-white pd" onclick="read()"><i class="fas fa-ban"></i> Cancel</button></div> </div>'

       
        }
          }
           else
           {
            if(i==0)
            {
              document.getElementById('nameTR').innerHTML+='<div class="bg-dark border border-success text-white mb-2 card" id="blur"><div class="card-body ltt"><p id="po1"></p><p id="po2"></p><p id="po3"></p><p id="po4">:</p><button class="btn btn-warning col-5 text-white " onclick="updt(0)" disabled><i class="fas fa-edit"></i>Edit</button><button class="btn btn-danger col-5 text-white pd" onclick="del(0)" disabled><i class="fas fa-trash"></i> Delete</button></div> </div>'
            document.getElementById('po1').innerHTML='<i class="fas fa-user"></i> Name: '+names4[i].name;
            document.getElementById('po2').innerHTML='<i class="fas fa-dollar-sign"></i> Price: '+names4[i].price;
            document.getElementById('po3').innerHTML='<i class="fas fa-copy"></i> Quantity: '+names4[i].quantity;
            document.getElementById('po4').innerHTML='<i class="fas fa-money-bill-wave"></i> Total: '+names4[i].total;
            }
            if(i==1)
          {
          document.getElementById('nameTR').innerHTML+='<div class="bg-dark border border-success text-white mb-2 card" id="blur"><div class="card-body ltt"><p id="po5"></p><p id="po6"></p><p id="po7"></p><p id="po8">:</p><button class="btn btn-warning col-5 text-white "onclick="updt(1)" disabled><i class="fas fa-edit"></i>Edit</button><button class="btn btn-danger col-5 text-white pd"onclick="del(1)" disabled><i class="fas fa-trash"></i> Delete</button></div> </div>'
        document.getElementById('po5').innerHTML='<i class="fas fa-user"></i> Name: '+names4[i].name;
        document.getElementById('po6').innerHTML='<i class="fas fa-dollar-sign"></i> Price: '+names4[i].price;
        document.getElementById('po7').innerHTML='<i class="fas fa-copy"></i> Quantity: '+names4[i].quantity;
        document.getElementById('po8').innerHTML='<i class="fas fa-money-bill-wave"></i> Total: '+names4[i].total;
        }
        if(i==2)
        {
        document.getElementById('nameTR').innerHTML+='<div class="bg-dark border border-success text-white mb-2 card" id="blur"><div class="card-body ltt"><p id="po9"></p><p id="po10"></p><p id="po11"></p><p id="po12">:</p><button class="btn btn-warning col-5 text-white "onclick="updt(2)" disabled><i class="fas fa-edit"></i>Edit</button><button class="btn btn-danger col-5 text-white pd"onclick="del(2)" disabled><i class="fas fa-trash"></i> Delete</button></div> </div>'
      document.getElementById('po9').innerHTML='<i class="fas fa-user"></i> Name: '+names4[i].name;
      document.getElementById('po10').innerHTML='<i class="fas fa-dollar-sign"></i> Price: '+names4[i].price;
      document.getElementById('po11').innerHTML='<i class="fas fa-copy"></i> Quantity: '+names4[i].quantity;
      document.getElementById('po12').innerHTML='<i class="fas fa-money-bill-wave"></i> Total: '+names4[i].total;
      }
      if(i==3)
      {
        document.getElementById('nameTR').innerHTML+='<div class="bg-dark border border-success text-white mb-2 card" id="blur"><div class="card-body ltt"><p id="po13"></p><p id="po14"></p><p id="po15"></p><p id="po16">:</p><button class="btn btn-warning col-5 text-white "onclick="updt(3)" disabled><i class="fas fa-edit"></i>Edit</button><button class="btn btn-danger col-5 text-white pd"onclick="del(3)" disabled><i class="fas fa-trash"></i> Delete</button></div> </div>'
      document.getElementById('po13').innerHTML='<i class="fas fa-user"></i> Name: '+names4[i].name;
      document.getElementById('po14').innerHTML='<i class="fas fa-dollar-sign"></i> Price: '+names4[i].price;
      document.getElementById('po15').innerHTML='<i class="fas fa-copy"></i> Quantity: '+names4[i].quantity;
      document.getElementById('po16').innerHTML='<i class="fas fa-money-bill-wave"></i> Total: '+names4[i].total;
      }

         }
      }
    }
    function updt2(i4)
    {
        let names5=JSON.parse(localStorage.getItem('ORDERS'))
        if(i4==0)
        {
        names5[i4].name= document.getElementById('newname1').value;
        names5[i4].quantity=parseInt( document.getElementById('newname2').value);
        names5[i4].price=parseInt( document.getElementById('newname3').value);
        names5[i4].total=parseInt(document.getElementById('newname4').value);
        }
        if(i4==1)
        {
        names5[i4].name= document.getElementById('newname5').value;
        names5[i4].quantity=parseInt( document.getElementById('newname6').value);
        names5[i4].price=parseInt( document.getElementById('newname7').value);
        names5[i4].total=parseInt( document.getElementById('newname8').value);
        }
        if(i4==2)
        {
        names5[i4].name= document.getElementById('newname9').value;
        names5[i4].quantity=parseInt( document.getElementById('newname10').value);
        names5[i4].price=parseInt(document.getElementById('newname11').value);
        names5[i4].total=parseInt( document.getElementById('newname12').value);
        }
        if(i4==3)
        {
        names5[i4].name= document.getElementById('newname13').value;
        names5[i4].quantity=parseInt( document.getElementById('newname14').value);
        names5[i4].price=parseInt( document.getElementById('newname15').value);
        names5[i4].total=parseInt( document.getElementById('newname16').value);
        }
        if(names5[i4].name==''||names5[i4].quantity==''||names5[i4].price==''||names5[i4].total=='')
        {
          alert('Fill Missing Fields')
        }
        else
        {
          localStorage.setItem('ORDERS',JSON.stringify(names5));
          read();
          ffinaltotal();
        }
    }
   
     function ffinaltotal()
     {
      let finaltotal=0;
       let names6=JSON.parse(localStorage.getItem('ORDERS'))
       console.log(names6)
       for(let i=0;i<names6.length;i++)
       {
         finaltotal+=names6[i].total
       }
       console.log(finaltotal)
       localStorage.setItem('TOTAl',JSON.stringify(finaltotal))
       
     }

      function read()
      {
        document.getElementById('nameTR').innerHTML='';
        let storerecords2=JSON.parse(localStorage.getItem('ORDERS'))
        console.log('mahhi')
        if(storerecords2!=null)
        {
          for(var i=0;i<storerecords2.length;i++)
          {
            if(i==0)
            {
            document.getElementById('nameTR').innerHTML+='<div class="  border border-success text-white mb-2 card" id="blur"><div class="card-body ltt"><p id="po1"></p><p id="po2"></p><p id="po3"></p><p id="po4">:</p><button class="btn btn-warning col-5 text-white " onclick="updt(0)"><i class="fas fa-edit"></i>Edit</button><button class="btn btn-danger col-5 text-white pd" onclick="del(0)"><i class="fas fa-trash"></i> Delete</button></div> </div>'
          document.getElementById('po1').innerHTML='<i class="fas fa-user"></i> Name: '+storerecords2[i].name;
          document.getElementById('po2').innerHTML='<i class="fas fa-dollar-sign"></i> Price: '+storerecords2[i].price;
          document.getElementById('po3').innerHTML='<i class="fas fa-copy"></i> Quantity: '+storerecords2[i].quantity;
          document.getElementById('po4').innerHTML='<i class="fas fa-money-bill-wave"></i> Total: '+storerecords2[i].total;
          }
          if(i==1)
          {
          document.getElementById('nameTR').innerHTML+='<div class=" border border-success text-white mb-2 card" id="blur2"><div class="card-body ltt"><p id="po5"></p><p id="po6"></p><p id="po7"></p><p id="po8">:</p><button class="btn btn-warning col-5 text-white "onclick="updt(1)"><i class="fas fa-edit"></i>Edit</button><button class="btn btn-danger col-5 text-white pd"onclick="del(1)"><i class="fas fa-trash"></i> Delete</button></div> </div>'
        document.getElementById('po5').innerHTML='<i class="fas fa-user"></i> Name: '+storerecords2[i].name;
        document.getElementById('po6').innerHTML='<i class="fas fa-dollar-sign"></i> Price: '+storerecords2[i].price;
        document.getElementById('po7').innerHTML='<i class="fas fa-copy"></i> Quantity: '+storerecords2[i].quantity;
        document.getElementById('po8').innerHTML='<i class="fas fa-money-bill-wave"></i> Total: '+storerecords2[i].total;
        }
        if(i==2)
        {
        document.getElementById('nameTR').innerHTML+='<div class="border border-success text-white mb-2 card" id="blur3"><div class="card-body ltt"><p id="po9"></p><p id="po10"></p><p id="po11"></p><p id="po12">:</p><button class="btn btn-warning col-5 text-white "onclick="updt(2)"><i class="fas fa-edit"></i>Edit</button><button class="btn btn-danger col-5 text-white pd"onclick="del(2)"><i class="fas fa-trash"></i> Delete</button></div> </div>'
      document.getElementById('po9').innerHTML='<i class="fas fa-user"></i> Name: '+storerecords2[i].name;
      document.getElementById('po10').innerHTML='<i class="fas fa-dollar-sign"></i> Price: '+storerecords2[i].price;
      document.getElementById('po11').innerHTML='<i class="fas fa-copy"></i> Quantity: '+storerecords2[i].quantity;
      document.getElementById('po12').innerHTML='<i class="fas fa-money-bill-wave"></i> Total: '+storerecords2[i].total;
      }
      if(i==3)
      {
      document.getElementById('nameTR').innerHTML+='<div class=" border border-success text-white mb-2 card" id="blur4"><div class="card-body ltt"><p id="po13"></p><p id="po14"></p><p id="po15"></p><p id="po16">:</p><button class="btn btn-warning col-5 text-white "onclick="updt(3)"><i class="fas fa-edit"></i>Edit</button><button class="btn btn-danger col-5 text-white pd"onclick="del(3)"><i class="fas fa-trash"></i> Delete</button></div> </div>'
    document.getElementById('po13').innerHTML='<i class="fas fa-user"></i> Name: '+storerecords2[i].name;
    document.getElementById('po14').innerHTML='<i class="fas fa-dollar-sign"></i> Price: '+storerecords2[i].price;
    document.getElementById('po15').innerHTML='<i class="fas fa-copy"></i> Quantity: '+storerecords2[i].quantity;
    document.getElementById('po16').innerHTML='<i class="fas fa-money-bill-wave"></i> Total: '+storerecords2[i].total;
    }
        }
        }
      }

      function del(i8)
      {
        let names8=JSON.parse(localStorage.getItem('ORDERS'))
        names8.splice(i8,1)
        localStorage.setItem('ORDERS',JSON.stringify(names8))
        names8=JSON.parse(localStorage.getItem('ORDERS'))
        ffinaltotal();
        if(names8.length==0)
        {
          console.log('ooo')
          clearstorage();
          console.log (names8)
        }
        read();

      }
    
    
      function showorders()
      { console.log(localStorage.length)
        if(localStorage.length>=1)
        {
        var vi=0;
        let storerecords=JSON.parse(localStorage.getItem('ORDERS'))
        console.log(storerecords)
        document.getElementById('tableProducts2').innerHTML='';
        for(let i=0;i<storerecords.length;i++)
        {
          if(i==0)
          {
           document.getElementById('tableProducts2').innerHTML+='<tr><th scope="row"><div id="vt"></div></th><td><div id="st1"></div></td><td> <div style="width:2rem;text-align:center" id="st2"></div></td><td><div id="st3"></div></td><td><div id="st4"></div></td></tr>';
          vi=vi+1;
          document.getElementById('vt').innerText=vi;
          
           var f=storerecords[i].name;
          document.getElementById('st1').innerText=f;
          var ff=storerecords[i].quantity;
          document.getElementById('st2').innerText=ff;
          var fff=storerecords[i].price;
          document.getElementById('st3').innerText=fff;
          var ffff=storerecords[i].total;
          document.getElementById('st4').innerText=ffff;
          }
          if(i==1)
          {
           document.getElementById('tableProducts2').innerHTML+='<tr><th scope="row"><div id="vt2"></div></th><td><div id="st5"></div></td><td> <div style="width:2rem;text-align:center" id="st6"></div></td><td><div id="st7"></div></td><td><div id="st8"></div></td></tr>';
           vi=vi+1;
           document.getElementById('vt2').innerText=vi;
           var f=storerecords[i].name;
          document.getElementById('st5').innerText=f;
          var ff=storerecords[i].quantity;
          document.getElementById('st6').innerText=ff;
          var fff=storerecords[i].price;
          document.getElementById('st7').innerText=fff;
          var ffff=storerecords[i].total;
          document.getElementById('st8').innerText=ffff;
          }
          if(i==2)
          {
           document.getElementById('tableProducts2').innerHTML+='<tr><th scope="row"><div id="vt3"></div></th><td><div id="st9"></div></td><td> <div style="width:2rem;text-align:center" id="st10"></div></td><td><div id="st11"></div></td><td><div id="st12"></div></td></tr>';
           vi=vi+1;
           document.getElementById('vt3').innerText=vi;
           var f=storerecords[i].name;
          document.getElementById('st9').innerText=f;
          var ff=storerecords[i].quantity;
          document.getElementById('st10').innerText=ff;
          var fff=storerecords[i].price;
          document.getElementById('st11').innerText=fff;
          var ffff=storerecords[i].total;
          document.getElementById('st12').innerText=ffff;
          }
          if(i==3)
          {
           document.getElementById('tableProducts2').innerHTML+='<tr><th scope="row"><div id="vt4"></div></th><td><div id="st13"></div></td><td> <div style="width:2rem;text-align:center" id="st14"></div></td><td><div id="st15"></div></td><td><div id="st16"></div></td></tr>';
           vi=vi+1;
           document.getElementById('vt4').innerText=vi;
           var f=storerecords[i].name;
          document.getElementById('st13').innerText=f;
          var ff=storerecords[i].quantity;
          document.getElementById('st14').innerText=ff;
          var fff=storerecords[i].price;
          document.getElementById('st15').innerText=fff;
          var ffff=storerecords[i].total;
          document.getElementById('st16').innerText=ffff;
          }
          if(i==4)
          {
           document.getElementById('tableProducts2').innerHTML+='<tr><th scope="row"><div id="vt5"></div></th><td><div id="st17"></div></td><td> <div style="width:2rem;text-align:center" id="st18"></div></td><td><div id="st19"></div></td><td><div id="st20"></div></td></tr>';
           vi=vi+1;
           document.getElementById('vt5').innerText=vi;
           var f=storerecords[i].name;
          document.getElementById('st17').innerText=f;
          var ff=storerecords[i].quantity;
          document.getElementById('st18').innerText=ff;
          var fff=storerecords[i].price;
          document.getElementById('st19').innerText=fff;
          var ffff=storerecords[i].total;
          document.getElementById('st20').innerText=ffff;
          }
          if(i==5)
          {
           document.getElementById('tableProducts2').innerHTML+='<tr><th scope="row"><div id="vt6"></div></th><td><div id="st21"></div></td><td> <div style="width:2rem;text-align:center" id="st22"></div></td><td><div id="st23"></div></td><td><div id="st24"></div></td></tr>';
           vi=vi+1;
           document.getElementById('vt6').innerText=vi;
           var f=storerecords[i].name;
          document.getElementById('st21').innerText=f;
          var ff=storerecords[i].quantity;
          document.getElementById('st22').innerText=ff;
          var fff=storerecords[i].price;
          document.getElementById('st23').innerText=fff;
          var ffff=storerecords[i].total;
          document.getElementById('st24').innerText=ffff;
          }
          if(i==6)
          {
           document.getElementById('tableProducts2').innerHTML+='<tr><th scope="row"><div id="vt7"></div></th><td><div id="st25"></div></td><td> <div style="width:2rem;text-align:center" id="st26"></div></td><td><div id="st27"></div></td><td><div id="st28"></div></td></tr>';
           vi=vi+1;
           document.getElementById('vt7').innerText=vi;
           var f=storerecords[i].name;
          document.getElementById('st25').innerText=f;
          var ff=storerecords[i].quantity;
          document.getElementById('st26').innerText=ff;
          var fff=storerecords[i].price;
          document.getElementById('st27').innerText=fff;
          var ffff=storerecords[i].total;
          document.getElementById('st28').innerText=ffff;
          }
          if(i==7)
          {
           document.getElementById('tableProducts2').innerHTML+='<tr><th scope="row"><div id="vt8"></div></th><td><div id="st29"></div></td><td> <div style="width:2rem;text-align:center" id="st30"></div></td><td><div id="st31"></div></td><td><div id="st32"></div></td></tr>';
           vi=vi+1;
           document.getElementById('vt8').innerText=vi;
           var f=storerecords[i].name;
          document.getElementById('st29').innerText=f;
          var ff=storerecords[i].quantity;
          document.getElementById('st30').innerText=ff;
          var fff=storerecords[i].price;
          document.getElementById('st31').innerText=fff;
          var ffff=storerecords[i].total;
          document.getElementById('st32').innerText=ffff;
          }
          if(i==8)
          {
           document.getElementById('tableProducts2').innerHTML+='<tr><th scope="row"><div id="vt9"></div></th><td><div id="st33"></div></td><td> <div style="width:2rem;text-align:center" id="st34"></div></td><td><div id="st35"></div></td><td><div id="st36"></div></td></tr>';
           vi=vi+1;
           document.getElementById('vt9').innerText=vi;
           var f=storerecords[i].name;
          document.getElementById('st33').innerText=f;
          var ff=storerecords[i].quantity;
          document.getElementById('st34').innerText=ff;
          var fff=storerecords[i].price;
          document.getElementById('st35').innerText=fff;
          var ffff=storerecords[i].total;
          document.getElementById('st36').innerText=ffff;
          }

        }
        document.getElementById('bottom').style.display="block"
        document.getElementById('total2').innerHTML='<tr><th scope="row"></th><td></td><td></td><td><h4>Total :</h4></td><td><div id="far"></div></td></tr>';
        
        var storetotals=JSON.parse(localStorage.getItem('TOTAl'));
        document.getElementById('far').innerText='$ '+storetotals+'.00';
        document.getElementById('bottom').innerHTML='<button class="btn btn-warning text-white " style="width:9.5rem" onclick="clearstorage()"><i class="fas fa-trash-alt"><i/> CLEAR ALL</button>'
      
      }
    }


    function addproductdiv()
    {

      //  document.body.style.backgroundImage="url('images/ca.jpg')";
      // background-image: url('../images/cupa.jpg');
      // document.getElementById('background').style.backgroundSize="cover";
      // document.getElementById('background').style.backgroundRepeat="no-repeat";
     
      console.log('teree')
      document.getElementById('bottom').style.display="none";
      document.getElementById('backbutton').style.display="block";
      document.getElementById('coco').style.display="none";
   
      document.getElementById('localstoragediv').style.display="none";
      document.getElementById('tablerecordsdiv').style.display="none";
      document.getElementById('tablerecordssdiv').style.display="none";
      document.getElementById('updateproductdiv').style.display="none";
      document.getElementById('deleteproductdiv').style.display="none";
      document.getElementById('nametr').style.display="none";
      document.getElementById('addproductsdiv').style.display="block";
      document.getElementById('marginleft').style.margin="0px auto"
      document.getElementById('blackbutton').style.display="none"
     
      
    }
    function deleteproductdiv()
    {
      // document.body.style.backgroundImage="url('images/ca.jpg')";
      // background-image: url('../images/cupa.jpg');
      // document.getElementById('background').style.backgroundSize="cover";
      // document.getElementById('background').style.backgroundRepeat="no-repeat";
      document.getElementById('bottom').style.display="none";
      document.getElementById('coco').style.display="none";
      document.getElementById('backbutton').style.display="block";
      document.getElementById('localstoragediv').style.display="none";
      document.getElementById('tablerecordsdiv').style.display="none";
      document.getElementById('tablerecordssdiv').style.display="none";
      document.getElementById('updateproductdiv').style.display="none";
      document.getElementById('addproductsdiv').style.display="none";
      document.getElementById('nametr').style.display="none";
      document.getElementById('deleteproductdiv').style.display="block";
      document.getElementById('marginleft2').style.margin="0px auto"
      document.getElementById('blackbutton').style.display="none"
    }
    function updateproductdiv()
    {
      // document.body.style.backgroundImage="url('images/ca.jpg')";
      // background-image: url('../images/cupa.jpg');
      // document.getElementById('background').style.backgroundSize="cover";
      // document.getElementById('background').style.backgroundRepeat="no-repeat";
      document.getElementById('blackbutton').style.display="none"
      document.getElementById('bottom').style.display="none";
      document.getElementById('coco').style.display="none";
      document.getElementById('backbutton').style.display="block";
      document.getElementById('localstoragediv').style.display="none";
      document.getElementById('tablerecordsdiv').style.display="none";
      document.getElementById('tablerecordssdiv').style.display="none";
      document.getElementById('deleteproductdiv').style.display="none";
      document.getElementById('addproductsdiv').style.display="none";
      document.getElementById('nametr').style.display="none";
      document.getElementById('updateproductdiv').style.display="block";
      document.getElementById('marginleft3').style.margin="0px auto"
    }
    function tablerecorddiv()
    {
      // document.body.style.backgroundImage="url('images/ca.jpg')";
      // background-image: url('../images/cupa.jpg');
      // document.getElementById('background').style.backgroundSize="cover";
      // document.getElementById('background').style.backgroundRepeat="no-repeat";
      document.getElementById('blackbutton').style.display="none"
      document.getElementById('coco').style.display="none";
      document.getElementById('backbutton').style.display="block";
      document.getElementById('localstoragediv').style.display="none";
      
      document.getElementById('deleteproductdiv').style.display="none";
      document.getElementById('updateproductdiv').style.display="none";
      document.getElementById('addproductsdiv').style.display="none";
      document.getElementById('tablerecordsdiv').style.display="block";
      document.getElementById('tablerecordssdiv').style.display="block";
    }
    function localStoragedivv()
    {
      // document.body.style.backgroundImage="url('images/ca.jpg')";
      // background-image: url('../images/cupa.jpg');
      // document.getElementById('background').style.backgroundSize="cover";
      // document.getElementById('background').style.backgroundRepeat="no-repeat";
      document.getElementById('blackbutton').style.display="none"
      document.getElementById('bottom').style.display="none";
      document.getElementById('coco').style.display="none";
      document.getElementById('backbutton').style.display="block";
      // document.getElementById('tablerecordsdiv').style.display="block";
      document.getElementById('deleteproductdiv').style.display="none";
      document.getElementById('tablerecordsdiv').style.display="none";
      document.getElementById('tablerecordssdiv').style.display="none";
      document.getElementById('updateproductdiv').style.display="none";
      document.getElementById('addproductsdiv').style.display="none";
      document.getElementById('nametr').style.display="block";
      document.getElementById('localstoragediv').style.display="block";
    }
    
    
  function showblackdiv()
  {
    document.body.style.backgroundImage="none";
    document.getElementById('blackbutton').style.display="block"
    document.getElementById('bottom').style.display="none";
    document.getElementById('coco').style.display="block";
    document.getElementById('nametr').style.display="none";
    document.getElementById('deleteproductdiv').style.display="none";
      document.getElementById('tablerecordsdiv').style.display="none";
      document.getElementById('tablerecordssdiv').style.display="none";
      document.getElementById('updateproductdiv').style.display="none";
      document.getElementById('addproductsdiv').style.display="none";
      document.getElementById('localstoragediv').style.display="none";
      document.getElementById('backbutton').style.display="none";

  }
  function stringinput(event)
  {
 var ch=String.fromCharCode(event.which);
 if(!(/[0-9]/.test(ch)))
 {
 
   event.preventDefault();
 }


  }
  function stringinput2(event)
  {
 var ch=String.fromCharCode(event.which);
 if((/[0-9]/.test(ch)))
 {
 
   event.preventDefault();
 }


  }
  
  
  

  // var lki= document.getElementById('faraz').innerText;
  // document.getElementById('payapl-button').onclick=function()
  

 


 
  
  
   


 
  