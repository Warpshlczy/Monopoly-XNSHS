import { _decorator, Component, Node } from "cc";

import { eventBus } from "../../Global/eventCenter";
import { map_1 } from "../../GameConfig/Maps/map_1";
import { _Component } from "../../Global/newComponent";
const { ccclass, property } = _decorator;

@ccclass("sentry")
export class Sentry extends _Component {
  //游戏进行的轮数
  round: number;
  start() {
    this.init();
  }

  update(deltaTime: number) {}
  init() {
    this.initMap();
    this.initPlayers();
  }
  //地图是随机的，从几种地图中随机选择一个
  async initMap() {
    return eventBus.emit("initMap", [map_1]);
  }
  //初始化玩家和对应的棋子
  async initPlayers() {
    return eventBus.emit("initPlayers");
  }
}
