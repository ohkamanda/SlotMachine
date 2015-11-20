
<script>
  function runSlots() {
    var slotOne;
    var slotTwo;
    var slotThree;
    
    var images = ["http://i.imgur.com/9H17QFk.png", "http://i.imgur.com/9RmpXTy.png", "http://i.imgur.com/VJnmtt5.png"];
    
    slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    $($('.slot')[0]).html('<img src="'+ images[slotOne-1] + '">');
    $($('.slot')[1]).html('<img src="'+ images[slotTwo-1]+'">');
    $($('.slot')[2]).html('<img src="'+ images[slotThree - 1]+'">');
    
    if (slotOne === slotTwo && slotTwo === slotThree) {
      $('.logger').html("It's A Win");
      return null;
    }
    
    if(slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){
      $(".logger").html(slotOne + " " + slotTwo + " " + slotThree);
    }
    
    $('.logger').append(" Not A Win");
    
    return [slotOne, slotTwo, slotThree];
  }
  $(document).ready(function() {
     $('.go').click(function() {
       runSlots();
     });
   });
</script>