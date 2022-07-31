
    var navidata = [ //array
        {  //object
            d1 : ['회사소개', '#about'], //대 메뉴_array
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


    // // Q1. 대메뉴가 순서대로 노출되도록 해라
    // $(document).ready(function(){
    //     var navitag = '';
    //     var navilength = navidata.length; // 대메뉴 개수

    //     for(var i = 0; i < navilength; i++){ // 다중처리
    //         navitag += "<li> <a href=''>" + navidata[i].d1[0] + "</li>"

    //     }
    //     $('#navi').html(navitag)
    // })

    //     // Q2. 대메뉴 a href값이 순서대로 적용되도록 해라
    //     $(document).ready(function(){
    //         var navitag = '';
    //         var navilength = navidata.length; // 대메뉴 개수
    
    //         for(var i = 0; i < navilength; i++){ // 다중처리
    //             navitag += "<li> <a href='" + navidata[i].d1[1] + "'>" + navidata[i].d1[0] + "</a></li>"
    
    //         }
    //         $('#navi').html(navitag)
    //     })

        // // Q3. 대제목, 소제목 연동
        // $(document).ready(function(){
        //     var navitag ="";
            
        //     for(var i in navidata){ // i를 navidata(목록) 갯수만큼 돌릴게
        //     navitag += "<li><a href='"+navidata[i].d1[1]+"'>"+navidata[i].d1[0]+"</a>" //대제목
        //         for(var j in navidata[i].d2 ){ // j를 navidata에 i가 들어간 d2(소제목) 갯수만큼 돌릴게
        //             if( j == 0) navitag += "<ul>" // j가 값이 0과 같을 때 ul태그 넣을게
        //             navitag += "<li><a href='"+navidata[i].d2[j][1]+"'>"+navidata[i].d2[j][1]+"</a></li>" //
        //             if( j == navidata[i].d2.length -1) navitag += "<ul>"
        //         }
        //     }
        //     navitag += "</li>"

        //     $('#navi').html(navitag)
        // })

        // Q. 대제목 순서대료 출력하기
        // $(document).ready(function(){
        //     var navitag ="";
        //     navitag += `<li><a href="${navidata[0].d1[1]}">${navidata[0].d1[0]}</a></li>`
        //     navitag += `<li><a href="${navidata[1].d1[1]}">${navidata[1].d1[0]}</a></li>`
        //     navitag += `<li><a href="${navidata[2].d1[1]}">${navidata[2].d1[0]}</a></li>`
        //     navitag += `<li><a href="${navidata[3].d1[1]}">${navidata[3].d1[0]}</a></li>`

        //     $('#navi').html(navitag)
        // })

        // // Q. for in으로 대제목 순서대료 출력하기
        // $(document).ready(function(){
        //     var navitag ="";
            
        //     for (var i in navidata){
        //     navitag += `<li><a href="${navidata[i].d1[1]}">${navidata[i].d1[0]}</a>`

        //     for (var j in navidata[i].d2){
        //         if( j == 0)
        //             navitag += `<ul>`//처음만 출력
        //             navitag +=`<li><a href="${navidata[i].d2[j][1]}">${navidata[i].d2[j][0]}</a>` // 소메뉴출력

        //         if( j == navidata[i].d2.length -1) navitag += `</ul>`//마지막만 출력
        //     }
        //     navitag += `</li>`
        //     }
        //     $('#navi').html(navitag)
        // })


        // Q. for in으로 대제목 순서대료 출력하기
        $(document).ready(function(){
            var navitag ="";
            
            for (var i in navidata){
            // 대메뉴츌력
            navitag += `<li class="nav-item position-relative"><a href="${navidata[i].d1[1]}" class="py-2 py-md-0 px-0 px-md-3 d-block">${navidata[i].d1[0]}</a>`

            for (var j in navidata[i].d2){
                if( j == 0)
                    navitag += `<ul class="bg-white d2">`//처음만 출력

                    navitag +=`<li><a href="${navidata[i].d2[j][1]}">${navidata[i].d2[j][0]}</a>` // 소메뉴출력
                if( j == navidata[i].d2.length -1) navitag += `</ul>`//마지막만 출력
            }
            navitag += `</li>`
            }
            $('#navbarNav > ul').html(navitag)
        })

    
