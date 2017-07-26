// JavaScript Document
$(function () {

    //radial progress 2
    $('#skill-ciecle1').radialIndicator({
        barColor: '#87CEEB',
        barWidth: 10,
        initValue: 60,
        roundCorner: true,
        percentage: true
    });
	
	 $('#skill-ciecle2').radialIndicator({
        barColor: '#87CEEB',
        barWidth: 10,
        initValue: 85,
        roundCorner: true,
        percentage: true
    });
	
	 $('#skill-ciecle3').radialIndicator({
        barColor: '#87CEEB',
        barWidth: 10,
        initValue: 55,
        roundCorner: true,
        percentage: true
    });
	
	 $('#skill-ciecle4').radialIndicator({
        barColor: '#87CEEB',
        barWidth: 10,
        initValue: 36,
        roundCorner: true,
        percentage: true
    });
	
	 $('#skill-ciecle5').radialIndicator({
        barColor: '#87CEEB',
        barWidth: 10,
        initValue: 68,
        roundCorner: true,
        percentage: true
    });
	
	 $('#skill-ciecle6').radialIndicator({
        barColor: '#87CEEB',
        barWidth: 10,
        initValue: 30,
        roundCorner: true,
        percentage: true
    });

     $(".portfolio-btn-list").click(function(){
      $(this).siblings().each(function(){
          $(this).css({"background-color":"transparent" ,border:"#ffffff solid 1px",color:"#ffffff"});
      });
        $(this).css({"background-color":"#52edc7" ,border:"#52edc7 solid 1px",color:"#206957"});
        $(".portfolio-thumbnail").empty();
        var projecttype = $(this).text();
        var html = "";

        if(projecttype == "all"){
            html = "<figure class='thumbnail-content-list' id='all-pic1'>"+
                   " <img src='image/portflio-tb-pic1.png' />"+
                    "<figcaption>"+
                       " <p class='projectname' id='projectname'>Project Name</p>"+
                       " <p class='projecttype' id='projecttype'>Web Design</p>"+
                       " <button class='img-btn' onclick='showImg()'>VIEW</button>"+
                   " </figcaption>"+
               " </figure>"+
               " <figure class='thumbnail-content-list' id='all-pic2'>"+
                  "  <img src='image/portflio-tb-pic2.png' />"+
                  "  <figcaption>"+
                   "     <p class='projectname' id='projectname'>Project Name</p>"+
                    "    <p class='projecttype' id='projecttype'>UI Design</p>"+
                    "    <button class='img-btn' onclick='showImg()''>VIEW</button>"+
                   " </figcaption>"+
                "</figure>"+
               " <figure class='thumbnail-content-list' id='all-pic1'>"+
                 "   <img src='image/portflio-tb-pic3.png' />"+
                  "  <figcaption>"+
                     "   <p class='projectname' id='projectname'>Project Name</p>"+
                     "   <p class='projecttype' id='projecttype'>Photography</p>"+
                     "   <button class='img-btn' onclick='showImg()'>VIEW</button>"+
                   " </figcaption>"+
               " </figure>"+
               " <figure class='thumbnail-content-list' id='all-pic2'>"+
                  "  <img src='image/portflio-tb-pic4.png'/>"+
                  "  <figcaption>"+
                    "    <p class='projectname' id='projectname'>Project Name</p>"+
                    "    <p class='projecttype' id='projecttype'>Video</p>"+
                    "    <button class='img-btn' onclick='showImg()'>VIEW</button>"+
                    "</figcaption>"+
                "</figure>"+
               " <figure class='thumbnail-content-list' id='all-pic1'>"+
                 "   <img src='image/portflio-tb-pic5.png' />"+
                   " <figcaption>"+
                    "    <p class='projectname' id='projectname'>Project Name</p>"+
                     "   <p class='projecttype' id='projecttype'>Web Design</p>"+
                      "  <button class='img-btn' onclick='showImg()'>VIEW</button>"+
                   " </figcaption>"+
               " </figure>"+
               " <figure class='thumbnail-content-list' id='all-pic2'>"+
                 "   <img src='image/portflio-tb-pic6.png' />"+
                 "   <figcaption>"+
                  "      <p class='projectname' id='projectname'>Project Name</p>"+
                  "      <p class='projecttype' id='projecttype'>UI Design</p>"+
                  "      <button class='img-btn' onclick='showImg()'>VIEW</button>"+
                   " </figcaption>"+
                "</figure>";       
        }

         if (projecttype == "UI Design") {
          html = " <figure class='thumbnail-content-list' id='all-pic2'>"+
                  "  <img src='image/portflio-tb-pic2.png' />"+
                  "  <figcaption>"+
                   "     <p class='projectname' id='projectname'>Project Name</p>"+
                    "    <p class='projecttype' id='projecttype'>UI Design</p>"+
                    "    <button class='img-btn' onclick='showImg()'>VIEW</button>"+
                   " </figcaption>"+
                "</figure>"+
               " <figure class='thumbnail-content-list' id='all-pic2'>"+
                 "   <img src='image/portflio-tb-pic6.png' />"+
                 "   <figcaption>"+
                  "      <p class='projectname' id='projectname'>Project Name</p>"+
                  "      <p class='projecttype' id='projecttype'>UI Design</p>"+
                  "      <button class='img-btn' onclick='showImg()'>VIEW</button>"+
                   " </figcaption>"+
                "</figure>";
        }
        if(projecttype == "Web Design"){
            html = "<figure class='thumbnail-content-list' id='all-pic1'>"+
                   " <img src='image/portflio-tb-pic1.png' />"+
                    "<figcaption>"+
                       " <p class='projectname' id='projectname'>Project Name</p>"+
                       " <p class='projecttype' id='projecttype'>Web Design</p>"+
                       " <button class='img-btn' onclick='showImg()'>VIEW</button>"+
                   " </figcaption>"+
               " </figure>"+
               " <figure class='thumbnail-content-list' id='all-pic1'>"+
                 "   <img src='image/portflio-tb-pic5.png' />"+
                   " <figcaption>"+
                    "    <p class='projectname' id='projectname'>Project Name</p>"+
                     "   <p class='projecttype' id='projecttype'>Web Design</p>"+
                      "  <button class='img-btn' onclick='showImg()'>VIEW</button>"+
                   " </figcaption>"+
               " </figure>";     
        }
        if(projecttype == "Photography"){
            html = " <figure class='thumbnail-content-list' id='all-pic1'>"+
                 "   <img src='image/portflio-tb-pic3.png' />"+
                  "  <figcaption>"+
                     "   <p class='projectname' id='projectname'>Project Name</p>"+
                     "   <p class='projecttype' id='projecttype'>Photography</p>"+
                     "   <button class='img-btn'onclick='showImg()'>VIEW</button>"+
                   " </figcaption>"+
               " </figure>";       
        }
        if(projecttype == "Video"){
            html = 
               " <figure class='thumbnail-content-list' id='all-pic2'>"+
                  "  <img src='image/portflio-tb-pic4.png'/>"+
                  "  <figcaption>"+
                    "    <p class='projectname' id='projectname'>Project Name</p>"+
                    "    <p class='projecttype' id='projecttype'>Video</p>"+
                    "    <button class='img-btn' onclick='showImg()'>VIEW</button>"+
                    "</figcaption>"+
                "</figure>";       
        }
        $(".portfolio-thumbnail").append(html);
       /* $(this).css({"background-color":"transparent" ,border:"#ffffff solid 1px",color:"#ffffff"});*/      
     });

});
function showImg(){
      $(".masker").css({display:"block"});
      $(".pop").css({display:"block"});
}
function closeImg(){
      $(".masker").css({display:"none"});
      $(".pop").css({display:"none"});
     };