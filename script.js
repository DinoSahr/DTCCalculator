$(function() {

 var num = '';
 var tip = '';
 var txt = "Please select tip percent";

 $('.console').text("Enter purchase amount");

 //Purchase Amount
 $('.numbers .col').not('#ent').click(function(){
   num += $(this).text();
   $('.display').text(num);
 });

 //Clear Console
 $('#clear').click(function(){
   num = "";
   if($(this).attr('id') == "clear"){
      $('.display').text("Enter purchase amount");
       $(".tpt span").text("0");
       $(".price span").text("0");
       $(".tot span").text("0");
   }
 });

 //Assign tip
 $('.tips .col').not("#clear").click(function(){
   tip = $(this).text();
   $('.display').text(tip);
 });

 //Evaluting tip
 $('#ent').click(function(){
   var money, tipPercent, tipTot, conf;
   var tot = setTimeout(FinalTot);
   money = parseFloat(num);
   tipPercent = parseFloat(tip)/100;

    switch(tip){
       case "22%" :
         tipTot = money * tipPercent;
         $('.tpt span').text("@"+ tip + "  " + tipTot.toFixed(2));
         break;

       case "20%" :
         tipTot = money * tipPercent;
         $('.tpt span').text("@"+ tip + " " + tipTot.toFixed(2));
         break;

       case "18%" :
         tipTot = money * tipPercent;
         $('.tpt span').text("@"+ tip + " " + tipTot.toFixed(2));
         break;

       case "15%" :
         tipTot = money * tipPercent;
         $('.tpt span').text("@"+ tip + " " + tipTot.toFixed(2));
       break;

       case "10%" :
         tipTot = money * tipPercent;
         $('.tpt span').text("@"+ tip + " " + tipTot.toFixed(2));
         break;

       default :
         conf = confirm("Are you sure you don't want to assign a tip");
         tipTot = money * tipPercent;
         $('.tpt span').text("@"+ tip + " " + tipTot.toFixed(2));

         $('.console').text("No tip percent selected");

       break;
   }

   //Final Total
   function FinalTot(){
     var consoleVal = $(".display").text();
     if(consoleVal === ""){
       $(".tpt span").text("0");
       $(".price span").text("0");
       $(".tot span").text("0");
     }else{
       var finalTot = money + tipTot;
       $('.tot span').text("$" + finalTot.toFixed(2));
       $(".price span").text(money);
       $(".payment").show();
       $(".price, .tpt, .tot").show();
       $(".display").text("");
     }

   }
 });

});
