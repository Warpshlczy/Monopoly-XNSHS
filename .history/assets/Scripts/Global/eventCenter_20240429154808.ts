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
import { player } from "../GameObject/LocalGame/player";

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
      const gameMap = this.allNodes.Canvas.GameMap;
      resources.load("prefabs/LandBlock", Prefab, (err, prefab) => {
        map.lands.forEach((landData, index) => {
          const newLand = instantiate(prefab) as any;
          renamePrefab(newLand, `LandBlock_${index}`);
          gameMap.addChild(newLand);
          this.updateNodes();
          newLand.$landBlock.setData(simpleClone(landData));
          newLand.Label.$Label.string = landData.name;
          newLand.Label.setPosition(0, -16);
          if (landData.blockSize) {
            newLand.$UITransform.height = landData.blockSize;
            newLand.$UITransform.width = landData.blockSize;
            newLand.Label.$Label.fontSize = 16;
          }
          newLand.setPosition(landData.x, landData.y);
        });
      });
    },
    initPlayers: function () {
      const initPiece = (player: Node, index: number) => {
        resources.load("prefabs/PlayerPiece", Prefab, (err, prefab) => {
          const piece = instantiate(prefab) as any;
          renamePrefab(piece, `piece_0`);
        });
      };
      const center = this.allNodes.Canvas.Center;
      (center.PlayerZone_1.$player as player).setAll(1, "你", true, 1500);
      center.PlayerZone_1.PlayerMegBox.Name.$Label.string = "你";
      center.PlayerZone_1.Money.Amount.$Label.string = "1500";
      for (let i = 2; i < 5; i++) {
        center[`PlayerZone_${i}`].$player.setAll(i, "AI玩家" + i, false, 1500);
        center[`PlayerZone_${i}`].Money.Amount.$Label.string = "1500";
        center[`PlayerZone_${i}`].PlayerMegBox.Name.$Label.string =
          "AI玩家" + i;
      }
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
      this.eventList.get(eventName).forEach((event) => {
        if (args) {
          event.callback.call(event.target, ...args);
        } else {
          event.callback.call(event.target);
        }
      });
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
