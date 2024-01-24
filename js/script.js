$('.count').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
        $(this).text(Math.ceil(now));
    }
    });
    });
    var a=1;
function addcolumn(x){
    $("."+x).toggle();
    $("#"+x).toggleClass("green");
}

$(function() {
	$(".forecast-chat").CanvasJSChart({
		title: {
			text: ""
		},
		axisY: {
			title: "",
			includeZero: false
		},
		axisX: {
			interval: 1
		},
		data: [
		{
			type: "line", //try changing to column, area
			toolTipContent: "{label}: Forecast Sales {y}",
			dataPoints: [
				{ label: "Jan",  y: 5.28 },
				{ label: "Feb",  y: 3.83 },
				{ label: "March",y: 6.55 },
				{ label: "April",y: 4.81 },
				{ label: "May",  y: 2.37 },
				{ label: "June", y: 2.33 },
				{ label: "July", y: 3.06 },
				{ label: "Aug",  y: 2.94 },
				{ label: "Sep",  y: 5.41 },
				{ label: "Oct",  y: 2.22 },
				{ label: "Nov",  y: 2.22 },
				{ label: "Dec",  y: 2.80 }
			]
		}
		]
	});
    $(".sale-chat").CanvasJSChart({
		title: {
			text: ""
		},
		axisY: {
			title: "",
			includeZero: false
		},
		axisX: {
			interval: 1
		},
		data: [
		{
			type: "line", //try changing to column, area
			toolTipContent: "{label}: Sales {y}",
			dataPoints: [
				{ label: "Jan",  y: 5.28 },
				{ label: "Feb",  y: 3.83 },
				{ label: "March",y: 6.55 },
				{ label: "April",y: 4.81 },
				{ label: "May",  y: 2.37 },
				{ label: "June", y: 2.33 },
				{ label: "July", y: 3.06 },
				{ label: "Aug",  y: 2.94 },
				{ label: "Sep",  y: 5.41 },
				{ label: "Oct",  y: 2.22 },
				{ label: "Nov",  y: 2.22 },
				{ label: "Dec",  y: 2.80 }
			]
		}
		]
	});
});
window.onload = function () {

    var options = {
        animationEnabled: true,  
        title:{
            text: ""
        },
        axisX: {
            valueFormatString: "YYYY"
        },
        axisY: {
            title: "",
            prefix: ""
        },
        data: [{
            yValueFormatString: "$#,###",
            xValueFormatString: "MMMM-YYYY",
            type: "spline",
            dataPoints: [
                { x: new Date(2022, 0), y: 25060 },
                { x: new Date(2022, 1), y: 27980 },
                { x: new Date(2022, 2), y: 33800 },
                { x: new Date(2022, 3), y: 49400 },
                { x: new Date(2022, 4), y: 40260 },
                { x: new Date(2022, 5), y: 33900 },
                { x: new Date(2022, 6), y: 48000 },
                { x: new Date(2022, 7), y: 31500 },
                { x: new Date(2022, 8), y: 32300 },
                { x: new Date(2022, 9), y: 42000 },
                { x: new Date(2022, 10), y: 52160 },
                { x: new Date(2022, 11), y: 49400 },
                { x: new Date(2022, 12), y: 25060 },
                { x: new Date(2023, 1), y: 27980 },
                { x: new Date(2023, 2), y: 33800 },
                { x: new Date(2023, 3), y: 49400 },
                { x: new Date(2023, 4), y: 40260 },
                { x: new Date(2023, 5), y: 33900 },
                { x: new Date(2023, 6), y: 48000 },
                { x: new Date(2023, 8), y: 31500 },
                { x: new Date(2023, 8), y: 32300 },
                { x: new Date(2023, 9), y: 42000 },
                { x: new Date(2023, 10), y: 52160 },
                { x: new Date(2023, 12), y: 49400 },
                { x: new Date(2024, 0), y: 25060 },
                { x: new Date(2024, 1), y: 27980 },
                { x: new Date(2024, 2), y: 33800 },
                { x: new Date(2024, 3), y: 49400 },
                { x: new Date(2024, 4), y: 40260 },
                { x: new Date(2024, 5), y: 33900 },
                { x: new Date(2024, 6), y: 48000 },
                { x: new Date(2024, 7), y: 31500 },
                { x: new Date(2024, 8), y: 32300 },
                { x: new Date(2024, 9), y: 42000 },
                { x: new Date(2024, 10), y: 52160 },
                { x: new Date(2024, 11), y: 49400 },
                { x: new Date(2024, 12), y: 56400 }
            ]
        }]
    };
    $("#edit-forest-Container").CanvasJSChart(options);
    
    }
// settings-replenishment
$('#settings-replenishment').click(function(){
    $('#more-tools').toggleClass("show-hide");
  });

function editforcast(y){
    $("."+y).toggle();
    $("#"+y).toggleClass("green");
}
function openmenu(){
    $("#catalog-menu").toggleClass("show-hide");
}
function selectall(){
    if ($("#selectall").is(':checked')) {
        $(".single-select").prop("checked", true);
    };
    if ($("#selectall").is(':checked') == false) {
        $(".single-select").prop("checked", false);
    };

}
 function disableallselect(){
            // for hide and show
            
        $(".single-select").toggle(this.checked);
        $("#selectall").toggle(this.checked);
}
function buttonchange()
{
    if ($("#buttonchange").is(':checked')) {
        $(".item").css("display", "block");
        $(".nonitem").css("display", "none");
    };
    if ($("#buttonchange").is(':checked') == false) {
        $(".item").css("display", "none");
        $(".nonitem").css("display", "block");
    };
}
        // for hide and show
        // $(".single-select").toggle(this.checked);
        // $("popup-subject").attr("data-text", "subha testing");
        (function( $ ) {
  
            $.fn.dialogBox = function( options ) {
                options = $.extend({
                    dialog: "#dialog",
                    text: "#dialog-text",
                    ok: "#dialog-ok",
                    cancel: "#dialog-cancel",
                    content: "#dialog-content",
                    onconfirm: function() {},
                    oncancel: function() {}
                }, options);
                
                var Dialog = function( element ) {
                    this.$element = element;
                    this.init();
                };
                
                Dialog.prototype = {
                    init: function() {
                        this.setup();
                        this.actions();	
                    },
                    setup: function() {
                        var relHeight = ( $( window ).height() > $( document ).height() ) ? $( window ).height() : $( document ).height();
                        $( options.dialog ).height( relHeight );
                    },
                    actions: function() {
                        var self = this;
                        var text1="subhatest";
                        self.$element.on( "click", function( e ) {
                            $( options.text ).text( self.$element.data( "text" ) );
                            $( options.ok ).text( self.$element.data( "ok" ) );
                            $( options.cancel ).text( self.$element.data( "cancel" ) );
                            
                            $( options.content ).css( "margin-top", $( options.content ).outerHeight() / 2 + "px" );
                            $( options.dialog ).fadeIn();
                            
                            e.preventDefault();
                        });
                        $( options.ok ).on( "click", function( e ) {
                            e.preventDefault();
                            $( options.dialog ).fadeOut();
                            options.onconfirm();
                        });
                        $( options.cancel ).on( "click", function( e ) {
                            e.preventDefault();
                            $( options.dialog ).fadeOut();
                            options.oncancel();
                        });
                    }
                };
                
                return this.each(function() {
                    var $el = $( this );
                    var _dialog = new Dialog( $el );
                    
                });
            };
            
            $(function() {
               
                $( ".confirm" ).dialogBox({
                    onconfirm: function() {
                        alert( "OK" );
                    },
                    oncancel: function() {
                        alert( "Cancel" );
                    }
                });
            });
            
        })( jQuery );
        function closeForm() {
            $('.form-popup-bg').removeClass('is-visible');
          }
          
          $(document).ready(function($) {
            
            /* Contact Form Interactions */
            $('#btnOpenForm').on('click', function(event) {
              event.preventDefault();
          
              $('.form-popup-bg').addClass('is-visible');
            });
            
              //close popup when clicking x or off popup
            $('.form-popup-bg').on('click', function(event) {
              if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
                event.preventDefault();
                $(this).removeClass('is-visible');
              }
            });
            
            
            
            });
function addbrand(){
    alert('hello');
}
$(".open").on("click", function() {
    $(".popup-overlay, .popup-content").addClass("active");
  });
  
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".close, .popup-overlay").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
  });
  function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }  
  $('#show').on('click', function () {
    $('.center').show();
    $(this).hide();
});

$('#close').on('click', function () {
    $('.center').hide();
    $('#show').show();
});
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
 function additems(){
  $(".hideform").css("display","none");
  $("#show").css("display","block");
  $input=$(".select-selected").text();
  $(".brandsappend").append("<div><input type='text'  id='array' name='sahoo[]' value="+$input+" readonly></div>");
//   $("input[name=sahoo]").val();
//   console.log($("input[name=sahoo]").val());
 }

 function addproductsdata(){
  alert('working');
 }

 $( function() {
  $( "#dialog" ).dialog({
    autoOpen: false
  });

  $( "#opener" ).on( "click", function() {
    $( "#dialog" ).dialog( "open" );
  });
} );

function colorchange(x){
  var a=x;
  if(a.id=='auto'){
    $("#"+a.id).css('background','green');
    $("#mannual").css('background','#1f628a');
    $(".delete-con").css('display','none');
    $("#addinstance").css('display','none');
    $("#linkedby").css('display','none');
  }
  else if(a.id=='mannual'){
    $("#"+a.id).css('background','green');
    $("#auto").css('background','#1f628a');
    $(".delete-con").css('display','inline-block');
    $("#addinstance").css('display','inline-block');
    $("#linkedby").css('display','inline-block');
  }
}
function enablebox(x){
  console.log(x.id); 
  if ($("#"+x.id).is(':checked')) {
    $("."+x.id).removeAttr("disabled");
};
if ($("#"+x.id).is(':checked') == false) {
  $("."+x.id).attr("disabled", "disabled");
};
}
$(".popup-btn").click(function() {
  $(".popup").fadeIn(500);
});
$(".close").click(function() {
  $(".popup").fadeOut(500);
});
function addfunction(x){
var v=x;
console.log(v.id);
$(".list").removeClass("activetab");
$("#"+v.id).addClass("activetab");
}
function showul(){
 $(".sublist").toggleClass('visible-ul');
}
function cbChange(obj) {
  var cbs = document.getElementsByClassName("cb"); 
  for (var i = 0; i < cbs.length; i++) {
    cbs[i].checked = true;
  }
  obj.checked = false;
}
  $( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );
function addVariants(){
$('.select-varients') .css('display','block');
}
function exitVariants(){
  $('.select-varients') .css('display','none');
}
function openFiltering(x){
  $("#more-tools2").toggleClass('allvisible');
}