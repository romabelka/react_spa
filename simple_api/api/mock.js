var articles = [
    {
        id: 1,
        text: 'lorem ipsum',
        timeStamp: new Date(),
        user: 'some user'
    },
    {
        id: 2,
        text: 'no answers',
        timeStamp: new Date()
    }
];

var comments = [
    {
        id: 1,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'some user',
        aid: 1
    },
    {
        id: 2,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'some other user',
        aid: 1
    },
    {
        id: 3,
        text: 'first comment',
        timeStamp: new Date(),
        aid: 1
    }
];

module.exports = {
    comments: comments,
    articles: articles
};