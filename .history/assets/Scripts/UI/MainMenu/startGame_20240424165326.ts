import { _decorator, Component, log, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("")
export class StartGame extends Component {
  start() {
    this.node.on(Node.EventType.MOUSE_DOWN, () => {
      this.node.emit("startGame");
      log("pressed");
    });
  }
}
