export default function Header() {
  const gIClass = "material-symbols-outlined";

  return (
    <header id="header">
      <h1 id="header-title">Saka Restaurant</h1>
      <div id="header-btns">
        <button id="cart">
          <span class={gIClass}>shopping_cart</span>
          <span>Card</span>
        </button>

        <button id="Dark-Light-mode-btn">
          <span className={gIClass}>dark_mode</span>
        </button>
      </div>
    </header>
  );
}
