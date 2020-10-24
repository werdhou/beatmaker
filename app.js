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
});

drumKit.muteBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        drumKit.mute(e);
    })
});

drumKit.tempoSlider.addEventListener("input", e => {
    drumKit.changeTempo(e);
})
drumKit.tempoSlider.addEventListener("change", e => {
    drumKit.changeTempo(e);
})