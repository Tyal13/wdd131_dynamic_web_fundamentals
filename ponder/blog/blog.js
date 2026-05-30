
// Adam Herrmann — WDD 131 Build a Blog (Part 2). Claude (Anthropic) helped with guidance and debugging; the code is my own.

const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	},
    {
		id: 4,
		title: "The Candy Shop War",
		date: "Sept 11, 2007",
		description:
			"A fifth-grader named Nate and his new friends are thrilled when the local candy shop starts handing out magical sweets -- until they discover the kindly owner is using them to hunt for a hidden treasure. A fun, fast-paced adventure from Brandon Mull (author of Fablehaven) about ordinary kids, extraordinary candy, and a deal that's too good to be true.",
		imgSrc:
		"https://upload.wikimedia.org/wikipedia/en/2/2a/The_Candy_Shop_War_cover.jpg",
		imgAlt: "Book cover for the first book in the Candy Shop War series",
		ages: "8-12",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

const main = document.querySelector("#main-content");

function bookTemplate(book) {
	return `
		<article class="book">
			<div class="book-meta">
				<p class="book-date">${book.date}</p>
				<p class="book-age">${book.ages}</p>
				<p class="book-genre">${book.genre}</p>
				<p class="book-rating" aria-label="${book.stars.length} out of 5 stars">
					<span aria-hidden="true">${book.stars}</span>
				</p>
			</div>
			<div class="book-body">
				<h2 class="book-title">${book.title}</h2>
				<img class="book-cover" src="${book.imgSrc}" alt="${book.imgAlt}" width="200" loading="lazy">
				<p class="book-description">${book.description}</p>
			</div>
		</article>
	`;
}

main.innerHTML = articles.map(bookTemplate).join("");

