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
      const gameMap = (this as SceneManager).allNodes.Canvas.GameMap;
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
    initPlayer: function () {
      const center = this.allNodes.Center;
      center.PlayerZone_0.$player.setData();
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
