import { _decorator, Component, Node, Scene } from "cc";
const { ccclass, property } = _decorator;

@ccclass("gameManager")
export class GameManager extends Component {
  private static _instance: GameManager = null;
  //当前游戏场景
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
