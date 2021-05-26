var string = "Saknar ni en engagerad frontend utvecklare kombinerad med SEO och digital marknadsföring?";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();

