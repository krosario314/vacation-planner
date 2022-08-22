var currentTemp = document.getElementById("current-temp");
var currentConditions = document.getElementById("current-conditions");
var planetName = document.getElementById("planet-name");
var searchNumber = JSON.parse(localStorage.getItem("indexOfSearch"));
var imageEl = document.getElementById("planet-image");
var planetDesc = document.getElementById("planet-desc");

function getWeather(lat, lon) {
  fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=imperial&appid=ae034b29b1e2add7687fc20c94112cb6"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.current);

      var icon = $(
        "<img src='http://openweathermap.org/img/wn/" +
          data.current.weather[0].icon +
          "@2x.png'>"
      );
      currentTemp.textContent = "Temperature: " + data.current.temp + "°F";
      currentConditions = $("#current-conditions");
      currentConditions.append(icon);
      $("#humid").text("Humidity: " + data.current.humidity + "%");
      $("#uvi").text("UV Index: " + data.current.uvi);
    });
}

function displayPlanetData(planet) {
  var planetsArray = JSON.parse(localStorage.getItem("planetsArray"));
  switch (planetsArray[planet].climate.split(",")[0].trim()) {
    case "arid":
      getWeather(25.28, 14.43);
      break;

    case "temperate":
      getWeather(42.36, -71.05);
      break;

    case "frozen":
      getWeather(-90.0, 00);
      break;

    case "frigid":
      getWeather(-90.0, 00);
      break;

    case "murky":
      getWeather(25.0, -80);
      break;

    case "hot":
      getWeather(36.0, -116.0);
      break;

    case "tropical":
      getWeather(25, -77);
      break;

    case "artificial temperate":
      getWeather(40, -74);
      break;

    case "polluted":
      getWeather(28.7, 77.1);
      break;

    case "unknown":
      currentConditions.textContent = "Unknown";
      break;
  }

  // displays planet name
  planetName.textContent = planetsArray[planet].name.toUpperCase();

  console.log(planetsArray);

  // switch statement pictures
  switch (planetsArray[planet].name) {
    case "Tatooine":
      imageEl.setAttribute("src", "assets/images/tatooine.webp");
      planetDesc.textContent =
        "A sparsely inhabited desert planet located in the galaxy's outer rim. The planet is orbited by two scorching suns, resulting in the world lacking necessary surface water. Come and meet the Jawas and take a ride in their sandcrawlers for only a few pieces of scrap metal. Visit the moisture farm where Luke Skywalker previously resided but be wary of Krayt Dragons.";
      break;
    case "Alderaan":
      imageEl.setAttribute("src", "assets/images/alderaan.jpeg");
      planetDesc.textContent =
        "Located in the core worlds, this terrestrial planet is covered with mountain ranges. Take a trip to the capital Aldera and visit the Royal Palace of Alderaan where Princess Leia Organa grew up. WARNING: ALL TRIPS SUSPENDED DUE TO PLANET DESTRUCTION";
      break;
    case "Yavin IV":
      imageEl.setAttribute("src", "assets/images/yavin4.jpeg");
      planetDesc.textContent =
        "Also known as Yavin, the jungle covered moon orbits around the red gas giant Yavin Prime. This moon was the headquarters of the Rebel Alliance but quickly evacuated once the Galactic Empire found its whereabouts. Visit the abandoned Rebel base and take home an old Rebel fighter helmet.";
      break;
    case "Hoth":
      imageEl.setAttribute("src", "assets/images/hoth.jpeg");
      planetDesc.textContent =
        "This remote ice planet is located in the outer rim. The Rebel Alliance relocated to this planet after the Yavin IV base was found. This is the homeworld of the primitive Wampa species and the loyal snow lizard Tauntauns. Visit the aftermath of the Battle of Hoth and see the Empire's biggest machinery, the AT-AT, in the snow.";
      break;
    case "Dagobah":
      imageEl.setAttribute("src", "assets/images/dagobah.webp");
      planetDesc.textContent =
        "This remote world of swamps and forests is located in the outer rim. It is one of the few places in the galaxy with pure force energy. Jedi Grandmaster Yoda lived here after Order 66 and the downfall of the Jedi. Visit the vast flora and fauna that live on the planet and take a trip to see Yoda's hut.";
      break;
    case "Bespin":
      imageEl.setAttribute("src", "assets/images/bespin.jpeg");
      planetDesc.textContent =
        "This planet is a gas giant with no habitable land or water. There are many mining platforms that extract valuable gases all around the planet. The most notable platform is Cloud City that Lando Calrissian governs.";
      break;
    case "Endor":
      imageEl.setAttribute("src", "assets/images/endor.webp");
      planetDesc.textContent =
        "This forest moon in the outer rim is the homeworld of the primal Ewok species. The Galactic Empire made a shield generator on this moon to protect the incomplete Death Star. Visit the Ewoks in their treetop villages but remember to bring a protocol droid.";
      break;
    case "Naboo":
      imageEl.setAttribute("src", "assets/images/naboo.webp");
      planetDesc.textContent =
        "A mid rim located planet home to humans and the indigenious Gungan people. Birthplace of both Padme Amidala and Darth Sidious, this world is a popular destination. Visit the aftermath of the Battle of Naboo where the Gungans and the droid army faced off.";
      break;
    case "Coruscant":
      imageEl.setAttribute("src", "assets/images/coruscant.webp");
      planetDesc.textContent =
        "A city covered planet in the core worlds, this is the capital of the galaxy. Through the days of the old Republic to the reign of the Galactic Empire, the galaxy has been governed through the Senate building. The Jedi Temple is also the main headquarters for the entire Jedi Order. Come and take a tour of both famous buildings, then delve into the deeper levels of the city's underworld.";
      break;
    case "Kamino":
      imageEl.setAttribute("src", "assets/images/kamino.webp");
      planetDesc.textContent =
        "Once a planet hidden from all records, this aquatic sea planet is home to the mysterious Kaminoan people. They are the self proclaimed best cloners in the galaxy. This is the birthplace of the Grand Army of the Republic, made up of genetically modified clones. Visit the cloning facilities and see the creation of advanced clones.";
      break;
    case "Geonosis":
      imageEl.setAttribute("src", "assets/images/geonosis.jpeg");
      planetDesc.textContent =
        "This desert planet is home to the insect race known as the Geonosians. It served as the capital of the Separatists during the Clone Wars and held many droid assembly factories. Visit the abandoned factories, but be wary of the natives.";
      break;
    case "Utapau":
      imageEl.setAttribute("src", "assets/images/utapau.webp");
      planetDesc.textContent =
        "A remote rocky planet in the outer rim. During the Clone Wars, this planet was invaded by the Separatists and made a secret base for General Grevious. Visit the sinkhole city of Pau and see where Obi-wan Kenobi defeated General Greivous.";
      break;
    case "Mustafar":
      imageEl.setAttribute("src", "assets/images/mustafar.jpeg");
      planetDesc.textContent =
        "A small planet located in the outer rim that is famous for its volcanic lava sea, molten rock plains, and strategic high grounds. Mustafar's lava flows are mined for unique and valuable minerals that are used in the assembly of battle droids. Come visit the location where Jedi Master Obi-wan Kenobi defeated the newly appointed Sith Lord Darth Vader.";
      break;
    case "Kashyyyk":
      imageEl.setAttribute("src", "assets/images/kashyyyk.jpeg");
      planetDesc.textContent =
        "This planet is located in the core systems. It is a tropical jungle world, home of the Wookies. During the reign of the Empire, Kashyyyk was enslaved. Only until a force of Rebels led by Han Solo and Chewbacca were they able to liberate the planet. Explore the world's various mountain ranges and giant Wroshyr trees.";
      break;
    case "Polis Massa":
      imageEl.setAttribute("src", "assets/images/polismassa.jpeg");
      planetDesc.textContent =
        "This is an asteroid field in the outer rim that became a safe haven for Jedi after Order 66. This is where Luke Skywalker and Leia Organa were born. Visit one of the first bases for the Rebel Alliance.";
      break;
    case "Mygeeto":
      imageEl.setAttribute("src", "assets/images/mygeeto.webp");
      planetDesc.textContent =
        "A cold, crystalline planet located in the outer rim. It is most notable for the various battles during the Clone Wars. Visit the famous bridge where the clone army faced the Seperatist droid army.";
      break;
    case "Felucia":
      imageEl.setAttribute("src", "assets/images/felucia.jpeg");
      planetDesc.textContent =
        "Previously known as Galush before the Republic was formed, this colourful, humid jungle planet is located in the outer rim. Felucia is known for its many flora and fauna as well as its many battles during the Clone Wars. Visit the countless creatures and plants both benign and hostile.";
      break;
    case "Cato Neimoidia":
      imageEl.setAttribute("src", "assets/images/catoneimoidia.jpeg");
      planetDesc.textContent =
        "This is a wealthy planet located in the colonies region. It is the homeworld of the Neimoidians, leaders of the Trade Federation and later members of the Separatists. Visit this planet's vast rock arches and cliffs overlooking geyers-spouting acidic oceans.";
      break;
    case "Saleucami":
      imageEl.setAttribute("src", "assets/images/saleucami.webp");
      planetDesc.textContent =
        "A hot and arid planet with many deserts and swamps. Though the planet wished to remain neutral during the Clone Wars, it became a major battleground. Come to this planet to see the battlefields of the droids and clones.";
      break;
    case "Stewjon":
      imageEl.setAttribute("src", "assets/images/stewjon.jpg");
      planetDesc.textContent =
        "Much is unknown about Stewjon. The only notable fact is this is the homeworld of Jedi Master Obi-wan Kenobi. Visit this planet to unravel the mysterious background of Kenobi";
      break;
    case "Eriadu":
      imageEl.setAttribute("src", "assets/images/eriadu.jpg");
      planetDesc.textContent =
        "Once a lush jungle planet until vast deposits of Lommite ore was found on the planet. Since Lommite is a key component of transparisteel, this planet was quickly turned into a polluted mining world. Visit this world to learn what happens if you don't recycle.";
      break;
    case "Corellia":
      imageEl.setAttribute("src", "assets/images/corellia.jpg");
      planetDesc.textContent =
        "This planet located in the core worlds is known for its ace pilots and starships. There are many ship building factories that make ships just like the Millenium Falcon. This is the homeworld of Han Solo. Visit this planet to become a better starship pilot.";
      break;
    case "Rodia":
      imageEl.setAttribute("src", "assets/images/rodia.webp");
      planetDesc.textContent =
        "This is a remote swampy jungle planet located on the border of the mid rim and outer rim. This is the homeworld of the Rodian species, and Greedo the bounty hunter. Visit this planet to see the bubble dome shielded cities.";
      break;
    case "Nal Hutta":
      imageEl.setAttribute("src", "assets/images/nalhutta.webp");
      planetDesc.textContent =
        "Known as Hutta by its inhabitants, this is the homeworld of the gangster Hutt species. This is a haven for criminal activities, bounty hunting and black market trading. Visit this planet if you have something to hide.";
      break;
    case "Dantooine":
      imageEl.setAttribute("src", "assets/images/dantooine.jpg");
      planetDesc.textContent =
        "A terrestrial planet located in the outer rim. This planet is a peaceful home to many farmers that came from all around the galaxy to grow crops and raise livestock. This quickly changed during the Clone Wars when both factions invaded in search of ancient Jedi artifacts. Visit this planet if you are a farmer or an archaeologist.";
      break;
    case "Bestine IV":
      imageEl.setAttribute("src", "assets/images/bestine4.jpg");
      planetDesc.textContent =
        "Known as Bestine by the local population, this planet is located in the inner rim. It is nothing more than a trading port planet and naval base. It is close to Eriadu where it receives many Lommite shipments that pass through Bestine before reaching the core worlds. Visit this planet to see the docked Republic star fleets.";
      break;
    case "Ord Mantell":
      imageEl.setAttribute("src", "assets/images/ordmantell.jpeg");
      planetDesc.textContent =
        "A planet located in the mid rim, this planet was used by the Republic as a storage facility, barracks and fleet support base. At the end of the Clone Wars and the later days of the Republic it became a large base for the Black Sun crime syndicate. Visit this planet to join a ring of spice runners.";
      break;
    case "unknown":
      imageEl.setAttribute("src", "assets/images/unknown.jpg");
      planetDesc.textContent =
        "Picking this destination you will be sent to a random planet, good luck.";
      break;
    case "Trandosha":
      imageEl.setAttribute("src", "assets/images/trandosha.jpg");
      planetDesc.textContent =
        "Known as Dosh by the local inhabitants, this planet is located in the mid rim. Homeworld of the Trandoshan species and the bounty hunter Bossk. This planet is inside the Kashyyyk system where the Wookies reside, the natural rival of the Trandoshans. Visit this planet for the thick jungles and forests, but be wary not to be hunted by the natives.";
      break;
    case "Socorro":
      imageEl.setAttribute("src", "assets/images/socorro.jpg");
      planetDesc.textContent =
        "A planet in the outer rim with a reputation as a smuggler haven. This is the homeworld of Lando Calrissian. This planet has many deserts, flatlands and volcanic mountain ranges. Visit this planet if you need to smuggle something.";
      break;
  }

  // set <img> to appropriate image
  // imgEl.setAttribute("src", "tatooine.png")
}

// This will run when you open the page
displayPlanetData(searchNumber);

function goToStartPage() {
  window.location.href = "./index.html";
}

$("#goBack").on("click", goToStartPage);
