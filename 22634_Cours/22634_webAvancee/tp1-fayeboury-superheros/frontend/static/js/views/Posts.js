import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    
  constructor(params) {
    super(params); //Dashboard est un enfant de AbstractView , il doit donc avoir un "super" pour pouvoir hériter
    this.setTitle("Posts");
  }

  async getHtml() {

    async function getData(url) {
      const response = await fetch(url)
      return response.json()
    }
    const data = await getData('/static/js/views/fusionDonnees.json')

    let listPosts = "<ul class='list'>"
    for(let i in data) {
      listPosts += "<li><a href='/post-view/"+ data[i]['id'] + "' data-link>"+ "Personnage " + data[i]['id'] + " : " +  data[i]['name'] + "</a></li>"
    }

    listPosts += "</ul>"


    return `
            <section id="hero">
            <h1>Posts</h1>` + listPosts + `</section>`
  }
}
