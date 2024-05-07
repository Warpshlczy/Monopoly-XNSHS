import { _decorator, Component, Node, Scene } from "cc";
const { ccclass, property } = _decorator;

@ccclass("gameManager")
export class GameManager extends Component {
  //当前游戏场景
  @property({ type: Scene })
  private static _instance: GameManager = null;
  private currentScene: Scene;
  private constructor() {
    super();
  }
  start() {
    if (!GameManager._instance) {
      GameManager._instance = new GameManager();
    }
    this.currentScene = this.node.scene;
  }

  update(deltaTime: number) {}
}
