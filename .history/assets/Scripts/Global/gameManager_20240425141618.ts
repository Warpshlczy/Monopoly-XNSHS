import { _decorator, Component, Node, Scene } from "cc";
const { ccclass, property } = _decorator;

@ccclass("gameManager")
export class GameManager extends Component {
  private static _instance: GameManager = null;
  private currentScene: Scene;
  private constructor() {
    super();
  }
  start() {
    if (this.node.name === "GameManager" && !GameManager._instance) {
      GameManager._instance = this;
    } else {
      this.destroy();
    }
  }
  update(deltaTime: number) {}
}
