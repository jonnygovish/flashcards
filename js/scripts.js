$(document). ready(function(){
  $(".clickable"). click(function(){
    $("#java-showing"). toggle();
    $("#java-hidden") . toggle();
  });
});
$(document). ready(function(){
  $(".click"). click(function(){
    $("#string-showing"). toggle();
    $("#string-hidden"). toggle();
  })
});

$(document). ready(function(){
  $(".touch"). click(function(){
    $("#methods-showing"). toggle();
    $("#methods-hidden"). toggle();
  })
});

$(document). ready(function(){
  $(".arg"). click(function(){
    $("#arguement-showing"). toggle();
    $("#arguement-hidden"). toggle();
  })
})

$(document). ready(function(){
  $(".par"). click(function(){
    $("#parameter-showing"). toggle();
    $("#parameter-hidden"). toggle();
  })
})

$(document). ready(function(){
  $(".bool"). click(function(){
    $("#boolean-showing"). toggle();
    $("#boolean-hidden"). toggle();
  })
})
