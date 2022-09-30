const express = require("express");

const programa = express();

console.log('teste de github');

programa.listen(3000, () => {
  console.log("SERVIDOR RODANDO");
});
