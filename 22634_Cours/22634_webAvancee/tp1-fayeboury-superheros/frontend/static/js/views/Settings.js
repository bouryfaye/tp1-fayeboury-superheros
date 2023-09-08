import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

  constructor(params) {
    super(params); //Settings est un enfant de AbstractView , il doit donc avoir un "super" pour pouvoir hériter
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
            <section id="hero">
            <h1>Settings</h1>
            <p>Gérer votre configuration</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet doloribus ut distinctio soluta dolores perspiciatis voluptatibus. Repellat architecto assumenda praesentium maxime eos est ullam quisquam recusandae eum beatae! Autem, iure.</p>
            </section>
        `;
  }
}
