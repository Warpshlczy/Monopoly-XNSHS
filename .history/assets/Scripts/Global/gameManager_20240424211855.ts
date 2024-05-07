import { _decorator, Component, Node, Scene } from "cc";
const { ccclass, property } = _decorator;

@ccclass("gameManager")
export class gameManager extends Component {
  @property({ type: Scene })
  currentScene: Scene;
  start() {}

  update(deltaTime: number) {}
}
