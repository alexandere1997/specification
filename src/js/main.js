let menu = () => {
    const header__menu = document.querySelector(".header__menu"),
          header__inner = document.querySelector(".header__inner"),
          header__btn = document.querySelector(".header__btn"),
          bodyHTMl = document.querySelector("body");
    header__menu.addEventListener("click", () => {
        header__inner.classList.toggle("active__menu");
        header__btn.classList.toggle("active");
        bodyHTMl.classList.toggle("active__scroll")
    })
}

menu();

let modals = () => {
    const content__modals = document.querySelector(".content__modals"),
          content__close = document.querySelector(".content__close"),
          content__btn = document.querySelector(".content__btn");
    content__btn.addEventListener("click", (e) => {
        e.preventDefault();
        content__modals.classList.add("active__modal");
    })
    content__close.addEventListener("click", () => {
        content__modals.classList.remove("active__modal");
    })
}
modals();