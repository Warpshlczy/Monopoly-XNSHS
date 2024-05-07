import { _decorator, Component, director, Node } from "cc";
import { eventCenter } from "../Global/eventCenter";
const { ccclass, property } = _decorator;

@ccclass("mainMenu")
export class mainMenu extends Component {
  onLoad() {
    eventCenter.on("startGame", () => {
      () => {
        director.loadScene("localGame");
      };
    });
  }
  start() {}
  update(deltaTime: number) {}
}
