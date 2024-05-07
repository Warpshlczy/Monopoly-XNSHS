import { _decorator, director } from "cc";

const { ccclass, property } = _decorator;
export const eventCenter = {
  mainMenu: {
    startGame: () => {},
    openSetting: () => {},
  },
};
// @ccclass("EventCenter")
// export class EventCenter {
//   private eventList: Map<string, Function[]> = new Map();

//   public send(eventName: string, args?: Array<any>) {
//     if (this.eventList.has(eventName)) {
//       this.eventList.get(eventName).forEach((func) => {
//         if (args) {
//           func(...args);
//         } else {
//           func();
//         }
//       });
//     } else return;
//   }

//   public on(eventName: string, callback: Function) {
//     //如果没有该事件，则注册监听
//     if (!this.eventList.has(eventName)) {
//       this.eventList.set(eventName, [callback]);
//     } else {
//       this.eventList.get(eventName).push(callback);
//     }
//   }

//   public once(eventName: string, callback: Function) {
//     if (!this.eventList.has(eventName)) {
//       this.eventList.set(eventName, [
//         callback,
//         () => {
//           this.eventList.delete(eventName);
//         },
//       ]);
//     } else {
//       this.eventList.get(eventName).unshift(callback);
//     }
//   }
// }
// export const eventCenter = new EventCenter();
