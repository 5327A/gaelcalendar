$("#i").height($("#t").height());

var color = {
	'rgb(33, 150, 243)': 'blue',
	'rgb(244, 67, 54)': 'red',
	'rgb(255, 193, 7)': 'amber',
	'rgb(76, 175, 80)': 'green',
	'rgb(255, 152, 0)': 'orange',
};

function formatDate(date){
	return moment(date).format('DD MMM');
}


$('.collection-item').on('click', function(){
	if(!$(this).hasClass('active')){
		if($('#p').hasClass('active')){
			$('#p').removeClass('active');
			$('#p').removeClass('blue');
			$('#p').css({color:'#2196f3'});
		}
		else if($('#a').hasClass('active')){
			$('#a').removeClass('active');
			$('#a').removeClass('red');
			$('#a').css({color:'#f44336'});
		}
		else if($('#b').hasClass('active')){
			$('#b').removeClass('active');
			$('#b').removeClass('amber');
			$('#b').css({color:'#ffc107'});
		}
		else if($('#c').hasClass('active')){
			$('#c').removeClass('active');
			$('#c').removeClass('green');
			$('#c').css({color:'#4caf50'});
		}
		else if($('#d').hasClass('active')){
			$('#d').removeClass('active');
			$('#d').removeClass('orange');
			$('#d').css({color:'#ff9800'});
		}

		$(this).addClass('active');
		$(this).addClass(color[$(this).css('color')]);
		$(this).css({'color':'#FFFFFF'});
	}
});