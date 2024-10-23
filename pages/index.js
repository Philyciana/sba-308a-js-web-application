fetch("https://poetrydb.org/author")
    .then(res => res.json())
    .then(data => {
        data.authors.forEach(author => {
            const markup = `<input type="checkbox" id="${author}">${author}</input><br>`;
            document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log('Error not loaded', error))


document.getElementById('search').addEventListener('submit', function(sub){
    sub.preventDefault();
    let selectedcontainter = [];
    const authorSelected = document.querySelectorAll('input[name="author"]:checked');
    authorSelected.forEach(selected => {
        selectedcontainter.push(selected.value);
    })
    let authorList = selectedcontainer.join(';');
    let inputAuthorapi =  'https://poetrydb.org/author/${selected}';
    fetch(inputAuthorapi)
        .then(res => res.json())
        .then(data => {
            data.forEach(poem => {
                const markup = `<div><h3>${poem.title}</h3>
                <p> Written by: ${poem.author}</p>
                <ul>${poem.lines.map(line => `<li>${line}</li>`).join('')}</ul></div>`;
                document.getElementById('results').insertAdjacentHTML('beforeend', markup);
            })

        })
})

