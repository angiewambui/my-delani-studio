$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
});
$(document).ready(function(){
    $("detailsform").submit(function(event){
      // event.preventDefault();
      var name = $("input#firstname").val();
      var email = $("input#email").val();
      var message = $("textarea#comment").val();
      if ($("input#firstname").val() && $("input#email").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
    });
  }); 
  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#ol").show();
    }).mouseout(function(){
      $("#ol").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#ol2").show();
    }).mouseout(function(){
      $("#ol2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#ol3").show();
    }).mouseout(function(){
      $("#ol3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#ol4").show();
    }).mouseout(function(){
      $("#ol4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#ol5").show();
    }).mouseout(function(){
      $("#ol5").hide();
    });
    $("#work6").mouseover(function(){
      $("#ol").show();
    }).mouseout(function(){
      $("#ol6").hide();
    });
    $("#work7").mouseover(function(){
      $("#ol7").show();
    }).mouseout(function(){
      $("#ol77").hide();
    });
    $("#work8").mouseover(function(){
      $("#ol8").show();
    }).mouseout(function(){
      $("#ol8").hide();
    });
  });