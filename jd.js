window.onload=function(){
    var aa=jQuery.noConflict();
  
      aa("img").lazyload({
        threshold : 200,
        event:"scroll",
        effect:"fadeIn",
    });


//顶部
function xiala(xiala,dangr,xuanzhuan){
var hleft1=xiala
var dangr=dangr
var xuanzhan=xuanzhuan
          for(var i=0;i<hleft1.length;i++){
            hover (hleft1[i],function(){
              var height1=this.offsetHeight
                this.style.background='#FFF'
                     var ul=$('.hiddenj2',this)[0]
                     animate(ul,{height:280},0)
                     ul.style.display='block'
                     dangr.style.display='block'
                     xuanzhan.style.transform='rotate(180deg)'
            },function(){
                     var that=this
                     var ul=$('.hiddenj2',this)[0]
                       
                     animate(ul,{height:0},0,function(){
                     that.style.background='#EEEEEE'
                     }) 
          
                    ul.style.display='none'
                    dangr.style.display='none'
                     xuanzhan.style.transform='rotate(0deg)'
            })
          }
}
xiala($('.jd5'),$('.dang25')[0],$('.xuanzhuan')[5])
xiala($('.jd4'),$('.dang24')[0],$('.xuanzhuan')[4])
xiala($('.jd6'),$('.dang20')[0],$('.xuanzhuan')[0])
xiala($('.jd1'),$('.dang21')[0],$('.xuanzhuan')[1])







//顶部令
function jsa(jsa,dangr1,xuanzhuan1){
  var jd2=jsa
  var dangr1=dangr1
  var xuanzhuan1=xuanzhuan1
  for(var i=0;i<jd2.length;i++){

    hover (jd2[i],function(){
      
       var height2=this.offsetHeight
        this.style.background='#FFF'
             var ul2=$('.hiddenj2',this)[0]

            ul2.style.display='block'
            dangr1.style.display='block'
            xuanzhuan1.style.transform='rotate(180deg)'
    },function(){
             var that=this
             var ul2=$('.hiddenj2',this)[0]

              this.style.background='#EEEEEE'
              ul2.style.display='none'
              dangr1.style.display='none'
              xuanzhuan1.style.transform='rotate(0deg)'
    })
  }

}
jsa($('.jd2'),$('.dang22')[0],$('.xuanzhuan')[2])
jsa($('.jd3'),$('.dang23')[0],$('.xuanzhuan')[3])










  var bnzj=$('.bannerzj')[0]
  var imgs=$('img',bnzj)
  var left=$('.left',bnzj)[0]
  var right=$('.right',bnzj)[0]
  var circle=$('.circle')[0]
  var circleLi=$('.circle-li')
  var width=parseInt(getStyle(bnzj,'width'))
  var n=0;
  var next=0;
  var flag=true;
  var t=setInterval(move,2000)
     function move(type){
      var type=type||'l'
      if(!flag){
        return;
      }
      flag=false;
      if(type=='l'){
        next=n+1;
         if(next>=imgs.length){
           next=0;
         }      
       
        animate(imgs[n],{opacity:0},600)
        animate(imgs[next],{opacity:1},600,function(){
          flag=true;
        })
         }else if(type=='r'){
           next=n-1
     if(next<0){
          next=imgs.length-1
     }
    
     animate(imgs[n],{opacity:0},600)
     animate(imgs[next],{opacity:1},600,function(){
          flag=true;
        })
   }

     for(var i=0;i<circleLi.length;i++){
       circleLi[i].style.background='#211616'
    }
    circleLi[next].style.background='#E5004F'
    n=next;
  } 
  right.onclick=function(){
     move('l');
}
  left.onclick=function(){
       move('r')
}
  bnzj.onmouseover=function(){
     clearInterval(t)
}
  bnzj.onmouseout=function(){
     t=setInterval(move,2000)
}
for(var i=0;i<circleLi.length;i++){
    circleLi[i].index=i;
    circleLi[i].onclick=function(){
      if(this.index>=n){
        if(!flag){
        return;
      }
        flag=false;
       for(var i=0;i<circleLi.length;i++){
        animate(imgs[i],{opacity:0},600)
       circleLi[i].style.background='#211616'
       
    } 
    animate(imgs[this.index],{opacity:1},600,function(){
      flag=true
    })
    circleLi[this.index].style.background='#E5004F'
    
      next=this.index

    }
  }
}


//banner标签
var bannerleft=$('.bannerleft')
          for(var i=0;i<bannerleft.length;i++){
            bannerleft[i].index=i
            hover (bannerleft[i],function(){
               var ul=$('.hidden',this)[0]
               var a=$(".dan",this)
               for(var j=0;j<a.length;j++){ 
               a[j].style.color='#c81623'
               }
                this.style.background='#FFF'
                ul.style.display='block'
                    
                     
            },function(){
              var ul=$('.hidden',this)[0]
              var a=$(".dan",this)
              for(var j=0;j<a.length;j++){
                a[j].style.color='#FFF'
              }
              this.style.background='#c81623'
              ul.style.display='none'
                     

            })
          }











var big=$('.big')[0]
var bigleft=$('.bigleft')[0]
var bigright=$('.bigright')[0]
var small=$('.small')[0]
var flag1w='duiww'

function move1q(){
      if(!flag1w){
        return;
      }
      flag1w=false;
    animate(small,{left:-1000},2000,function(){
    var imgFirst=getFirst(small)
    small.appendChild(imgFirst)
    small.style.left='0'
    flag1w='duiww';
  })
}

bigright.onclick=function(){
       move1q()
}
bigleft.onclick=function(){
  if(!flag1w){
    return
  }
  flag1w=false
  var imgFirst=getFirst(small)
  var imgLast=getLast(small)
  insertBefore(imgLast,imgFirst)
  small.style.left=-1000+'px'
  animate(small,{left:0},2000,function(){
       flag1w='duiww'
    })
 
}


hover(big,function(){
   bigleft.style.display='block'
   bigright.style.display='block'
},function(){
  bigleft.style.display='none'
  bigright.style.display='none'
})



























          

// 1楼选项卡
var clothingbottomallz1=getClass('clothingbottomallz1')
var clothingtopright1=getClass('clothingtopright1')

var clothingtoprightx=$('.clothingtopright')[0]

var dang=$(".dang",clothingtoprightx)

  for(var i=0;i<clothingtopright1.length;i++){
    clothingtopright1[i].index=i;
    clothingtopright1[i].onmouseover=function(){
    for(var j=0;j<clothingtopright1.length;j++){

      clothingtopright1[j].style.cssText='color: #666666;border-left:  1px solid #EDEDED;border-top: 1px solid #EDEDED;border-right:  1px solid #EDEDED;';
      
      }
        this.style.cssText='color:#C81623;border-top: 3px solid #C81623;border-left:  1px solid #C81623;border-right:  1px solid #C81623;';
        
        for(var x=0;x<clothingbottomallz1.length;x++){
          clothingbottomallz1[x].style.display='none';
          
        }
        clothingbottomallz1[this.index].style.display='block';

         for(var y=0;y<clothingbottomallz1.length;y++){

            dang[y].style.display='none' 

        }

           dang[this.index].style.display='block'

       }
    }






//1楼
   var clothingbottomzj=$('.clothingbottomzj')[0]
  var te=$('.te',clothingbottomzj) [0]
  var imgs1=$('img',te)
  var left1=$('.left',te)[0]
  var right1=$('.right',te)[0]
  var circle1=$('.circle1')[0]
  var circleLi1=$('.circle-li1')
  // var width1=parseInt(getStyle(te,'width'))
  var nx=0;
  var next1=0;
  var flag="xzw";
   var t1=setInterval(movex,2000)
     function movex(typew){
      var typew=typew||'pr'
      if(!flag){
        return;
      }
      flag=false;
      if(typew=='pr'){
        next1=nx+1;
         if(next1>=imgs1.length){
           next1=0;
         }      
        imgs1[next1].style.left=439+'px'
        animate(imgs1[nx],{left:-439},600)
        animate(imgs1[next1],{left:0},600,Tween.Linear,function(){
          flag="xzw";
        })
         }else if(typew=='qr'){
           next1=nx-1
     if(next1<0){
          next1=imgs1.length-1
     }
     imgs1[next1].style.left=-439+'px'
     animate(imgs1[nx],{left:439},600)
     animate(imgs1[next1],{left:0},600,Tween.Linear,function(){
          flag="xzw";
        })
   }
     for(var i=0;i<circleLi1.length;i++){
       circleLi1[i].style.background='#211616'
    }
    circleLi1[next1].style.background='#E5004F'
    nx=next1;
  } 
  right1.onclick=function(){
     movex('pr');
}
  left1.onclick=function(){
       movex('qr')
}
  te.onmouseover=function(){
     clearInterval(t1)
}
  te.onmouseout=function(){
     t1=setInterval(movex,2000)
}
for(var i=0;i<circleLi1.length;i++){
    circleLi1[i].index=i;
    circleLi1[i].onclick=function(){
      if(this.index>nx){
        if(!flag){
        return;
      }
        flag=false;
    imgs1[this.index].style.left=439+'px'
    animate(imgs1[nx],{left:-439},600)
    animate(imgs1[this.index],{left:0},600,Tween.Linear,function(){
          flag="xzw";
        })
     }else if(this.index<nx){
     imgs1[this.index].style.left=-439+'px'
     animate(imgs1[nx],{left:439},600)
     animate(imgs1[this.index],{left:0},600,Tween.Linear,function(){
          flag="xzw";
        })
      }
     for(var i=0;i<circleLi1.length;i++){
       circleLi1[i].style.background='#211616'
    }
    circleLi1[this.index].style.background='#E5004F'
      nx=this.index;
      next1=this.index
    }
  }















// 2楼选项卡
var rightallz1=getClass('rightallz1')
var personaltopright1=getClass('personaltopright1')
var personaltopright=$('.personaltopright')[0]

var dang2=$(".dang2",personaltopright) 

  for(var i=0;i<personaltopright1.length;i++){
    personaltopright1[i].index=i;
    personaltopright1[i].onmouseover=function(){
    for(var j=0;j<personaltopright1.length;j++){
      personaltopright1[j].style.cssText='color: #666666;border-left:  1px solid #EDEDED;border-top: 1px solid #EDEDED;border-right:  1px solid #EDEDED;';
      }
        this.style.cssText='color:#C81623;border-top: 3px solid #C81623;border-left:  1px solid #C81623;border-right:  1px solid #C81623;';

        for(var x=0;x<rightallz1.length;x++){
          rightallz1[x].style.display='none';
        }
        rightallz1[this.index].style.display='block';
       for(var y=0;y<rightallz1.length;y++){

            dang2[y].style.display='none' 

        }

           dang2[this.index].style.display='block'

       }
    }








//2楼

var personalbottomzj=$('.personalbottomzj')[0]
var personalbottomzjlunbo=$('.personalbottomzjlunbo')[0]
var imgs21=$('.x1',personalbottomzjlunbo)
var imgs22=$('.x2',personalbottomzjlunbo)
var left2=$(".left",personalbottomzjlunbo)[0]
var right2=$(".right",personalbottomzjlunbo)[0]
var circle2=$(".circle2")[0]
var circleLi2=$('.circle-li2')
var width2=parseInt(getStyle(personalbottomzjlunbo,'width'))
var n2=0;
var next2=0;

var flag2='x1'
var t2=setInterval(move2,2000)

  function move2(type2){
      var type2=type2||'a'
      if(!flag2){
        return;
      }
      flag2=false;
      if(type2=='a'){
        next2=n2+1;
         if(next2>=imgs21.length){
           next2=0;
           
         }  
         if(next2>=imgs22.length){
           next2=0;
           
         }     
        imgs21[next2].style.left=width2+'px'
        imgs22[next2].style.left=width2+'px'
        animate(imgs21[n2],{left:-width2},600)
        animate(imgs22[n2],{left:-width2},600)
        animate(imgs21[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
        animate(imgs22[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
         }else if(type2=='b'){
           next2=n2-1
     if(next2<0){
          next2=imgs21.length-1
           next2=imgs22.length-1
     }
     imgs21[next2].style.left=-width2+'px'
      imgs22[next2].style.left=-width2+'px'
     animate(imgs21[n2],{left:width2},600)
     animate(imgs22[n2],{left:width2},600)
     animate(imgs21[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
      animate(imgs22[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
   }
     for(var i=0;i<circleLi2.length;i++){
       circleLi2[i].style.background='#211616'
    }

    circleLi2[next2].style.background='#E5004F'
    n2=next2;
  } 
  right2.onclick=function(){
     move2('a');
}
  left2.onclick=function(){
       move2('b')
}
  personalbottomzjlunbo.onmouseover=function(){
     clearInterval(t2)
}
  personalbottomzjlunbo.onmouseout=function(){
     t2=setInterval(move2,2000)
}
for(var i=0;i<circleLi2.length;i++){
    circleLi2[i].index=i;
    circleLi2[i].onclick=function(){
      if(this.index>n2){
        if(!flag2){
        return;
      }
        flag2=false;
    imgs21[this.index].style.left=width2+'px'
     imgs22[this.index].style.left=width2+'px'
    animate(imgs21[n2],{left:-width2},600)
    animate(imgs22[n2],{left:-width2},600)
    animate(imgs21[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
    animate(imgs22[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
     }else if(this.index<n2){
     imgs21[this.index].style.left=-width2+'px'
     imgs22[this.index].style.left=-width2+'px'
     animate(imgs21[n2],{left:width2},600)
     animate(imgs22[n2],{left:width2},600)
     animate(imgs21[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
     animate(imgs22[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
      }
     for(var i=0;i<circleLi2.length;i++){
       circleLi2[i].style.background='#211616'
    }
    circleLi2[this.index].style.background='#E5004F'
      n2=this.index;
      next2=this.index
    }
  }













//3楼选项卡
var sanz1=getClass('sanz1')
var san1=getClass('san1')
var phonetopright=$('.phonetopright')[0]

var dang3=$(".dang3",phonetopright)    
  for(var i=0;i<san1.length;i++){
    san1[i].index=i;
    san1[i].onmouseover=function(){
    for(var j=0;j<san1.length;j++){
      san1[j].style.cssText='color: #666666;border-left:  1px solid #EDEDED;border-top: 1px solid #EDEDED;border-right:  1px solid #EDEDED;';
      }
        this.style.cssText='color:#C81623;border-top: 3px solid #C81623;border-left:  1px solid #C81623;border-right:  1px solid #C81623;';

        for(var x=0;x<sanz1.length;x++){
          sanz1[x].style.display='none';
        }
        sanz1[this.index].style.display='block';
       for(var y=0;y<sanz1.length;y++){

            dang3[y].style.display='none' 

        }

           dang3[this.index].style.display='block'
       }
    }








//3楼
  function fengzhuang(obj){
    var bnzj3=obj
    var imgs3=$('img',bnzj3)
   
    var left3=$('.left',bnzj3)[0]
    var right3=$('.right',bnzj3)[0]

    var circleLi3=$('.circle-li3',bnzj3) 
   
    var width3=parseInt(getStyle(bnzj3,'width'))
    var n3=0;
    var next3=0;
    var flag3='x2'
    var t3=setInterval(move3,2000)
       function move3(type3){
        var type3=type3||'m'
        if(!flag3){
          return;
        }
        flag3=false;
        if(type3=='m'){
          next3=n3+1;
           if(next3>=imgs3.length){
             next3=0;
           }      
           imgs3[next3].style.left=width3+'px'
          animate(imgs3[n3],{left:-width3},600)
          animate(imgs3[next3],{left:0},600,Tween.Linear,function(){
            flag3='x2';
          })
        }else if(type3=='n'){
               next3=n3-1
       if(next3<0){
            next3=imgs3.length-1
       }
       imgs3[next3].style.left=-width3+'px'
       animate(imgs3[n3],{left:width3},600)
       animate(imgs3[next3],{left:0},600,Tween.Linear,function(){
        flag3='x2';
      })
      }
          for(var i=0;i<circleLi3.length;i++){
             circleLi3[i].style.background='#211616'
           }
           circleLi3[next3].style.background='#E5004F'
          n3=next3;
           } 
       right3.onclick=function(){
      move3('m');
     }
       left3.onclick=function(){
        move3('n')
      }
      bnzj3.onmouseover=function(){
       clearInterval(t3)
     }
    bnzj3.onmouseout=function(){
       t3=setInterval(move3,2000)
  }
  for(var i=0;i<circleLi3.length;i++){
      circleLi3[i].index=i;
      circleLi3[i].onclick=function(){
      
      if(this.index>n3){ 
         if(!flag3){
          return;
        }
          flag3=false;
      imgs3[this.index].style.left=width3+'px'
      animate(imgs3[n3],{left:-width3},600)
      animate(imgs3[this.index],{left:0},600,Tween.Linear,function(){
        flag3='x2';
      })
      }else if(this.index<n3){
       imgs3[this.index].style.left=-width3+'px'
       animate(imgs3[n3],{left:width3},600)
       animate(imgs3[this.index],{left:0},600,Tween.Linear,function(){
        flag3='x2';
      })
     }
          for(var i=0;i<circleLi3.length;i++){
         circleLi3[i].style.background='#211616'
      }
      circleLi3[this.index].style.background='#E5004F'
      n3=this.index;
      next3=this.index
      }
    }
 
}
  fengzhuang($('.phonebottomrighttopleft')[0])




















//4楼选项卡
var sanz2=getClass('sanz2')
var san2=getClass('san2')
var phonetopright=$('.phonetopright')[1]

var dang4=$(".dang4",phonetopright)     
  for(var i=0;i<san2.length;i++){
    san2[i].index=i;
    san2[i].onmouseover=function(){
    for(var j=0;j<san2.length;j++){
      san2[j].style.cssText='color: #666666;border-left:  1px solid #EDEDED;border-top: 1px solid #EDEDED;border-right:  1px solid #EDEDED;';
      }
        this.style.cssText='color:#C81623;border-top: 3px solid #C81623;border-left:  1px solid #C81623;border-right:  1px solid #C81623;';

        for(var x=0;x<sanz2.length;x++){
          sanz2[x].style.display='none';
        }
        sanz2[this.index].style.display='block';
            for(var y=0;y<sanz2.length;y++){

            dang4[y].style.display='none' 

        }

           dang4[this.index].style.display='block'
       }
    }








//4楼
  function fengzhuang(obj){
    var bnzj3=obj
    var imgs3=$('img',bnzj3)
   
    var left3=$('.left',bnzj3)[0]
    var right3=$('.right',bnzj3)[0]

    var circleLi3=$('.circle-li3',bnzj3) 
    
    var width3=parseInt(getStyle(bnzj3,'width'))
    var n3=0;
    var next3=0;
    var flag3='x2'
    var t3=setInterval(move3,2000)
       function move3(type3){
        var type3=type3||'m'
        if(!flag3){
          return;
        }
        flag3=false;
        if(type3=='m'){
          next3=n3+1;
           if(next3>=imgs3.length){
             next3=0;
           }      
           imgs3[next3].style.left=width3+'px'
          animate(imgs3[n3],{left:-width3},600)
          animate(imgs3[next3],{left:0},600,Tween.Linear,function(){
            flag3='x2';
          })
        }else if(type3=='n'){
               next3=n3-1
       if(next3<0){
            next3=imgs3.length-1
       }
       imgs3[next3].style.left=-width3+'px'
       animate(imgs3[n3],{left:width3},600)
       animate(imgs3[next3],{left:0},600,Tween.Linear,function(){
        flag3='x2';
      })
      }
          for(var i=0;i<circleLi3.length;i++){
             circleLi3[i].style.background='#211616'
           }
           circleLi3[next3].style.background='#E5004F'
          n3=next3;
           } 
       right3.onclick=function(){
      move3('m');
     }
       left3.onclick=function(){
        move3('n')
      }
      bnzj3.onmouseover=function(){
       clearInterval(t3)
     }
    bnzj3.onmouseout=function(){
       t3=setInterval(move3,2000)
  }
  for(var i=0;i<circleLi3.length;i++){
      circleLi3[i].index=i;
      circleLi3[i].onclick=function(){
      
      if(this.index>n3){ 
         if(!flag3){
          return;
        }
          flag3=false;
      imgs3[this.index].style.left=width3+'px'
      animate(imgs3[n3],{left:-width3},600)
      animate(imgs3[this.index],{left:0},600,Tween.Linear,function(){
        flag3='x2';
      })
      }else if(this.index<n3){
       imgs3[this.index].style.left=-width3+'px'
       animate(imgs3[n3],{left:width3},600)
       animate(imgs3[this.index],{left:0},600,Tween.Linear,function(){
        flag3='x2';
      })
     }
          for(var i=0;i<circleLi3.length;i++){
         circleLi3[i].style.background='#211616'
      }
      circleLi3[this.index].style.background='#E5004F'
      n3=this.index;
      next3=this.index
      }
    }
 
}
  fengzhuang($('.fourth')[0])

















//5楼选项卡
var  sanz3=getClass('sanz3')
var san3=getClass('san3')
var phonetopright=$('.phonetopright')[2]

var dang5=$(".dang5",phonetopright)      
  for(var i=0;i<san3.length;i++){
    san3[i].index=i;
    san3[i].onmouseover=function(){
    for(var j=0;j<san3.length;j++){
      san3[j].style.cssText='color: #666666;border-left:  1px solid #EDEDED;border-top: 1px solid #EDEDED;border-right:  1px solid #EDEDED;';
      }
        this.style.cssText='color:#C81623;border-top: 3px solid #C81623;border-left:  1px solid #C81623;border-right:  1px solid #C81623;';

        for(var x=0;x< sanz3.length;x++){
           sanz3[x].style.display='none';
        }
         sanz3[this.index].style.display='block';
         for(var y=0;y<sanz3.length;y++){

            dang5[y].style.display='none' 

        }

           dang5[this.index].style.display='block'
       }
    }









//5楼
 function fengzhuang(obj){
    var bnzj3=obj
    var imgs3=$('img',bnzj3)
   
    var left3=$('.left',bnzj3)[0]
    var right3=$('.right',bnzj3)[0]

    var circleLi3=$('.circle-li3',bnzj3) 
    
    var width3=parseInt(getStyle(bnzj3,'width'))
    var n3=0;
    var next3=0;
    var flag3='x2'
    var t3=setInterval(move3,2000)
       function move3(type3){
        var type3=type3||'m'
        if(!flag3){
          return;
        }
        flag3=false;
        if(type3=='m'){
          next3=n3+1;
           if(next3>=imgs3.length){
             next3=0;
           }      
           imgs3[next3].style.left=width3+'px'
          animate(imgs3[n3],{left:-width3},600)
          animate(imgs3[next3],{left:0},600,Tween.Linear,function(){
            flag3='x2';
          })
        }else if(type3=='n'){
               next3=n3-1
       if(next3<0){
            next3=imgs3.length-1
       }
       imgs3[next3].style.left=-width3+'px'
       animate(imgs3[n3],{left:width3},600)
       animate(imgs3[next3],{left:0},600,Tween.Linear,function(){
        flag3='x2';
      })
      }
          for(var i=0;i<circleLi3.length;i++){
             circleLi3[i].style.background='#211616'
           }
           circleLi3[next3].style.background='#E5004F'
          n3=next3;
           } 
       right3.onclick=function(){
      move3('m');
     }
       left3.onclick=function(){
        move3('n')
      }
      bnzj3.onmouseover=function(){
       clearInterval(t3)
     }
    bnzj3.onmouseout=function(){
       t3=setInterval(move3,2000)
  }
  for(var i=0;i<circleLi3.length;i++){
      circleLi3[i].index=i;
      circleLi3[i].onclick=function(){
      
      if(this.index>n3){ 
         if(!flag3){
          return;
        }
          flag3=false;
      imgs3[this.index].style.left=width3+'px'
      animate(imgs3[n3],{left:-width3},600)
      animate(imgs3[this.index],{left:0},600,Tween.Linear,function(){
        flag3='x2';
      })
      }else if(this.index<n3){
       imgs3[this.index].style.left=-width3+'px'
       animate(imgs3[n3],{left:width3},600)
       animate(imgs3[this.index],{left:0},600,Tween.Linear,function(){
        flag3='x2';
      })
     }
          for(var i=0;i<circleLi3.length;i++){
         circleLi3[i].style.background='#211616'
      }
      circleLi3[this.index].style.background='#E5004F'
      n3=this.index;
      next3=this.index
      }
    }
 
}
  fengzhuang($('.fifth')[0])















//6楼选项卡
var  liuz1=getClass('liuz1')
var liu1=getClass('liu1')
var doingtopright=$('.doingtopright')[0]
var dang6=$(".dang6",doingtopright) 

  for(var i=0;i<liu1.length;i++){
    liu1[i].index=i;
    liu1[i].onmouseover=function(){
    for(var j=0;j<liu1.length;j++){
      liu1[j].style.cssText='color: #666666;border-left:  1px solid #EDEDED;border-top: 1px solid #EDEDED;border-right:  1px solid #EDEDED;';
      }
        this.style.cssText='color:#C81623;border-top: 3px solid #C81623;border-left:  1px solid #C81623;border-right:  1px solid #C81623;';

        for(var x=0;x< liuz1.length;x++){
           liuz1[x].style.display='none';
        }
         liuz1[this.index].style.display='block';
       for(var y=0;y<liuz1.length;y++){

            dang6[y].style.display='none' 

        }

           dang6[this.index].style.display='block'
       }
    }






//6楼
function fixth(objx){

  var personalbottomzjlunbo=objx
  var imgs21=$('.x1',personalbottomzjlunbo)
  var imgs22=$('.x2',personalbottomzjlunbo)
  var left2=$(".left",personalbottomzjlunbo)[0]
  var right2=$(".right",personalbottomzjlunbo)[0]
  var circle2=$(".circle4",personalbottomzjlunbo)[0]
  var circleLi2=$('.circle-li4',personalbottomzjlunbo)
  var width2=parseInt(getStyle(personalbottomzjlunbo,'width'))
  var n2=0;
  var next2=0;

  var flag2='x1'
  var t2=setInterval(move2,2000)

  function move2(type2){
      var type2=type2||'a'
      if(!flag2){
        return;
      }
      flag2=false;
      if(type2=='a'){
        next2=n2+1;
         if(next2>=imgs21.length){
           next2=0;
           
         }  
         if(next2>=imgs22.length){
           next2=0;
           
         }     
        imgs21[next2].style.left=width2+'px'
        imgs22[next2].style.left=width2+'px'
        animate(imgs21[n2],{left:-width2},600)
        animate(imgs22[n2],{left:-width2},600)
        animate(imgs21[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
        animate(imgs22[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
         }else if(type2=='b'){
           next2=n2-1
     if(next2<0){
          next2=imgs21.length-1
           next2=imgs22.length-1
     }
     imgs21[next2].style.left=-width2+'px'
      imgs22[next2].style.left=-width2+'px'
     animate(imgs21[n2],{left:width2},600)
     animate(imgs22[n2],{left:width2},600)
     animate(imgs21[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
      animate(imgs22[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
   }
     for(var i=0;i<circleLi2.length;i++){
       circleLi2[i].style.background='#211616'
    }

    circleLi2[next2].style.background='#E5004F'
    n2=next2;
  } 
  right2.onclick=function(){
     move2('a');
}
  left2.onclick=function(){
       move2('b')
}
  personalbottomzjlunbo.onmouseover=function(){
     clearInterval(t2)
}
  personalbottomzjlunbo.onmouseout=function(){
     t2=setInterval(move2,2000)
}
for(var i=0;i<circleLi2.length;i++){
    circleLi2[i].index=i;
    circleLi2[i].onclick=function(){
      if(this.index>n2){
        if(!flag2){
        return;
      }
        flag2=false;
    imgs21[this.index].style.left=width2+'px'
     imgs22[this.index].style.left=width2+'px'
    animate(imgs21[n2],{left:-width2},600)
    animate(imgs22[n2],{left:-width2},600)
    animate(imgs21[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
    animate(imgs22[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
     }else if(this.index<n2){
     imgs21[this.index].style.left=-width2+'px'
     imgs22[this.index].style.left=-width2+'px'
     animate(imgs21[n2],{left:width2},600)
     animate(imgs22[n2],{left:width2},600)
     animate(imgs21[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
     animate(imgs22[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
      }
     for(var i=0;i<circleLi2.length;i++){
       circleLi2[i].style.background='#211616'
    }
    circleLi2[this.index].style.background='#E5004F'
      n2=this.index;
      next2=this.index
    }
  }
}
fixth($('.sixth')[0])













// //7楼选项卡
var  liuz2=getClass(' liuz2')
var liu2=getClass('liu2') 
var doingtopright=$('.doingtopright')[1]
var dang7=$(".dang7",doingtopright)     
  for(var i=0;i<liu2.length;i++){
    liu2[i].index=i;
    liu2[i].onmouseover=function(){
    for(var j=0;j<liu2.length;j++){
      liu2[j].style.cssText='color: #666666;border-left:  1px solid #EDEDED;border-top: 1px solid #EDEDED;border-right:  1px solid #EDEDED;';
      }
        this.style.cssText='color:#C81623;border-top: 3px solid #C81623;border-left:  1px solid #C81623;border-right:  1px solid #C81623;';

        for(var x=0;x< liuz2.length;x++){
           liuz2[x].style.display='none';
        }
         liuz2[this.index].style.display='block';
         for(var y=0;y<liuz2.length;y++){

            dang7[y].style.display='none' 

        }

           dang7[this.index].style.display='block'
      }
    }








//7楼
function fixth(objx){

  var personalbottomzjlunbo=objx
  var imgs21=$('.x1',personalbottomzjlunbo)
  var imgs22=$('.x2',personalbottomzjlunbo)
  var left2=$(".left",personalbottomzjlunbo)[0]
  var right2=$(".right",personalbottomzjlunbo)[0]
  var circle2=$(".circle4",personalbottomzjlunbo)[0]
  var circleLi2=$('.circle-li4',personalbottomzjlunbo)
  var width2=parseInt(getStyle(personalbottomzjlunbo,'width'))
  var n2=0;
  var next2=0;

  var flag2='x1'
  var t2=setInterval(move2,2000)

  function move2(type2){
      var type2=type2||'a'
      if(!flag2){
        return;
      }
      flag2=false;
      if(type2=='a'){
        next2=n2+1;
         if(next2>=imgs21.length){
           next2=0;
           
         }  
         if(next2>=imgs22.length){
           next2=0;
           
         }     
        imgs21[next2].style.left=width2+'px'
        imgs22[next2].style.left=width2+'px'
        animate(imgs21[n2],{left:-width2},600)
        animate(imgs22[n2],{left:-width2},600)
        animate(imgs21[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
        animate(imgs22[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
         }else if(type2=='b'){
           next2=n2-1
     if(next2<0){
          next2=imgs21.length-1
           next2=imgs22.length-1
     }
     imgs21[next2].style.left=-width2+'px'
      imgs22[next2].style.left=-width2+'px'
     animate(imgs21[n2],{left:width2},600)
     animate(imgs22[n2],{left:width2},600)
     animate(imgs21[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
      animate(imgs22[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
   }
     for(var i=0;i<circleLi2.length;i++){
       circleLi2[i].style.background='#211616'
    }

    circleLi2[next2].style.background='#E5004F'
    n2=next2;
  } 
  right2.onclick=function(){
     move2('a');
}
  left2.onclick=function(){
       move2('b')
}
  personalbottomzjlunbo.onmouseover=function(){
     clearInterval(t2)
}
  personalbottomzjlunbo.onmouseout=function(){
     t2=setInterval(move2,2000)
}
for(var i=0;i<circleLi2.length;i++){
    circleLi2[i].index=i;
    circleLi2[i].onclick=function(){
      if(this.index>n2){
        if(!flag2){
        return;
      }
        flag2=false;
    imgs21[this.index].style.left=width2+'px'
     imgs22[this.index].style.left=width2+'px'
    animate(imgs21[n2],{left:-width2},600)
    animate(imgs22[n2],{left:-width2},600)
    animate(imgs21[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
    animate(imgs22[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
     }else if(this.index<n2){
     imgs21[this.index].style.left=-width2+'px'
     imgs22[this.index].style.left=-width2+'px'
     animate(imgs21[n2],{left:width2},600)
     animate(imgs22[n2],{left:width2},600)
     animate(imgs21[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
     animate(imgs22[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
      }
     for(var i=0;i<circleLi2.length;i++){
       circleLi2[i].style.background='#211616'
    }
    circleLi2[this.index].style.background='#E5004F'
      n2=this.index;
      next2=this.index
    }
  }
}
fixth($('.seventh')[0])













// //8楼选项卡
var  liuz3=getClass('liuz3')
var liu3=getClass('liu3') 
var doingtopright=$('.doingtopright')[2]
var dang8=$(".dang8",doingtopright)     
  for(var i=0;i<liu3.length;i++){
    liu3[i].index=i;
    liu3[i].onmouseover=function(){
    for(var j=0;j<liu3.length;j++){
      liu3[j].style.cssText='color: #666666;border-left:  1px solid #EDEDED;border-top: 1px solid #EDEDED;border-right:  1px solid #EDEDED;';
      }
        this.style.cssText='color:#C81623;border-top: 3px solid #C81623;border-left:  1px solid #C81623;border-right:  1px solid #C81623;';

        for(var x=0;x<liuz3.length;x++){
           liuz3[x].style.display='none';
        }
         liuz3[this.index].style.display='block';
       for(var y=0;y<liuz3.length;y++){

            dang8[y].style.display='none' 

        }

           dang8[this.index].style.display='block'
       }
    }







//8楼
function fixth(objx){

  var personalbottomzjlunbo=objx
  var imgs21=$('.x1',personalbottomzjlunbo)
  var imgs22=$('.x2',personalbottomzjlunbo)
  var left2=$(".left",personalbottomzjlunbo)[0]
  var right2=$(".right",personalbottomzjlunbo)[0]
  var circle2=$(".circle4",personalbottomzjlunbo)[0]
  var circleLi2=$('.circle-li4',personalbottomzjlunbo)
  var width2=parseInt(getStyle(personalbottomzjlunbo,'width'))
  var n2=0;
  var next2=0;

  var flag2='x1'
  var t2=setInterval(move2,2000)

  function move2(type2){
      var type2=type2||'a'
      if(!flag2){
        return;
      }
      flag2=false;
      if(type2=='a'){
        next2=n2+1;
         if(next2>=imgs21.length){
           next2=0;
           
         }  
         if(next2>=imgs22.length){
           next2=0;
           
         }     
        imgs21[next2].style.left=width2+'px'
        imgs22[next2].style.left=width2+'px'
        animate(imgs21[n2],{left:-width2},600)
        animate(imgs22[n2],{left:-width2},600)
        animate(imgs21[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
        animate(imgs22[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
         }else if(type2=='b'){
           next2=n2-1
     if(next2<0){
          next2=imgs21.length-1
           next2=imgs22.length-1
     }
     imgs21[next2].style.left=-width2+'px'
      imgs22[next2].style.left=-width2+'px'
     animate(imgs21[n2],{left:width2},600)
     animate(imgs22[n2],{left:width2},600)
     animate(imgs21[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
      animate(imgs22[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
   }
     for(var i=0;i<circleLi2.length;i++){
       circleLi2[i].style.background='#211616'
    }

    circleLi2[next2].style.background='#E5004F'
    n2=next2;
  } 
  right2.onclick=function(){
     move2('a');
}
  left2.onclick=function(){
       move2('b')
}
  personalbottomzjlunbo.onmouseover=function(){
     clearInterval(t2)
}
  personalbottomzjlunbo.onmouseout=function(){
     t2=setInterval(move2,2000)
}
for(var i=0;i<circleLi2.length;i++){
    circleLi2[i].index=i;
    circleLi2[i].onclick=function(){
      if(this.index>n2){
        if(!flag2){
        return;
      }
        flag2=false;
    imgs21[this.index].style.left=width2+'px'
     imgs22[this.index].style.left=width2+'px'
    animate(imgs21[n2],{left:-width2},600)
    animate(imgs22[n2],{left:-width2},600)
    animate(imgs21[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
    animate(imgs22[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
     }else if(this.index<n2){
     imgs21[this.index].style.left=-width2+'px'
     imgs22[this.index].style.left=-width2+'px'
     animate(imgs21[n2],{left:width2},600)
     animate(imgs22[n2],{left:width2},600)
     animate(imgs21[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
     animate(imgs22[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
      }
     for(var i=0;i<circleLi2.length;i++){
       circleLi2[i].style.background='#211616'
    }
    circleLi2[this.index].style.background='#E5004F'
      n2=this.index;
      next2=this.index
    }
  }
}
fixth($('.eighth')[0])











// //9楼选项卡
var liuz4=getClass('liuz4') 
var liu4=getClass('liu4')
var doingtopright=$('.doingtopright')[3]
var dang9=$(".dang9",doingtopright)    
  for(var i=0;i<liu4.length;i++){
    liu4[i].index=i;
    liu4[i].onmouseover=function(){
    for(var j=0;j<liu4.length;j++){
      liu4[j].style.cssText='color: #666666;border-left:  1px solid #EDEDED;border-top: 1px solid #EDEDED;border-right:  1px solid #EDEDED;';
      }
        this.style.cssText='color:#C81623;border-top: 3px solid #C81623;border-left:  1px solid #C81623;border-right:  1px solid #C81623;';

        for(var x=0;x<liuz4.length;x++){
          liuz4[x].style.display='none';
        }
        liuz4[this.index].style.display='block';
       for(var y=0;y<liuz4.length;y++){

            dang9[y].style.display='none' 

        }

           dang9[this.index].style.display='block'
       }
    }








//9楼
function fixth(objx){

  var personalbottomzjlunbo=objx
  var imgs21=$('.x1',personalbottomzjlunbo)
  var imgs22=$('.x2',personalbottomzjlunbo)
  var left2=$(".left",personalbottomzjlunbo)[0]
  var right2=$(".right",personalbottomzjlunbo)[0]
  var circle2=$(".circle4",personalbottomzjlunbo)[0]
  var circleLi2=$('.circle-li4',personalbottomzjlunbo)
  var width2=parseInt(getStyle(personalbottomzjlunbo,'width'))
  var n2=0;
  var next2=0;

  var flag2='x1'
  var t2=setInterval(move2,2000)

  function move2(type2){
      var type2=type2||'a'
      if(!flag2){
        return;
      }
      flag2=false;
      if(type2=='a'){
        next2=n2+1;
         if(next2>=imgs21.length){
           next2=0;
           
         }  
         if(next2>=imgs22.length){
           next2=0;
           
         }     
        imgs21[next2].style.left=width2+'px'
        imgs22[next2].style.left=width2+'px'
        animate(imgs21[n2],{left:-width2},600)
        animate(imgs22[n2],{left:-width2},600)
        animate(imgs21[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
        animate(imgs22[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
         }else if(type2=='b'){
           next2=n2-1
     if(next2<0){
          next2=imgs21.length-1
           next2=imgs22.length-1
     }
     imgs21[next2].style.left=-width2+'px'
      imgs22[next2].style.left=-width2+'px'
     animate(imgs21[n2],{left:width2},600)
     animate(imgs22[n2],{left:width2},600)
     animate(imgs21[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
      animate(imgs22[next2],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
   }
     for(var i=0;i<circleLi2.length;i++){
       circleLi2[i].style.background='#211616'
    }

    circleLi2[next2].style.background='#E5004F'
    n2=next2;
  } 
  right2.onclick=function(){
     move2('a');
}
  left2.onclick=function(){
       move2('b')
}
  personalbottomzjlunbo.onmouseover=function(){
     clearInterval(t2)
}
  personalbottomzjlunbo.onmouseout=function(){
     t2=setInterval(move2,2000)
}
for(var i=0;i<circleLi2.length;i++){
    circleLi2[i].index=i;
    circleLi2[i].onclick=function(){
      if(this.index>n2){
        if(!flag2){
        return;
      }
        flag2=false;
    imgs21[this.index].style.left=width2+'px'
     imgs22[this.index].style.left=width2+'px'
    animate(imgs21[n2],{left:-width2},600)
    animate(imgs22[n2],{left:-width2},600)
    animate(imgs21[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
    animate(imgs22[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
     }else if(this.index<n2){
     imgs21[this.index].style.left=-width2+'px'
     imgs22[this.index].style.left=-width2+'px'
     animate(imgs21[n2],{left:width2},600)
     animate(imgs22[n2],{left:width2},600)
     animate(imgs21[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
     animate(imgs22[this.index],{left:0},600,Tween.Linear,function(){
          flag2='x1';
        })
      }
     for(var i=0;i<circleLi2.length;i++){
       circleLi2[i].style.background='#211616'
    }
    circleLi2[this.index].style.background='#E5004F'
      n2=this.index;
      next2=this.index
    }
  }
}
fixth($('.nineth')[0])















//10楼选项卡
var bookpicturez1=getClass('bookpicturez1')
var bookindextopright1=getClass('bookindextopright1')
var bookindextopright=$('.bookindextopright')[0]
var dang10=$(".dang10",bookindextopright)    
  for(var i=0;i<bookindextopright1.length;i++){
    bookindextopright1[i].index=i;
    bookindextopright1[i].onmouseover=function(){
    for(var j=0;j<bookindextopright1.length;j++){
      bookindextopright1[j].style.cssText='color: #666666;border-left:  1px solid #EDEDED;border-top: 1px solid #EDEDED;border-right:  1px solid #EDEDED;';
      }
        this.style.cssText='color:#C81623;border-top: 3px solid #C81623;border-left:  1px solid #C81623;border-right:  1px solid #C81623;';

        for(var x=0;x<bookpicturez1.length;x++){
          bookpicturez1[x].style.display='none';
        }
        bookpicturez1[this.index].style.display='block';
       for(var y=0;y<bookpicturez1.length;y++){

            dang10[y].style.display='none' 

        }

           dang10[this.index].style.display='block'
       }
    }







//10楼
function tenth(tobj){

  var te=tobj
  var imgs1=$('img',te)
  var left1=$('.left',te)[0]
  var right1=$('.right',te)[0]
  var circle1=$('.circle5')[0]
  var circleLi1=$('.circle-li5')
  var width1=parseInt(getStyle(te,'width'))
  var n1=0;
  var next1=0;
  var flag=true;
   var t1=setInterval(move1,2000)
     function move1(type1){
      var type1=type1||'p'
      if(!flag){
        return;
      }
      flag=false;
      if(type1=='p'){
        next1=n1+1;
         if(next1>=imgs1.length){
           next1=0;
         }      
        imgs1[next1].style.left=width1+'px'
        animate(imgs1[n1],{left:-width1},600)
        animate(imgs1[next1],{left:0},600,Tween.Linear,function(){
          flag=true;
        })
         }else if(type1=='q'){
           next1=n1-1
     if(next1<0){
          next1=imgs1.length-1
     }
     imgs1[next1].style.left=-width1+'px'
     animate(imgs1[n1],{left:width1},600)
     animate(imgs1[next1],{left:0},600,Tween.Linear,function(){
          flag=true;
        })
   }
     for(var i=0;i<circleLi1.length;i++){
       circleLi1[i].style.background='#211616'
    }
    circleLi1[next1].style.background='#E5004F'
    n1=next1;
  } 
  right1.onclick=function(){
     move1('p');
}
  left1.onclick=function(){
       move1('q')
}
  te.onmouseover=function(){
     clearInterval(t1)
}
  te.onmouseout=function(){
     t1=setInterval(move1,2000)
}
for(var i=0;i<circleLi1.length;i++){
    circleLi1[i].index=i;
    circleLi1[i].onclick=function(){
      if(this.index>n1){
        if(!flag){
        return;
      }
        flag=false;
    imgs1[this.index].style.left=width1+'px'
    animate(imgs1[n1],{left:-width1},600)
    animate(imgs1[this.index],{left:0},600,Tween.Linear,function(){
          flag=true;
        })
     }else if(this.index<n1){
     imgs1[this.index].style.left=-width1+'px'
     animate(imgs1[n1],{left:width1},600)
     animate(imgs1[this.index],{left:0},600,Tween.Linear,function(){
          flag=true;
        })
      }
     for(var i=0;i<circleLi1.length;i++){
       circleLi1[i].style.background='#211616'
    }
    circleLi1[this.index].style.background='#E5004F'
      n1=this.index;
      next1=this.index
    }
  }
}
tenth($('.tenth') [0])











//11楼选项卡
var sanz4=getClass('sanz4')
var san4=getClass('san4') 
var phonetopright=$('.phonetopright')[3]

var dang11=$(".dang11",phonetopright)    
  for(var i=0;i<san4.length;i++){
    san4[i].index=i;
    san4[i].onmouseover=function(){
    for(var j=0;j<san4.length;j++){
      san4[j].style.cssText='color: #666666;border-left:  1px solid #EDEDED;border-top: 1px solid #EDEDED;border-right:  1px solid #EDEDED;';
      }
        this.style.cssText='color:#C81623;border-top: 3px solid #C81623;border-left:  1px solid #C81623;border-right:  1px solid #C81623;';

        for(var x=0;x<sanz4.length;x++){
          sanz4[x].style.display='none';
        }
        sanz4[this.index].style.display='block';
        for(var y=0;y<sanz4.length;y++){

            dang11[y].style.display='none' 

        }

           dang11[this.index].style.display='block'
       }
    }









//11楼
   function fengzhuang(obj){
    var bnzj3=obj
    var imgs3=$('img',bnzj3)
   
    var left3=$('.left',bnzj3)[0]
    var right3=$('.right',bnzj3)[0]

    var circleLi3=$('.circle-li3',bnzj3) 
    
    var width3=parseInt(getStyle(bnzj3,'width'))
    var n3=0;
    var next3=0;
    var flag3='x2'
    var t3=setInterval(move3,2000)
       function move3(type3){
        var type3=type3||'m'
        if(!flag3){
          return;
        }
        flag3=false;
        if(type3=='m'){
          next3=n3+1;
           if(next3>=imgs3.length){
             next3=0;
           }      
           imgs3[next3].style.left=width3+'px'
          animate(imgs3[n3],{left:-width3},600)
          animate(imgs3[next3],{left:0},600,Tween.Linear,function(){
            flag3='x2';
          })
        }else if(type3=='n'){
               next3=n3-1
       if(next3<0){
            next3=imgs3.length-1
       }
       imgs3[next3].style.left=-width3+'px'
       animate(imgs3[n3],{left:width3},600)
       animate(imgs3[next3],{left:0},600,Tween.Linear,function(){
        flag3='x2';
      })
      }
          for(var i=0;i<circleLi3.length;i++){
             circleLi3[i].style.background='#211616'
           }
           circleLi3[next3].style.background='#E5004F'
          n3=next3;
           } 
       right3.onclick=function(){
      move3('m');
     }
       left3.onclick=function(){
        move3('n')
      }
      bnzj3.onmouseover=function(){
       clearInterval(t3)
     }
    bnzj3.onmouseout=function(){
       t3=setInterval(move3,2000)
  }
  for(var i=0;i<circleLi3.length;i++){
      circleLi3[i].index=i;
      circleLi3[i].onclick=function(){
      
      if(this.index>n3){ 
         if(!flag3){
          return;
        }
          flag3=false;
      imgs3[this.index].style.left=width3+'px'
      animate(imgs3[n3],{left:-width3},600)
      animate(imgs3[this.index],{left:0},600,Tween.Linear,function(){
        flag3='x2';
      })
      }else if(this.index<n3){
       imgs3[this.index].style.left=-width3+'px'
       animate(imgs3[n3],{left:width3},600)
       animate(imgs3[this.index],{left:0},600,Tween.Linear,function(){
        flag3='x2';
      })
     }
          for(var i=0;i<circleLi3.length;i++){
         circleLi3[i].style.background='#211616'
      }
      circleLi3[this.index].style.background='#E5004F'
      n3=this.index;
      next3=this.index
      }
    }
 
}
  fengzhuang($('.eleventh')[0])















//12楼左侧
function twenthleft(twobj){

  var te=twobj
  var imgs1=$('img',te)
  var left1=$('.left',te)[0]
  var right1=$('.right',te)[0]
  var circle1=$('.circle6')[0]
  var circleLi1=$('.circle-li6')
  var width1=parseInt(getStyle(te,'width'))
  var n1=0;
  var next1=0;
  var flag=true;
   var t1=setInterval(move1,2000)
     function move1(type1){
      var type1=type1||'p'
      if(!flag){
        return;
      }
      flag=false;
      if(type1=='p'){
        next1=n1+1;
         if(next1>=imgs1.length){
           next1=0;
         }      
        imgs1[next1].style.left=width1+'px'
        animate(imgs1[n1],{left:-width1},600)
        animate(imgs1[next1],{left:0},600,Tween.Linear,function(){
          flag=true;
        })
         }else if(type1=='q'){
           next1=n1-1
     if(next1<0){
          next1=imgs1.length-1
     }
     imgs1[next1].style.left=-width1+'px'
     animate(imgs1[n1],{left:width1},600)
     animate(imgs1[next1],{left:0},600,Tween.Linear,function(){
          flag=true;
        })
   }
     for(var i=0;i<circleLi1.length;i++){
       circleLi1[i].style.background='#211616'
    }
    circleLi1[next1].style.background='#E5004F'
    n1=next1;
  } 
  right1.onclick=function(){
     move1('p');
}
  left1.onclick=function(){
       move1('q')
}
  te.onmouseover=function(){
     clearInterval(t1)
}
  te.onmouseout=function(){
     t1=setInterval(move1,2000)
}
for(var i=0;i<circleLi1.length;i++){
    circleLi1[i].index=i;
    circleLi1[i].onclick=function(){
      if(this.index>n1){
        if(!flag){
        return;
      }
        flag=false;
    imgs1[this.index].style.left=width1+'px'
    animate(imgs1[n1],{left:-width1},600)
    animate(imgs1[this.index],{left:0},600,Tween.Linear,function(){
          flag=true;
        })
     }else if(this.index<n1){
     imgs1[this.index].style.left=-width1+'px'
     animate(imgs1[n1],{left:width1},600)
     animate(imgs1[this.index],{left:0},600,Tween.Linear,function(){
          flag=true;
        })
      }
     for(var i=0;i<circleLi1.length;i++){
       circleLi1[i].style.background='#211616'
    }
    circleLi1[this.index].style.background='#E5004F'
      n1=this.index;
      next1=this.index
    }
  }
}
twenthleft($('.twenthleft') [0])






  //12楼右侧
function twenthright(trobj){

  var te=trobj
  var imgs1=$('img',te)
  var left1=$('.left',te)[0]
  var right1=$('.right',te)[0]
  var circle1=$('.circle7')[0]
  var circleLi1=$('.circle-li7')
  var width1=parseInt(getStyle(te,'width'))
  var n1=0;
  var next1=0;
  var flag=true;
   var t1=setInterval(move1,2000)
     function move1(type1){
      var type1=type1||'p'
      if(!flag){
        return;
      }
      flag=false;
      if(type1=='p'){
        next1=n1+1;
         if(next1>=imgs1.length){
           next1=0;
         }      
        imgs1[next1].style.left=width1+'px'
        animate(imgs1[n1],{left:-width1},600)
        animate(imgs1[next1],{left:0},600,Tween.Linear,function(){
          flag=true;
        })
         }else if(type1=='q'){
           next1=n1-1
     if(next1<0){
          next1=imgs1.length-1
     }
     imgs1[next1].style.left=-width1+'px'
     animate(imgs1[n1],{left:width1},600)
     animate(imgs1[next1],{left:0},600,Tween.Linear,function(){
          flag=true;
        })
   }
     for(var i=0;i<circleLi1.length;i++){
       circleLi1[i].style.background='#211616'
    }
    circleLi1[next1].style.background='#E5004F'
    n1=next1;
  } 
  right1.onclick=function(){
     move1('p');
}
  left1.onclick=function(){
       move1('q')
}
  te.onmouseover=function(){
     clearInterval(t1)
}
  te.onmouseout=function(){
     t1=setInterval(move1,2000)
}
for(var i=0;i<circleLi1.length;i++){
    circleLi1[i].index=i;
    circleLi1[i].onclick=function(){
      if(this.index>n1){
        if(!flag){
        return;
      }
        flag=false;
    imgs1[this.index].style.left=width1+'px'
    animate(imgs1[n1],{left:-width1},600)
    animate(imgs1[this.index],{left:0},600,Tween.Linear,function(){
          flag=true;
        })
     }else if(this.index<n1){
     imgs1[this.index].style.left=-width1+'px'
     animate(imgs1[n1],{left:width1},600)
     animate(imgs1[this.index],{left:0},600,Tween.Linear,function(){
          flag=true;
        })
      }
     for(var i=0;i<circleLi1.length;i++){
       circleLi1[i].style.background='#211616'
    }
    circleLi1[this.index].style.background='#E5004F'
      n1=this.index;
      next1=this.index
    }
  }
}
twenthright($('.twenthright') [0])











//跳楼
function tiaolou(tiaolou2,tiaolou3,tiaolou4,tiaolou5,tiaolou6){
      
      var  floor_nav=tiaolou2
      var floor_lis=tiaolou3
      var floor=tiaolou4
      var  floor_nav1=tiaolou5
      var floor_lis1=tiaolou6
      var now
      var flag=true
      var flag1=true
      var CHeight=document.documentElement.clientHeight
      
      for(var i=0;i<floor.length;i++){
        floor[i].h=floor[i].offsetTop;
      }
      window.onscroll=function(){
        var obj=document.body.scrollTop? document.body:document.documentElement;
        var top=obj.scrollTop
        if(top>=floor[0].h-300){
          floor_nav.style.display='block';
          floor_nav1.style.display='none';
          var nHeight=floor_nav.offsetHeight;
      floor_nav.style.top=(CHeight-nHeight)/2+'px';
      floor_nav1.style.top=(CHeight-nHeight)/2+'px';
      if(flag){
        flag=false
      }
         }else if(top<floor[0].h-300){
              floor_nav.style.display='none';
              floor_nav1.style.display='none';
              if(flag1){
                   flag1=false 
              }
              
          }
          
      
          for(var i=0;i<floor.length;i++){ 
          if(top>=floor[i].h-200){
            for(var j=0;j<floor_lis.length;j++){
              floor_lis[j].style.color="#000"
              floor_lis[j].style.display="block"
              
              
            }    
              floor_lis[i].style.color="rgba(0,0,0,0)"
              now=i
          }
      }
      for(var i=0;i<floor.length;i++){ 
          if(top>=floor[i].h-200){
            for(var j=0;j<floor_lis1.length;j++){
              floor_lis1[j].style.color="rgba(0,0,0,0)"
              floor_lis1[j].style.display="block"
              floor_nav1.style.display='block';
              floor_lis1[j].style.background="rgba(0,0,0,0)"
              
              
            }    
              floor_lis1[i].style.background="red"
              floor_lis1[i].style.color="#FFF"
              floor_lis1[i].style.display="block"
              now=i
          }
      }
      
      }
      for(var i=0;i<floor_lis.length;i++){
        floor_lis1[i].index=i;
        floor_lis1[i].onclick=function(){
           animate(document.body,{scrollTop:floor[this.index].h})
            animate(document.documentElement,{scrollTop:floor[this.index].h})
            now=this.index
        }
        floor_lis1[i].onmouseover=function(){
            // this.style.color='red'
            this.style.background="red"
              this.style.color="#FFF"
              this.style.display="block"
        }
        floor_lis1[i].onmouseout=function(){
            if(this.index==now){
                return
            }
            this.style.color="rgba(0,0,0,0)"
              this.style.display="block"
             
              this.style.background="rgba(0,0,0,0)"

        }
      }
}
tiaolou($('.floor-nav')[0],$('.floor-lis'),$('.floor'),$('.floor-nav1')[0],$('.floor-lis1'))











function fudong(fudong){
  var leftimg1=fudong
hover(leftimg1,function(){

       animate(leftimg1,{right:30},500)
             
        },function(){
              animate(leftimg1,{right:20},500)
        }) 

}
fudong($(".leftimg1")[0])




function fudong1(fudong1){
  var leftimg2=fudong1
hover(leftimg2,function(){

       animate(leftimg2,{left:-3},500)
             
        },function(){
              animate(leftimg2,{left:15},500)
        }) 

}






fudong1($(".leftimg1")[1])
fudong1($(".leftimg1")[2])
fudong1($(".leftimg1")[3])
fudong1($(".leftimg1")[4])

fudong1($(".leftimg1")[5])
fudong1($(".leftimg1")[6])


























var lowpricebottomright=$('.lowpricebottomright')[0]


var lowz=$('.lowz')[0]

var lowpricebottomright1=$('.lowpricebottomright1')

var flag1='duiw'
var width1=parseInt(getStyle(lowpricebottomright1[0],'width'))

var t1=setInterval(move1,2000)
function move1(){
      if(!flag1){
        return;
      }
      flag1=false;
    animate(lowz,{top:-140},function(){
    var imgFirst=getFirst(lowz)
    lowz.appendChild(imgFirst)
    lowz.style.top='0'
    flag1='duiw';
  })
}
lowpricebottomright.onmouseover=function(){
  clearInterval(t1)
}
lowpricebottomright.onmouseout=function(){
  t1=setInterval(move1,2000)
}










function fix(fix1,fix1l){
  var fix1=fix1
  var fix1l=fix1l
  hover(fix1,function(){
      fix1.style.backgroundColor='#C81623'
      fix1l.style.backgroundColor='#C81623'
      fix1l.style.display='block'
      animate(fix1l,{right:35},500)
  },function(){
      fix1.style.backgroundColor='#7A6E6E'
      fix1l.style.backgroundColor='#7A6E6E'
      animate(fix1l,{right:-27},500)
  })
}
fix($(".fix1")[0],$(".fix1l")[0])
fix($(".fix2")[0],$(".fix2l")[0])
fix($(".fix3")[0],$(".fix3l")[0])
fix($(".fix4")[0],$(".fix4l")[0])
fix($(".fix5")[0],$(".fix5l")[0])
fix($(".fix6")[0],$(".fix6l")[0])
fix($(".fix7")[0],$(".fix7l")[0])
fix($(".fix8")[0],$(".fix8l")[0])



































































}