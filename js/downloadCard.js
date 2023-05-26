let downloadBtn = document.querySelector("#download");
let card = document.querySelector(".card_outline");
let downloadName = document.querySelector(".card_name").innerHTML;

downloadBtn.addEventListener("click", function() {
    html2canvas(card).then(function(canvas) {
        saveAs(canvas.toDataURL(), downloadName);
    });
});


function saveAs(uri, filename) {
    let link = document.createElement("a");
    
    if (typeof link.download === "string") {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } 
    else 
    {
        window.open(uri);
    }
}