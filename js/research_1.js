var duomo = {
    Image: {
      xmlns: "http://schemas.microsoft.com/deepzoom/2009",
      Url: "images/research/chicagowaterinfra/GeneratedImages/dzc_output_files/",
  
      Format: "jpg",
      Overlap: "1",
      TileSize: "256",
      Size: {
        Width:  "8700",
        Height: "9296"
      }
    }
  };
    
    var viewer = OpenSeadragon({
      id: "seadragon-viewer",
      prefixUrl: "libraries/openseadragon/images/",
      tileSources: duomo
    });
    
  