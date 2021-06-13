import $ from 'jquery'
$(function () {
    /* 更多导航栏效果 */
    var num = true
    $('.fixednav').click(function () {
        if (num) {
            $('.morebox').fadeIn()
            num = false
            setTimeout(function () {
                $('.morebox-nr').css('right', '0px')
            }, 200)
            $('.morebox').css('background-color', 'rgba(0, 0, 0, .5)')
        } else {
            num = true
            $('.morebox').css('background-color', 'rgba(0, 0, 0, 0)')
            setTimeout(function () {
                $('.morebox-nr').css('right', '-450px')
                $('.morebox').fadeOut()
            }, 200)
        }
    })
    $('.morebox-nr li').click(function () {
        $('.morebox').css('background-color', 'rgba(0, 0, 0, 0)')
        setTimeout(function () {
            $('.morebox-nr').css('right', '-450px')
            $('.morebox').fadeOut()
        }, 200)
    })
    /* 微信咨询 */
    $('.wxconsult').click(function () {
        $('.wxconsultapp').fadeIn()
    })
    $('.wxconsultapp').click(function () {
        $('.wxconsultapp').fadeOut()
    })
    /* 返回顶部 */
    $('.returntop').click(function () {
        animate(window, 0)
    })
    function animate (obj, target) {
        clearInterval(obj.timer)
        obj.timer = setInterval(function() {
            var step = (target - obj.pageYOffset) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            if (obj.pageYOffset === target) {
                clearInterval(obj.timer)
            } else {
                obj.scroll(0, obj.pageYOffset + step)
            }
        }, 50)
    }
    /* 页面滚动监听 */
    window.onscroll = function () {
        // console.log(document.documentElement.scrollTop)
        /* 点击返回顶部 */
        if (document.documentElement.scrollTop >= 0) {
            $('.ambient').addClass('anim')
            $('.returntop').show()
        } else {
            $('.returntop').hide()
        }
        /* 监听 */
        if (document.documentElement.scrollTop >= 100) {
            $('.environment').addClass('anim')
        }
        if (document.documentElement.scrollTop >= 1600) {
            $('.activity').addClass('anim')
        }
        if (document.documentElement.scrollTop >= 2000) {
            $('.model').addClass('anim')
        }
        if (document.documentElement.scrollTop >= 3100) {
            $('.news').addClass('anim')
        }
    }
    /* 点击放大图片 */
    $('.modelshows .present .image').click(function () {
        $('.present-img').fadeIn()
    })
    $('.present-img').click(function () {
        $('.present-img').fadeOut()
    })
})
