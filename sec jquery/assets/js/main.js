// $(document).ready(function(){
// $('.btn1').click(function(){
//     $('.text').fadeToggle('slow')
   
            
// });
// $('.btn2').click(function(){
//     $('.text1').fadeToggle('slow')
  
            
// });
// $('.btn3').click(function(){
//     $('.text2').fadeToggle('slow')
   
            
// });

// })


$(document).ready(function(){

$('button').forEach(()=>{
 $('.btn1').click(function(){
    $('.text').fadeToggle('slow')
})
 $('.btn2').click(function(){
    $('.text1').fadeToggle('slow')
})
$('.btn3').click(function(){
    $('.text2').fadeToggle('slow')
})
}); 

});


