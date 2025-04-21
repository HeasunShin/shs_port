$(document).ready(function(){
    //Eyes
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-1VDDWMRSTH');

try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
        return true;
    }).catch(function(e) {
        var carbonScript = document.createElement("script");
        carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
        carbonScript.id = "_carbonads_js";
        document.getElementById("carbon-block").appendChild(carbonScript);
    });
    } catch (error) {
    console.log(error);
    }












const retina = $(".eye-retina");
const button = $(".eyes");

$(document).mousemove((e) => {
    e = e || window.event;

    //Offset of button from document
    const rect = button[0].getBoundingClientRect();
    const offsetLeft = rect.left + window.pageXOffset;
    const offsetTop = rect.top + window.pageYOffset;

    //Position of cursor in pixel
    const pageX = e.pageX;
    const pageY = e.pageY;

    //Cursor left position relative to button
    let left = (pageX - offsetLeft) / rect.width * 100;

    //Cursor top position relative to button
    let top = (pageY - offsetTop) / rect.height * 100;

    //Prevent the eye from getting hidden at the left and right end.
    left = left < 25 ? 25 : left;
    left = left > 75 ? 75 : left;

    //Prevent the eye from getting hidden at the top and bottom end.
    top = top < 25 ? 25 : top;
    top = top > 75 ? 75 : top;

    //Move the eye
    retina.each((i, f) => {
        //If the cursor is in center of both the eyes the keep the eye in center
        f.style.left = `${left > 45 && left < 55 ? 50 : left}%`;
        f.style.top = `${top > 45 && top < 55 ? 50 : top}%`;
    });
});
        



})  //끝


