import { _decorator, Component, Node, Prefab } from "cc";
const { ccclass, property } = _decorator;

@ccclass("sceneManager")
export class sceneManager extends Component {
  start() {}

  update(deltaTime: number) {}
  initMap() {
    this.node.addChild(new Prefab());
  }
}
