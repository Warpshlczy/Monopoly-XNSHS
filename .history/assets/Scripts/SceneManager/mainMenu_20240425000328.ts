import { _decorator, Component, director, Node, log, Scene } from "cc";
import { getAllNodesInScene } from "../Util";
const { ccclass, property } = _decorator;

@ccclass("mainMenu")
export class mainMenu extends Component {
  private managedScene: Scene;
  private allNodes: any = {};

  onLoad() {
    // this.node.on("startGame", () => {
    //   log("startGame");
    //   director.loadScene("game");
    // });
  }
  start() {
    this.managedScene = this.node.scene;
    this.allNodes = getAllNodesInScene(this.managedScene);
    console.log(this.allNodes.GameTitle.name);
  }
  update(deltaTime: number) {}
}
