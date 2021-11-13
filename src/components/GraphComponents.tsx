export class GraphEdge {
  start: GraphNode;
  end: GraphNode;
  weight: number;

  constructor( nodeA : GraphNode, nodeB : GraphNode, weight : number) {
    this.start = nodeA;
    this.end = nodeB;
    this.weight = weight;
  }

  changeGraphEdgeWeight( newWeight : number ) {
    this.weight = newWeight;
  }
}

export class GraphNode {
  id: string;
  edges: GraphEdge[];
  visited: boolean;

  constructor(id : string) {
    this.id = id;
    this.edges= [];
    this.visited = false;
  }

  addGraphEdge( edge : GraphEdge ) {
    this.edges = this.edges.concat(edge);
  }
}