import {
  _decorator,
  Component,
  NodeEventType,
  director,
  Node,
  Scene,
  log,
} from "cc";
import { SceneManager } from "../Manager/sceneManager";
const { ccclass, property } = _decorator;

type GlobalData = {
  userName: string;
  token: string;
};
@ccclass("gameManager")
export class GameManager extends Component {
  private static _instance: GameManager;
  private currentScene: Scene;
  private sceneManager: SceneManager;
  private globalData: any;
  private constructor() {
    super();
  }
  onLoad() {
    this.init();
  }

  update(deltaTime: number) {}
  init() {
    //单例模式，保证GameManager在游戏全局仅有一个实例和组件脚本
    if (this.node.name === "GameManager" && !GameManager._instance) {
      GameManager._instance = this;
      //切换场景时获取当前场景信息和加载场景管理
      this.node.on(NodeEventType.SCENE_CHANGED_FOR_PERSISTS, () => {
        setTimeout(() => {
          this.loadScene();
        }, 1);
      });
      director.addPersistRootNode(this.node);
    } else {
      this.destroy();
    }
    this.loadScene();
  }
  loadScene() {
    this.currentScene = this.node.scene;
    this.sceneManager = this.loadSceneManager();
  }
  loadSceneManager() {
    const manager = new Node("SceneManager").addComponent(SceneManager);
    this.currentScene.addChild(manager.node);
    return manager;
  }
}
