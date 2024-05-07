import {
  _decorator,
  director,
  log,
  resources,
  Node,
  instantiate,
  Prefab,
  Canvas,
  Label,
} from "cc";
import { SceneManager } from "../Manager/sceneManager";
import { GameMap } from "../GameConfig/Maps/map_1";
import { LandBlock } from "../GameObject/LocalGame/landBlock";
import { renamePrefab } from "../Util";

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
      // const mapNode = new Node("TheGameMap");
      const gameMap = (this as SceneManager).allNodes.Canvas.GameMap;
      // (this as SceneManager).allNodes.Canvas.addChild(mapNode);
      resources.load("prefabs/LandBlock", Prefab, (err, prefab) => {
        map.lands.forEach((landData, index) => {
          const newLand = instantiate(prefab) as any;
          renamePrefab(newLand, `LandBlock_${index}`);
          newLand.getComponent(LandBlock).data = landData;
          newLand.setPosition(landData.x, landData.y);
          gameMap.addChild(newLand);
          log(newLand);
          // newLand.Label.label.string = landData.name;
        });
      });
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