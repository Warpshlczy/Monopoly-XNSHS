import { _decorator, Component, Node, log } from "cc";

import { eventBus } from "../../Global/eventCenter";
import { map_1 } from "../../GameConfig/Maps/map_1";
import { _Component } from "../../Global/newComponent";
import { player } from "./player";
const { ccclass, property } = _decorator;

@ccclass("sentry")
export class Sentry extends _Component {
  //游戏进行的轮数
  round: number;
  //当前操作的玩家
  currentPlayer: player;
  start() {
    this.init();
  }

  update(deltaTime: number) {}
  async init() {
    await this.initMap();
    await this.initPlayers();
  }
  //地图是随机的，从几种地图中随机选择一个
  initMap() {
    return eventBus.emit("initMap", [map_1]);
  }
  //初始化玩家和对应的棋子
  initPlayers() {
    return eventBus.emit("initPlayers");
  }
}
