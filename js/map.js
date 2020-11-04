const mapOptions = {
  center: new naver.maps.LatLng(37.489598, 127.006941),
  zoom: 15,
  zoomControl: true,
  zoomControlOptions: {
    style: naver.maps.ZoomControlStyle.SMALL,
    position: naver.maps.Position.TOP_RIGHT,
  },
};

const map = new naver.maps.Map("map", mapOptions);

// 지도 위치, 내용(detail)
const positions = [
  {
    content: "하겐다즈 서초점",
    latlng: new naver.maps.LatLng(37.489598, 127.006941),
    class_name: ".store_name .seocho"
  },
  {
    content: "하겐다즈 여의도점",
    latlng: new naver.maps.LatLng(37.521054, 126.923947),
    class_name: ".store_name .yeoido"
  },
  {
    content: "하겐다즈 교대점",
    latlng: new naver.maps.LatLng(37.498056, 127.013213),
    class_name: ".store_name .kyodae"
  },
  {
    content: "하겐다즈 도곡점",
    latlng: new naver.maps.LatLng(37.488576, 127.054282),
    class_name: ".store_name .dogok"
  },
  {
    content: "하겐다즈 사당 DV점",
    latlng: new naver.maps.LatLng(37.479972, 126.971564),
    class_name: ".store_name .sadang"
  },
  {
    content: "하겐다즈 분당미금점",
    latlng: new naver.maps.LatLng(37.35032, 127.106684),
    class_name: ".store_name .bundang"
  },
  {
    content: "하겐다즈 판교점",
    latlng: new naver.maps.LatLng(37.394237, 127.111994),
    class_name: ".store_name .pankyo"
  },
  {
    content: "하겐다즈 아주대병원점",
    latlng: new naver.maps.LatLng(37.264523, 127.061705),
    class_name: ".store_name .ajouUniversityHospital"
  },
  {
    content: "하겐다즈 대구신세계점",
    latlng: new naver.maps.LatLng(35.877789, 128.628572),
    class_name: ".store_name .shinsegae"
  },
  {
    content: "하겐다즈 양산점",
    latlng: new naver.maps.LatLng(35.329789, 129.012891),
    class_name: ".store_name .yangsan"
  },
  {
    content: "하겐다즈 마린시티점",
    latlng: new naver.maps.LatLng(35.155081, 129.142281),
    class_name: ".store_name .marineCity"
  },
  {
    content: "하겐다즈 용호자이점",
    latlng: new naver.maps.LatLng(35.131837, 129.110663),
    class_name: ".store_name .yonghoXii"
  },
];

//지도에 마커 표시
for (let i = 0; i < positions.length; i++) {
  const marker = new naver.maps.Marker({
    position: positions[i].latlng,
    map: map,
  });
}

// 매장 리스트 클릭 시 지도 이동 및 내용 표시
for (let i = 0; i < positions.length; i++) {
  document.querySelector(positions[i].class_name)
  .addEventListener('click', e => {
      e.preventDefault();
      map.setCenter(positions[i].latlng);
    }
  );
}
