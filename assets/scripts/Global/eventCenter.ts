import {
  _decorator,
  director,
  log,
  resources,
  Node,
  instantiate,
  Prefab,
  Label,
  Component,
  UITransformComponent,
} from "cc";
import { SceneManager } from "../Manager/sceneManager";
import { GameMap } from "../GameConfig/Maps/map_1";
import { LandBlock } from "../GameObject/LocalGame/landBlock";
import { renamePrefab, simpleClone } from "../Util";
import { Player } from "../GameObject/LocalGame/player";
import { Land } from "../Items/lands";
import { PlayerPiece } from "../GameObject/LocalGame/playerPiece";

const { ccclass, property } = _decorator;
export const eventCenter = {
  mainMenu: {
    startLocalGame: () => {
      director.loadScene("localGame");
    },
  },
  localGame: {
    backToMainMenu: () => {
      director.loadScene("mainMenu");
    },
    initMap: function (map: GameMap) {
      console.log("initMap");
      const gameMap = this.allNodes.Canvas.GameMap;
      return new Promise((resolve, reject) => {
        resources.load("prefabs/LandBlock", Prefab, (err, prefab) => {
          map.lands.forEach((landData) => {
            const newLand = instantiate(prefab) as any;
            gameMap.addChild(newLand);
            this.updateNodes();
            newLand.$landBlock.setData(simpleClone(landData));
            renamePrefab(
              newLand,
              `LandBlock_${newLand.$landBlock.data.game_id}`
            );
            newLand.Label.$Label.string = landData.name;
            newLand.Label.setPosition(0, -16);
            if (landData.blockSize) {
              newLand.$UITransform.height = landData.blockSize;
              newLand.$UITransform.width = landData.blockSize;
              newLand.Label.$Label.fontSize = 16;
            }
            newLand.setPosition(landData.x, landData.y);
          });
          resolve(true);
        });
      });
    },
    initPlayers: function () {
      // console.log("player");
      const initPiece = (player: Node, index: number) => {
        const gameMap = this.allNodes.Canvas.GameMap;
        return new Promise((resolve, reject) => {
          resources.load("prefabs/PlayerPiece", Prefab, (err, prefab) => {
            const piece = instantiate(prefab) as any;
            gameMap.addChild(piece);
            this.updateNodes();
            renamePrefab(piece, `Piece_${index}`);
            piece.$playerPiece.setAll(player, 0, 1);
            piece.$Sprite.color = piece.$playerPiece.player.$Sprite.color;
            piece.setPosition(
              gameMap[`LandBlock_${piece.$playerPiece.currentPosition}`]
                .$landBlock.data.x,
              gameMap[`LandBlock_${piece.$playerPiece.currentPosition}`]
                .$landBlock.data.y + 20
            );
            resolve(true);
          });
        });
      };
      const center = this.allNodes.Canvas.Center;
      const loadList = [];
      (center.PlayerZone_1.$player as Player).setAll(1, "你", true, 1500);
      center.PlayerZone_1.PlayerMegBox.Name.$Label.string = "你";
      center.PlayerZone_1.Money.Amount.$Label.string = "1500";
      initPiece(center.PlayerZone_1, 1);
      for (let i = 2; i < 5; i++) {
        center[`PlayerZone_${i}`].$player.setAll(i, "AI玩家" + i, false, 1500);
        center[`PlayerZone_${i}`].Money.Amount.$Label.string = "1500";
        center[`PlayerZone_${i}`].PlayerMegBox.Name.$Label.string =
          "AI玩家" + i;
        loadList.push(initPiece(center[`PlayerZone_${i}`], i));
      }
      return Promise.all(loadList);
    },
    updateRound: function (round: number) {
      const center = this.allNodes.Canvas.Center;
      center.CenterBanner_1.Round.$Label.string = `第${round}轮`;
    },
    switchPlayer: function (playerID: number) {
      const center = this.allNodes.Canvas.Center;
      const currentPlayer = center[`PlayerZone_${playerID}`].$player;
      center.CenterBanner_2.PlayerHint.$Label.string = `现在是${currentPlayer.playerName}的回合`;
    },
  },
};
type ManagerEvent = {
  target: SceneManager;
  callback: Function;
};
class EventBus {
  private eventList: Map<string, ManagerEvent[]> = new Map();

  public emit(eventName: string, args?: Array<any>) {
    if (this.eventList.has(eventName)) {
      let feedback: any;
      this.eventList.get(eventName).forEach((event) => {
        if (args) {
          feedback = event.callback.call(event.target, ...args);
        } else {
          feedback = event.callback.call(event.target);
        }
      });
      return feedback;
    } else return;
  }

  public on(eventName: string, callback: Function, target: SceneManager) {
    //如果没有该事件，则注册监听
    if (!this.eventList.has(eventName)) {
      this.eventList.set(eventName, [{ target, callback }]);
    } else {
      this.eventList.get(eventName).push({ target, callback });
    }
  }

  public once(eventName: string, callback: Function, target: SceneManager) {
    if (!this.eventList.has(eventName)) {
      this.eventList.set(eventName, [
        { target, callback },
        {
          target,
          callback: () => {
            this.eventList.delete(eventName);
          },
        },
      ]);
    } else {
      this.eventList.get(eventName).unshift({ target, callback });
    }
  }
}
export const eventBus = new EventBus();
