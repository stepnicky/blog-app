const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title I',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe',
            category: 'sport'
        },
        {
            id: '2',
            title: 'Article title II',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-03-2022'),
            author: 'John Doe',
            category: 'news'
        },
        {
            id: '3',
            title: 'Article title III',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-04-2022'),
            author: 'John Doe',
            category: 'movies'
        }
    ],
    categories: [ 'news', 'movies', 'sport' ]
};

export default initialState;