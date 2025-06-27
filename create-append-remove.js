let ai = document.createElement("p");
ai.textContent = "I am Thala";
// ai.innerHTML = "memory 1 thala byte";
ai.style.color = "red";
ai.style.fontSize = "30px";
let vasiElement = document.getElementById("vasi");
if (vasiElement) {
    vasiElement.appendChild(ai);
}
document.body.style.backgroundColor = ""; // No color set, maybe set a value if needed

let listItems = document.getElementsByClassName("list");
if (listItems[0]) listItems[0].style.color = "red";
if (listItems[1]) listItems[1].style.color = "brown";
if (listItems[2]) listItems[2].style.color = "green";
if (listItems[3]) listItems[3].style.color = "brown";
if (listItems[4]) listItems[4].style.color = "green";

setTimeout(() => {
    let re = document.getElementsByClassName("list")[3];
    if (re) {
        re.remove();
    }
}, 2000);

// Duplicate remove block (optional to keep both)
setTimeout(() => {
    let re = document.getElementsByClassName("list")[3];
    if (re) {
        re.remove();
    }
}, 2000);

// Create and append a heading to the body
let newHeading1 = document.createElement("h2");
newHeading1.innerHTML = "This is a new heading added by JavaScript";
newHeading1.style.color = "red";
newHeading1.style.fontSize = "30px";
document.body.appendChild(newHeading1);

// Another remove block (optional again)
setTimeout(() => {
    let re = document.getElementsByClassName("list")[3];
    if (re) {
        re.remove();
    }
}, 2000);

// Create and append another heading
let newHeading2 = document.createElement("h2");
newHeading2.innerHTML = "This is a new Heading added by JavaScript";
newHeading2.style.color = "red";
newHeading2.style.fontSize = "30px";
document.body.appendChild(newHeading2);

// Add paragraph after 3 seconds (fixed typo in "document")
setTimeout(() => {
    let newText = document.createElement("p");
    newText.textContent = "this text is added after 3 seconds";
    newText.style.color = "red";
    newText.style.fontSize = "30px";
    document.body.appendChild(newText);
}, 3000);

// Append paragraph to #vasi again
let tagText = document.createElement("p");
tagText.textContent = "this text is appended to tag";
tagText.style.color = "red";
tagText.style.fontSize = "30px";
if (vasiElement) {
    vasiElement.appendChild(tagText);
}
