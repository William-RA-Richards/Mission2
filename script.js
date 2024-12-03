// Elements

const rightEl = document.querySelector("#right");
const searchInputEl = document.querySelector("#search-input");
const topCheckBoxEl = document.querySelector("#top-checkbox");
const jungleCheckBoxEl = document.querySelector("#jungle-checkbox");
const midCheckBoxEl = document.querySelector("#mid-checkbox");
const bottomCheckBoxEl = document.querySelector("#bottom-checkbox");
const supportCheckBoxEl = document.querySelector("#support-checkbox");
const winRateInputEl = document.querySelector("#win-rate-input");
const kdaInputEl = document.querySelector("#kda-input");
const gamesPlayedInputEl = document.querySelector("#games-played-input");
const filterBtnEl = document.querySelector("#filter-btn");

// Classes

class Champion {
  constructor(name, img, winRate, kda, gamesPlayed, position, textColour = "") {
    this.name = name; // String
    this.img = img; // String
    this.winRate = winRate; // String
    this.kda = kda; // String
    this.gamesPlayed = gamesPlayed; // String
    this.position = position; //String
    this.textColour = textColour; // String
  }

  // Methods

  winRateColour() {
    const winNum = this.winRate;
    if (winNum <= 40) {
      return "bad";
    } else if (winNum >= 50) {
      return "good";
    } else {
      return "ok";
    }
  }
}

class Lane {
  constructor(lane, img) {
    this.lane = lane;
    this.img = img;
  }

  // Methods

  display() {
    if (this.name != "Jungle") {
      rightEl.innerHTML += `<img src="${this.img}" class="position-img" /><h2>${
        this.lane
      } Lane</h2><div id="${this.lane.toLowerCase()}" class="content"></div>`;
    } else {
      rightEl.innerHTML += `<img src="${this.img}" class="position-img" /><h2>${
        this.lane
      }</h2><div id="${this.lane.toLowerCase()}" class="content"></div>`;
    }
  }
}

// Variables

// Top Champions

const mordekaiser = new Champion(
  "Mordekaiser",
  "https://scontent.fakl1-4.fna.fbcdn.net/v/t1.6435-9/64408982_790005834726505_1852494904584830976_n.jpg?stp=dst-jpg_s600x600&_nc_cat=101&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=p6KDjiRTxNUQ7kNvgGevC9v&_nc_zt=23&_nc_ht=scontent.fakl1-4.fna&_nc_gid=ANAyOoIkkrKLYVbL3C7ntge&oh=00_AYDnMBZu8VnPxcH23f6x0HvJ6GDWJiCeweTlfl_F8pmytA&oe=675B9564",
  38,
  1.94,
  21,
  "Top",
  "color:goldenrod;"
);

const gwen = new Champion(
  "Gwen",
  "https://pbs.twimg.com/media/EydnUnZXMAEV1L4?format=png&name=360x360",
  57,
  1.7,
  7,
  "Top"
);

const singed = new Champion(
  "Singed",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcF9HuhaOZvYS08LSonpqXLoOdPnaoE1cLdQ&s",
  33,
  2.08,
  3,
  "Top"
);

// Jungle Champions

const nunuWillump = new Champion(
  "Nunu & Willump",
  "https://statics.koreanbuilds.net/tile_200x200/Nunu.webp",
  57,
  2.67,
  7,
  "Jungle"
);

const lillia = new Champion(
  "Lillia",
  "https://pbs.twimg.com/media/GSOtugeXMAEOvjR.jpg",
  63,
  3.01,
  16,
  "Jungle"
);

const kindred = new Champion(
  "Kindred",
  "https://i.pinimg.com/736x/9a/03/d9/9a03d9e4887221cf8a54ad0043a28a7e.jpg",
  38,
  1.41,
  8,
  "Jungle"
);

const nocturne = new Champion(
  "Nocturne",
  "https://leagueofitems.com/images/champions/tiles/256/56.webp",
  80,
  3.32,
  5,
  "Jungle"
);

const viego = new Champion(
  "Viego",
  "https://pbs.twimg.com/profile_images/1569319799204847621/rTuy5xqM_400x400.jpg",
  20,
  1.16,
  5,
  "Jungle"
);

// Mid

const luxMid = new Champion(
  "Lux",
  "https://statics.koreanbuilds.net/tile_200x200/Lux.webp",
  70,
  4.16,
  10,
  "Mid"
);

const syndra = new Champion(
  "Syndra",
  "https://i.redd.it/7u5q69prfa1c1.jpeg",
  67,
  2.92,
  3,
  "Mid"
);

const hwei = new Champion(
  "Hwei",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4So53hM-fKiSCd6zwsuTRWwB5-o0xA9aJIw&s",
  54,
  2.63,
  39,
  "Mid"
);

const veigar = new Champion(
  "Veigar",
  "https://leagueofitems.com/images/champions/tiles/256/45.webp",
  0,
  0.96,
  3,
  "Mid"
);

const ekko = new Champion(
  "Ekko",
  "https://i.redd.it/new-lore-ekko-or-old-lore-ekko-v0-n9ijdmvmql5c1.png?width=207&format=png&auto=webp&s=7b4abb51b219948755123b8bad0e42ba103d072d",
  44,
  2.46,
  9,
  "Mid"
);

const azir = new Champion(
  "Azir",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltNNGVSMIBbhBVUjBEvOrlnUYh_71pCfOhA&s",
  100,
  1.29,
  2,
  "Mid"
);

// Bottom

const jinx = new Champion(
  "Jinx",
  "https://statics.koreanbuilds.net/tile_200x200/Jinx.webp",
  33,
  1.4,
  9,
  "Bottom"
);

const xayah = new Champion(
  "Xayah",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6AuDrfnALEOgzzlvCApe7KoVPSNgZ50J7FA&s",
  50,
  3.11,
  6,
  "Bottom"
);

const missFortune = new Champion(
  "Miss Fortune",
  "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/missfortune/skins/base/images/missfortune_splash_tile_0.jpg",
  57,
  2.47,
  7,
  "Bottom"
);

// Support

const luxSupport = new Champion(
  "Lux",
  "https://statics.koreanbuilds.net/tile_200x200/Lux.webp",
  64,
  3.29,
  11,
  "Support"
);

const thresh = new Champion(
  "Thresh",
  "https://statics.koreanbuilds.net/tile_200x200/Thresh.webp",
  63,
  3.67,
  8,
  "Support"
);

const yuumi = new Champion(
  "Yuumi",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfizg-oQZX_VOlBFppu_Jkj0u9W08DaQZ3g&s",
  75,
  8.57,
  4,
  "Support"
);

const senna = new Champion(
  "Senna",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYTUxAA_144mQvzHkn0u4EhCKOjfBSvH-jg&s",
  33,
  2.41,
  6,
  "Support"
);

const pantheon = new Champion(
  "Pantheon",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ia7--yrLh8OeGLrfTKl6e3oc3oqbHGtF_g&s",
  50,
  1.4,
  4,
  "Support"
);

const velkoz = new Champion(
  "Vel'koz",
  "https://i1.sndcdn.com/artworks-000075477008-a4z9d5-t500x500.jpg",
  100,
  3.42,
  2,
  "Support"
);

const championPool = [
  mordekaiser,
  gwen,
  singed,
  nunuWillump,
  lillia,
  kindred,
  nocturne,
  viego,
  luxMid,
  syndra,
  hwei,
  veigar,
  ekko,
  azir,
  jinx,
  xayah,
  missFortune,
  luxSupport,
  thresh,
  yuumi,
  senna,
  pantheon,
  velkoz,
];

let currentChampionPool = [...championPool];

const topLane = new Lane(
  "Top",
  "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-top-hover.png"
);

const jungleLane = new Lane(
  "Jungle",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ec970f4-1706-4915-9a93-41f3d9c8202c/degndao-3803ac5c-8d3b-4205-bdac-17e03fb712dd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJlYzk3MGY0LTE3MDYtNDkxNS05YTkzLTQxZjNkOWM4MjAyY1wvZGVnbmRhby0zODAzYWM1Yy04ZDNiLTQyMDUtYmRhYy0xN2UwM2ZiNzEyZGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dl2fyLAB4_80akvDhBoZ-4w7eforvxOeLLeqT1Jx2G4"
);

const midLane = new Lane(
  "Mid",
  "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-middle.png"
);

const bottomLane = new Lane(
  "Bottom",
  "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-bottom.png"
);

const supportLane = new Lane(
  "Support",
  "https://tiermaker.com/images/templates/1865361570283725.jpg"
);

const lanes = [topLane, jungleLane, midLane, bottomLane, supportLane];
let currentLanes = [...lanes];

// Functions

function displayChampions() {
  rightEl.innerHTML = "";
  for (const lane of currentLanes) {
    lane.display();
    const laneEl = document.getElementById(lane.lane.toLowerCase());
    for (const champ of currentChampionPool) {
      const laneIndex = champ.position.indexOf(lane.lane);
      if (laneIndex != -1) {
        if (champ.textColour != "") {
          laneEl.innerHTML += `<div class="content-container"><div class="img-container"><img class="champ-img" src="${
            champ.img
          }" alt="${champ.name} Image"/><h3 style="color:${
            champ.textColour
          };" class="champ-name">${
            champ.name
          }</h3></div><ul class="description"><li>Win-rate: <span class="${champ.winRateColour()}">${
            champ.winRate
          }%</span></li><li>AVG K/D/A: ${champ.kda}</li><li>Games Played: ${
            champ.gamesPlayed
          }</li></ul>`;
        } else {
          laneEl.innerHTML += `<div class="content-container"><div class="img-container"><img class="champ-img" src="${
            champ.img
          }" alt="${champ.name} Image"/><h3 class="champ-name">${
            champ.name
          }</h3></div><ul class="description"><li>Win-rate: <span class="${champ.winRateColour()}">${
            champ.winRate
          }%</span></li><li>AVG K/D/A: ${champ.kda}</li><li>Games Played: ${
            champ.gamesPlayed
          }</li></ul>`;
        }
      }
    }
    if (laneEl.children.length === 0) {
      laneEl.innerHTML += `<p style="color: white; font-size: 20px">No matches for this lane!</p>`;
    }
  }
}

function updateChampions(lanesInput, names, winRate, kda, gamesPlayed) {
  let regexArray = [];
  if (typeof names == typeof []) {
    names.forEach((name) => {
      regexArray.push(
        new RegExp(
          `${name[0].toLowerCase()}${name
            .slice(1)
            .toLowerCase()}|${name[0].toUpperCase()}${name
            .slice(1)
            .toLowerCase()}`
        )
      );
    });
  } else {
    regexArray.push(
      new RegExp(
        `${names[0].toLowerCase()}|${names[0].toUpperCase()}${names
          .slice(1)
          .toLowerCase()}`
      )
    );
  }

  currentChampionPool = championPool.filter((champ) => {
    const isLane = lanesInput.indexOf(champ.position) != -1;
    console.log(regexArray);
    const isNameArray = regexArray.map((regex) => {
      return regex.test(champ.name);
    });
    console.log(isNameArray);
    console.log(isNameArray.indexOf(true));
    const isName = isNameArray.indexOf(true) != -1;
    const isWin = parseInt(winRate) <= champ.winRate;
    const isKDA = parseFloat(kda) <= champ.kda;
    const isPlayed = parseInt(gamesPlayed) <= champ.gamesPlayed;
    return isLane && isName && isWin && isKDA && isPlayed;
  });
  currentLanes = lanes.filter((lane) => {
    return lanesInput.indexOf(lane.lane) != -1;
  });

  displayChampions();
}

function getInput() {
  const lanesArray = [];
  let searchInput;
  let winRateInput;
  let kdaInput;
  let gamesPlayedInput;
  if (topCheckBoxEl.checked) {
    lanesArray.push("Top");
  }
  if (jungleCheckBoxEl.checked) {
    lanesArray.push("Jungle");
  }
  if (midCheckBoxEl.checked) {
    lanesArray.push("Mid");
  }
  if (bottomCheckBoxEl.checked) {
    lanesArray.push("Bottom");
  }
  if (supportCheckBoxEl.checked) {
    lanesArray.push("Support");
  }

  searchInputEl.value === ""
    ? (searchInput = championPool.map((champion) => {
        return champion.name;
      }))
    : (searchInput = searchInputEl.value.trim().split(", "));

  winRateInputEl.value === ""
    ? (winRateInput = 0)
    : (winRateInput = winRateInputEl.value);

  kdaInputEl.value === "" ? (kdaInput = 0) : (kdaInput = kdaInputEl.value);

  gamesPlayedInputEl.value === ""
    ? (gamesPlayedInput = 0)
    : (gamesPlayedInput = gamesPlayedInputEl.value);

  if (lanesArray.length === 0) {
    const allLanes = lanes.map((lane) => {
      return lane.lane;
    });
    updateChampions(
      allLanes,
      searchInput,
      winRateInput,
      kdaInput,
      gamesPlayedInput
    );
  } else {
    updateChampions(
      lanesArray,
      searchInput,
      winRateInput,
      kdaInput,
      gamesPlayedInput
    );
  }
}

// Listeners

filterBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  getInput();
});

displayChampions();
