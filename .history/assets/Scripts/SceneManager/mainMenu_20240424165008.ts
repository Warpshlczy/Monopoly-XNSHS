import { _decorator, Component, director, Node, log } from "cc";
const { ccclass, property } = _decorator;

@ccclass("mainMenu")
export class mainMenu extends Component {
  onLoad() {
    this.node.on("startGame", () => {
      log("startGame");
      director.loadScene("game");
    });
  }
  start() {}
  update(deltaTime: number) {}
}
