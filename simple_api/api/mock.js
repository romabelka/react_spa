var questions = [
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
        qid: 1
    },
    {
        id: 2,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'some other user',
        qid: 1
    },
    {
        id: 3,
        text: 'first comment',
        timeStamp: new Date(),
        qid: 1
    }
];

module.exports = {
    comments: comments,
    questions: questions
};