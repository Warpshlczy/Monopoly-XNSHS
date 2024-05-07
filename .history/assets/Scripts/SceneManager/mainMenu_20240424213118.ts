import { _decorator, Component, director, Node, log } from "cc";
const { ccclass, property } = _decorator;

@ccclass("mainMenu")
export class mainMenu extends Component {
  @property({ type: Node })
  public allNodes: Node[];
  onLoad() {
    // this.node.on("startGame", () => {
    //   log("startGame");
    //   director.loadScene("game");
    // });
  }
  start() {
    this.allNodes = this.node.scene.children;
  }
  update(deltaTime: number) {}
}
