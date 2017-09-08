 $(document).ready(function() {
 	// body...
 	$('button.premise').click(function(){
		$('.apartment').append('<div class="wall">\
								  <div class="premiseGraf ui-widget ui-corner-all ui-state-error"></div>\
								</div>');
		$('.addPremise').append('<div class="parametrPremise"></div>');
		$('.parametrPremise:last').append('<label>Название помещения</label>');
		$('.parametrPremise:last').append('<label>Габариты помещения</label>');
		$('.parametrPremise:last').append('<input id="h1" placeholder="ширина">');
		$('.parametrPremise:last').append('<input id="w1" placeholder="длинна">');
		$('.parametrPremise:last').append('<button class="premiseD">Удалить</button>');
		//$('.apartment').append('<div id="draggable" class="ui-widget ui-corner-all ui-state-error">Перетащи меня</div>');
        
		// for (var i = 0; i < document.body.children.length; i++) {
  //     console.log( document.body.children[i] ); // DIV, UL, DIV, SCRIPT
  //   }
    });
		// var i=0;
		// $(".parametrPremise input").each(function(){
        // i++;
    	// $(this).attr("class","slide"+i);  
	// });

 	$('.premiseClearOut').click(function(){									//Очистить поле чертежа и поле ввода
 		$('.premiseGraf').remove();
 		$('.parametrPremise').remove();
 	});
 	
 	 	$('body').on('click','.premiseD', function(){							//удалить последний
        $('.premiseGraf:last').remove();
        $('.parametrPremise:last').remove();
     });
 	// $('body', $('.premiseGraf')).click(function(){							//удалить последний
  //       console.log(1);
 		// $(function() {															//перетаскивание элементов
   //  		$('.wall').draggable({containment:'.apartment', snap:'.apartment, .wall'});
   //  		console.log(draggable);
   //  	});

 		$('.apartment').on('mouseenter', '.wall', function(){
    	 // console.log(this);
    	$(this).draggable({containment:'.apartment', snap:'.apartment, .wall'});
 		})
 		$('body').css({zoom: 2, trnsform: "scale (2)", transformOrigin: "0 0"});
    // });
 	// for (var i = 0; i < document.body.children.length; i++) {
  //     console.log( document.body.children[i] ); // DIV, UL, DIV, SCRIPT
  //   }
 	// console.log(document.documentElement.chaildNode);

 });