function decimal(times){
  let m = 0;
  for (let i = 1; i <= times; ++i) {

    if ((times % i) == 0)
      ++m;
  }
  return m;
}

for(let a=2; a<10; ++a)
  for(let i = 1; i<10; ++i)
  {
    let c = a*i;

    if(c%2==0){
      if(a%2==0){
        if(decimal(i)==2){
          $("body").append(`<div class="even_c even_dan decimal"><span class="dan">${a}</span>*<span class="times">${i}</span> = <span class="gop">${c}</span></div>`);
        }
        else{
          $("body").append(`<div class="even_c even_dan"><span class="dan">${a}</span>*<span class="times">${i}</span> = <span class="gop">${c}</span></div>`);
        }
      }
      else{
        if(decimal(i)==2){
          $("body").append(`<div class="even_c odd_dan decimal"><span class="dan">${a}</span>*<span class="times">${i}</span> = <span class="gop">${c}</span></div>`);
        }
        else{
          $("body").append(`<div class="even_c odd_dan"><span class="dan">${a}</span>*<span class="times">${i}</span> = <span class="gop">${c}</span></div>`);
        }
      }
    }
    else{
      if(a%2==0){
        if(decimal(i)==2){
          $("body").append(`<div class="odd_c even_dan decimal"><span class="dan">${a}</span>*<span class="times">${i}</span> = <span class="gop">${c}</span></div>`);
        }
        else{
          $("body").append(`<div class="odd_c even_dan"><span class="dan">${a}</span>*<span class="times">${i}</span> = <span class="gop">${c}</span></div>`);
        }
      }
      else{
        if(decimal(i)==2){
          $("body").append(`<div class="odd_c odd_dan decimal"><span class="dan">${a}</span>*<span class="times">${i}</span> = <span class="gop">${c}</span></div>`);
        }
        else{
          $("body").append(`<div class="odd_c odd_dan"><span class="dan">${a}</span>*<span class="times">${i}</span> = <span class="gop">${c}</span></div>`);
        }
      }
    }
  }

$(".even_c").css("color","red");
$(".odd_c").css("color","blue");
$(".even_dan").css("background-color","yellow");
$(".odd_dan").css("background-color","green");
$(".decimal").css("font-size","18px");
/* c가 짝수면 빨강, 홀수면 파랑
dan이 짝수면 노랑배경, 홀수면 초록배경
그리고 times가 소수인것만 글자크기를 크게*/

/*for(let a=2; a<10; ++a)
  for(let i = 1; i<10; ++i)
  {
    let c = a*i;

    if(a%2==0){
      $("body").append(`<div class="even"><span class="dan">${a}</span>*<span class="times">${i}</span> = <span class="gop">${c}</span></div>`);
    }
    else
    {
      $("body").append(`<div class="odd"><span class="dan">${a}</span>*<span class="times">${i}</span> = <span class="gop">${c}</span></div>`);
    }
  }

$(".even").css("color","blue");

$(".odd").css("color","red");*/
