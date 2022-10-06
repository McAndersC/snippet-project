const menuPage = document.querySelector('.page-menus');

const dishTmpl = (dish) => {
    return `<div>${dish.name}<hr/></div>`
};

const catTmpl = (cat) => {
    return `<div class="cat">
        <h1>${cat.name}</h1>
        <img src="${cat.image}" />
        ${cat.dishes.map( (dish) => dishTmpl(dish)).join(' ')}
    </div>`
}

const rendeMenu = (menu) => {
    const dishesContainer = document.querySelector('.dishes');
 
    menu.map((cat) => {
        console.log(cat)
        dishesContainer.innerHTML += catTmpl(cat)
    })

    const allHeadlines = document.querySelectorAll('h1');
    allHeadlines.forEach( (headline) => headline.addEventListener('click', () => console.log('Clicked')) )

} 



if(menuPage) {

    console.log('Menu Page')

    fetch('https://gastropub.webmcdm.dk/menus')
    .then(reponse => reponse.json())
    .then(response => rendeMenu(response))

}