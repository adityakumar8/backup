let pageHeight = document.body.scrollHeight;
let screenHeight = window.screen.height;
let totalAdv = pageHeight / screenHeight;
let storePageHeightArray = [];
let removerepeatAdcodes = [];

const height = [];
const pTag = [];
const pTagKeys = [];

for (let i = 1; i < totalAdv; i++) {
  height.push(i * screenHeight);
}

let paras = document.getElementsByTagName("p");

// console.log(height);
Object.keys(paras).forEach((key) => {
  let elementHeight = paras[key].offsetTop;
  pTag[elementHeight] = paras[key];
});
//console.log(pTag);
pTag.forEach((x, y) => {
  pTagKeys.push(y);
});
var oldScrollY = window.scrollY;
window.addEventListener("scroll", (event) => {
  if (oldScrollY < window.scrollY) {
    var scrollHeightTop = this.scrollY + screenHeight;
  } else {
    scrollHeightTop = this.scrollY - screenHeight;
  }

  let calculatedHeight = returnCloset(height, scrollHeightTop);

  let index = storePageHeightArray.indexOf(calculatedHeight);

  let randomId = Math.floor(Math.random() * 1000000);
  let numberGenerated = "ad-slot-id-" + randomId;

  if (index == -1) {
    const para = document.createElement("div");
    para.setAttribute("class", "ads-container");
    let firstChild = para.appendChild(document.createElement("div"));
    firstChild.setAttribute("class", "adboxtop adsizes");
    let secondChild = firstChild.appendChild(document.createElement("div"));
    secondChild.setAttribute("class", "ie-adtext");
    secondChild.innerText = "inject Advertisement";
    let secondChildD = firstChild.appendChild(document.createElement("div"));
    secondChildD.setAttribute("id", numberGenerated);
    secondChildD.setAttribute("class", "ad-slot inject-ad-code");
    secondChildD.setAttribute("title", "IE_WAP_OTH_AS_MID_300X250");

    let pTagHeight = returnParaTag(
      calculatedHeight,
      calculatedHeight + screenHeight,
      pTagKeys
    );
    if (Number.isInteger(pTagHeight[0])) {
      pTag[pTagHeight[0]].parentNode.insertBefore(para, pTag[pTagHeight[0]]);
      if (false === removerepeatAdcodes.includes(numberGenerated)) {
        removerepeatAdcodes.push(numberGenerated);
        injectAdCodeindiv(numberGenerated);
      }
    }
  }
  // console.log(calculatedHeight);
  storePageHeightArray.push(calculatedHeight);
});

function returnCloset(counts, goal) {
  var closest = counts.reduce(function (prev, curr) {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });
  return closest;
}
function returnParaTag(lower, upper, array) {
  let between = array.filter(function (item) {
    return item > lower && item < upper;
  });
  return between;
}

function injectAdCodeindiv(get_div_id) {
  setTimeout(() => {
    const adClasses = document.querySelectorAll(".inject-ad-code");
    //console.log(adClasses);
    const adClassLen = adClasses.length;
    let count = 0;
    let adDiv = "";
    let adcodeslot = "";
    let getadcodeslot = "";
    const definedAdSlots = {};
    // eslint-disable-next-line no-undef
    googletag.cmd.push(() => {
      for (count = 0; count < adClassLen; count += 1) {
        adDiv = adClasses[count].getAttributeNode("id").value;
        getadcodeslot = adClasses[count].getAttributeNode("title").value;
        if ("" !== getadcodeslot) {
          adcodeslot = "/1050432/www.indianexpress.com/" + getadcodeslot;
        }
        if (get_div_id === adDiv) {
          // eslint-disable-next-line no-undef
          definedAdSlots[adDiv] = googletag
            .defineSlot(
              // eslint-disable-next-line no-undef
              adcodeslot,
              [300, 250],
              adDiv
            )
            .addService(googletag.pubads());
          // eslint-disable-next-line no-undef
          googletag.display(adDiv);
          // eslint-disable-next-line no-undef
          googletag.pubads().refresh([definedAdSlots[adDiv]]);
        }
      }
    });
  }, 2000);
}
