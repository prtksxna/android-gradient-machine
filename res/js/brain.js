var o = "linear";


makeGrad = function(){
    $("#phone").css("background-image", function(){
        var color1 = $("#color1").val();
        var color2 = $("#color2").val();
        return o+"-gradient("+color1+", "+color2+")"
    });

    var color1 = $("#color1").val();
    color1 = color1.substring(1);
    color1 = "#FF"+color1;

    var color2 = $("#color2").val();
    color2 = color2.substring(1);
    color2 = "#FF"+color2;

    var code = '<?xml version="1.0" encoding="utf-8"?>\n';
    code += '<selector xmlns:android="http://schemas.android.com/apk/res/android">\n';
    code += '<item>\n';
    code += ' <shape>\n';
    code += '  <gradient>\n';
    code += '   android:angle="90"\n';
    code += '   android:startColor="'+color1+'"\n';
    code += '   android:endColor="'+color2+'"\n';
    code += '   android:type="'+o+'" />\n';
    code += ' </shape>\n';
    code += '<item>\n';
    code += '</selector>\n';

    $("#thecode").val(code);
}

$(document).ready(function(e){
    $("#color1").colorpicker();
    $("#color2").colorpicker();

    $("#color1").bind("blur", function(){
        makeGrad();
    });

    $("#color2").bind("blur", function(){
        makeGrad();
    });

    $("#linear").click(function(){
        o = "linear";
        makeGrad();
    });

    $("#radial").click(function(){
        o = "radial";
        makeGrad();
    });
});