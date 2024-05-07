import { _decorator, Component, log, Node } from "cc";
import { eventBus } from "../../Global/eventCenter";
const { ccclass, property } = _decorator;

@ccclass("StartGame")
export class StartGame extends Component {
  start() {
    this.node.once(Node.EventType.MOUSE_DOWN, () => {
      eventBus.emit("startLocalGame");
    });
  }
  update(deltaTime: number) {}
}
