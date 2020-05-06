let names=["Vica","Szandi","Peti","Gergő","Dani"];

names.forEach(function(name){
  $('ul').append('<li class="myName">'+name+"</li>");
    if (name==="Gergő"){
      $(".myName:last-child").css("font-weight","bold")
    };

});

let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$("body").append("<h1>"+additionalBlock.title+"</h1>");
$("body").append("<p>"+additionalBlock.text+"</p>");