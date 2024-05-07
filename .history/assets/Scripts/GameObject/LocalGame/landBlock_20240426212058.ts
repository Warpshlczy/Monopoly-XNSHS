import { _decorator, Component, Node } from "cc";
import { EventLand, Land } from "../../items/lands";
const { ccclass, property } = _decorator;

@ccclass("landBlock")
export class landBlock extends Component {
  public data: Land | EventLand;
  start() {}

  update(deltaTime: number) {}
}
