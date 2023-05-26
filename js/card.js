const queryString = document.location.search;
const urlParams = new URLSearchParams(queryString);

let raritySpan = document.querySelector("#raritySpan");
raritySpan.innerHTML = urlParams.get("rarityType").toUpperCase();

let card_name = document.querySelector(".card_name");
let card_image = document.querySelector(".card_image");
let card_description = document.querySelector(".card_description");
let card_attack = document.querySelector(".card_attack_value");
let card_health = document.querySelector(".card_health_value");
let card_rarity = undefined;

let card_body = document.querySelector(".card_body");
let card_outline = document.querySelector(".card_outline");

let colors = {
    common: "#ffffff",
    uncommon: "#319236",
    rare: "#4c51f7",
    epic: "#9d4dbb",
    legendary: "#f3af19"
}

function generateCard()
{
    card_name.innerHTML = urlParams.get("name");
    card_image.src = sessionStorage.getItem("key");
    card_description.innerHTML = urlParams.get("description");
    card_attack.innerHTML = urlParams.get("strength");
    card_health.innerHTML = urlParams.get("health");

    card_rarity = urlParams.get("rarityType");

    switch(card_rarity){
        case "common":
            card_body.style.backgroundColor = colors.common;
            card_outline.style.backgroundColor = "#999";
            break;
        case "uncommon":
            card_body.style.backgroundColor = colors.uncommon;
            card_outline.style.backgroundColor = "#90ee90";
            raritySpan.style.color = colors.uncommon;
            break;
        case "rare":
            card_body.style.backgroundColor = colors.rare;
            card_outline.style.backgroundColor = "#ADD8E6";
            raritySpan.style.color = colors.rare;
            break;
        case "epic":
            card_body.style.backgroundColor = colors.epic;
            card_outline.style.backgroundColor = "#CBC3E3";
            raritySpan.style.color = colors.epic;
            break;
        case "legendary":
            card_body.style.backgroundColor = colors.legendary;
            card_outline.style.backgroundColor = "#FFD60A";
            raritySpan.style.color = colors.legendary;
            break;
        default:
            break;
    }
}

generateCard();