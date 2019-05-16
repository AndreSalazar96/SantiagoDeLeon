//Dynamic Class

function dynamiClassPorcent(){
	var elementPorcent = jQuery(document).find('div.percent');

	jQuery(elementPorcent).each(function(index,el){
		jQuery(el).addClass('porcent-dynamic-class' + index);
	});
}

dynamiClassPorcent();