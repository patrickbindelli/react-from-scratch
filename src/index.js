import _ from "lodash";
import image from "../public/praia.jpg";
import "./style.css";

function component() {
  const element = document.createElement("div");
  element.classList.add("classe");
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

function imagem() {
  const element = document.createElement("img");

  element.src = image;

  return element;
}

document.body.appendChild(component());
document.body.appendChild(imagem());
