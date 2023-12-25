type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

type Player = {
  nickname: string;
  team: Team;
  health: Health;
};

interface Person {
  nickname: string;
  team: Team;
  health: Health;
}

interface User {
  name: string;
}

interface User3 extends User {}

const kyukyu: User3 = {
  name: "minkyu",
};

export {};
