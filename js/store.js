// Json에서 매장정보 가져오기
function loadStore() {
  return fetch("https://biio-front.github.io/haagendazs_page/data/storeInfo.json")
    .then(response => response.json())
    .then(json => json.storeInfo);
}

// HTML에 들어갈 매장정보
function createHTML(storeInfo) {
  return `<div class="${storeInfo.class}">
            <h4>하겐다즈 ${storeInfo.place}</h4>
            <div>
                <h5>주소</h5>
                <p>${storeInfo.address}</p>
                <h5>영업시간</h5>
                ${
                    storeInfo.openingHours
                    .map(time => `<p>${time}</p>`).join('')
                }
            </div>
        </div>`;
}

function displayStoreInfo(storeInfo) {
  const infoDiv = document.querySelector(".store_info");
  infoDiv.innerHTML = storeInfo
    .map(storeInfo => createHTML(storeInfo))
    .join("");
}

function storeInfoON(e) {
    const target = e.target.dataset.value;
    const information = document.querySelectorAll('.store_info > div');

    e.preventDefault();
    if(target == null) return;
    [].forEach.call(information, info => {
        if(info.classList.contains(target)) {
            info.classList.add('on');
        } else {
            info.classList.remove('on');
        }
    })
}

function init() {
    const sotreList = document.querySelector('.store_name');

    loadStore().then(storeInfo => {
      displayStoreInfo(storeInfo);
    });
    sotreList.addEventListener('click', e => storeInfoON(e));
}
init();
