function display()
{
  try{


      var num=document.getElementById("ugly").value;
       
      if(num===null|| num==="")
      {
         alert("specify an input");
      }
      
      else if(num<=0)
      {
         alert("invalid input");
      }


     else if(num==1){
        alert("1 is ugly no");
      }
      else {
        var  ugly=isUgly(num);
         
         if(ugly===true){
          alert(num+" is an ugly number");
          }
          else
         {
         alert(num+" is not an ugly number");
         }

      }
      }   
     catch(err)
     {
      document.getElementById("result").innerHTML="Function display-  "+err;
     }

     function isUgly(num) 
     { 
      try{
      while(num !== 1){
         if(num % 2 === 0){
            num /= 2;
         } else if(num % 3 === 0) {
            num /= 3;
         } else if(num % 5 === 0) {
               num /= 5;
         } else {
            return false;
         }
      }
      return true;
     }
   catch(err)
   {
    document.getElementById("result").innerHTML="Function checking no-  "+err;
   }


}
}



















  















