import {
  _decorator,
  Component,
  NodeEventType,
  director,
  Node,
  Scene,
  log,
  Director,
} from "cc";
import { SceneManager } from "../Manager/sceneManager";
import { _Component } from "./newComponent";
const { ccclass, property } = _decorator;

export type GlobalData = {
  userName: string;
  token: string;
  //选择的游戏配置
  gameConfig: {
    mode: "local" | "online" | "";
    mapID: number;
  };
};

@ccclass("gameManager")
export class GameManager extends _Component {
  private static _instance: GameManager;
  private currentScene: Scene;
  private sceneManager: SceneManager;
  private globalData: GlobalData;
  private constructor() {
    super();
  }
  onLoad() {
    this.init();
  }

  init() {
    //单例模式，保证GameManager在游戏全局仅有一个实例和组件脚本
    if (this.node.name === "GameManager" && !GameManager._instance) {
      GameManager._instance = this;
      //切换场景时获取当前场景信息和加载场景管理
      // this.node.on(NodeEventType.SCENE_CHANGED_FOR_PERSISTS, () => {
      //   setTimeout(() => {
      //     this.loadScene();
      //   }, 1);
      // });
      director.on(Director.EVENT_AFTER_SCENE_LAUNCH, () => {
        this.loadScene();
      });
      director.addPersistRootNode(this.node);
    } else {
      this.destroy();
      return;
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
  setGlobalData(configName: string, data: any) {
    this.globalData[configName] = data;
  }
  getGlobalData(configName: string) {
    return this.globalData[configName];
  }
  setGameConfig(configName: string, data: any) {
    this.globalData.gameConfig[configName] = data;
  }
  getGameConfig(configName: string) {
    return this.globalData.gameConfig[configName];
  }
}
