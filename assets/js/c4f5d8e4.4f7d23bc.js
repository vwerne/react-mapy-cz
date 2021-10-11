"use strict";(self.webpackChunkreact_mapy_cz_docs=self.webpackChunkreact_mapy_cz_docs||[]).push([[195],{9580:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r=n(7294),o=n(6010),a=n(6698),i=n(2263),u="features_pzNA",l=[{title:"Easy to Use",description:r.createElement(r.Fragment,null,"Render from simple map, to a complex map with thousands of clustered points easily with component API.")},{title:"Lots of features",description:r.createElement(r.Fragment,null,"From ordinary markers through routes to location services and autosuggesting places. Nearly all the might of Mapy.cz API at your disposal in a nice React wrapper.")},{title:"Completely open-source",description:r.createElement(r.Fragment,null,"This library is completely open-source. Take a look at our code in Github, and help us make it even better.")}],s=function(){return r.createElement("section",{className:u},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},l.map((function(e,t){var n=e.title,a=e.description;return r.createElement("div",{className:(0,o.Z)("col col--4"),key:t},r.createElement("div",{className:"text--center padding-horiz--md"},r.createElement("h3",null,n),r.createElement("p",null,a)))})))))},c=n(5697),d={BASE:1,TURIST:2,OPHOTO:3,HYBRID:4,HISTORIC:5,BIKE:6,TRAIL:7,OPHOTO0203:8,OPHOTO0406:9,OBLIQUE:12,SMART_BASE:14,SMART_OPHOTO:15,SMART_TURIST:16,RELIEF:17,TURIST_WINTER:19,SMART_WINTER:20,SUMMER:21,SMART_SUMMER:22,GEOGRAPHY:23,OPHOTO1012:24,HYBRID_SPARSE:25,OPHOTO1415:26,BASE_NEW:27,TURIST_NEW:28},m={lng:(0,c.oneOfType)([c.number,c.string]),lat:(0,c.oneOfType)([c.number,c.string])},p={coords:(0,c.shape)({lng:c.number,lat:c.number}).isRequired,imgSrc:c.string,tooltip:c.string},f=function(e){return function(t){var n=(0,r.useState)(!1),o=n[0],a=n[1],i=function(){return a(!0)};return(0,r.useEffect)((function(){var e=document.createElement("script");return e.src="https://api.mapy.cz/loader.js",e.id="mapy.cz-api-script",e.async=!0,e.onload=function(){window.Loader.async=!0,window.Loader.load(null,{suggest:!0},i)},document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),o?r.createElement(e,t):r.createElement("div",null,"Loading map...")}},E=function(e){return function(t,n,r,o){void 0===r&&(r=17),void 0===o&&(o=!0);var a=window.SMap.Coords.fromWGS84(t,n);e.setCenterZoom(a,r,o)}},h=(0,r.createContext)(null),v=function(e){var t=e.center,n=void 0===t?{}:t,o=e.children,a=e.id,i=void 0===a?"react-mapy-cz":a,u=e.mapLayers,l=void 0===u?[d.BASE_NEW]:u,s=e.maxZoom,c=void 0===s?18:s,m=e.minZoom,p=void 0===m?1:m,f=e.zoom,v=void 0===f?5:f,C=(0,r.useState)(null),g=C[0],w=C[1];return(0,r.useEffect)((function(){if(!g){var e=window.SMap.Coords.fromWGS84(n.lng,n.lat),t=new window.SMap(window.JAK.gel(i),e,v);t.setZoomRange(p,c);var r=l[0],o=l.slice(1);t.addDefaultLayer(r).enable(),o.forEach((function(e){t.addDefaultLayer(e)})),w(t)}}),[n,i,g,l,c,p,v]),r.createElement(h.Provider,{value:{id:i,map:g,mapLayers:l,setMapCenter:E(g)}},o)};v.propTypes={center:(0,c.shape)(m).isRequired,children:c.node,id:c.string,mapLayers:(0,c.arrayOf)([(0,c.oneOf)(Object.keys(d))]),maxZoom:c.number,minZoom:c.number,zoom:c.number};var C=f(v),g=(0,r.createContext)(null),w=function(e){var t=e.children,n=e.afterCreate,o=(0,r.useContext)(h).map,a=new window.SMap.Layer.Marker;return null==o||o.addLayer(a),a.enable(),(0,r.useEffect)((function(){return n&&n(a),function(){o.removeLayer(a)}})),r.createElement(g.Provider,{value:a},t)};w.propTypes={afterCreate:c.func,children:c.node};var I=function(e){var t=e.children,n=e.width,o=void 0===n?"100%":n,a=e.height,i=void 0===a?"300px":a,u=(0,r.useContext)(h),l=u.map,s=u.id;return r.createElement("div",{style:{width:o,height:i},id:s},l&&t)};I.propTypes={children:c.node,height:c.string,width:c.string};var N=(0,r.memo)(I),S=n(3366),M=["coords","imgSrc","tooltip"],b=function(e){var t=e.coords,n=e.imgSrc,o=e.tooltip,a=(0,S.Z)(e,M),i=(0,r.useContext)(g);return(0,r.useEffect)((function(){var e=Object.assign({},n?{url:n}:void 0,o?{title:o}:void 0,a),r=window.SMap.Coords.fromWGS84(t.longitude,t.latitude),u=new window.SMap.Marker(r,!1,Object.keys(e).length>0?e:void 0);return null==i||i.addMarker(u),function(){null==i||i.removeMarker(u,!0)}}),[t,n,i,a,o]),null};b.propTypes=p;var y=["coords","imgSrc","tooltip"],Q=function(e){var t=e.markersData,n=(0,r.useContext)(g);return(0,r.useEffect)((function(){null==n||n.removeAll();var e=t.map((function(e){var t=e.coords,n=e.imgSrc,r=e.tooltip,o=(0,S.Z)(e,y),a=Object.assign({},n?{url:n}:void 0,r?{title:r}:void 0,o),i=window.SMap.Coords.fromWGS84(t.longitude,t.latitude);return new window.SMap.Marker(i,!1,Object.keys(a).length>0?a:void 0)}));return null==n||n.addMarker(e),function(){null==n||n.removeMarker(e,!0)}}),[n,t]),null};Q.propTypes={markersData:(0,c.arrayOf)((0,c.shape)(p))};var R=function(e,t){var n=(0,r.useContext)(h).setMapCenter,o=function(e){if(e.getResults()[0].results.length){var t=e.getResults()[0].results;n(t[0].coords.x,t[0].coords.y)}else console.error("Place not found")};return function(n){n.preventDefault(),t||new window.SMap.Geocoder(e,o)}},G=function(e,t,n){var o=(0,r.useContext)(h).setMapCenter;(0,r.useEffect)((function(){var r;return t||(r=new window.SMap.Suggest(e.current,{provider:new window.SMap.SuggestProvider({updateParams:function(e){e.bounds="48.5370786,12.0921668|51.0746358,18.8927040",e.enableCategories=0,e.lang="cs,en"}})})).addListener("suggest",(function(e){var t=e.data;o(t.longitude,t.latitude),n&&n(t)})),function(){t||r.removeListener("suggest")}}),[t,e,n,o])},T=function(e){var t=e.className,n=e.disableGeolocation,o=e.disableSuggest,a=e.inputComp,i=void 0===a?"input":a,u=e.inputValue,l=e.onSuggestItemSelect,s=e.onValueChange,c=(0,r.useState)(""),d=c[0],m=c[1];(0,r.useEffect)((function(){null!=u&&m(u)}),[u]);var p=(0,r.useRef)();G(p,o,l);var f=R(d,n);return r.createElement("form",{onSubmit:f},r.createElement(i,{ref:p,value:d,onChange:function(e){s&&s(e.target.value),m(e.target.value)},className:t}),!n&&r.createElement("input",{type:"submit"}))};T.propTypes={className:c.string,disableGeolocation:c.bool,disableSuggest:c.bool,inputComp:(0,c.oneOfType)([c.string,c.elementType]),inputValue:c.string,onSuggestItemSelect:c.func,onValueChange:c.func};var A=void 0,j=function(e){var t=e.onClusterClick,n=e.onMarkerClick,o=(0,r.useContext)(h).map;return(0,r.useEffect)((function(){return(n||t)&&o.getSignals().addListener(A,"marker-click",(function(e){!e.target._clusterOptions&&n&&n(e.target),e.target._clusterOptions&&t&&t(e.target)})),function(){(n||t)&&o.getSignals().removeListener(A,"marker-click",!0)}}),[o,t,n]),null};j.propTypes={onClusterClick:c.func,onMarkerClick:c.func};var O=function(e){var t=e.width,n=void 0===t?65:t,o=e.pageSize,a=(0,r.useContext)(h),i=a.map,u=a.mapLayers;return(0,r.useEffect)((function(){var e=new window.SMap.Control.Layer({items:o,page:o,width:n});return u.forEach((function(t){e.addDefaultLayer(t)})),i.addControl(e,{left:"0px",top:"0px"}),function(){i.removeControl(e)}}),[i,u,o,n]),null};O.propTypes={pageSize:c.number,width:c.number};var k=function(e){var t=e.pan,n=e.wheel,o=e.zoom,a=0;a|=t&&window.SMap.MOUSE_PAN,a|=o&&window.SMap.MOUSE_ZOOM,a|=n&&window.SMap.MOUSE_WHEEL;var i=(0,r.useContext)(h).map;return(0,r.useEffect)((function(){var e=new window.SMap.Control.Mouse(a);return i.addControl(e),function(){i.removeControl(e)}}),[i,a]),null},z=function(e){var t=e.bottomSpace,n=void 0===t?0:t,o=e.resizeTimeout,a=void 0===o?100:o,i=(0,r.useContext)(h).map;return(0,r.useEffect)((function(){var e=new window.SMap.Control.Sync({bottomSpace:n,resizeTimeout:a});return i.addControl(e),function(){i.removeControl(e)}}),[n,i,a]),null};z.propTypes={bottomSpace:c.number,resizeTimeout:c.number};var x,Z=function(e){var t=e.labels,n=e.showZoomMenu,o=e.sliderHeight,a=void 0===o?16:o,i=e.step,u=void 0===i?9:i,l=e.titles,s=void 0===l?[]:l,c=(0,r.useContext)(h).map;return(0,r.useEffect)((function(){var e=new window.SMap.Control.Zoom(t,{showZoomMenu:n,sliderHeight:a,step:u,titles:s});return c.addControl(e),function(){c.removeControl(e)}}),[t,c,n,a,u,s]),null};Z.propTypes={labels:(0,c.shape)((x={},x[c.number]=c.string,x)),showZoomMenu:c.bool,sliderHeight:c.number,step:c.number,titles:(0,c.arrayOf)(c.string)};var U="heroBanner_1ZBZ",J="sMap_JuFh";function Y(){var e=(0,i.Z)().siteConfig;return r.createElement(a.Z,{title:e.title,description:"Description will go into a meta tag in <head />"},r.createElement("header",{className:(0,o.Z)("hero hero--primary",U)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline),r.createElement("p",{className:"hero__subtitle"},r.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAABuCAYAAAC0sRNkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGODdGMTE3NDA3MjA2ODExODIyQThEMkVFRTQyQkE2RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QTJCNjM2NjUxRUMxMUU5QjBFQzhDNDIxNzMwQTA2MSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QTJCNjM2NTUxRUMxMUU5QjBFQzhDNDIxNzMwQTA2MSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMTgwODNFQTk1RjUxOUFBQ0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjg3RjExNzQwNzIwNjgxMTgyMkE4RDJFRUU0MkJBNkYiLz4gPC9yZGY6RGVzY3Jp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",alt:"by lundegaard",width:"170"})))),r.createElement("section",{className:J},r.createElement(C,{center:{lat:50,lng:14}},r.createElement(N,null,r.createElement(k,null)))),r.createElement("main",null,r.createElement(s,null)))}}}]);