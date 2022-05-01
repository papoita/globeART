//import React from "react";
//import { useScene } from "esri-loader-hooks";
import SceneView from "@arcgis/core/views/SceneView";

// hooks allow us to create a map component as a function
const view = new SceneView({
  // takes initial map and view properties as a POJO
  
    map: new Map({
      basemap: "hybrid",
      ground: "world-elevation"
    }),
    container: "viewDiv"
  });

  view.when(function() {
    // SceneView is now ready for display and can be used. Here we will
    // use goTo to view a particular location at a given zoom level, camera
    // heading and tilt.
    view.goTo({
      center: [-75, 45],
      zoom: 13,
      heading: 30,
      tilt: 60
    })
  })
  .catch(function(err) {
    // A rejected view indicates a fatal error making it unable to display,
    // this usually means that WebGL is not available, or too old.
    console.error("SceneView rejected:", err);
  });

   
  // returns a ref you can use to assign a container DOM node
//   const [ref] = useScene(properties);
//   return <div style={{ height: 400 }} ref={ref} />;
// }

export default SceneView;