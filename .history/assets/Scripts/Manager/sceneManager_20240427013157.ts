import { _decorator, Component, Node, Scene, log } from "cc";
import { getAllNodesInScene } from "../Util";
import { eventCenter, eventBus } from "../Global/eventCenter";
const { ccclass, property } = _decorator;

@ccclass("sceneManager")
export class SceneManager extends Component {
  public managedScene: Scene;
  public allNodes: any;
  onLoad() {
    this.init();
  }
  start() {}
  update(deltaTime: number) {}
  init() {
    this.managedScene = this.node.scene;
    this.allNodes = getAllNodesInScene(this.managedScene);

    this.listenSceneEvents(eventCenter);
  }
  listenSceneEvents(eventCenter: any) {
    const events = eventCenter[this.managedScene.name];
    for (const eventName in events) {
      eventBus.on(eventName, events[eventName], this);
    }
  }
}
