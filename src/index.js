import express from 'express'
import ejs from 'ejs'
import {dirname, join} from 'path';
import { fileURLToPath} from 'url';

import  indexRoutes from './routes/index.js'

const app = express();



const _dirname = dirname(fileURLToPath(import.meta.url))
console.log(_dirname, 'views')


app.set('views', join(_dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)

app.use(express.static(join(_dirname, 'public')))
app.use(express.static(join(_dirname, 'design')))
app.use(express.static(join(_dirname, 'images')))

app.listen(3000)
console.log('server is listen on port 3000')
