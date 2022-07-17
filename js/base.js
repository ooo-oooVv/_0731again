
//선택자 = 주어, 매서드 = 동사, 이벤트 = 시점
//명령 내릴 때, 우영아, 점심시간에 전화해
// 더보기버튼(주어-선택자) 클릭 시(시점-이벤트) 상품이 노출(동사-매서드)

// 선택자중에 "", '' 안쓰는 객체는 window, document 뿐!

// $(document).ready(function(){               // 화면이 준비되면 실행해라
//     $('h1').html('<span>바꿔졌나?</span>')
//     $('p').html('노출시켜주세요.. 제이쿼리로')

// }) 

// daum을 한글 '다음'으로 변경하기
// 선택자는 곧 css 선택자다.
// $(document).ready(function(){
//     $('#navi ul li:nth-child(2) a').html('다음')
// })
// $(document).ready(function(){
    // Q. Nate를 한글'네이트'로 변경하기 1번 방법
    //$('#navi ul li:nth-child(5) a').html('네이트') -> 수정 시 js 파일을 수정해야함

    // Q. Nate를 한글'네이트'로 변경하기 2번 방법 -> 수정 시 html 파일을 수정하면 됨.
    // $('#navi ul li:nth-child(5) a').html($('#navi ul li:nth-child(5) a').data('krnm')) //#navi ul li:nth-child(5) a 안의 글자가 data-krnm의 내용으로 변경 되어라!
    
    // Q. a 태그 안에 이름을 한글로 변경하기
    // $('#navi ul li:nth-child(1) a').html($('#navi ul li:nth-child(1) a').data('krnm')) //#navi ul li:nth-child(2) a 안의 글자가 data-krnm의 내용으로 변경 되어라!
    // $('#navi ul li:nth-child(2) a').html($('#navi ul li:nth-child(2) a').data('krnm')) //#navi ul li:nth-child(2) a 안의 글자가 data-krnm의 내용으로 변경 되어라!
    // $('#navi ul li:nth-child(3) a').html($('#navi ul li:nth-child(3) a').data('krnm')) //#navi ul li:nth-child(2) a 안의 글자가 data-krnm의 내용으로 변경 되어라!
    // $('#navi ul li:nth-child(4) a').html($('#navi ul li:nth-child(4) a').data('krnm')) //#navi ul li:nth-child(2) a 안의 글자가 data-krnm의 내용으로 변경 되어라!
    // $('#navi ul li:nth-child(5) a').html($('#navi ul li:nth-child(5) a').data('krnm')) //#navi ul li:nth-child(2) a 안의 글자가 data-krnm의 내용으로 변경 되어라!

    // 위 식을 each문으로 짧게 정리하면 아래와 같음.  each가 있다면 each 앞의 주어가 복수구나.! 두둥탁
//     $('navi li a').each(function(){ //a의 내용을 각자 실행해라. 
//         $('this').html($('this').data('krnm')) // #navi ul li:nth-child(1) a'
//     })
// })

// $(document).ready(function(){
//     $('#navi li a').each(function(){ //a 각자를 실행해라. 
//         $(this).html($(this).data('krnm')) // 실행중인 a 태그(this) html 안에 a의(this) data-krnm 값을 넣어라
//         $(this).css('color', $(this).data('color')) // 실행중인 a 태그(this)의 css color 값에 a의(this) data-color 값을 넣어라
//         $(this).parent().css('border-color', $(this).data('color')) //실행중인 a 태그의 부모의 css norder-color 값에 a의 data-color 값 넣어라.
//     })
// })

$(document).ready(function(){
// 상품명 출력
$('#product .thumb h2').html( //
    $('#product .thumb').data('prnm')); //prnm옵션값이 #product .thumb 에 있음

// 상품가격 출력
$('#product .thumb p').html(
    $('#product .thumb').data('price'));

// 상품이미지 출력
$('#product .thumb img').attr('src', $('#product .thumb').data('img')) //attr태그의 속성은 속성 접근 매서드.
})
