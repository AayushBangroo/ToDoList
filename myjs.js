$("ul").on("click","li",function(){        //Strike through and change color
	$(this).toggleClass("completed")
});

$("ul").on("click","span",function(event){      //delete
	$(this).parent().fadeOut(500,function(){
		$(this).remove()
	});
	event.stopPropagation();
});

$("input").on("keypress",function(event){//add  new Todos
	if(event.which===13){
		var TodoText=$(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+TodoText+"</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});



