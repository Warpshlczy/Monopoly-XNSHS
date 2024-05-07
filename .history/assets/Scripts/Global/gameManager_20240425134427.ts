import { _decorator, Component, Node, Scene } from "cc";
const { ccclass, property } = _decorator;

@ccclass("gameManager")
export class gameManager extends Component {
  //当前游戏场景
  @property({ type: Scene })
  private currentScene: Scene;
  private constructor() {
    super();
  }
  start() {
    this.currentScene = this.node.scene;
  }

  update(deltaTime: number) {}
}
