import { _decorator, Component, log, Node, Button } from "cc";
import { eventBus } from "../../Global/eventCenter";
const { ccclass, property } = _decorator;

@ccclass("StartGame")
export class StartGame extends Component {
  start() {
    this.node.on(
      Button.EventType.CLICK,
      () => {
        eventBus.emit("startLocalGame");
      },
      this
    );
  }
  update(deltaTime: number) {}
}
