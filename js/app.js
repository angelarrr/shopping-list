$(document).ready(function() {
	/* Add item by pressing enter */
	$("#add-items").keydown(function(enter) {
		if(enter.keyCode == 13) {
			var name = $('#add-items').val();
			var added = '<li class="to-buy">' + '<div class="checkbox"><i class="fa fa-square-o"></i></div>' + '<div class="name">' + name + '</div>' + '<div class="remove"><i class="fa fa-times"></i></div></li>';
			$('.list-items').prepend(added);
			$('#add-items').val();
		}
	});

	/* Add item by pressing add button */
	$(".add-button").click(function() {
		var name = $('#add-items').val();
		var added = '<li class="to-buy">' + '<div class="checkbox"><i class="fa fa-square-o"></i></div>' + '<div class="name">' + name + '</div>' + '<div class="remove"><i class="fa fa-times"></i></div></li>';
		$('.list-items').prepend(added);
		$('#add-items').val();
	});
});


/* Clear all items on list */
$(document).on("click", ".reset-button", function() {
	$(".list-items").empty();
});

/* Delete items */
$(document).on("click", ".remove", function() {
	$(this).closest('li').fadeOut(500);
});

/* check off items code */
$(document).on("click", ".checkbox", function(){
    if ( $(this).closest('li').hasClass("to-buy") ) {
        $(this).closest('li').removeClass("to-buy").addClass("bought");
        $(this).find($(".fa")).removeClass("fa fa-square-o").addClass("fa fa-check");
   }
   else {
        $(this).closest('li').removeClass("bought").addClass("to-buy");
        $(this).find($(".fa")).removeClass("fa fa-check").addClass("fa fa-square-o");
   }
}); 