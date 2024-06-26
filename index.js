function handleFiles(event) {
    var files = event.target.files;
    $("#src").attr("src", URL.createObjectURL(files[0]));
    document.getElementById("audio").load();
}

const submit = document.getElementById("submit")
const clear = document.getElementById("clearline")
const track = document.getElementById("audio")
const lyricsfinal = document.getElementById("lyricsfinal")
const lyricsdownload = document.getElementById("lyricsdownload")
const lyricsinput = document.getElementById("lyricsinput")



submit.onclick = function (){
    
    console.log(Math.floor(track.currentTime).toString())
    var timestamp = Math.floor(track.currentTime);

    // 2
    var hours = Math.floor(timestamp / 60 / 60);

    // 37
    var minutes = Math.floor(timestamp / 60) - (hours * 60);

    // 42
    var seconds = timestamp % 60;

    var formatted = "[" + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + ".00" + "]" + lyricsinput.value;

    
    console.log(formatted);
    lyricsfinal.innerHTML += "<br>" + formatted
    lyricsdownload.innerHTML += "\n" + formatted
}

document.getElementById("upload").addEventListener("change", handleFiles, false);






document.getElementById("downloadlink").onclick = function () {
    alert('download')
    let filename = "lyrics.lrc"
    let mimeType = "text/plain"
    let elId = "lyricsdownload"
    var elHtml = document.getElementById(elId).innerHTML;

    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click(); 
}
