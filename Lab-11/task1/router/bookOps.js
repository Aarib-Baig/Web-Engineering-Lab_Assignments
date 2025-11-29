const express = require('express');
const router = express.Router();
const fs = require('fs');


const readBookData = () => {
    const data = fs.readFileSync('./booklist.json', 'utf8');
    return JSON.parse(data);
}

const writeBookData = (book) => {
    fs.writeFileSync('./booklist.json', JSON.stringify(book, null, 2))
}

// function for getting all bookdata
router.get('/books', (req, res) => {
    const books = readBookData();
    res.status(200).json(books);
})

// function for posting (creating) a book
router.post('/books', (req, res) => {
    const books = readBookData();
    const newBook = {
        id: books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1,
        ...req.body
    };
    books.push(newBook);
    writeBookData(books);
    res.status(201).json({ message: 'Book created successfully', book: newBook });
});


// function to update bookdata in boooklist.json
router.put('/books/:id', (req, res) => {
    const books = readBookData();
    const index = books.findIndex(b => b.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }

    books[index] = { ...books[index], ...req.body, id: books[index].id };
    writeBookData(books);
    res.status(200).json({ message: 'Book updated successfully', book: books[index] });
});


// function to delete a specific book by id
router.delete('/books/:id', (req, res) => {
    const books = readBookData();
    const filteredBooks = books.filter(b => b.id !== parseInt(req.params.id));

    if (books.length === filteredBooks.length) {
        return res.status(404).json({ error: 'Book not found' });
    }

    writeBookData(filteredBooks);
    res.status(200).json({ message: 'Book deleted successfully' });
});

module.exports = router;