
    var navidata = [ //array
        {  //object
            d1 : ['회사소개', 'company.html'], //대 메뉴_array
            d2 : [                          // 소 메뉴                      
                ['비전', 'v.html'],
                ['인사말', 'c.html'],
                ['주요연혁', 'g.html'],
                ['CI 소개', 'ci.html'],
                ['찾아오시는길', 'w.html'],

            ] 
        },
        {
            d1 : ['사업영역', 'b.html'], //대 메뉴
            d2 : [                          // 소 메뉴                      
                ['소재사업', 'v.html'],
                ['포장설비 엔지니어링', 'c.html'],

            ] 
        },
        {
            d1 : ['NEWS', 'n.html'], //대 메뉴
            d2 : [                          // 소 메뉴가 없는경우 array 형식 맞추기 위해 d2 삭제하면 안된다. 비워둔채로 둘 것.                     
            ] 
        },
        {
            d1 : ['구매조달시스템', 'n.html'], //대 메뉴
            d2 : [                          // 소 메뉴가 없는경우 array 형식 맞추기 위해 d2 삭제하면 안된다. 비워둔채로 둘 것.                     
            ] 
        },
        
    ]

    console.log(navidata[1].d2[0][0], navidata[1].d2[0][1]) // -> console.log(a태그안의 값, href 링크값) = console.log(navidata[1].d2[0][0], navidata[1].d2[0][1])


    // Q1. 대메뉴가 순서대로 노출되도록 해라
    $(document).ready(function(){
        var navitag = '';
        var navilength = navidata.length; // 대메뉴 개수

        for(var i = 0; i < navilength; i++){ // 다중처리
            navitag += "<li> <a href=''>" + navidata[i].d1[0] + "</li>"

        }
        $('#navi').html(navitag)
    })

    // Q2. 대메뉴 a href값이 순서대로 적용되도록 해라
    $(document).ready(function(){
        var navitag = '';
        var navilength = navidata.length; // 대메뉴 개수

        for(var i = 0; i < navilength; i++){ // 다중처리
            navitag += "<li> <a href='" + navidata[i].d1[1] + "'>" + navidata[i].d1[0] + "</li>"

        }
        $('#navi').html(navitag)
    })
    
