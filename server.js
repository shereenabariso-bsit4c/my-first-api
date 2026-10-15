const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const books = [
{ id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
{ id: 2, title: "Dune", author: "Frank Herbert" },
{ id: 3, title: "1984", author: "George Orwell" },
];
app.get("/", (req, res) => {
res.send("Hello! My first server is running.");
});
app.get("/books", (req, res) => {
res.status(200).json(books);
});
app.get("/books/:id", (req, res) => {
const book = books.find(
(b) => b.id === Number(req.params.id)
);
if (!book) {
return res.status(404).json({ error: "Not found." });
}
res.status(200).json(book);
});
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});