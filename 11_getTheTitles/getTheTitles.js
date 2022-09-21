const getTheTitles = function(books) {
    let titles = books.map(a => a.title);
    console.log(`Titles: ${titles}`);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
