document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        'with EZSports',
        'efficiently',
        'with ease',
        'faster',
    ];
    let textIndex = 0;

    const el = document.getElementById('typed-text');

    const typed = new Typed(el, {
        strings: texts,
        typeSpeed: 60,
        backSpeed: 60,
        onComplete: function(self) {
            setTimeout(() => {
                textIndex = (textIndex + 1) % texts.length;
                self.reset();
                self.options.strings = [texts[textIndex]];
                self.start();
            }, 2000);
        },
    });

    // let work_content = document.getElementById('work-content');
    // work_content.innerHTML = `<p class="mx-7 text-lg text-wrap md:text-2xl md:mx- sm:text-xl lg:mx-32"> At EZSports, we specialize in meticulously managing sporting events from start to finish, ensuring seamless experiences for athletes, organizers, and spectators alike. From logistics to coordination, our team delivers unparalleled efficiency, leaving you free to focus on the thrill of the game while we handle the rest.</p>`

    const manager_dashboard_video = document.getElementById('manager-dashboard-video')

    manager_dashboard_video.addEventListener('mouseenter', function(){
        manager_dashboard_video.controls = true
        manager_dashboard_video.play()
    })

    manager_dashboard_video.addEventListener('mouseleave', function(){
        manager_dashboard_video.controls = false
        manager_dashboard_video.pause()
    })
});
