import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

  constructor(params) {
    super(params); //Dashboard est un enfant de AbstractView , il doit donc avoir un "super" pour pouvoir hériter
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <section id="hero">
            <h1>Bienvenue chez les Superhéros !</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet doloribus ut distinctio soluta dolores perspiciatis voluptatibus. Repellat architecto assumenda praesentium maxime eos est ullam quisquam recusandae eum beatae! Autem, iure.</p>
            <p>
                <a href="/posts" data-link> Voir les posts </a>
            </p>
            </section>
        `;
  }
}
