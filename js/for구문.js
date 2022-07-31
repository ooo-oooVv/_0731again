const navidata = [ // 외부파일 확장자 .json
// JavaScript Document
    {link_product_list:"/category/야구잠바/24/"
    ,name:"야구잠바"
    ,param:"?cate_no=24"
    ,cate_no:24
    ,design_page_url:"product/list.html"
    },
    {link_product_list:"/category/반팔티/25/"
    ,name:"반팔티"
    ,param:"?cate_no=25"
    ,cate_no:25
    ,design_page_url:"product/list.html"
    },
    {link_product_list:"/category/단체티/26/"
    ,name:"단체티"
    ,param:"?cate_no=26"
    ,cate_no:26
    ,design_page_url:"product/list.html"
    }
    ]

    // Q. 
    // // 원래 문법
    // // var navitext = "<a href='"+navidata[0].design_page_url+"'>"+navidata[0].name+"</a>" // 

    // //ec6 + (ex6 이상)
    // let navitext = `<a href="${navidata[0].design_page_url}">${navidata[0].name}</a>` // 백타표시 (``)로 표시하고 변수는 $로 표기.
    // console.log(navitext)

    // Q. 야구잠바, 반팔티, 단체티를 출력해라
    // for(var i in navidata){ 
    //     // navidata는 반드시 array여야함. in navidata는 navidata 갯수만큼. i를 출력하겠다. 
    //     // = 저 array를 하나하나 처리할 때 발생하는 index를 저장할 변수.
    //     // 단, 무조건 array 갯 수만큼 출력하게 됨. (커스터마이징 불가) 
    //     console.log(navidata[i].name)
    // }

    // for(var i=0; i < navidata.length; i++){ 
    //     // i=0 부분 수정하면 출력값 갯수 수정 가능. (커스터마이징 가능)
    //     console.log(navidata[i].name)
    // }

    // // Q. 야구잠바에만 앞에 +표시 나오도록 해라.
    // var star = '';
    // for(var i=0; i < navidata.length; i++){ 
        
    //     if( i==0 )
    //         star = " + "
    //     else 
    //         star = ""

    //     console.log(star + navidata[i].name)
    // }
    

    // Q4. 홀리몰리
    var bar = '';

    for(var i=0; i < navidata.length; i++){ 
        if(i == 0)
            console.log('-----------')
            console.log(navidata[i].name)
        if(i == navidata.length -1)
            console.log('-----------')
            
    }
