import { _decorator, Component, Node, Scene, log } from "cc";
import { getAllNodesInScene } from "../Util";
import { eventCenter, eventBus } from "../Global/eventCenter";
const { ccclass, property } = _decorator;

@ccclass("sceneManager")
export class SceneManager extends Component {
  protected managedScene: Scene;
  protected allNodes: any;
  onLoad() {
    this.init();
  }
  start() {}
  update(deltaTime: number) {
    this.allNodes = getAllNodesInScene(this.managedScene);
  }
  init() {
    this.managedScene = this.node.scene;
    this.listenSceneEvents(eventCenter);
  }
  listenSceneEvents(eventCenter: any) {
    const events = eventCenter[this.managedScene.name];
    for (const eventName in events) {
      eventBus.on(eventName, events[eventName]);
    }
  }
}
