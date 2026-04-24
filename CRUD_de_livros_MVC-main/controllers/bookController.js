let books = require('../models/bookModel');

exports.getBooks = (req, res) => {
  res.json(books);
};

exports.getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ msg: 'Livro não encontrado' });
  }

  res.json(book);
};

exports.createBook = (req, res) => {
  const { title, author } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);

  res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ msg: 'Livro não encontrado' });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
};

exports.deleteBook = (req, res) => {
  const id = parseInt(req.params.id);

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ msg: 'Livro não encontrado' });
  }

  books = books.filter(b => b.id !== id);

  res.json({ msg: 'Livro deletado com sucesso' });
};