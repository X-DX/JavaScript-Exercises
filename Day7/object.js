// Task 1
const book = {
    titile : "A Book of Arup",
    author : "Arup Roy",
    year: 2024,
}
// console.log("Book Details", book);

// Task 2
// console.log(`Titile: ${book.titile} and Author: ${book.author}`);

// Task 3
const book2 = {
    title : "A Book of JS",
    author : "Harry Potter",
    year: 2024,
    getDetails: function() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}

// console.log(book2.getDetails());

// Task 4
const book3 = {
    title : "A Book of JS",
    author : "Harry Potter",
    year: 2024,
    updateYear: function(newYear) {
        return this.year = newYear;
    }
}
// console.log(book3.updateYear(1996));

// Task 5
const library = {
    name: "A Book of Arup",
    book3: {
        title : "A Book of JS",
        author : "Harry Potter",
        year: 2024,
    },
    getDetails: function() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
};
// console.log(library);

// Task 6
// console.log(`Library Name: ${library.name} and the All Book Titles are: ${book3.title}`);


// Task 6
const library2 = {
    name: "A Book of Arup",
    book1: {
        title: "A Book of JS",
        author: "Harry Potter",
        year: 2024,
    },
    book2: {
        title: "A Book of NodeJS",
        author: "Hermione Granger",
        year: 2024,
    },
    getDetails: function() {
        let titles = [];
        for (let key in this) {
            if (typeof this[key] === 'object' && this[key].title) {
                titles.push(this[key].title);
            }
        }
        return titles.join(", ");
    }
};

// console.log(library2.getDetails());


// Task 7
const library3 = {
    name: "A Book of Arup",
    book3: {
        title : "A Book of JS",
        author : "Harry Potter",
        year: 2024,
    },
    getDetails: function() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
};
// console.log(ibrary3.getDetails());

// Task 8
for(const key in library3){
    console.log(`Key is: ${key} and the value is:${library3[key]}`);
}

// Task 9
// Log all the keys of the library2 object
console.log("Keys:", Object.keys(library2));

// Log all the values of the library2 object
console.log("Values:", Object.values(library2));

// If you want to log the keys and values of nested objects too, you can do the following:
Object.keys(library2).forEach(key => {
    console.log(`Key: ${key}, Value: ${JSON.stringify(library2[key])}`);
});