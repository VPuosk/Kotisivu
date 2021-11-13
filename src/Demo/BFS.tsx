import React from "react";
import { Heap } from "../components/Heap";
import { GraphEdge, GraphNode } from "../components/GraphComponents";

// static data testing
const getGraphTestData = () : Heap => {
  const heap = new Heap();
  const nodeA = new GraphNode('a');
  const nodeB = new GraphNode('b');
  const nodeC = new GraphNode('c');
  console.log('heap init',heap)
  heap.addGraphNode(nodeA,15)
  heap.addGraphNode(nodeB,10)
  heap.addGraphNode(nodeC,5)
  console.log('heap ready', heap)
  
  return heap
}

const BFS = () => {
  const hp : Heap = getGraphTestData();
  let stroutput  = "";

  stroutput = stroutput + hp.pullGraphNode()?.id;
  const newNode = new GraphNode('new')
  hp.addGraphNode(newNode,25)
  //newNode.changeDistance(2)
  hp.addGraphNode(newNode,7)
  stroutput = stroutput + hp.pullGraphNode()?.id;
  newNode.visited = true
  stroutput = stroutput + hp.pullGraphNode()?.id;
  stroutput = stroutput + hp.pullGraphNode()?.id;
  
  stroutput = stroutput + hp.pullGraphNode()?.id;
  stroutput = stroutput + hp.pullGraphNode()?.id;

  console.log(stroutput)

  return (
    <div>
    </div>
  )
}

export default BFS