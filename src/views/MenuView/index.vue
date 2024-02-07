<template>
  <div class="container">
    <h2 class="d-flex justify-content-center mb-3">帶您探索菜色的無限可能</h2>
    <div class="mode-btns d-flex justify-content-center">
      <div class="btn-group mb-2" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary px-4 py-2 active text-light ">預設模式</button>
        <button type="button" class="btn btn-outline-primary px-4 py-2">自選模式</button>
      </div>
    </div>
    <div class="filter-sort-search-container mb-3 d-flex justify-content-between">
      <div class="category-filter">
        <select class="form-select outline-primary" aria-label="Default select example" v-model="filter">
          <option selected disabled>篩選</option>
          <option value="all">全部</option>
          <option value="staple">主食類</option>
          <option value="dishes">配菜類</option>
          <option value="entree">主菜類</option>
        </select>
      </div>
      <div class="sort-search-container d-flex justify-content-between gap-2">
        <div class="dropdown">
          <button class="btn btn-outline-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                  aria-expanded="false">
            <strong>三</strong>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="javascript:;">依 預設 排序</a></li>
            <li><a class="dropdown-item" href="javascript:;">依 喜好程度 排序</a></li>
            <li><a class="dropdown-item" href="javascript:;">依 健康分數 排序</a></li>
          </ul>
        </div>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="搜尋菜色" aria-label="Search" aria-describedby="basic-addon1"
                 size="10">
          <button class="btn btn-outline-primary" type="button" id="button-addon2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="menu border border-primary rounded mb-3">
      <div class="wrap w-80 mx-auto py-5">
        <div class="staple" v-if="filter === 'all' || filter === 'staple'">
          <h3 class="ms-2 mt-1">主食類</h3>
          <hr>
          <div class="cards row">
            <div v-for="i in 5" :key="i" class="col-xs-6 col-lg-2 col-md-3 col-sm-6 mb-3">
              <div class="card d-flex justify-content-center align-items-center">
                <img :src="white_rice" class="card-img-top mb-3" alt="white_rice">
                <div class="card-body p-0">
                  <h5 class="card-title text-center">白飯</h5>
                  <small class="card-eng-title mb-3 d-block text-center">White Rice</small>
                  <div class="input-group mb-3">
                    <div class="input-group-text">
                      <input class="form-check-input mt-0" type="checkbox" v-model="isChecked"
                             aria-label="Checkbox for following text input">
                    </div>
                    <select class="form-select" aria-label="Default select example" :disabled="!isChecked">
                      <option value="1" selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dishes" v-if="filter === 'all' || filter === 'dishes'">
          <h3 class="ms-2 mt-1">配菜類</h3>
          <hr>
          <div class="cards row">
            <div v-for="i in 15" :key="i" class="col-xs-6 col-lg-2 col-md-3 col-sm-6 mb-3">
              <div class="card d-flex justify-content-center align-items-center">
                <img :src="stir_fried_loofah" class="card-img-top mb-3" alt="stir_fried_loofah">
                <div class="card-body p-0">
                  <h5 class="card-title text-center">炒絲瓜</h5>
                  <small class="card-eng-title mb-3 d-block text-center">Stir-fried Loofah</small>
                  <div class="input-group mb-3">
                    <div class="input-group-text">
                      <input class="form-check-input mt-0" type="checkbox" v-model="isChecked2"
                             aria-label="Checkbox for following text input">
                    </div>
                    <select class="form-select" aria-label="Default select example" :disabled="!isChecked2">
                      <option value="1" selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="entree" v-if="filter === 'all' || filter === 'entree'">
          <h3 class="ms-2 mt-1">主菜類</h3>
          <hr>
          <div class="cards row">
            <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
              <div class="card d-flex justify-content-center align-items-center">
                <img :src="braised_lion_s_head" class="card-img-top mb-3" alt="Braised Lion's Head">
                <div class="card-body p-0">
                  <h5 class="card-title text-center">紅燒獅子頭</h5>
                  <small class="card-eng-title mb-3 d-block text-center">Braised Lio</small>
                  <div class="input-group mb-3">
                    <div class="input-group-text">
                      <input class="form-check-input mt-0" type="checkbox" v-model="isChecked3"
                             aria-label="Checkbox for following text input">
                    </div>
                    <select class="form-select" aria-label="Default select example" :disabled="!isChecked3">
                      <option value="1" selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div v-for="i in 9" :key="i" class="col-xs-6 col-lg-2 col-md-3 col-sm-6 mb-3">
              <div class="card d-flex justify-content-center align-items-center">
                <img :src="braised_lion_s_head" class="card-img-top mb-3" alt="Braised Lion's Head">
                <div class="card-body p-0">
                  <h5 class="card-title text-center">紅燒獅子頭</h5>
                  <small class="card-eng-title mb-3 d-block text-center">Braised Lion's
                    Head
                    (pork
                    balls)</small>
                  <div class="input-group mb-3">
                    <div class="input-group-text">
                      <input class="form-check-input mt-0" type="checkbox" v-model="isChecked3"
                             aria-label="Checkbox for following text input">
                    </div>
                    <select class="form-select" aria-label="Default select example" :disabled="!isChecked3">
                      <option value="1" selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bento-generator d-flex justify-content-center">
      <button type="button" class="bento-generator-btn btn btn-outline-primary mb-4 px-4 py-3">生成便當</button>
    </div>
  </div>
</template>

<script>
import white_rice from '@/assets/dishes/white_rice.png';
import stir_fried_loofah from '@/assets/dishes/stirfried_loofah.png';
import braised_lion_s_head from "@/assets/dishes/braised_lion's_head.png";

document.title = "來點菜單";
// const favicon = document.querySelector("link[rel*='icon']");
// favicon.href = '@/assets/img/logo_small.png'
export default {
  data() {
    return {
      white_rice,
      stir_fried_loofah,
      braised_lion_s_head,
      isChecked: false,
      isChecked2: false,
      isChecked3: false,
      filter: "all"

    };
  },
  computed: {
  },
  mounted() {
    this.changeFavicon('@/assets/favicon.png');
  },
  methods: {
    changeFavicon(newFaviconPath) {
      // 找到現有的 link 元素
      var link = document.querySelector('link[rel="shortcut icon"]') || document.createElement('link');
      console.log(link)
      // 更新 link 元素的 href 屬性
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = newFaviconPath;

      // 如果 link 元素不存在，插入新的 link 元素
      if (!document.querySelector('link[rel="shortcut icon"]')) {
        document.head.appendChild(link);
      }
    }
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

.bento-generator-btn {
  position: relative;
}

.bento-generator-btn::before {
  content: "";
  width: 20%;
  height: 80%;
  background-color: silver;
  /* border-radius: 0% 0% 20% 0%; */
  bottom: 10%;
  right: -20%;
  position: absolute;
  clip-path: polygon(80% 0, 100% 0, 100% 100%, 0 100%, 0 90%, 80% 90%);
}

.bento-generator-btn::after {
  content: "";
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50px;
  position: absolute;
  top: 10%;
  right: -20%;
  transform: translateX(30%) translateY(-20%);
}
</style>