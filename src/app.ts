import express from "express";
import { Envs } from "./config";
import { GithubController } from "./presentation/github/controller";

(() => {
  main();
})();

function main() {
  const app = express();
  const controller = new GithubController();

  app.post('/api/github', controller.webHookHandler);

  app.listen(Envs.PORT, () => {
    console.log(`App running on port ${Envs.PORT}`);
  });
}
