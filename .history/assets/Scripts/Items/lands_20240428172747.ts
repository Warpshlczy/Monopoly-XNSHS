export interface Land {
  id: number;
  type: string;
  name: string;
  description?: string;
  price: Array<number>;
  owner: string;
  rent: Array<number>;
  level: number;
  functions: [];
  game_id?: number;
  x?: number;
  y?: number;
  blockSize?: number;
}
export interface EventLand {
  id: number;
  type: string;
  name: string;
  functions: [];
  description: string;
  game_id?: number;
  x?: number;
  y?: number;
  blockSize?: number;
}

export const normalLands: Land[] = [
  {
    id: 1,
    type: "normal",
    name: "停车棚",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 2,
    type: "normal",
    name: "篮球场",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 3,
    type: "normal",
    name: "办公楼",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },

  {
    id: 5,
    type: "normal",
    name: "道德教学楼",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 6,
    type: "normal",
    name: "图书馆",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 7,
    type: "normal",
    name: "生物园",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 8,
    type: "normal",
    name: "挺虎楼",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 9,
    type: "normal",
    name: "新教学楼",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 10,
    type: "normal",
    name: "金石书院",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 11,
    type: "normal",
    name: "羽毛球场",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 13,
    type: "normal",
    name: "学生宿舍1",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 14,
    type: "normal",
    name: "食堂",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 16,
    type: "normal",
    name: "顶尖阁",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 17,
    type: "normal",
    name: "林德临综合楼",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 18,
    type: "normal",
    name: "教工宿舍",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 19,
    type: "normal",
    name: "校史馆",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 20,
    type: "normal",
    name: "学生宿舍2",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 21,
    type: "normal",
    name: "公共园区",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 23,
    type: "normal",
    name: "风雨操场",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 24,
    type: "normal",
    name: "林德临教学楼",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
];
export const specialLands: Land[] = [
  {
    id: 4,
    type: "special",
    name: "火龙果雕塑",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 12,
    type: "special",
    name: "金石山",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 15,
    type: "special",
    name: "小卖部",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
  {
    id: 22,
    type: "special",
    name: "大操场",
    price: [200, 500, 1000],
    owner: "",
    rent: [100, 250, 500],
    level: 0,
    functions: [],
  },
];
export const eventLands: EventLand[] = [
  {
    id: 1,
    type: "fate",
    name: "命运!",
    functions: [],
    description: "从命运牌堆中随机抽取一张卡，玩家必须执行命运卡上触发的事件",
  },
  {
    id: 2,
    type: "chance",
    name: "天赐良机!",
    functions: [],
    description:
      "从机会牌堆中随机抽取一张卡,玩家可以选择是否执行机会卡上的效果",
  },
  {
    id: 3,
    type: "base",
    name: "起点",
    functions: [],
    description: "这是起点，路过时，增加1500￥",
    blockSize: 120,
  },
  {
    id: 4,
    type: "base",
    name: "保卫处",
    functions: [],
    description: "除非摇到6，否则无法离开保卫处",
    blockSize: 120,
  },
  {
    id: 5,
    type: "base",
    name: "办公室",
    functions: [],
    description: "暂停两轮",
    blockSize: 120,
  },
  {
    id: 6,
    type: "base",
    name: "被处分",
    functions: [],
    description: "直接进入保卫处",
    blockSize: 120,
  },
];
