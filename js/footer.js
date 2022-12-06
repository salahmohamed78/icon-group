//يسم الله
//
//
//
//

let iconGroup = {
  number: "+2-010-3200-2004",
  email: "info@displayicon.com",
  fb: false,
  instagram: false,
};

let display = {
  number: "+2-010-3200-2004",
  email: "info@displayicon.com",
  fb: "https://www.facebook.com/DisplayIcon",
  instagram: "https://www.instagram.com/displayicon",
};

let decor = {
  number: "+2-010-3200-2004",
  email: "info@displayicon.com",
  fb: "https://www.facebook.com/Decoriconstudio",
  instagram: "https://www.instagram.com/decoriconstudio/",
};

let metal = {
  number: "+2-010-1021-0258",
  email: "info@displayicon.com",
  fb: "https://www.facebook.com/MetalIconEG",
  instagram: false,
};

let wood = {
  number: "+2-011-0000-9305",
  email: "info@displayicon.com",
  fb: "https://www.facebook.com/Woodicon.egy/",
  instagram: false,
};

let mep = {
  number: "+2-011-1116-8078",
  email: "info@displayicon.com",
  fb: "https://www.facebook.com/MEPicon",
  instagram: false,
};

let footerObject;

let pageTitle = document.title;

switch (pageTitle) {
  case "ICON GROUP":
    footerObject = iconGroup;
    break;

  case "DISPLAY ICON":
    footerObject = display;
    break;
  case "DECOR ICON":
    footerObject = decor;
    break;
  case "METAL ICON":
    footerObject = metal;
    break;
  case "WOOD ICON":
    footerObject = wood;
    break;
  case "MEP ICON":
    footerObject = mep;
    break;
}

//
//

function generateFooterContent(footerObject) {
  text = `<a href="tel:00201032002004">${footerObject.number}</a>`;
  //
  text += `<div class="footer__btns">`;
  //
  if (footerObject.instagram) {
    text += `<a href = "${footerObject.instagram}" target="_blank class="insta--desktop" " > INSTA </a> `;
  }
  //
  text += `<a href="/contact/index.html" target="_blank">Contact</a>`;
  if (footerObject.fb) {
    text += `<a href = "${footerObject.fb}" target="_blank" class="fb--desktop" > FB </a> `;
  }
  //
  text += ` </div>`;
  //
  text += `<a href="mailto:info@displayicon.com">${footerObject.email}</a>`;
  //
  if (footerObject.fb) {
    text += `<a href = "${footerObject.fb}" target="_blank" class="fb--mobile"> FB </a> `;
  }
  //
  if (footerObject.instagram) {
    text += `<a href = "${footerObject.instagram}" target="_blank" class="insta--mobile"> INSTA </a> `;
  }
  //
  return text;
}

let footerContent = generateFooterContent(footerObject);

//
const body = document.querySelector("body");
let footer = document.createElement("footer");

footer.classList.add("footer");
footer.innerHTML = footerContent;

body.appendChild(footer);
