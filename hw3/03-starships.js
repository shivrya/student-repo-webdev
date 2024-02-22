// Declare starships object
let starships;

// Make an asynchronous call to the API using Fetch
const fetchData = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/starships/");
    const starshipsData = await res.json();
    starships = starshipsData.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData(); // call fetch

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section"); // do not modify this line
  container.classList.add("container");

  const name = document.createElement("p");
  name.textContent = spaceship["name"];
  name.classList.add("name");

  const cost = document.createElement("p");
  cost.textContent =
    Number(spaceship["cost_in_credits"]).toLocaleString() + " credits";
  cost.classList.add("cost");

  const manufacturer = document.createElement("p");
  manufacturer.textContent = "Manufactured by " + spaceship["manufacturer"];
  manufacturer.classList.add("manufacturer");

  const speed = document.createElement("p");
  speed.classList.add("speed");

  const speedValue = document.createElement("span");
  speedValue.textContent = spaceship["max_atmosphering_speed"];
  speedValue.classList.add("speed-value");
  speed.appendChild(speedValue);

  const newLine = document.createElement("br");
  speed.appendChild(newLine);

  const speedText = document.createElement("span");
  speedText.textContent = " Max atmosphering speed";
  speed.appendChild(speedText);

  const speedContainer = document.createElement("div");
  speedContainer.appendChild(speed);
  speedContainer.classList.add("speed-container");

  const line = document.createElement("div");
  line.classList.add("line");

  const cargo = document.createElement("p");
  cargo.classList.add("cargo");

  const cargoValue = document.createElement("span");
  cargoValue.textContent = Number(spaceship["cargo_capacity"]).toLocaleString();
  cargoValue.classList.add("cargo-value");
  cargo.appendChild(cargoValue);

  const cargoText = document.createElement("span");
  cargoText.textContent = " Cargo capacity";
  cargoText.classList.add("cargo-text");
  cargo.appendChild(cargoText);

  const cargoContainer = document.createElement("div");
  cargoContainer.appendChild(cargo);
  cargoContainer.classList.add("cargo-container");

  const dataDiv = document.createElement("div");
  dataDiv.classList.add("data-div");
  dataDiv.appendChild(speedContainer);
  dataDiv.appendChild(line);
  dataDiv.appendChild(cargoContainer);

  container.appendChild(name);
  container.appendChild(cost);
  container.appendChild(manufacturer);
  container.appendChild(dataDiv);

  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  let res = input.filter((spaceship) => {
    return spaceship.passengers < 10 && spaceship.crew > 1;
  });
  return res;
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  let totalCost = 0;

  for (const i in input) {
    if (input[i]["cost_in_credits"] >= 0) {
      totalCost += Number(input[i]["cost_in_credits"]);
    }
  }

  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
