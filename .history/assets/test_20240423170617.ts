import { _decorator, Component, Node, input } from "cc";
const { ccclass, property } = _decorator;

@ccclass("NewComponent")
export class NewComponent extends Component {
  start() {
    console.log("Hello World");
    this.node.getComponent();
  }

  update(deltaTime: number) {}
}
