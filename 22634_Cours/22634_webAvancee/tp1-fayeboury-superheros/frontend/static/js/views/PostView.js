import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params); 
        this.setTitle("Viewing Post");
    }

    async getHtml() {
       //console.log(this.params.id)
       const numero = this.params.id

       async function getData(url) {
        const response = await fetch(url)
        return response.json()
       }
       const data = await getData('/static/js/views/fusionDonnees.json')

       const article = data.find(item => item.id === numero)
        
        console.log(article)

        return `
            <section id="hero">
            <h1>`+ article.name +`</h1>
            <p>Genre : ` + article.appearance.gender + `</p>
            <strong>Mission : ` + article.work.occupation + `</strong><br>
            <img src="`+ article.image.url + `">
            <p>
                <a href="/posts" data-link class="retour"> Retourner à la liste des personnages </a>
            </p>
            </section>
        `
    }

    
}