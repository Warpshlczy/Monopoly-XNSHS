import { _decorator, Component, Director, director, Node, Scene } from "cc";
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
    this.init();
  }
  update(deltaTime: number) {}
  init() {
    //单例模式，保证GameManager在游戏全局仅有一个实例和组件脚本
    if (this.node.name === "GameManager" && !GameManager._instance) {
      GameManager._instance = this;
      director.addPersistRootNode(this.node);
      this.node.on(Director.EVENT_BEFORE_SCENE_LOADING, () => {
        this.init();
      });
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