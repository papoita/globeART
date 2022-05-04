import React from "react";
import { useScene } from "esri-loader-hooks";

// hooks allow us to create a map component as a function
function SceneView() {
  // takes initial map and view properties as a POJO
  const properties = {
    map: {
      basemap: "hybrid", //used hybrid satellite and terrain info but cna be modified to streets
      ground: "world-elevation", // to give it texture
    },
    view: {
      scale: 4000000000, // Sets the initial scale to view the entire globe
      center: [-75.69, 45.42], // Sets the center point of view with lon/lat to Ottawa Canada
    },
  };
  // returns a ref you can use to assign a container DOM node
  const [ref] = useScene(properties);
  return (
    <div style={{ height: 780 }} ref={ref}>
      {" "}
    </div>
  );
}

export default SceneView;
