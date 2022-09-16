const express = require("express");

const programa = express();

programa.listen(3000, () => {
  console.log("SERVIDOR RODANDO");
});
