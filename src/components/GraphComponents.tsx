export class GraphEdge {
  node: GraphNode;
  parent: GraphNode;
  weight: number;

  constructor( node : GraphNode, parent: GraphNode, weight : number) {
    this.node = node;
    this.parent = parent;
    this.weight = weight;
  }

  changeGraphEdgeWeight( newWeight : number ) {
    this.weight = newWeight;
  }
}

export class GraphNode {
  id: string;
  edges: GraphEdge[];
  parentNode: GraphNode | null;
  visited: boolean;
  minimum: number;

  constructor(id : string) {
    this.id = id;
    this.edges= [];
    this.parentNode = null;
    this.visited = false;
    this.minimum = Number.MAX_SAFE_INTEGER;
  }

  addGraphEdge( edge : GraphEdge ) {
    this.edges = this.edges.concat(edge);
  }

  setParent( node : GraphNode) {
    this.parentNode = node;
  }
}