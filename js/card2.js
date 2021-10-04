function buy(){
    // console.log(5);
 
    // swal("HAKKA!", "You clicked the button!", "success", {
    //   button: "Aww yiss!",
    // });
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
  
  // Swal({
  //   type:'success',
  //   tittle:'Success',
  //   text:'operation Completed'
  
  // });
  swal("HAKKA!", "You clicked the button!", "success", {
      button: "Aww yiss!",
    });
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
   
    for(let index=0;index < products.length;index++)
    {
      // var z;
      if(products[index].id!=id||products[index].cart==true)
      {
  
      }
      else
      {
        products[index].cart=true;
       
        con2.push(products[index].id);
       
        if(index==0){
        document.getElementById('tableProducts').innerHTML+='<tr><th scope="row">1</th><td><button class="btn btn-danger " onclick="remove(1)">X</button></td><td><img src="images/cupcake1.jpg" style="width:5rem;height:3rem"></td><td>Choco Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(1)" >-</button><div id="faraz1" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(1)">+</button></td><td>$ 5.00</td></tr>'
        var c=products[index].quantity;
        // console.log(c)
        document.getElementById('faraz1').innerText=c;
        products[index].total=products[index].price * products[index].quantity;
         
  
      }
      if(index==1){
        document.getElementById('tableProducts').innerHTML+='<tr><th scope="row">2</th><td><button class="btn btn-danger" onclick="remove(2)">X</button></td><td><img src="images/cupcake2.jpg" style="width:5rem;height:3rem"></td><td>Ice Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(2)" >-</button><div id="asad" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(2)">+</button></td><td>$ 6.00</td></tr>'
        var c=products[index].quantity;
        // console.log(c)
        document.getElementById('asad').innerText=c;
        
        products[index].total=products[index].price * products[index].quantity;
  
      }
      if(index==2){
        document.getElementById('tableProducts').innerHTML+='<tr><th scope="row">3</th><td><button class="btn btn-danger" onclick="remove(3)">X</button></td><td><img src="images/cupcake3.jpg" style="width:5rem;height:3rem"></td><td>Vanella Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(3)" >-</button><div id="akram" style="display:inline-block ; width:2rem; text-align:center" ></div><button class="btn btn-primary" onclick="addamount(3)">+</button></td><td>$ 7.00</td></tr>'
        var c=products[index].quantity;
        // console.log(c)
        document.getElementById('akram').innerText=c;
        
        products[index].total=products[index].price * products[index].quantity;
      }
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
            document.getElementById('tableProducts').innerHTML+='<tr><th scope="row">1</th><td><button class="btn btn-danger " onclick="remove(1)">X</button></td><td><img src="images/cupcake1.jpg" style="width:5rem;height:3rem"></td><td>Choco Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(1)" >-</button><div id="faraz1" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(1)">+</button></td><td><div id="fa1"><div/></td></tr>'
            var c=products[index3].quantity;
            // console.log(c)
            document.getElementById('faraz1').innerText=c;
            var d=products[index3].price * products[index3].quantity;
            document.getElementById('fa1').innerHTML='$ '+d+'.00'; 
            products[index3].total=products[index3].price * products[index3].quantity;
             
      
          }
          if(index3==1){
            document.getElementById('tableProducts').innerHTML+='<tr><th scope="row">2</th><td><button class="btn btn-danger" onclick="remove(2)">X</button></td><td><img src="images/cupcake2.jpg" style="width:5rem;height:3rem"></td><td>Ice Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(2)" >-</button><div id="asad" style="display:inline-block;width:2rem;text-align:center"></div><button class="btn btn-primary" onclick="addamount(2)">+</button></td><td><div id="fa2"></div></td></tr>'
            var c=products[index3].quantity;
            // console.log(c)
            document.getElementById('asad').innerText=c;
            var d=products[index3].price * products[index3].quantity;
            document.getElementById('fa2').innerHTML='$ '+d+'.00'; 
            products[index3].total=products[index3].price * products[index3].quantity;
      
          }
          if(index3==2){
            document.getElementById('tableProducts').innerHTML+='<tr><th scope="row">3</th><td><button class="btn btn-danger" onclick="remove(3)">X</button></td><td><img src="images/cupcake3.jpg" style="width:5rem;height:3rem"></td><td>Vanella Cupcake</td><td><button class="btn btn-primary" onclick="reduceamount(3)" >-</button><div id="akram" style="display:inline-block ; width:2rem; text-align:center" ></div><button class="btn btn-primary" onclick="addamount(3)">+</button></td><td><div id="fa3"></div></td></tr>'
            var c=products[index3].quantity;
            // console.log(c)
            document.getElementById('akram').innerText=c;
            var d=products[index3].price * products[index3].quantity;
            document.getElementById('fa3').innerHTML='$ '+d+'.00'; 
            
            products[index3].total=products[index3].price * products[index3].quantity;
          }
  
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
        }];
  