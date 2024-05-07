import { _decorator, Component, director, Node, log } from "cc";
import { eventCenter } from "../Global/eventCenter";
const { ccclass, property } = _decorator;

@ccclass("mainMenu")
export class mainMenu extends Component {
  onLoad() {
    eventCenter.on("startGame", () => {
      log("啊getGame");
      director.loadScene("localGame");
    });
  }
  start() {}
  update(deltaTime: number) {}
}
