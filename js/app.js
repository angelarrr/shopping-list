$(document).ready(function() {
	/* Add item */
	$("#items-to-add").submit(function(e) {
		e.preventDefault();
		var name = $('#add-items').val();
		var added = '<li class="to-buy">' + '<div class="checkbox"><i class="fa fa-square-o"></i></div>' + '<div class="name">' + name + '</div>' + '<div class="remove"><i class="fa fa-times"></i></div></li>';
		$('.list-items').prepend(added);
		$('#add-items').val("");
	});
});

/* Clear all items on list */
$(document).on("click", ".reset-button", function() {
	$(".list-items").empty();
});

/* Delete items */
$(document).on("click", ".remove", function() {
	$(this).closest('li').fadeOut(500).remove();
});

/* check off items */
$(document).on("click", ".checkbox", function() {
	$(this).closest('li').toggleClass("to-buy bought");
	$(this).children('.fa').toggleClass("fa-square-o fa-check");
})