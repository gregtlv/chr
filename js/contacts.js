function showEmail () {
  coded = "i6K8.V6NBV6XOO@ploXO.VKl";
  key = "LJZTuyf25K7Gvb1qphXOkQWarjcENC9zsmnxeMwF86tI34UoBDVYd0gHilPRSA";
  shift=coded.length;
  link="";
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i);
      link += (ltr);
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
      envelope = "<i class='fas fa-envelope'></i>";
      mailDesktop =  "<span class='phoneDesktop'>&nbsp&nbsp&nbsp"+link+"</span>";
    }
  }
document.write("<span class='about_contact__item'><a href='mailto:"+link+"'>"+envelope+mailDesktop+"</a></span>");
}


function showNumber () {
  coded = "+1 fEL Z1L-ZE-DD";
  key = "UVEmbzsKtGALOYkanXHN7xhy09PjCuiIrMog15q3cfvpe8BJ2wd4TWQZR6FSlD";
  shift=coded.length;
  link="";
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i);
      link += (ltr);
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
      phone = "<i class='fas fa-phone-square'></i>";
      phoneDesktop = "<span class='phoneDesktop'>&nbsp&nbsp&nbsp"+link+"</span>";
    }
  }
document.write("<span class='about_contact__item'><a href='tel:"+link+"'>"+phone+phoneDesktop+"</a></span>");
}

function showWhatsApp() {
  coded = "tH3NFtNF3kk";
  key = "UondHISu5L2YjA80gEezJ3XhaksiwDqZFOCKp7fPm1bRW4rvt6GVcBl9yQTMNx";
  shift=coded.length;
  link="";
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i);
      link += (ltr);
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
      whatsapp = "<i class='fab fa-whatsapp-square'></i>";
      whatsappPrefix = "http://api.whatsapp.com/send?phone=";
      whatsappPostPrefix = "&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!";
    }
  }
document.write("<span class='whatsapp__mobile about_contact__item'><a href='"+whatsappPrefix+link+whatsappPostPrefix+"'>"+whatsapp+"</a></span>");
}
