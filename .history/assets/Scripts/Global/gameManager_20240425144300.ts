import { _decorator, Component, director, Node, Scene } from "cc";
import { SceneManager } from "../SceneManager/sceneManager";
const { ccclass, property } = _decorator;

@ccclass("gameManager")
export class GameManager extends Component {
  private static _instance: GameManager;
  private currentScene: Scene;
  private sceneManager: SceneManager;
  private constructor() {
    super();
  }
  start() {
    //单例模式，保证GameManager在游戏全局仅有一个实例和组件脚本
  }
  update(deltaTime: number) {}
  init() {
    if (this.node.name === "GameManager" && !GameManager._instance) {
      GameManager._instance = this;
      director.addPersistRootNode(this.node);
    } else {
      this.destroy();
    }
    this.currentScene = this.node.scene;
    this.sceneManager = this.loadSceneManager();
  }
  loadSceneManager() {
    const manager = new Node("SceneManager").addComponent(SceneManager);
    this.currentScene.addChild(manager.node);
    return manager;
  }
}
