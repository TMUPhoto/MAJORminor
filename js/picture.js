
$(function(){

    // 焦點圖js樣式
    
    window .onload=function(){
    
    TouchSlide({
    
    slideCell:
$(function(){

// 焦點圖js樣式

window .onload=function(){

TouchSlide({

slideCell:"#box",

mainCell:"#box ul",

autoPlay:true,

titCell:"#button span",

effect:"leftLoop"

});

$('.image').show();

};

// 獲取圖片個數,確定小圓點個數和小圓點透明背景的長度

var len = $(".image").length;

var length = len*11+20-4;

var width = $("#box>ul").width();

var left = width*0.5 - (len*11+20-4)/2;

var html = '';

for(var i=1;i<len+1;i++){

html+='<span index="i" class="on">';

}

$("#button").append(html);

$("#button").css("left",left);