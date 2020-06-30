const instance = new TypeIt("#myElement", {
    speed: 170,
    loop: true
})
    .type("", {delay: 1000})
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

    // const typing = new TypeIt("#projects", {
    //     loop: true
    //   });
    //   typing.go();