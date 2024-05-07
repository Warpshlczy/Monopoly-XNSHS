import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("player")
export class player extends Component {
  playerID: number;
  playerName: string;
  isRealPlayer: boolean;
  isBot: boolean;
}