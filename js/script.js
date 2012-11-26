//window.onload = function(){ alert("welcome"); }




$(document).ready(function() {


$(".squares_left a").click(function () {
      $(".layer_bottom").show("slide", { direction: "up"}, 300);
  $(".layer_middle").show("slide", { direction: "up"},600);
       $(".layer_top").show("slide", { direction: "right"}, 900);
//$(".layer_right").show("slide", { direction: "right"}, 400);
//$(".layer_left").show("slide", { direction: "up"}, 400);

});

$(".squares_right a").click(function () {
      $("#return").show("slide", { direction: "down"}, 1000);
});

$(".squares_right a").click(function () {
      $(".layer_top").show("slide", { direction: "left"}, 700);
      $(".layer_right").show("slide", { direction: "up"}, 400);
});

  });

//Not Deductible

$('document').ready(function() {
    $('.trans .theListItem .red').click(function() {
        var $toRemove = $(this).closest('div[data-theme="a"]')

        $toRemove.animate({
            height: 0
        }, 500, function() {
            // This is the callback.
            $toRemove.remove();
        });

        return false;
    });
});


//drop down


//colors//
$('document').ready(function() {
    $('.theListItem .red').click(function() {
        var $changeColor = $(this).closest('div[data-theme="a"]').css("background-color", "#ff3333");
        });
});

$('document').ready(function() {
    $('.theListItem .green').click(function() {
        var $changeColor = $(this).closest('div[data-theme="a"]').css("background-color", "#008021");
        });
});

$('document').ready(function() {
    $('.theListItem .blue').click(function() {
        var $changeColor = $(this).closest('div[data-theme="a"]').css("background-color", "#0066cc");
        });
});


//text scroll effect// 

    $(document).ready(function() {
$('.scrollingtext').bind('marquee', function() {
var ob = $(this);
var tw = ob.width();
var ww = ob.parent().width();
ob.css({ right: -tw });
ob.animate({ right: ww }, 10000, 'linear', function() {
ob.trigger('marquee');
});
}).trigger('marquee');

});


    $(document).ready(function() {
$('.ui-btn-text').click('marquee', function() {
var ob = $(this);
var tw = ob.width();
var ww = ob.parent().width();
ob.css({ right: -tw });
ob.animate({ right: ww }, 5000, 'linear', function() {
ob.trigger('marquee');
});
}).trigger('marquee');

});



/*
$('document').ready(function() {
    $('.theListItem #categories a').click(function() {
        var $toRemove = $('.theListItem a')

        $toRemove.animate({
            height: 0
        }, 500, function() {
            // This is the callback.
            $toRemove.remove();
        });

        return false;
    });
});


*/

$(document).bind("pageinit", function() {
    
$("div:jqmData(role='trans.html')").trigger( "create" );

});


$(document).bind("pageinit", function() {
    
$("div:jqmData(role='summary.html')").trigger( "create" );

});

/*
$(document).bind('pageinit');
$("div:jqmData(role='page')").trigger( "create" );

/*
$('document').ready(function() {
    $('.theListItem .blue').click(function() {
        var $toRemove = $(this).closest('div[data-theme="a"]')

        $toRemove.animate({
            height: 0
        }, 500, function() {
            // This is the callback.
            $toRemove.detach().appendTo('.layer_top');
        });

        return false;
    });
});
*/

