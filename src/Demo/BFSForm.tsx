import React, { ChangeEvent, FormEvent, useState } from "react";
import { GraphEdge, GraphNode } from "../components/GraphComponents";
import { Heap } from "../components/Heap";

interface FormProp {
  keko: Heap,
}

const BFSForm = ({ keko } : FormProp ) => {
  const [nodes, setNodes] = useState<GraphNode[]>([])
  const [formData, setFormData] = useState('')

  const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
    const dataStorage = new Map<string, GraphNode>();

    const splitstr = formData.split(/\r?\n/)
    const header = splitstr[0].split('')
    const alku = header[0]
    const loppu = header[0]

    dataStorage.set(alku, new GraphNode(alku))
    dataStorage.set(loppu, new GraphNode(loppu))
    console.log(dataStorage)
    
    const data = splitstr.shift()

    if (data === undefined) {
      return;
    }

    splitstr.map(line => {
      const palat = line.split('')
      console.log(palat)
      if (!dataStorage.has(palat[0])){
        dataStorage.set(palat[0], new GraphNode(palat[0]))
      }
      if (!dataStorage.has(palat[1])){
        dataStorage.set(palat[1], new GraphNode(palat[1]))
      }
      const alkuNode = dataStorage.get(palat[0])
      const loppuNode = dataStorage.get(palat[1])
      if ((alkuNode === undefined) || (loppuNode === undefined)) {
        return;
      }
      const edge = new GraphEdge(loppuNode, alkuNode, Number(palat[2]))
      alkuNode.addGraphEdge(edge)
    })

    const logger = (value : GraphNode, key : string) => {
      console.log(key);
    }
    
    dataStorage.forEach(logger)
    console.log(dataStorage)

    console.log(splitstr)
  }

  const handleClearing = () => {
    //event.preventDefault()
    setFormData('')
    setNodes([])
  }

  const handleChange = (event : ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(event.target.value)
  }

  return (
    <div>
      <div>
        List of nodes
      </div>
      <div>
        {nodes.map(node => 
          <div key={node.id}>
            {node.id}
          </div>
        )}
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <textarea value={formData} id="BFSinput" name="BFSinput" rows={5} onChange={handleChange}></textarea>
        </div>
        <button type="submit" id='BFSinput'>Submit the data</button>
      </form>

      <button onClick={handleClearing} id='clearBFSData'>Clear the data</button>

    </div>
  )
}

export default BFSForm