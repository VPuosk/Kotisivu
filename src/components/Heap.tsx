import { GraphNode } from "./GraphComponents"

class GraphNodeHeap {
  node: GraphNode;
  comparator: number;

  constructor(node:GraphNode, value:number) {
    this.node = node;
    this.comparator = value;
  }
}

const defaultNode = new GraphNode('dummy')
const defaultGNNode = new GraphNodeHeap(defaultNode,0);

export class Heap {
  length: number
  nodes: GraphNodeHeap[];

  constructor() {
    //inserting dummy node to index 0 to simply the math
    this.nodes = [defaultGNNode];
    this.length = 0;
  }

  addGraphNode( data : GraphNode, value :number ) {
    const newNode = new GraphNodeHeap(data, value);
    this.length = this.length + 1;

    // adds new node to the last 'virtual' position on the binary tree
    if (this.nodes.length <= this.length) {
      this.nodes = [...this.nodes, newNode];
    } else {
      const nodes : GraphNodeHeap[] = [...this.nodes];
      nodes[this.length] = newNode;
      this.nodes = nodes;
    }
    // start the checking chain upwards
    this.organizeUp(this.length)
  }

  pullGraphNode() : GraphNode | null {
    if (this.length === 0) {
      return null;
    }

    const returnee : GraphNode = this.nodes[1].node;
    console.log('return: ',this.nodes[1])
    this.swapNodes(1, this.length);
    this.length = this.length - 1;
    this.organizeDown(1)

    return returnee;
  }

  organizeUp( idx : number ) {
    if (idx === 1) {
      return;
    }

    const parentIdx = Math.floor(idx / 2);

    if (this.nodes[parentIdx].comparator > this.nodes[idx].comparator) {
      this.swapNodes(parentIdx, idx);
      this.organizeUp(parentIdx);
    }
  }

  organizeDown( idx: number) {
    const idxA = idx * 2;
    const idxB = idxA + 1;

    // no children for this node
    if (this.length < idxA) {
      return;
    }

    // only one child for this node
    if (this.length === idxA) {
      if (this.nodes[idx].comparator > this.nodes[idxA].comparator) {
        this.swapNodes(idx, idxA);
      }
      return;
    }

    // more than one...
    if (this.nodes[idxA].comparator < this.nodes[idxB].comparator) {
      if (this.nodes[idxA].comparator < this.nodes[idx].comparator) {
        this.swapNodes(idxA, idx);
        this.organizeDown(idxA);
      }
    } else {
      if (this.nodes[idxB].comparator < this.nodes[idx].comparator) {
        this.swapNodes(idxB, idx);
        this.organizeDown(idxB);
      }
    }
  }

  swapNodes( idxA : number, idxB : number ) {
    const nodes : GraphNodeHeap[] = [...this.nodes]
    const tempNodeA : GraphNodeHeap = nodes[idxA];
    nodes[idxA] = nodes[idxB];
    nodes[idxB] = tempNodeA;
    this.nodes = nodes;
  }

  print () : Heap {
    const arry = {...this}
    return arry
  }
}