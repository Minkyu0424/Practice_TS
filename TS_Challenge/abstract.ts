type Player = {
  name: string;
};

const player: Player = {
  name: "mico",
};
/////interface
interface PlayerB {
  name: string;
}

interface playerBB extends PlayerB {
  lastName: string;
}

const plyerB: playerBB = {
  name: "kiko",
  lastName: "kakao",
};

type min = {
  firstName: string;
};
interface kyu {
  firstName: string;
}
class mymin implements min {
  constructor(public firstName: string) {}
}
class mykyu implements kyu {
  constructor(public firstName: string) {}
}

export {};
