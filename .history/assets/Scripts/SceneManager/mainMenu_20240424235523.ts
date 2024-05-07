import { _decorator, Component, director, Node, log } from "cc";
import { getAllNodesInScene } from "../Util";
const { ccclass, property } = _decorator;

@ccclass("mainMenu")
export class mainMenu extends Component {
  private managedScene: Node;
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
  }
  update(deltaTime: number) {}
}
