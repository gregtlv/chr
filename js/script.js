// Greg

toggleButton.onclick = function menuHide() {
	    var x = document.getElementById("navList");
	    if (x.style.display === "none" || x.style.display === "") {
	        x.style.display = "flex";
	    } else {
	        x.style.display = "none";
	    }
	}

	// Scroll


	$(document).ready(function(){
	 $("#headerNav").on("click","a", function (event) {
	   //отменяем стандартную обработку нажатия по ссылке
	   event.preventDefault();

	   //забираем идентификатор бока с атрибута href
	   var id  = $(this).attr('href'),
	   //узнаем высоту от начала страницы до блока на который ссылается якорь
	     top = $(id).offset().top,
			 link = document.getElementById("navList");

	   //анимируем переход на расстояние - top за 1500 мс
	   $('body,html').animate({scrollTop: top}, 1500);
		 link.style.display = "none";
	 });
	});
