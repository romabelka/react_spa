var router = require('express').Router();
var mocks = require('./mock');

router.get('/question', function (req, res, next) {
    res.json(withComments(mocks.questions))
});

router.get('/question/:id', function (req, res, next) {
    var question = withComments(mocks.questions).filter(function (question) {
        return question.id == req.params.id
    })[0];
    if (question) return res.json(question);

    res.status(404).json({error: "not found"});
});

router.post('/question', function (req, res, next) {
    var body = req.body;
    var question = {
        text: body.text,
        id: mocks.questions.length + 1,
        user: body.user,
        timeStamp: new Date()
    };
    mocks.questions.push(question);
    res.json(question)
});

router.get('/comment', function (req, res, next) {
    var qid = req.query.question;
    var comments = mocks.comments.filter(function (comment) {
        return comment.qid == qid
    });
    res.json(comments)
});

router.post('/comment', function (req, res, next) {
    var comment = {
        id : mocks.comments.length + 1,
        text : req.body.text,
        timeStamp: new Date(),
        user: req.body.user,
        qid : req.body.qid
    };
    mocks.comments.push(comment);
    res.json(comment)
});

module.exports = router;

function withComments(questions) {
    return questions.map(function (q) {
        q.cids = mocks.comments.filter(function (comment) {
            return comment.qid == q.id
        }).map(function (comment) {
            return comment.id
        });
        return q
    })
}