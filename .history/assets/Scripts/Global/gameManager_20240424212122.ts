import { _decorator, Component, Node, Scene } from "cc";
const { ccclass, property } = _decorator;

@ccclass("gameManager")
export class gameManager extends Component {
  @property({ type: Scene })
  public currentScene: Scene;
  start() {
    this.currentScene = this.node.scene;
  }

  update(deltaTime: number) {}
}
