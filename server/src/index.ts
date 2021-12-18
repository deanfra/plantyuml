import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const plantuml = require("node-plantuml");

const app = express();
const port = 3001;

// Enable cors security headers
app.use(cors());

// add an express method to parse the POST method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post<{ uml: string }>("/svg", function (req, res) {
  res.set("Content-Type", "image/svg+xml");
  const { uml } = req.body;
  const conf = { format: "svg" };
  var gen = plantuml.generate(uml, conf);
  gen.out.pipe(res);
});

// const defaultUml = '@startuml\n"Alice" -> Bob: test\n@enduml';

// app.get("/svg", function (_req, res) {
//   res.set("Content-Type", "image/svg+xml");
//   const conf = { format: "svg" };
//   var gen = plantuml.generate(defaultUml, conf);
//   gen.out.pipe(res);
// });

app.listen(port, () =>
  console.info(`Example app listening at http://localhost:${port}`)
);
