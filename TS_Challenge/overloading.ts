type Config = {
  path: string;
  state: number;
};

type Push = {
  (config: Config): void;
  (config: string): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else console.log(config.path);
};
push("hi");
