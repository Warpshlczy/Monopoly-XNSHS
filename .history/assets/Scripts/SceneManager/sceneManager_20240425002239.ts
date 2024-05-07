import { _decorator, Component, Node, Scene } from "cc";
import { getAllNodesInScene } from "../Util";
const { ccclass, property } = _decorator;

@ccclass("sceneManager")
export class SceneManager extends Component {
  protected managedScene: Scene;
  protected allNodes: any;

  onLoad() {
    // this.node.on("startGame", () => {
    //   log("startGame");
    //   director.loadScene("game");
    // });
  }
  start() {
    this.init();
  }
  update(deltaTime: number) {}
  init() {
    this.managedScene = this.node.scene;
    this.allNodes = getAllNodesInScene(this.managedScene);
  }
}
