
$('#guantlet').click(function() {
    //$('.article-section, .characters').fadeOut(3000);
    //while ($('.article-section').length > 0) {
    // let num = $('.article-section').length;
    //     do {
          
    //      var random = Math.floor(Math.random()*10);
    //         $(".characters-icon").eq(random).fadeOut(1000);
    //     num = num -1;
    //     console.log("length: " + num);
    //     }
    //     while (num >= 0);
        
    
        setInterval(function(){
            if ($('.article-section').length > 0) {
                var random = Math.floor(Math.random()*3);
                $(".article-section").eq(random).fadeOut(1000);
            }
          }, 2000);
});


