import { _decorator, Component, Node } from "cc";

import { eventBus } from "../../Global/eventCenter";
import { map_1 } from "../../GameConfig/Maps/map_1";
const { ccclass, property } = _decorator;

@ccclass("sentry")
export class Sentry extends Component {
  round: number;
  start() {
    this.init();
  }

  update(deltaTime: number) {}
  init() {}
  //地图是随机的，从几种地图中随机选择一个
  initMap() {
    eventBus.emit("initMap", [map_1]);
  }
  //玩家区域的四块位置是随机的
  initPlayerZone() {}
  //玩家初始棋子的位置是随机的
  initPlayerPieces() {}
}
