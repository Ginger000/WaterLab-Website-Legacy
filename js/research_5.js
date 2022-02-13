var duomo1 = {
    Image: {
      xmlns: "http://schemas.microsoft.com/deepzoom/2009",
      Url: "images/research/Depave Chicago/layer1/GeneratedImages/dzc_output_files/",
  
      Format: "jpg",
      Overlap: "1",
      TileSize: "256",
      Size: {
        Width:  "3600",
        Height: "3670"
      }
    }
  };
    
    var viewer = OpenSeadragon({
      id: "seadragon-viewer1",
      prefixUrl: "libraries/openseadragon/images/",
      tileSources: duomo1
    });

    var duomo2 = {
        Image: {
          xmlns: "http://schemas.microsoft.com/deepzoom/2009",
          Url: "images/research/Depave Chicago/layer2/GeneratedImages/dzc_output_files/",
      
          Format: "jpg",
          Overlap: "1",
          TileSize: "256",
          Size: {
            Width:  "7500",
            Height: "9964"
          }
        }
      };
        
        var viewer = OpenSeadragon({
          id: "seadragon-viewer2",
          prefixUrl: "libraries/openseadragon/images/",
          tileSources: duomo2
        });

        var duomo3 = {
            Image: {
              xmlns: "http://schemas.microsoft.com/deepzoom/2009",
              Url: "images/research/Depave Chicago/layer3/GeneratedImages/dzc_output_files/",
          
              Format: "jpg",
              Overlap: "1",
              TileSize: "256",
              Size: {
                Width:  "7500",
                Height: "10000"
              }
            }
          };
            
            var viewer = OpenSeadragon({
              id: "seadragon-viewer3",
              prefixUrl: "libraries/openseadragon/images/",
              tileSources: duomo3
            });