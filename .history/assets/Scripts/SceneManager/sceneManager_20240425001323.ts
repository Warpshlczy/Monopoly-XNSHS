import { _decorator, Component, Node, Scene } from "cc";
const { ccclass, property } = _decorator;

@ccclass("sceneManager")
export class SceneManager extends Component {
  private managedScene: Scene;
  private allNodes: any;

  start() {}

  update(deltaTime: number) {}
}
