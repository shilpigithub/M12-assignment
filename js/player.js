const $ = (id) => document.getElementById(id)
console.log($('favoriteAlbum').innerText)

class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

// var jbox = new Jukebox()
// const album1 = new Album('Operation Ivy', 'Energy')
// const album2 = new Album('Blink 182', 'Dude Ranch')
// const album3 = new Album('New Found Glory', 'Sticks and Stones')

// jbox.addAlbum(album1)
// jbox.addAlbum(album2)
// jbox.addAlbum(album3)

// album1.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album3.play()

// console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)

const albumList = new Jukebox()
const albums = $('albums')   
const btnPlay = $('btnPlay')
const showFav = $('showFav')
const favoriteAlbum = $('favoriteAlbum')

let jbox = [ ['Blink 182', 'Dammit'],
    ['Jawbreaker', 'Want'],
    ['New Found Glory', 'Hit or Miss'],
    ['Teen Idols', 'Backstabber'],
    ['Teenage Bottlerocket', 'On My Own']]
    
 
for(let i = 0; i < jbox.length; i++){

    albumList.addAlbum(new Album(jbox[i][0], jbox[i][1]))
    albums.add(new Option (jbox[i][0] + "/" + jbox[i][1]))
}

btnPlay.addEventListener('click', () => {
    let i = albums.selectedIndex
    //alert(albumList.albums[i].artist)
    albumList.albums[i].play()
    console.log(albumList.albums[i].display())
    
})

showFav.addEventListener('click' , () => {
    favoriteAlbum.innerHTML = albumList.favoriteAlbum()

})