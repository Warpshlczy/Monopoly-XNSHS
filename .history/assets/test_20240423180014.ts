import { _decorator, Component, Node, input, Button } from "cc";
const { ccclass, property } = _decorator;

@ccclass("NewComponent")
export class NewComponent extends Component {
  public test: string;
  constructor() {
    super();
  }
  start() {
    console.log("Hello World");
    this.getComponent(Button);
  }

  update(deltaTime: number) {}
}
