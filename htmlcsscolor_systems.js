//Вешаем события
$(function () {

    //Создаём пикер
    InitPicker();

    //Поиск цвета
    ColorSearch();

	//Инициализация градиента
	try {
		InitGradient();
		InitGradientControl();
	}
	catch (e) {

	}

	//Колесо
	try{    
		$('#picker').farbtastic('.custom_color');
	}
	catch (e) {

	}

	//Табки
	try {
		$('#tabControl a').click(function (e) {
			e.preventDefault();
			$(this).tab('show');
		})
	}
	catch (e) {

	}

});

//Инициализация градиента
function InitGradientControl() {
	var color1 = $('.colorvalue1').val().substring(1);
	var color2 = $('.colorvalue2').val().substring(1);
	GetColorPicker('myCanvas1', '/gradient-linear/' + color1 + '/to/' + color2 + '.png');
	GetColorPicker('myCanvas2', '/gradient-circle/' + color1 + '/to/' + color2 + '.png');
}

//Градиент
function InitGradient() {
    InitControl('.colorvalue1', '.colorpicker1');
    InitControl('.colorvalue2', '.colorpicker2');
}

function InitControl(value, picker) {
    var hex = $(value).val();
    $(picker).spectrum({

        //Настройки
        color: hex,
        showPalette: true,
        palette: [
            ["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"],
            ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
            ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
            ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
            ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
            ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
            ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"],
            ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
        ],

        //События
        change: function (color) {
            $(value).val(color.toHexString().toUpperCase());
        },
        move: function (color) {
            $(value).val(color.toHexString().toUpperCase());
        }

    });
}

//Создаём пикер
function InitPicker() {
    var hex = $(".colorvalue").val();    
    $(".colorpicker").spectrum({

        //Настройки
        color: hex,
        showPalette: true,
        palette: [
            ["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"],
            ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
            ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
            ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
            ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
            ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
            ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"],
            ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
        ],

        //События
        change: function (color) {            
            $('.colorvalue').val(color.toHexString().toUpperCase());
        },
        move: function (color) {            
            $('.colorvalue').val(color.toHexString().toUpperCase());
        }

    });
}

//Поиск цвета
function ColorSearch() {
    $(".colorvalue").keyup(function () {
        var value = $(".colorvalue").val();        
        $(".colorpicker").spectrum("set", value);
    });    
}

//Установить HEX значение
function ColorSetHex() {
    var hex = $(".colorpicker").spectrum("get").toHexString().toUpperCase();
    $('.colorvalue').val(hex);
}
