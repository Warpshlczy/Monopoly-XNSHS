import { _decorator, Component, director, Node, log } from "cc";
const { ccclass, property } = _decorator;

@ccclass("mainMenu")
export class mainMenu extends Component {
  private managedScene: Node;
  private allNodes: object;

  onLoad() {
    // this.node.on("startGame", () => {
    //   log("startGame");
    //   director.loadScene("game");
    // });
  }
  start() {
    this.managedScene = this.node.scene;
    this.node.scene.children.forEach((node) => {
      this.allNodes[node.name] = node;
    });
  }
  update(deltaTime: number) {}
}