(function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(responde => responde.json())
        .then(posts => {
            const postList = document.getElementById('postList');

            posts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = post.title;
                postList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('error al obtener los posts:', error);
        });
})()