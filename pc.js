// $(function () {//获取移动端分辨率
//     $("window").ready(function () {
//         geRem(1080, 100);
//     })
//     $("window").resize(function () {
//         getRem(1080, 100);
//     })

//     function geRem(pwidth, prem) {
//         var html = $("html");
//         var oWidth = $(window).width();
//         html.css({ 'font-size': oWidth / pwidth * prem + "px" })
//     }
// })
// function resizeFontsize(){
//     var width = document.documentElement.clientWidth;
//     document.documentElement.style.fontSize = width/1080*100+'px';
// }
// resizeFontsize();
// window.addEventListener('orientationchange', resizeFontsize)
// window.addEventListener('resize', resizeFontsize)
//隐藏栏目
$(function(){
    $(".li1").hover(function(){
        $(".yin1").stop().animate({height:"toggle"},200);
    });
    $(".li2").hover(function(){
        $(".yin2").stop().animate({height:"toggle"},200);
    });
    $(".li3").hover(function(){
        $(".yin3").stop().animate({height:"toggle"},200);
    });
    $(".li4").hover(function(){
        $(".yin4").stop().animate({height:"toggle"},200);
    });
    $(".li5").hover(function(){
        $(".yin5").stop().animate({height:"toggle"},200);
    });
    $(".li6").hover(function(){
        $(".yin6").stop().animate({height:"toggle"},200);
    });
    
})
$(function(){
    $("#sou").click(function(){
        var mesgle=$("#xinghao").val();
        if(mesgle !='')
        {alert(mesgle)
        $("#xinghao").val('');
        }
        else
        {alert("啥？")}
    })
})

$(function(){
    //图片轮播
    var lef=0;
    var timer=setInterval(mestack,2000)
    function mestack(){
        lef++;
        if(lef>4){
            lef=1;
            $(".lunbo1").css('left','0');
        }
        $(".lunbo1").stop().animate({ left: -lef * 236 + "px" },2000);
    }
    //延时器暂停
    $(".lunbo1").mouseover(function() {
        clearInterval(timer);
        });
        //延时器继续
        $(".lunbo1").mouseout(function() {
            timer=setInterval(mestack,2000);
            });
    //瓜子花生八宝粥de轮播图
    var dic=0;
    var time=setInterval(gun,2000);
    function gun(){
        dic--;
        if(dic<0){
            dic=5;
            $(".zdcl2 ul").css('left','-1548px')
        }
        $(".zdcl2 ul").animate({left:-dic*258+"px"},1000);
    };
        $(".zuobian").click(function(){//左边
            dic++;
            if(dic>6){
                dic=1;
                $(".zdcl2 ul").css("left","0")
            }
            $(".zdcl2 ul").animate({left:-dic*258+"px"},1000)
        });
        $(".youbian").click(function(){//右边
            gun()
        });
        //延时器暂停
        $(".zdcl2 ul,.zuobian,.youbian").mouseover(function(){
            clearInterval(time);
        })
        //延时器继续
        $(".zdcl2 ul,.zuobian,.youbian").mouseout(function(){
            time=setInterval(gun,2000)
        });
})
//轮播里面的数据数组
new Vue({
    el:'.zdcl2',
    data:{
        me:[
            {
            name:'花生：12￥',
            place:'瓜子:6￥',
            suplaz:'八宝粥:5￥',
        }
        ]
    }
})
$(function(){
    $(".daohang_2").offset().top;
    $("#dingbu").click(function(){
        $("html,body").animate({"scrollTop":0},1000)
    });
})
$(function(){
    var lai=$(".A").offset().top;
    $("#ding").click(function(){
        $("html,body").animate({"scrollTop":lai},1000)
        
    });
    var gun=$(".B").offset().top;
    $("#dng").click(function(){
        $("html,body").animate({"scrollTop":gun})
    });
})
$(function(){//滑动固定
    var ben=$(".xuanting").offset().top;
    $(window).scroll(function(){
        var scroH = $(window).scrollTop();
        if(scroH>=ben){
            $(".xuanting").addClass("dingzaina")
        }
        else{
            $(".xuanting").removeClass("dingzaina")
        }
    })
})

