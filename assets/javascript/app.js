const instance = new TypeIt("#myElement", {
    speed: 170,
    loop: true
})
    .type(" ", { delay: 1000 })
    .type("HTML", { delay: 1000 })
    .delete(4)
    .type("CSS", { delay: 1000 })
    .delete(3)
    .type("JavaScript", { delay: 1000 })
    .delete(10)
    .type("JQuery", { delay: 1000 })
    .delete(6)
    .type("Bootstrap", { delay: 1000 })
    .delete(9)
    .type("Express.js", { delay: 1000 })
    .delete(10)
    .type("React.js", { delay: 1000 })
    .delete(8)
    .type("Node.js", { delay: 1000 })
    .delete(7)
    .type("MongoDB", { delay: 1000 })
    .delete(7)
    .type("MySQL", { delay: 1000 })
    .delete(5)
    .type("Git", { delay: 1000 })
    .go();

function currentDate() {
    var today = new Date();
    var month = today.getMonth();
    var monthlist = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    var date = today.getDate() + ", ";
    var year = today.getFullYear();

    console.log(month);
    var displayDate = monthlist[month] + " " + date + year;
    document.getElementById("date").innerHTML = "Today is: " + displayDate;
}
currentDate();