import { Scene,Node } from "cc";
//在SceneManager里面调用，获取当前场景内所有的Node
export const getAllNodesInScene= (scene:Scene,ref:any)=>{
    scene.children.forEach((child:Node)=>{
if(child.children)
    })

}