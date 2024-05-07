import { _decorator, Component, Node, Scene, log } from "cc";
import { getAllNodesInScene } from "../Util";
import { eventCenter, eventBus } from "../Global/eventCenter";
import { _Component } from "../Global/newComponent";
const { ccclass, property } = _decorator;

@ccclass("sceneManager")
export class SceneManager extends _Component {
  public managedScene: Scene;
  public allNodes: any;
  onLoad() {}
  start() {
    this.init();
  }
  update(deltaTime: number) {}
  init() {
    this.managedScene = this.node.scene;
    this.allNodes = getAllNodesInScene(this.managedScene);
    this.listenSceneEvents(eventCenter);
    console.log("场景管理器已加载");
  }
  listenSceneEvents(eventCenter: any) {
    const events = eventCenter[this.managedScene.name];
    for (const eventName in events) {
      eventBus.on(eventName, events[eventName], this);
    }
  }
  updateNodes() {
    getAllNodesInScene(this.managedScene);
  }
}
