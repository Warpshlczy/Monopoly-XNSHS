import { normalLands, specialLands, eventLands } from "../../Items/lands";
import type { Land, EventLand } from "../../Items/lands";
export type GameMap = {
  size: number;
  lands: Array<Land | EventLand>;
};
export const map_1: GameMap = {
  size: 34,
  lands: [
    { ...eventLands[2], x: 0, y: 0, game_id: 1 },
    { ...normalLands[0], x: 100, y: 0, game_id: 2 },
    { ...normalLands[1], x: 200, y: 0, game_id: 3 },
    { ...normalLands[2], x: 300, y: 0, game_id: 4 },
    { ...specialLands[0], x: 400, y: 0, game_id: 5 },
    { ...normalLands[3], x: 500, y: 0, game_id: 6 },
    { ...normalLands[4], x: 600, y: 0, game_id: 7 },
    { ...eventLands[0], x: 700, y: 0, game_id: 8 },
    { ...normalLands[5], x: 800, y: 0, game_id: 9 },
    { ...normalLands[6], x: 900, y: 0, game_id: 10 },
    { ...normalLands[7], x: 1000, y: 0, game_id: 11 },
    { ...eventLands[3], x: 1100, y: 0, game_id: 12 },
    { ...normalLands[8], x: 1100, y: 100, game_id: 13 },
    { ...normalLands[9], x: 1100, y: 200, game_id: 14 },
    { ...specialLands[1], x: 1100, y: 300, game_id: 15 },
    { ...eventLands[1], x: 1100, y: 400, game_id: 16 },
    { ...normalLands[10], x: 1100, y: 500, game_id: 17 },
    { ...eventLands[4], x: 1100, y: 600, game_id: 18 },
    { ...normalLands[11], x: 1000, y: 600, game_id: 19 },
    { ...normalLands[12], x: 900, y: 600, game_id: 20 },
    { ...specialLands[2], x: 800, y: 600, game_id: 21 },
    { ...normalLands[13], x: 700, y: 600, game_id: 22 },
    { ...normalLands[14], x: 600, y: 600, game_id: 23 },
    { ...normalLands[15], x: 500, y: 600, game_id: 24 },
    { ...normalLands[16], x: 400, y: 600, game_id: 25 },
    { ...eventLands[0], x: 300, y: 600, game_id: 26 },
    { ...normalLands[17], x: 200, y: 600, game_id: 27 },
    { ...eventLands[1], x: 100, y: 600, game_id: 28 },
    { ...eventLands[5], x: 0, y: 600, game_id: 29 },
    { ...normalLands[18], x: 0, y: 500, game_id: 30 },
    { ...eventLands[0], x: 0, y: 400, game_id: 31 },
    { ...specialLands[3], x: 0, y: 300, game_id: 32 },
    { ...eventLands[1], x: 0, y: 200, game_id: 33 },
    { ...normalLands[19], x: 0, y: 100, game_id: 34 },
  ],
};
