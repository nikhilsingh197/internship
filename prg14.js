const data = [
  { id: "a", news: "pak cannot win the world cup" },
  { id: "b", news: "pakistan is a bad team" },
  { id: "c", news: "pakistan is a bad team" },
  { id: "d", news: "pakistan is a very bad team" },
  { id: "e", news: "pakistan is a very bad team" },
  { id: "f", news: "pakistan is a very very bad team" },
  { id: "g", news: "pakistan is a very very bad team" },
  { id: "h", news: "pakistan is a very very very bad team" },
  { id: "i", news: "pakistan is a very very very bad team" },
  { id: "j", news: "pakistan is a very very very very bad team" },
  { id: "k", news: "pakistan is a very very very very bad team" },
  { id: "l", news: "pakistan is a very very very very very bad team" },
  { id: "m", news: "pakistan is a very very very very very bad team" },
  { id: "n", news: "pakistan is a very very very very very very bad team" },
  { id: "o", news: "pakistan is a very very very very very very bad team" },
  {
    id: "p",
    news: "pakistan is a very very very very very very very bad team",
  },
];
function findnews(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      console.log(data[i].news);
    }
  }
  function tlimit(data) {
    console.log("total news = " + data.length);
  }
  function blimit(data) {
    console.log("news from last = " + data.length);
  }
}
console.log(findnews(data, "a"));
console.log(tlimit(data));
console.log(blimit(data));
