var duomo = {
    Image: {
      xmlns: "http://schemas.microsoft.com/deepzoom/2009",
      Url: "images/research/soilsampediagram1/GeneratedImages/dzc_output_files/",
  
      Format: "jpg",
      Overlap: "1",
      TileSize: "256",
      Size: {
        Width:  "7500",
        Height: "10803"
      }
    }
  };
    
    var viewer = OpenSeadragon({
      id: "seadragon-viewer2",
      prefixUrl: "libraries/openseadragon/images/",
      tileSources: duomo
    });

    var duomo2 = {
        Image: {
          xmlns: "http://schemas.microsoft.com/deepzoom/2009",
          Url: "images/research/soilsampediagram2/GeneratedImages/dzc_output_files/",
      
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
          tileSources: duomo2
        });