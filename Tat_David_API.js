
$(document).ready(function(){
    $("#Btn").click(function(){
        getData ()
    })
    $("#seePoke").submit(function(event) {
        // console.log("formsubmitted");
        event.preventDefault()
        var id=$("#findPoke").val()
        getRanPokemon(id)
    // console.log($("#findPoke").val())
    // get number from input
    // fire getRanPokemon function with number from input
    })
    $(document).on("click","#hidePokemon", function(){
        $(this).parent().hide("slow");
    })


})


function getRanPokemon(id) {
    $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function(data){
        // console.log(data.name);
        // console.log(data);
        // console.log(data.sprites.front_default);
        var htmlStr= ""
        htmlStr += "<div>"
        htmlStr += `<h2>${data.name}</h2>`
        htmlStr += '<button id="hidePokemon">Hide</button>'
        htmlStr += `<img src="${data.sprites.front_default}">`
        htmlStr +="</div>"
        $("#showPokemon").append(htmlStr)
    })
}
function getData(){
    var rndInt = getRndInteger(1,151)
    getRanPokemon(rndInt)
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

