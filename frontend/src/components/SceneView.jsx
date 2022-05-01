import React from "react";
import { useScene } from "esri-loader-hooks";

// hooks allow us to create a map component as a function
function SceneView() {
  // takes initial map and view properties as a POJO
  const properties = {
    map: {
      basemap: "hybrid",
      ground: "world-elevation"
    },
    view: {
      scale: 4000000000, // Sets the initial scale to 1:100,000,000
      center: [-75.69, 45.42] // Sets the center point of view with lon/lat
    }
  };
  // returns a ref you can use to assign a container DOM node
  const [ref] = useScene(properties);
  return <div style={{ height: 400 }} ref={ref} />;
}

export default SceneView;