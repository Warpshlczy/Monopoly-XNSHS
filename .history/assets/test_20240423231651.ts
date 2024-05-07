import { _decorator, Component, Node, input, Button, director } from "cc";
const { ccclass, property } = _decorator;

@ccclass("NewComponent")
export class NewComponent extends Component {
  public test: string;
  constructor(test: string) {
    super();
    this.test = test;
  }
  start() {
    console.log("Hello World");
    this.getComponent(Button);
  }

  update(deltaTime: number) {}
}
