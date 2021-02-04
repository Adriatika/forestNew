jQuery(function($){
	$('#rubricLoad').click(function(){
		$('#rubricLoad > span').text('Загружаю...'); // изменяем текст кнопки, вы также можете добавить прелоадер
		var data = {
			'action': 'loadmore',
			'query': true_posts,
			'page' : current_page
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					$('#rubricLoad > span').text('Загрузить ещё')
					$('.horizontalBar4').append(data); // вставляем новые посты
					current_page++; // увеличиваем номер страницы на единицу
					if (current_page == max_pages) $("#rubricLoad").remove(); // если последняя страница, удаляем кнопку
				} else {
					$('#rubricLoad').remove(); // если мы дошли до последней страницы постов, скроем кнопку
				}
			}
		});
	});
});

jQuery(function($){
	$('#archiveLoad').click(function(){
		$('#archiveLoad > span').text('Загружаю...'); // изменяем текст кнопки, вы также можете добавить прелоадер
		var data = {
			'action': 'archiveloadmore',
			'offset': offset,
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					$('#archiveLoad > span').text('Загрузить ещё')
					$('.magazine2').append(data);
					offset += 9;
					if (current_page == max_pages) $("#rubricLoad").remove();
				} else {
					$('#archiveLoad').remove();
				}
			}
		});
	});
});



