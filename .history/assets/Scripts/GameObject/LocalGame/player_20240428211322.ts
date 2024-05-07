import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("player")
export class player extends Component {
  public playerID: number;
  public playerName: string;
  public isRealPlayer: boolean;
  public isBot: boolean;
  public money: number;
  set() {}
}
