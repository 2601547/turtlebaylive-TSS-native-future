var wms_layers = [];

var lyr_TSSNativeFutureRASTERReprojectedEPSG3857_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TSS Native - Future (RASTER - Reprojected EPSG 3857)<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_0.png" /> 0.0000<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_1.png" /> 0.0177<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_2.png" /> 0.0353<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_3.png" /> 0.0530<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_4.png" /> 0.0706<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_5.png" /> 0.0883<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_6.png" /> 0.1059<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_7.png" /> 0.1236<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_8.png" /> 0.1413<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_9.png" /> 0.1589<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_10.png" /> 0.1766<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_11.png" /> 0.1942<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_12.png" /> 0.2119<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_13.png" /> 0.2296<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_14.png" /> 0.2472<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_15.png" /> 0.2649<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_16.png" /> 0.2825<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_17.png" /> 0.3002<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_18.png" /> 0.3178<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_19.png" /> 0.3355<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_20.png" /> 0.3532<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_21.png" /> 0.3708<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_22.png" /> 0.3885<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_23.png" /> 0.4061<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_24.png" /> 0.4238<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_25.png" /> 0.4414<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_26.png" /> 0.4591<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_27.png" /> 0.4768<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_28.png" /> 0.4944<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_29.png" /> 0.5121<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_30.png" /> 0.5297<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_31.png" /> 0.5474<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_32.png" /> 0.5650<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_33.png" /> 0.5827<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_34.png" /> 0.6004<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_35.png" /> 0.6180<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_36.png" /> 0.6357<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_37.png" /> 0.6533<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_38.png" /> 0.6710<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_39.png" /> 0.6887<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_40.png" /> 0.7063<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_41.png" /> 0.7240<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_42.png" /> 0.7416<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_43.png" /> 0.7593<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_44.png" /> 0.7769<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_45.png" /> 0.7946<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_46.png" /> 0.8123<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_47.png" /> 0.8299<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_48.png" /> 0.8476<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_49.png" /> 0.8652<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_50.png" /> 0.8829<br />\
    <img src="styles/legend/TSSNativeFutureRASTERReprojectedEPSG3857_0_51.png" /> 0.9005<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TSSNativeFutureRASTERReprojectedEPSG3857_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-20037508.342800, -20037508.342800, 20037508.342800, 20037508.342800]
        })
    });
var format_TSSNativeFutureVECTORBINARYCLEAN_1 = new ol.format.GeoJSON();
var features_TSSNativeFutureVECTORBINARYCLEAN_1 = format_TSSNativeFutureVECTORBINARYCLEAN_1.readFeatures(json_TSSNativeFutureVECTORBINARYCLEAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TSSNativeFutureVECTORBINARYCLEAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TSSNativeFutureVECTORBINARYCLEAN_1.addFeatures(features_TSSNativeFutureVECTORBINARYCLEAN_1);
var lyr_TSSNativeFutureVECTORBINARYCLEAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TSSNativeFutureVECTORBINARYCLEAN_1, 
                style: style_TSSNativeFutureVECTORBINARYCLEAN_1,
                popuplayertitle: 'TSS Native - Future (VECTOR - BINARY, CLEAN)',
                interactive: true,
                title: '<img src="styles/legend/TSSNativeFutureVECTORBINARYCLEAN_1.png" /> TSS Native - Future (VECTOR - BINARY, CLEAN)'
            });
var format_CountryOutlineWhite_2 = new ol.format.GeoJSON();
var features_CountryOutlineWhite_2 = format_CountryOutlineWhite_2.readFeatures(json_CountryOutlineWhite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountryOutlineWhite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountryOutlineWhite_2.addFeatures(features_CountryOutlineWhite_2);
var lyr_CountryOutlineWhite_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountryOutlineWhite_2, 
                style: style_CountryOutlineWhite_2,
                popuplayertitle: 'Country Outline - White',
                interactive: true,
                title: '<img src="styles/legend/CountryOutlineWhite_2.png" /> Country Outline - White'
            });

lyr_TSSNativeFutureRASTERReprojectedEPSG3857_0.setVisible(true);lyr_TSSNativeFutureVECTORBINARYCLEAN_1.setVisible(true);lyr_CountryOutlineWhite_2.setVisible(true);
var layersList = [lyr_TSSNativeFutureRASTERReprojectedEPSG3857_0,lyr_TSSNativeFutureVECTORBINARYCLEAN_1,lyr_CountryOutlineWhite_2];
lyr_TSSNativeFutureVECTORBINARYCLEAN_1.set('fieldAliases', {'DN': 'DN', });
lyr_CountryOutlineWhite_2.set('fieldAliases', {'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'NAME_ENGL', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', });
lyr_TSSNativeFutureVECTORBINARYCLEAN_1.set('fieldImages', {'DN': 'Range', });
lyr_CountryOutlineWhite_2.set('fieldImages', {'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', });
lyr_TSSNativeFutureVECTORBINARYCLEAN_1.set('fieldLabels', {'DN': 'no label', });
lyr_CountryOutlineWhite_2.set('fieldLabels', {'CNTR_ID': 'no label', 'CNTR_NAME': 'no label', 'NAME_ENGL': 'no label', 'NAME_FREN': 'no label', 'ISO3_CODE': 'no label', 'SVRG_UN': 'no label', 'CAPT': 'no label', 'EU_STAT': 'no label', 'EFTA_STAT': 'no label', 'CC_STAT': 'no label', 'NAME_GERM': 'no label', });
lyr_CountryOutlineWhite_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});