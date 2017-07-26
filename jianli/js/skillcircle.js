// JavaScript Document
$(function(){  
    //初始化  
    var bl = parseInt($('.yuan_text').html());  
	alert(bl);
    var rotatenum = bl;  
    if(bl > 180){  
        var blhtml = '';  
        rotatenum = bl - 180;  
        blhtml += '<div class="yuan_bl2">';  
        blhtml += '<div class="yuan_bl4" style="-webkit-transform:rotate(' + rotatenum + 'deg);transform:rotate(' + rotatenum + 'deg);"></div>';  
        blhtml += '</div>';  
        //$('.yuan_bl1').remove($('.yuan_bl3'));  
        $('.yuan_bl1').after(blhtml);  
    }else{  
        var blhtml = '';  
        blhtml += '<div class="yuan_bl3" style="-webkit-transform:rotate(' + rotatenum + 'deg);transform:rotate(' + rotatenum + 'deg);"></div>';  
        $('.yuan_bl1').append(blhtml);  
    }  
})
