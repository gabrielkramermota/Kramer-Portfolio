const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");
menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
});
new TypeIt(".name-title", { strings: "", speed: 75, loop: !1 }).go();
new TypeIt("#asyncExec", { waitUntilVisible: !0 })
  .type("Frontend")
  .exec(async () => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve();
      }, 2500);
    });
  })
  .type(" Developer")
  .go();
