fetch("https://poetrydb.org/author,title/Shakespeare;Sonnet")
    .then(res => res.json())
    .then(data => {
        data.forEach(poem => {
            const markup = `<div>
            <h3>${poem.title}</h3>
            <p>${poem.lines}</p>
            <p>${poem.linecount}</p></div>`;
            document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log('Error not loaded', error))