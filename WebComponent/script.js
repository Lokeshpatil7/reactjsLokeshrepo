class UserDetail extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "This is our first webComponent";
  }
}

window.customElements.define("user-detail", UserDetail);
