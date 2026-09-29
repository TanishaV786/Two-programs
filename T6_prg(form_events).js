// Task 1
function welcome() {
    alert("Welcome to Online Book Store");
}


// Task 2
function changeHeading() {
    document.getElementById("heading").innerHTML =
        "MCA Digital Library";
}


// Task 3
function availableBooks() {

    var books = document.getElementsByClassName("book");

    books[0].innerHTML = "JavaScript";
    books[1].innerHTML = "HTML and CSS";
    books[2].innerHTML = "Python";
}


// Task 4
function favoriteBooks() {

    var books = document.getElementsByClassName("book");

    books[0].innerHTML = "JavaScript";
    books[1].innerHTML = "Python";
    books[2].innerHTML = "Database";

    books[0].style.color = "red";
    books[1].style.color = "red";
    books[2].style.color = "red";

    document.getElementById("count").innerHTML =
        "Total Favourite Books: " + books.length;
}


// Task 5
function searchBook() {

    var book = document.getElementById("search").value;

    document.getElementById("searchResult").innerHTML =
        "Book: " + book + "<br>" +
        "Characters: " + book.length;
}


// Task 6
function categoryChange() {

    var category = document.getElementById("category").value;

    document.getElementById("categoryResult").innerHTML =
        "Selected Category: " + category;
}


// Task 7
function mouseOver() {

    document.getElementById("bookCard").style.backgroundColor =
        "lightgreen";
}

function mouseOut() {

    document.getElementById("bookCard").style.backgroundColor =
        "lightblue";
}


// Task 8
function nameFocus() {

    document.getElementById("name").style.border =
        "2px solid blue";
}

function nameBlur() {

    document.getElementById("name").style.border =
        "2px solid gray";
}

function submitForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "" || email == "") {

        document.getElementById("formMessage").innerHTML =
            "Please fill all fields";

        return false;
    }

    document.getElementById("formMessage").innerHTML =
        "Enquiry Submitted Successfully";

    return false;
}
