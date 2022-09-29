import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.render('index', {title: 'Frontend Mentor | Order summary card'})
})


export default router;