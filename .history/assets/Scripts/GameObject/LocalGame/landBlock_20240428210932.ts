import { _decorator, Component, Node } from "cc";
import { Land } from "../../Items/lands";
const { ccclass, property } = _decorator;

@ccclass("landBlock")
export class LandBlock extends Component {
  public data: Land;
  initData() {
    if (this.data.type === "normal" || this.data.type === "special") {
      this.data.level = 0;
      this.data.owner = "";
    }
  }
  setData(data: Land) {
    this.data = data;
  }
}
