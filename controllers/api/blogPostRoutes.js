const router = require("express").Router();
const { BlogPost, User, Comment } = require("../../models");

router.get('/:id', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    attributes: ['content', 'date_created'],
                    include: [
                        {
                            model: User,
                            attributes: ['name'],
                        }
                    ]
                },
            ],
        });

        const blogPost = blogPostData.get({ plain: true });
        res.render('blogpost', {
            ...blogPost,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/comment/:id', async(req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const blogPost = blogPostData.get({ plain: true });

        res.render('comment', {
            ...blogPost,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const blogPostData = await BlogPost.create(req.body);

        res.status(200).json(blogPostData);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id')
module.exports = router;