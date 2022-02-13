var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "libraries/openseadragon/images/",
    tileSources: [{
            type: 'legacy-image-pyramid',
            levels: [{
                url: 'images/design/project_0/StudentCollaboration_Honor_BeforeCitySand-1.jpg',
                width:  7917,
                height: 3863
            }]
        },{
            type: 'legacy-image-pyramid',
            levels: [{
                url: 'images/design/project_0/StudentCollaboration_Honor_BeforeCitySand-2.jpg',
                width:  7917,
                height: 3863
            }]
        },{
            type: 'legacy-image-pyramid',
            levels: [{
                url: 'images/design/project_0/StudentCollaboration_Honor_BeforeCitySand-3.jpg',
                width:  7917,
                height: 3863
            }]
        },{
            type: 'legacy-image-pyramid',
            levels: [{
                url: 'images/design/project_0/StudentCollaboration_Honor_BeforeCitySand-4.jpg',
                width:  7917,
                height: 3863
            }]
        }],

        sequenceMode: true, //next page, prev page
        showReferenceStrip: true,
        //referenceStripScroll: 'vertical', //Vertical Scrolling Image Reference Strip
        // showRotationControl: true, //button rotate
        showNavigator: true,
        maxZoomPixelRatio: 5.0,
        controlsFadeDelay: 3500,
        homeFillsViewer: false
});