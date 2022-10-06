
const onSubmit= (e) => {

    e.preventDefault();

    const resultElement = document.querySelector('.result');

    let postObj = {
        "name" : e.target.elements.name.value,
        "phone": e.target.elements.phone.value,
        "message": e.target.elements.message.value
    }

    console.log(postObj)

    //const url = 'http://localhost:3004/contacts';
    const url = 'https://gastropub.webmcdm.dk/contacts';

    fetch(url, {
        method: 'POST',
        body : JSON.stringify(postObj),
        headers: {
            'Content-Type': 'application/json'   
        }
    })
    .then((response) => {
        console.log('--->', response, response.ok)
        
        return response.json()
    }
    ).then(response => {
        console.log('--->sdsdsd')
        resultElement.textContent = response.result
    })



}

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', onSubmit)