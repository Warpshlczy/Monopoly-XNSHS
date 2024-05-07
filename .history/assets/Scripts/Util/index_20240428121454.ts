import { Scene, Node, log } from "cc";

//在SceneManager基类内调用，获取当前场景内所有的Node以及其Components的实例对象并重新封装
export const getAllNodesInScene = (scene: Scene) => {
  const ref = [];
  const _ref = {};
  const findChildren = (node: Node) => {
    if (node.children.length) {
      node.children.forEach((child: Node) => {
        node[child.name] = child;
        findChildren(child);
      });
    } else return;
  };
  scene.children.forEach((node: Node) => {
    ref.push(node);
    findChildren(node);
  });
  ref.forEach((node: Node) => {
    for (const comp of node.components) {
      node[`__${comp.name.split(/[<>]/)[1]}`] = comp;
    }
    _ref[node.name] = node;
  });
  return _ref;
};
//重命名预制体
export const renamePrefab = (prefab: Node, name: string) => {
  prefab.name = name;
};
//克隆节点
export const simpleCloneNode = (obj: any) => {
  const objResult = new Node();
  for (const key in obj) {
    objResult[key] = obj[key];
  }
  return objResult;
};
