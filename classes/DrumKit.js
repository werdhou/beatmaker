class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.playBtn = document.querySelector(".play")
        this.currentSnare = './allSounds/allSounds/snare-acoustic01.wav'
        this.currentSnare = './allSounds/allSounds/hihat-acoustic01.wav'
        this.currentHihat = './allSounds/allSounds/kick-classic.wav'
        this.kickAudio = document.querySelector(".kick-sound");
        this.snareAudio = document.querySelector(".snare-sound");
        this.hihatAudio = document.querySelector(".hihat-sound");
        this.index = 0;
        this.bpm = 150;
        this.isPlaying = null;
        this.selects = document.querySelectorAll("select")
    }
    activePad() {
        this.classList.toggle("active")
    }

    repeat() {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`)
        //loop over the pads
        activeBars.forEach(bar => {
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
          //Check if pads active
            if (bar.classList.contains('active')) {
                if(bar.classList.contains('kick-pad')) {
                    this.kickAudio.currentTime = 0;
                    this.kickAudio.play();
                }
                if(bar.classList.contains('snare-pad')) {
                    this.snareAudio.currentTime = 0;
                    this.snareAudio.play();
                }
                if(bar.classList.contains('hihat-pad')) {
                    this.hihatAudio.currentTime = 0;
                    this.hihatAudio.play();
                }
                
            }
        })
        this.index++
    }
    start() {
        const interval = (60/this.bpm) * 1000;
        if(this.isPlaying){
             //clear interval
            clearInterval(this.isPlaying);
            this.isPlaying = null;
;
        } else {
            this.isPlaying = setInterval(() => {
            this.repeat()
            }, interval)
        }
    }
    updateBtn() {
        //NULL
        if(!this.isPlaying) {
            this.playBtn.innerText = "STOP";
            this.playBtn.classList.add('active')
        } else {
            {
                this.playBtn.innerText = "PLAY";
                this.playBtn.classList.remove('active')
            }
        }
    }

    changeSound(e) {
        const selectionName = e.target.name;
        const selectionValue = e.target.value;
        switch(selectionName) {
            case "kick-select":            
                this.kickAudio.src = selectionValue;
                break;
            case "snare-select":
                this.snareAudio.src = selectionValue;
                break;
            case "hihat-select":
                this.hihatAudio.src = selectionValue;
                break;    
        }

    }
}