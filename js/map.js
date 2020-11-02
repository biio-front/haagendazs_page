var mapOptions = {
    center: new naver.maps.LatLng(37.489598, 127.006941),
    zoom: 15,
    zoomControl: true,
    zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT
    }
};

var map = new naver.maps.Map('map', mapOptions);

// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
var positions = [
    {
        content : '하겐다즈 서초점', 
        latlng : new naver.maps.LatLng(37.489598, 127.006941),
        class_name : $('.shop_name .seocho'),
        shop_detail : $('.shop_detail .secho_detail')
    },
    {
        content : '하겐다즈 여의도점', 
        latlng : new naver.maps.LatLng(37.521054, 126.923947),
        class_name : $('.shop_name .yeoido'),
        shop_detail : $('.shop_detail .yeoido_detail')
    },
    {
        content : '하겐다즈 교대점', 
        latlng : new naver.maps.LatLng(37.498056, 127.013213),
        class_name : $('.shop_name .kyodae'),
        shop_detail : $('.shop_detail .kyodae_detail')
    },
    {
        content : '하겐다즈 도곡점',
        latlng : new naver.maps.LatLng(37.488576, 127.054282),
        class_name : $('.shop_name .dogok'),
        shop_detail : $('.shop_detail .dogok_detail')
    },
    {
        content : '하겐다즈 사당 DV점',
        latlng : new naver.maps.LatLng(37.479972, 126.971564),
        class_name : $('.shop_name .sadang'),
        shop_detail : $('.shop_detail .sadang_detail')
    },
    {
        content : '하겐다즈 분당미금점',
        latlng : new naver.maps.LatLng(37.350320, 127.106684),
        class_name : $('.shop_name .bundang'),
        shop_detail : $('.shop_detail .bundang_detail')
    },
    {
        content : '하겐다즈 판교점',
        latlng : new naver.maps.LatLng(37.394237, 127.111994),
        class_name : $('.shop_name .pankyo'),
        shop_detail : $('.shop_detail .pankyo_detail')
    },
    {
        content : '하겐다즈 아주대병원점',
        latlng : new naver.maps.LatLng(37.264523, 127.061705),
        class_name : $('.shop_name .ajouUniversityHospital'),
        shop_detail : $('.shop_detail .ajouUniversityHospital_detail')
    },
    {
        content : '하겐다즈 대구신세계점',
        latlng : new naver.maps.LatLng(35.877789, 128.628572),
        class_name : $('.shop_name .shinsegae'),
        shop_detail : $('.shop_detail .shinsegae_detail')
    },
    {
        content : '하겐다즈 양산점',
        latlng : new naver.maps.LatLng(35.329789, 129.012891),
        class_name : $('.shop_name .yangsan'),
        shop_detail : $('.shop_detail .yangsan_detail')
        // content : '하겐다즈 양산점',
        // latlng : new naver.maps.LatLng(35.329789, 129.012891),        
        // class_name : $('.shop_name .yangsan'),
        // shop_detail : $('.shop_detail .yangsan_detail')
    },
    {
        content : '하겐다즈 마린시티점',
        latlng : new naver.maps.LatLng(35.155081, 129.142281),
        class_name : $('.shop_name .marineCity'),
        shop_detail : $('.shop_detail .marineCity_detail')
    },
    {
        content : '하겐다즈 용호자이점',
        latlng : new naver.maps.LatLng(35.131837, 129.110663),
        class_name : $('.shop_name .yonghoXii'),
        shop_detail : $('.shop_detail .yonghoXii_detail')
    }
];

for (let i = 0; i < positions.length; i++){
    var marker = new naver.maps.Marker({
        position: positions[i].latlng,
        map: map
    });

    // var infowindow = new naver.maps.InfoWindow({
    //     content: positions[i].content
    // });
}

// click
function clickCallback(i){
    return function(e){
        e.preventDefault();
        map.setCenter(positions[i].latlng);
        positions[i].shop_detail.show().siblings().hide();
    }
}
for(let i = 0; i < positions.length; i++){
    positions[i].class_name.click(clickCallback(i)); 
}