import { _decorator, Component, Node, Scene } from "cc";
import { getAllNodesInScene } from "../Util";
import { eventCenter } from "../Global/eventCenter";
const { ccclass, property } = _decorator;

@ccclass("sceneManager")
export class SceneManager extends Component {
  protected managedScene: Scene;
  protected allNodes: any;

  onLoad() {}
  start() {
    this.init();
  }
  update(deltaTime: number) {}
  init() {
    this.managedScene = this.node.scene;
    this.allNodes = getAllNodesInScene(this.managedScene);
  }
  listenSceneEvents() {
    for (const eventName in eventCenter[this.managedScene.name]) {
    }
  }
}
