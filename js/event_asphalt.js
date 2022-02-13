var duomo = {
    Image: {
      xmlns: "http://schemas.microsoft.com/deepzoom/2009",
      //Url: "images/research/dzc_output_files/",
      Url: "images/event/ASPHALT EXHIBITION/strataanalysis/GeneratedImages/dzc_output_files/",
  
      Format: "jpg",
      Overlap: "1",
      TileSize: "256",
      Size: {
        Width:  "8852",
        Height: "9509"
      }
    }
  };
    
    var viewer = OpenSeadragon({
      id: "seadragon-viewer",
      prefixUrl: "libraries/openseadragon/images/",
      tileSources: duomo
    });
    