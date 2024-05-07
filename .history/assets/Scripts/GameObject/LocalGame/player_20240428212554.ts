import { _decorator, Component, Node } from "cc";
import { _Component } from "../../Global/newComponent";
const { ccclass, property } = _decorator;

@ccclass("player")
export class player extends _Component {
  public playerID: number;
  public playerName: string;
  public isRealPlayer: boolean;
  public isBot: boolean;
  public money: number;
  set() {}
}
