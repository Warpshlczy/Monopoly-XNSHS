import { _decorator, Component, Node } from "cc";
import { eventCenter } from "../Global/eventCenter";
const { ccclass, property } = _decorator;

@ccclass("mainMenu")
export class mainMenu extends Component {
  start() {
    eventCenter.on("mainMenu");
  }

  update(deltaTime: number) {}
}
