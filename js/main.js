{
    const btn = document.querySelector('.btn-menu');
    const nav = document.querySelector('.sp_nav');

    btn.addEventListener('click', () => {
        nav.classList.toggle('open-menu')
        if (btn.innerHTML === 'メニュー') {
            btn.innerHTML = '閉じる';
        } else {
            btn.innerHTML = 'メニュー';
        }
    });
}

{
    document.addEventListener('DOMContentLoaded', function () {
        //交差を監視する IntersectionObserver
    const els = document.querySelectorAll('.animate-title');
    const cb = function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const ta = new TextAnimation('.animate-title');
                ta.animate();
                observer.unobserve(entry.target);
                //入ったとき
                console.log('入りました');

                //画面に入ったタイミングでinviewをつける targinにDOMがある
                entry.target.classList.add('inview');

                // 入ったタイミングで監視をやめる　
                observer.unobserve(entry.target);
            } else {
            }
        });
        // alert('intersecting');
    }

    const options = {
    //root:交差対象の親要素を設定
        root: null,
        rootMargin: "0px",
        threshold: [0]
    };

    //初期化
    const io = new IntersectionObserver(cb, options);
    els.forEach( el => io.observe(el));
    });
}

{
    document.addEventListener('DOMContentLoaded', function () {

        const cb = function (el, isIntersecting) {
            if(isIntersecting) {
                el.classList.add('inview');
            }
        }
    });
}