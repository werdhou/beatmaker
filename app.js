const drumKit = new DrumKit();

//event listeners


drumKit.pads.forEach(pad => {
    pad.addEventListener('click', drumKit.activePad)
    pad.addEventListener('animationend', function() {
        this.style.animation = ""
    })
});

drumKit.playBtn.addEventListener('click', function(){
    drumKit.updateBtn();
    drumKit.start();
});

drumKit.selects.forEach(select => {
    select.addEventListener('change', function(e) {
        drumKit.changeSound(e)
    })
})