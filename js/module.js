window.onload = function() {
    // 秒杀倒计时
    let time = document.querySelector('.time')
    let h = time.children[0]
    let m = time.children[1]
    let s = time.children[2]
    let h1,h2,h3=0

    let latest = new Date('2022-07-03 14:00:00')
    let now = new Date()
    let sub = 0;

    setInterval(()=>{
        now = new Date()
        sub = latest-now
        h1 = parseInt(sub/1000/3600)
        m1 = parseInt(sub/1000%3600/60)
        s1 = parseInt(sub/1000%3600%60)
        h1 = h1<10? '0'+h1:h1
        m1 = m1<10? '0'+m1:m1
        s1 = s1<10? '0'+s1:s1

        h.innerHTML = h1
        m.innerHTML = m1
        s.innerHTML = s1
    },1000)


    // 轮播图
    let arrowL = document.querySelector('.banner .arrow .left')
    let arrowR = document.querySelector('.banner .arrow .right')
    let imgs = document.querySelector('.banner .img-list')
    let imgWidth = imgs.children[0].offsetWidth
    let index = 0;
    let rounds = document.querySelector('.banner .round').children
    

    arrowL.onclick = function() {
        index--
        if(index < 0) {
            index = imgs.children.length - 1 
        }
        imgs.style.left = `-${index*imgWidth}px`
        
        // 处理轮播图小圆圈
        // 排他
        for(let i = 0; i < rounds.length; i++) {
            rounds[i].className = ''
        }
        rounds[index].className = 'active'
    }

    arrowR.onclick = function() {
        index++
        if(index > imgs.children.length - 1) {
            index = 0 
        }
        imgs.style.left = `-${index*imgWidth}px`

         // 处理轮播图小圆圈
        // 排他
        for(let i = 0; i < rounds.length; i++) {
            rounds[i].className = ''
        }
        rounds[index].className = 'active'
    }

    // 自动定时切换
    let autochange = setInterval(()=>{
        index++
        if(index > imgs.children.length - 1) {
            index = 0 
        }
        imgs.style.left = `-${index*imgWidth}px`

         // 处理轮播图小圆圈
        // 排他
        for(let i = 0; i < rounds.length; i++) {
            rounds[i].className = ''
        }
        rounds[index].className = 'active'
    },2000)

    // 定时器的清除和重启
    document.querySelector('.banner').onmouseover = function() {
        clearInterval(autochange)
    }
    document.querySelector('.banner').onmouseout = function() {
        autochange = setInterval(()=>{
            index++
            if(index > imgs.children.length - 1) {
                index = 0 
            }
            imgs.style.left = `-${index*imgWidth}px`
    
             // 处理轮播图小圆圈
            // 排他
            for(let i = 0; i < rounds.length; i++) {
                rounds[i].className = ''
            }
            rounds[index].className = 'active'
        },2000)
    }


    // tab选项切换
    let fir = document.querySelector('.goods-list #first')
    let sec = document.querySelector('.goods-list #second')

    fir.onmouseover = () =>{
        fir.children[0].className = ''
        sec.children[0].className = ''
        fir.children[1].style.height = '0'
        sec.children[1].style.height = '0'

        fir.children[0].className = 'active'
        fir.children[1].style.height = '614px'
    }
    sec.onmouseover = () =>{
        fir.children[0].className = ''
        sec.children[0].className = ''
        fir.children[1].style.height = '0'
        sec.children[1].style.height = '0'

        sec.children[0].className = 'active'
        sec.children[1].style.height = '614px'
    }
}



