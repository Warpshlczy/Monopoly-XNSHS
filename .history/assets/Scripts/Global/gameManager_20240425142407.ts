import { _decorator, Component, director, Node, Scene } from "cc";
const { ccclass, property } = _decorator;

@ccclass("gameManager")
export class GameManager extends Component {
  private static _instance: GameManager = null;
  @property({ type: Scene })
  public currentScene: Scene;
  private constructor() {
    super();
  }
  start() {
    //单例模式，保证GameManager在游戏全局仅有一个实例和组件脚本
    if (this.node.name === "GameManager" && !GameManager._instance) {
      GameManager._instance = this;
      director.addPersistRootNode(this.node);
    } else {
      this.destroy();
    }
    this.currentScene = this.node.scene;
  }
  update(deltaTime: number) {}
}
