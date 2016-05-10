	ymaps.ready(init);
 
	function init(){     
 
		var myMap;
 
		myMap = new ymaps.Map("yandex-map", {
			center: [59.939494,30.329428],
			zoom: 16
		});
	
		var myPlacemark = new ymaps.Placemark([59.938631,30.323055] , {},
			{ iconLayout: 'default#image',
			iconImageHref: 'img/pin.png',
			iconImageSize: [180, 140],
			iconImageOffset: [-50, -140],
		});
			
		myMap.geoObjects.add(myPlacemark);
 
	}