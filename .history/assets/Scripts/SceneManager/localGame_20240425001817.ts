import { _decorator, Component, Node, Prefab } from "cc";
const { ccclass, property } = _decorator;

@ccclass("sceneManager")
export class LocalGame extends Component {
  start() {}

  update(deltaTime: number) {}
  initMap() {}
}
