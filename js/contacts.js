"use strict"

function showEmail (email, emailKey) {
  var coded, key, shift, link, i, ltr, envelope, mailDesktop;
  coded = email;
  key = emailKey;
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


function showNumber (num, numKey) {
  var coded, key, shift, link, i, ltr, phone, phoneDesktop;
  coded = num;
  key = numKey;
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

function showWhatsApp (whtspNum, whtspKey) {
  var coded, key, shift, link, i, ltr, whatsapp, whatsappPrefix, whatsappPostPrefix ;
  coded = whtspNum;
  key = whtspKey;
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
