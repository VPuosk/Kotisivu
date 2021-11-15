import React from "react";
import { Heap } from "../components/Heap";
import { GraphEdge, GraphNode } from "../components/GraphComponents";
import BFSForm from "./BFSForm";

// static data startpoint
const startNode = new GraphNode('start')
const endNode = new GraphNode('end')
const nodeA = new GraphNode('a')
const nodeB = new GraphNode('b')
const nodeC = new GraphNode('c')
const edgeA = new GraphEdge(nodeA, startNode,1)
const edgeB = new GraphEdge(nodeB, nodeA,1)
const edgeC = new GraphEdge(nodeC, nodeB,1)
const edgeD = new GraphEdge(endNode, nodeC,1)
const edgeE = new GraphEdge(endNode, startNode, 5)
startNode.addGraphEdge(edgeA)
startNode.addGraphEdge(edgeE)
nodeA.addGraphEdge(edgeB)
nodeB.addGraphEdge(edgeC)
nodeC.addGraphEdge(edgeD)


const BFS = () => {
  const hp : Heap = new Heap();

  let completed = false;

  // node handler for recursion
  const handleNode = (node : GraphNode | null) => {
    console.log('handleNode:',node)

    if (node === null) {
      return;
    }
  
    // this has been visited, bail
    if (node.visited) {
      return;
    }

    if (node === endNode) {
      completed = true;
      return;
    }
  
    node.edges.map(edge => {
      if (edge.node.visited) {
        return;
      }
  
      const current_minimum = node.minimum + edge.weight
  
      if (current_minimum < edge.node.minimum) {
        edge.node.minimum = current_minimum
        edge.node.setParent(node)
        hp.addGraphNode(edge.node, current_minimum);
      } 
    })
  }

  // recursive iterator
  const processSearch = () => {
    if (completed || (hp.length === 0)) {
      // heap is empty, time to end
      return;
    }

    const currentNode = hp.pullGraphNode();
    handleNode(currentNode);
    processSearch();
  }

  // recursion trigger
  const initSearch = () => {
    startNode.minimum = 0
    hp.addGraphNode(startNode, 0)
    processSearch();
  }

  initSearch();

  let resultArray : string[] = []

  const printParent = (node : GraphNode) => {
    console.log('current node: ', node.id)
    resultArray = [...resultArray, node.id + ' (' + node.minimum + ')']

    if (node.parentNode !== null) {
      printParent(node.parentNode);
    }
  }

  if (endNode.parentNode !== null) {
    printParent(endNode)
  }

  const reverseArray = resultArray.reverse()

  return (
    <div>
      <BFSForm keko={hp}/>
      {reverseArray.join(' - ')}
    </div>
  )
}

export default BFS