import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("")
export class StartGame extends Component {
  start() {
    this.node.on(Node.EventType.click, () => {});
  }

  update(deltaTime: number) {}
}
