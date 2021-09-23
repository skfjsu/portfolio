$(document).ready(function(){  
    //제일 밑에 있는'페이지 위로가기'버튼
    $('.backTop').click(function(){
        $('html, body').animate({scrollTop:0},1000,'swing');
    });

    var $menuItem = $('#nav li a, #sub_list li a'); //메뉴 버튼을 변수로

    $menuItem.click(function(){
        $(this).addClass('on');
        $(this).parent().siblings().find('a').removeClass('on');

        var el = $(this).attr('href');  //클릭한 a의 속성 href의 속성값을 변수에 넣는다. 
        var $el =$(el); 
        var headerH = $('header').height();     //header의 세로길이를 변수에 넣는다
        //console.log($el);

        scrollTo($el,headerH);    //위에서 구한 섹션의 아이디명,헤더의 길이를 매개변수에 넣고 함수 실행
    }); 
    
    function scrollTo(element,hh){
        var offsetTop = element.offset().top;      //엘리먼트의 top에서 부터의 위치값
        console.log('offset의 값은?' + offsetTop);
        var scrollTotal = offsetTop-hh;            //엘리먼트의 위치값에서 hh를 배준다 

        $('html, body').animate({scrollTop:scrollTotal},1000,'swing');

    };

    var $headerTop = $('header').offset().top;   // A.offset().top; :A가 위에서부터 떨어져있는 거리

    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        //A.scrollTop()  :A가 위쪽으로부터 스크롤 된 거리

        var $headH = $('header').height();  //  A.height() : A의 높이 값을 구해온다

        var $headerAll = $headerTop+$headH;

        if(scroll >$headerAll ){
            $('#scroll_header').css("background","#fafaf8");
            $('#header_in>h1').css("display","block");
        }else{
            $('#scroll_header').css("background","none");
        };   

    });

    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        if (scroll > 680) {
        $("#pro1").delay(2000);
        $("#pro2").delay(2500);
        $("#pro3").delay(3000);
        $("#pro4").delay(3500);
        $("#pro5").delay(4000);

        $("#pro1").animate({"value":95},500,'swing'); 
        $("#pro2").animate({"value":85},500,'swing');
        $("#pro3").animate({"value":90},500,'swing');
        $("#pro4").animate({"value":90},500,'swing');
        $("#pro5").animate({"value":70},500,'swing');
          }
        });

});   


