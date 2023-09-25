const imgJaimeElements = document.querySelectorAll("#imgJaime");
const textJaime = document.getElementsByClassName('textJaime');

for (let i =0; i<imgJaimeElements.length;i++){
    imgJaimeElements[i].addEventListener("click", function () {
        // Vérifiez l'actuelle source de l'image avec endswith//
        if (imgJaimeElements[i].src.endsWith("miniature_unlike.png")) {
            
            imgJaimeElements[i].src = "img/miniature_like.png";
            textJaime[i].style.color = 'blue';
        } else {
            
            imgJaimeElements[i].src = "img/miniature_unlike.png";
            textJaime[i].style.color = "black";
        };
    });
};
