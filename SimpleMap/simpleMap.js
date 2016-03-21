/**
 * Created by martin on 21.03.16.
 */
/** taken from OL3 sample page */

var map = new ol.Map({
    layers: [new ol.layer.Tile({
        source: new ol.source.OSM()
    })],
    target: 'map',
    view: new ol.View({
        center: [739218, 5906096],
        maxZoom: 19,
        zoom: 17
    })
});

