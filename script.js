document.getElementById("numberSubmit").addEventListener("click", function(event){
    event.preventDefault();
    
    const number = document.getElementById("numberInput").value;
    
    if (number < 1) {
        return;
    }
    
    const url = "https://meowfacts.herokuapp.com/?count=" + number;
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        let results = "";
        results += '<div class="catFact">';
        for (let i = 0; i < json.data.length; i++) {
            results += '<div class="catFactItem">';
            results += "<p><strong>Fact#" + (i + 1) + " </strong>" + json.data[i] + "</p>";
            results += '</div>';
        }
        
        results += '</div>';
        document.getElementById("catFacts").innerHTML = results;
    });
});

document.getElementById("picNumSubmit").addEventListener("click", function(event){
    event.preventDefault();
    const number = document.getElementById("picNumInput").value;
    
    if (number < 1) {
        return;
    }
    
    const url = 'https://shibe.online/api/cats?count=' + number + '&urls=true&httpsUrls=true';
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {	
        let result = "";
        result += '<div class="catPicture">';
        for (let i = 0; i < json.length; i++) {
            result += '<div class="catPictureItem">';
            result += '<img src="' + json[i] + '" height=400 />';
            result += '</div>';
        }
        
        result += '</div>';
        document.getElementById("catPictures").innerHTML = result;
    });
});