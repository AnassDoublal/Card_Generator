let inputs = document.querySelectorAll("input");

var imagePath = "";
let data = "";

function readImage()
{
    const file = inputs[1].files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        imagePath = reader.result;
        data = sessionStorage.setItem("key", imagePath);
    };
}