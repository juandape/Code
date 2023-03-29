const popmotion = undefined;
const ball = document.querySelector(".ball");
console.log("ball");
popmotion.animate({
    from: "0px",
    to: "100px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    onUpdate (update) {
        ball.style.left = update;
    }
});

//# sourceMappingURL=index.e4ff47a9.js.map
