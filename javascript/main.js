
// Get list of random users using call to randomuser.me
function getUsers() {
    return $.ajax({
        url: 'https://randomuser.me/api/?results=100',
        dataType: 'json',
        success: function (data) {
            createProfiles(data.results);

        }
    });
}

function createProfiles(profiles) {
    let card = "";
    for(let i=0; i<100;i++) {
        p = profiles[i];
        n = p.name;
        title = n.title.charAt(0).toUpperCase();
        last = n.last.charAt(0).toUpperCase();
        first = n.first.charAt(0).toUpperCase()
        card = "";
        card += "<div style=\"margin-bottom:10%;\" class=" + "\"col-sm-12 col-md-6 col-lg-4 hideMe\"" + ">";
        card += "<div class=" + "\"container\"" + ">";
        card += "<div style=\"border-width:10px;border-style:solid;border-color:green\" class=" + "\"card\"" + " style=" + "\"width:400px\"" + ">";
        card += "<img class=" + "\"card-img-top\"" + " src=" + "\"" + profiles[i].picture.large + "\" " + "alt=" + "\"Card image\"";
        card += "style=" + "\"border-radius:50%; width:50%; margin:auto;\"" + ">";
        card += "<div class=" + "\"card-body\"" + ">";
        card += "<h4 class=" + "\"card-title\"" + ">" + title + n.title.slice(1) + " " 
        + first + n.first.slice(1) + " " + last + n.last.slice(1) + "</h4>";
        card += "<p class=" + "\"card-text\"" + ">" + "Some example text some example text. John Doe is an architect and engineer " + "</p>";
        card += "<div class=" + "\"col-12\"" + ">";
        card += "<div class=" + "\"row justify-content-center\"" + ">";
        card += "<a href=" + "# " + "class=" + "\"btn btn-primary waves-effect\"" + ">Follow</a>";
        card +=  "</div></div></div>";
        card += "<div class=" + "\"card-footer\"" + ">";
        card += "<div class=\"row align-items-center\">";
        card += "<div style=\"vertical-align:middle;padding-left:0;\" class=\"col-1\">";
        card += "<i class=\"fas fa-heart\"></i>";
        card += "</div>";
        card += "<div style=\"padding-right:0;padding-left:0;\" class=\"col-3\">";
        card += "<span style=\"font-size:12px;\">Favorites<br>1,024</span>";
        card += "</div>";
        card += "<div style=\"padding-left:0;\" class=\"col-1\">";
        card += "<i class=\"fas fa-thumbs-up\"></i>";
        card += "</div>";
        card += "<div style=\"padding-right:0;padding-left:0;\" class=\"col-3\">";
        card += "<span style=\"font-size:12px;\">Likes<br>5,282</span>";
        card += "</div>";
        card += "<div style=\"padding-left:0;\" class=\"col-1\">";
        card += "<i class=\"fas fa-paper-plane\"></i>";
        card += "</div>";
        card += "<div style=\"padding-right:0;padding-left:0;\" class=\"col-3\">";
        card += "<span style=\"font-size:12px;\">Messages<br>25</span>";
        card += "</div>";
        card += "</div>";
        card +=  "</div></div></div></div>";

        $(".insertProfiles").append(card);

    }

    input = document.getElementById("search");
    input.addEventListener("keyup", dynamicSearch);
}

function dynamicSearch() {
    profilesToSearch = $(".card");
    cardToHide = $(".hideMe")

    input = document.getElementById("search");
    filter = input.value.toUpperCase();

    for (i = 0; i < profilesToSearch.length; i++) {
        cardText = profilesToSearch[i].innerText;

        if (cardText.toUpperCase().indexOf(filter) > -1) {
            cardToHide[i].style.display = "";
          } else {
            cardToHide[i].style.display = "none";
          }
    }

}


$(document).ready(function () {
    getUsers();
});
