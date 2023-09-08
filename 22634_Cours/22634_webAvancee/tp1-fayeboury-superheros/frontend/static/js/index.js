//6 load view 
import Dashboard from "./views/Dashboard.js"
import Settings from "./views/Settings.js"
import Posts from "./views/Posts.js"
import PostView from "./views/PostView.js"

//Menu Burger
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}

//9 Expression régulière
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
  const values = match.result.slice(1)
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
  //console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)))

  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]]
  }))
}

//1 router
const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/post-view/:id", view: PostView },
    { path: "/settings", view: Settings },

  ]

  //2 match function
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      //isMatch: location.pathname === route.path
      result: location.pathname.match(pathToRegex(route.path))
    }
  })

  console.log(potentialMatches)

  //3
  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      //isMatch: true
      result: [location.path]
    }
  }
  //console.log(match.result)

  //console.log(match.route.view());
  //7 instanciation de la classe
  const view = new match.route.view(getParams(match));
  console.log(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml()
}

//4 récupération du pathname
const navigateTo = url => {
  history.pushState(null, null, url) //pushstate va regarder l'historique et va la stocker et le retourner dans l'url
  router()
}

//8 history

window.addEventListener('popstate', router)

//5
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        //console.log(e)
        if(e.target.matches("[data-link]")){
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
})
