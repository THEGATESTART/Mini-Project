const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerHTML = sound

    btn.addEventListener('click', () => {
        stopSong()

        document.getElementById(sound).play()
    });

    document.getElementById('buttons').appendChild(btn)

})

// reset song when click another song is same time
function stopSong() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        //set time audio to start audio
        song.currentTime = 0;
    })
}