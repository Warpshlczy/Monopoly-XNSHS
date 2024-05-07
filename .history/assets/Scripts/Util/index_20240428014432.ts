import { Scene, Node, log } from "cc";

//在SceneManager基类内调用，获取当前场景内所有的Node以及其Components的实例对象并重新封装
export const getAllNodesInScene = (scene: Scene) => {
  const ref = [];
  const _ref = {};
  const findChildren = (node: any) => {
    if (node.children.length) {
      node.children.forEach((child) => {
        node[child.name] = child;
        findChildren(child);
      });
    } else return;
  };
  scene.children.forEach((node: Node) => {
    const _node = simpleClone(node) as any;
    ref.push(_node);
    findChildren(_node);
  });
  ref.forEach((node: Node) => {
    for (const comp of node.components) {
      node[comp.name.split(/[<>]/)[1].toLowerCase()] = comp;
    }
    _ref[node.name] = node;
  });
  return _ref;
};
export const renamePrefab = (prefab: Node, name: string) => {
  prefab.name = name;
};
export const simpleClone = (obj: any) => {
  const objResult = {};
  for (const key in obj) {
    objResult[key] = obj[key];
  }
  return objResult;
};
