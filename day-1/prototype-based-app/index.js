//const { Trainer } = require("./trainer");
//const { Trainee } = require("./trainee");

import { Trainee } from "./trainee";
import { Trainer } from "./trainer";

const anilTrainee = new Trainee("anil", "gupta", "bng", "angular");

const sunilTrainer = new Trainer("sunil", "mishra", "chn", "vue");
console.log(anilTrainee.print());
console.log(sunilTrainer.print());

var obj = {
  name: "",
  age: 20,
};

var { name } = obj;
console.log(name);
