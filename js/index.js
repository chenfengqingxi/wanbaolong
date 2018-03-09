$(function () {
    // let n = 0
    // let cir = $('.bannerbottom li')
    // let banner = $('.banner li')
    // let right = $('.jiantouright')
    // // console.log(right);
    // let left = $('.jiantouleft')
    //
    // function move() {
    //     n++
    //     if (n >= cir.length) {
    //         n = 0
    //     }
    //     banner.removeClass('active').eq(n).addClass('active')
    //     cir.removeClass('active').eq(n).addClass('active')
    // }
    // let t = setInterval(move, 1000)
    // $('.banner').mouseenter(function () {
    //     clearInterval(t)
    // })
    // $('banner').mouseleave(function () {
    //     t = setInterval(move, 1000)
    // })
    //
    //
    // right.click(function (e) {
    //     e.preventDefault();
    //     move()
    // })
    // left.click(function () {
    //     e.preventDefault();
    //     n--;
    //     if (n < 0) {
    //         n = cir.length - 1
    //     }
    //     banner.removeClass('active').eq(n).addClass('active')
    //     cir.removeClass('active').eq(n).addClass('active')
    //
    // })
    // $('.bannerbottom li').click(function () {
    //
    //     let a = $(this).index()
    //     banner.removeClass('active').eq(a).addClass('active')
    //     cirs.removeClass('active').eq(a).addClass('active')
    //     n = a
    // })

    let n=0;
    let lis=$('.banner li');
    let banner=$('.banner')
    let right=$('.jiantouright')
    let left=$('.jiantouleft')
    let cirs=$('.bannerbottom li')
    function move() {
        n++;
        if (n>=lis.length) {
            n=0;
        }
        lis.removeClass('active').eq(n).addClass('active')
        cirs.removeClass('active').eq(n).addClass('active')
    }
    let t=setInterval(move,5000)
    banner.mouseenter(function () {
        clearInterval(t)
    })
    banner.mouseleave(function () {
        t=setInterval(move,5000)
    })
  right.click(function () {
      move()
  })
    left.click(function () {

            n--;
            if (n < 0) {
                n = cirs.length - 1
            }
            lis.removeClass('active').eq(n).addClass('active')
            cirs.removeClass('active').eq(n).addClass('active')

        })

           cirs.click(function () {
            let a = $(this).index()
               console.log(a)
            lis.removeClass('active').eq(a).addClass('active')
            cirs.removeClass('active').eq(a).addClass('active')
            n = a
        })


    })

