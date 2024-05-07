import { _decorator, Component, log, Node } from "cc";
import { eventCenter } from "../../Global/eventCenter";
const { ccclass, property } = _decorator;

@ccclass("")
export class StartGame extends Component {
  start() {
    this.node.on(Node.EventType.MOUSE_DOWN, () => {
      eventCenter.send("startGame");
    });
  }
}
