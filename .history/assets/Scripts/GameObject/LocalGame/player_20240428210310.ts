import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("player")
export class player extends Component {
  playerID: number;
  playerName: string;
  isRealPlayer: boolean;
  isBot: boolean;
  money: number;
  constructor(
    playerID: number,
    playerName: string,
    isRealPlayer: boolean,
    money: number
  ) {
    super();
  }
}
