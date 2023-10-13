import express from 'express'
import booksRouter from './books.js'
import authorsRouter from './authors.js'
import bookStoreRouter from './bookstores.js'
import ownerRouter from './owner.js'

const server = express();

server.use(express.json());

server.use('/api/books', booksRouter)
server.use('/api/authors', authorsRouter)
server.use('/api/bookStores', bookStoreRouter)
server.use('/api/owner',ownerRouter)

export default server

