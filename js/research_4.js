var duomo = {
    Image: {
      xmlns: "http://schemas.microsoft.com/deepzoom/2009",
      Url: "images/research/chicagopathofwater/GeneratedImages/dzc_output_files/",
  
      Format: "jpg",
      Overlap: "1",
      TileSize: "256",
      Size: {
        Width:  "9000",
        Height: "10252"
      }
    }
  };
    
    var viewer = OpenSeadragon({
      id: "seadragon-viewer",
      prefixUrl: "libraries/openseadragon/images/",
      tileSources: duomo
    });
    
  