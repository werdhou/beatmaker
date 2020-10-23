const drumKit = new DrumKit();

drumKit.pads.forEach(pad => {
    pad.addEventListener('click', drumKit.activePad)
    pad.addEventListener('animationend', function() {
        this.style.animation = ""
    })
});

drumKit.playBtn.addEventListener('click', function(){
    drumKit.start();
});