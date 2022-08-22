var searchByPlanetButton = $("#search-by-planet-button");
var searchByClimateButton = $("#search-by-climate-button");
var searchResultAppend = $("#search-result-append");
var planetsArray = JSON.parse(localStorage.getItem("planetsArray"));
var climateArray = JSON.parse(localStorage.getItem("searchedClimates"));
var planetList = $("#planetsList");
var climateList = $("#climatesList");
var possibleClimates = [
  "Arid",
  "Temperate",
  "Frozen",
  "Frigid",
  "Murky",
  "Hot",
  "Tropical",
  "Artificial Temperate",
  "Polluted",
  "Unknown",
];

function goToSinglePage() {
  window.location.href = "./singlePlanetPage.html";
}

function searchClimate() {
  var searchedClimatesArray = [];
  for (var i = 0; i < planetsArray.length; i++) {
    if (
      planetsArray[i].climate.split(",")[0].toLowerCase().trim() ===
      climateList.val().toLowerCase().trim()
    ) {
      searchedClimatesArray.push(planetsArray[i]);
    }
  }
  console.log(searchedClimatesArray);
  localStorage.setItem(
    "searchedClimates",
    JSON.stringify(searchedClimatesArray)
  );
  appendPlanets();
}

function searchPlanet() {
  console.log(planetList.val());
  for (var i = 0; i < planetsArray.length; i++) {
    if (planetsArray[i].name.toLowerCase() === planetList.val().toLowerCase()) {
      console.log(
        "planet searched is " +
          planetsArray[i].name.toLowerCase() +
          " and index is: " +
          i
      );
      localStorage.setItem("indexOfSearch", i);
    }
  }
  goToSinglePage();
}

function appendPlanets() {
  climateArray = JSON.parse(localStorage.getItem("searchedClimates"));
  searchResultAppend.empty();

  for (var i = 0; i < climateArray.length; i++) {
    var newCard = $("<div>");
    newCard.addClass("card");

    var newImg = $("<img width='400' height='200'>");

    switch (climateArray[i].name) {
      case "Tatooine":
        newImg.attr("src", "assets/images/tatooine.webp");
        break;
      case "Alderaan":
        newImg.attr("src", "assets/images/alderaan.jpeg");
        break;
      case "Yavin IV":
        newImg.attr("src", "assets/images/yavin4.jpeg");
        break;
      case "Hoth":
        newImg.attr("src", "assets/images/hoth.jpeg");
        break;
      case "Dagobah":
        newImg.attr("src", "assets/images/dagobah.webp");
        break;
      case "Bespin":
        newImg.attr("src", "assets/images/bespin.jpeg");
        break;
      case "Endor":
        newImg.attr("src", "assets/images/endor.webp");
        break;
      case "Naboo":
        newImg.attr("src", "assets/images/naboo.webp");
        break;
      case "Coruscant":
        newImg.attr("src", "assets/images/coruscant.webp");
        break;
      case "Kamino":
        newImg.attr("src", "assets/images/kamino.webp");
        break;
      case "Geonosis":
        newImg.attr("src", "assets/images/geonosis.jpeg");
        break;
      case "Utapau":
        newImg.attr("src", "assets/images/utapau.webp");
        break;
      case "Mustafar":
        newImg.attr("src", "assets/images/mustafar.jpeg");
        break;
      case "Kashyyyk":
        newImg.attr("src", "assets/images/kashyyyk.jpeg");
        break;
      case "Polis Massa":
        newImg.attr("src", "assets/images/polismassa.jpeg");
        break;
      case "Mygeeto":
        newImg.attr("src", "assets/images/mygeeto.webp");
        break;
      case "Felucia":
        newImg.attr("src", "assets/images/felucia.jpeg");
        break;
      case "Cato Neimoidia":
        newImg.attr("src", "assets/images/catoneimoidia.jpeg");
        break;
      case "Saleucami":
        newImg.attr("src", "assets/images/saleucami.webp");
        break;
      case "Stewjon":
        newImg.attr("src", "assets/images/stewjon.jpg");
        break;
      case "Eriadu":
        newImg.attr("src", "assets/images/eriadu.jpg");
        break;
      case "Corellia":
        newImg.attr("src", "assets/images/corellia.jpg");
        break;
      case "Rodia":
        newImg.attr("src", "assets/images/rodia.webp");
        break;
      case "Nal Hutta":
        newImg.attr("src", "assets/images/nalhutta.webp");
        break;
      case "Dantooine":
        newImg.attr("src", "assets/images/dantooine.jpg");
        break;
      case "Bestine IV":
        newImg.attr("src", "assets/images/bestine4.jpg");
        break;
      case "Ord Mantell":
        newImg.attr("src", "assets/images/ordmantell.jpeg");
        break;
      case "unknown":
        newImg.attr("src", "assets/images/unknown.jpg");
        break;
      case "Trandosha":
        newImg.attr("src", "assets/images/trandosha.jpg");
        break;
      case "Socorro":
        newImg.attr("src", "assets/images/socorro.jpg");
        break;
    }
    var newBtn = $("<a>");
    newBtn.attr("cardbuttonclickname", climateArray[i].name);
    newBtn.addClass("aTag");

    var newH3 = $("<h3>");
    newH3.text(climateArray[i].name);

    newCard.append(newImg);
    newCard.append(newH3);

    newBtn.append(newCard);
    searchResultAppend.append(newBtn);
    newBtn.on("click", cardClick);
  }
}

function cardClick(event) {
  var planetClicked = event.currentTarget.getAttribute("cardbuttonclickname");
  console.log(event.currentTarget);

  for (var i = 0; i < planetsArray.length; i++) {
    if (planetsArray[i].name.toLowerCase() === planetClicked.toLowerCase()) {
      console.log(
        "planet searched is " +
          planetsArray[i].name.toLowerCase() +
          " and index is: " +
          i
      );
      localStorage.setItem("indexOfSearch", i);
    }
  }
  goToSinglePage();
}

for (var i = 0; i < planetsArray.length; i++) {
  var newDropDown = $("<option>" + planetsArray[i].name + "</option>");
  newDropDown.attr("value", planetsArray[i].name);

  planetList.append(newDropDown);
}

for (var i = 0; i < possibleClimates.length; i++) {
  var newDropDown = $("<option>" + possibleClimates[i] + "</option>");
  climateList.append(newDropDown);
}

searchByClimateButton.on("click", searchClimate);
searchByPlanetButton.on("click", searchPlanet);

appendPlanets();
