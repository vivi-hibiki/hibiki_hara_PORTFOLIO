$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.global_nav').addClass('active');
        } else {
            $('.global_nav').removeClass('active');
        } 
        $("active").css({
            'opacity':'1',
            'transition' :'0.5s'
            });
        
    });
});
//メニュー内を閉じておく
$(function() {
    $('.global_nav a[href]').click(function() {
        $('.global_nav').removeClass('active');
       $('.hamburger').removeClass('active');
       $("active").css({
        'opacity':'0',
        'transition' :'0.5s'
        });
       
    });
  });

  $(".slide-items").slick({
    autoplay: true, // 自動再生
    centerMode: true,// 前後スライドを部分表示
    centerPadding: '20%',// 両端の見切れるスライド幅
    speed: 100,
  });
  $(".slide-items2").slick({
    autoplay: true, // 自動再生
    centerMode: true,// 前後スライドを部分表示
    centerPadding: '20%',// 両端の見切れるスライド幅
    speed: 100,
  });



$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

gsap.to(".sk-circle", {
  xPercent: 100,
  duration: 2,
  // repeat: -1, // 無限に繰り返し
  // repeatDelay: 0.5, // 繰り返し時に0.5秒の待機,
  yoyo: true, // 反転
});

const tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });


$(window).on('load',function(){
  // $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
  
  // //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  // $("#splash").delay(1000).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
  
  // $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  
  // });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  tl.to('#splash', {
    opacity:1, duration:1.2
  }).to('#splash', {
    opacity:0,
    display:"none"
  }).add(() => {
    $('body').addClass('appear')
  })
    .to(".splashbg1", {
    opacity: 1, x: 0,duration: 0.7
  })
  .to(".splashbg1", {
    opacity: 0,duration: 1
  })
 .to(".splashbg1", {
    x:-2000,
  })
  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は

  //=====ここまで背景が伸びた後に動かしたいJSをまとめる
  
  });
  
  window.addEventListener('load', function() {
    var animation = bodymovin.loadAnimation({ 
     container: document.getElementById('animation'), renderer: 'svg', loop: true, autoplay: true, 
     path: src="https://lottie.host/724bd320-6d9b-4938-abde-47918b577321/um7l2VeUhv.json" }); }); 


 

  // const tl2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".skill_icon", // .trigger(グレー背景の箇所)が領域に入ったらアニメーションする
  //     start: "center center", // .triggerの中央が、画面下部に達したら開始
  //     end: "center top", // .triggerの中央が、画面上部に達したら終了
  //     scrub: true, // .trigger内でのY方向を固定をする
  //     markers: true // アニメーションの開始と終了位置を表示する
  //   }
  // });
  
  // /* 以下、Timelineの形式でTweenが記述されている */
  // tl2.to(".skill_bar", {width: 500, duration: 3})



  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about", // .trigger(グレー背景の箇所)が領域に入ったらアニメーションする
      start: "center center", // .triggerの中央が、画面下部に達したら開始
      end: "center top", // .triggerの中央が、画面上部に達したら終了
      scrub: true, // .trigger内でのY方向を固定をする
      // markers: true // アニメーションの開始と終了位置を表示する
    }
  });
  
  /* 以下、Timelineの形式でTweenが記述されている */
  tl3.to(".left_bird", {
    rotation: 180, //回転。rotationXとrotationYも指定できる
     duration:20
 
  })
  tl3.to(".left_bird", {
    y: 500, //横に500px動かす
    duration:800

  })



  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".work", // .trigger(グレー背景の箇所)が領域に入ったらアニメーションする
      start: "center center", // .triggerの中央が、画面下部に達したら開始
      end: "center top", // .triggerの中央が、画面上部に達したら終了
      scrub: true, // .trigger内でのY方向を固定をする
      // markers: true // アニメーションの開始と終了位置を表示する
    }
  });
  
  /* 以下、Timelineの形式でTweenが記述されている */
  tl4.to(".work_right_bird ", {
    rotation: 180, //回転。rotationXとrotationYも指定できる
     duration:20
 
  })
  tl4.to(".work_right_bird ", {
    rotation: 180, //回転。rotationXとrotationYも指定できる
    y: 500, //横に500px動かす
    duration:100

  })



  $(function () {
    ScrollReveal().reveal('.top', {
      delay: 300, // アニメーション開始までの時間
      duration: 3000, // アニメーション完了にかかる時間
      origin: 'top', // 要素がどの方向から来るか
      distance: '50px', // 移動する距離
      reset: true // フレームインの度に動かすか
    });
    });

    $(function () {
      ScrollReveal().reveal('.small', {
        delay: 300, // アニメーション開始までの時間
        duration: 1600, // アニメーション完了にかかる時間
        scale: 2, // 表示前のサイズ 2　なら 2倍
        reset: true // フレームインの度に動かすか
      });
      });



      window.addEventListener("DOMContentLoaded", () => {
        // モーダルを取得
        const modal = document.getElementById("modal");
        // モーダルを表示するボタンを全て取得
        const openModalBtns = document.querySelectorAll(".js-open-modal");
        // モーダルを閉じるボタンを全て取得
        const closeModalBtns = document.querySelectorAll(".js-close-modal");
      
  // Swiperの設定
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
  });
        // モーダルを表示するボタンをクリックしたとき
        openModalBtns.forEach((openModalBtn) => {
          openModalBtn.addEventListener("click", () => {
            // data-slide-indexに設定したスライド番号を取得
            const modalIndex = openModalBtn.dataset.slideIndex;
            swiper.slideTo(modalIndex);
            modal.classList.add("is-active");
          });
        });
      
        // モーダルを閉じるボタンをクリックしたとき
        closeModalBtns.forEach((closeModalBtn) => {
          closeModalBtn.addEventListener("click", () => {
            modal.classList.remove("is-active");
          });
        });
      });


      
$(function() {
 
  //マウスを乗せたら発動
  $('.button1').click(function() {
 
          $(".web").css('opacity', '1')
          $('.web').css('transition', '0.5s')

          $(".banner").css('opacity', '1')
          $('.banner').css('transition', '0.5s')

          $(".lp").css('opacity', '1')
          $('.lp').css('transition', '0.5s')  
          $(".all").css('opacity', '1')
          $('.all').css('transition', '0.5s')

  
  });

  $('.button2').click(function() {
 
    $(".web").css('opacity', '1')
    $('.web').css('transition', '0.5s')

    $(".banner").css('opacity', '0.3')
    $('.banner').css('transition', '0.5s')

    $(".lp").css('opacity', '0.3')
    $('.lp').css('transition', '0.5s')
    $(".all").css('opacity', '0.3')
    $('.all').css('transition', '0.5s')
                  
  
    });

    
  $('.button3').click(function() {
 
    $(".web").css('opacity', '0.3')
    $('.web').css('transition', '0.5s')

    $(".banner").css('opacity', '1')
    $('.banner').css('transition', '0.5s')

    $(".lp").css('opacity', '0.3')
    $('.lp').css('transition', '0.5s')
    $(".all").css('opacity', '0.3')
    $('.all').css('transition', '0.5s')
    });

    $('.button4').click(function() {
 
      $(".web").css('opacity', '0.3')
      $('.web').css('transition', '0.5s')
  
      $(".banner").css('opacity', '0.3')
      $('.banner').css('transition', '0.5s')
  
      $(".lp").css('opacity', '1')
      $('.lp').css('transition', '0.5s')
      $(".all").css('opacity', '0.3')
      $('.all').css('transition', '0.5s')

  
    });
});
