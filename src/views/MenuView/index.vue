<template>
  <div class="container">
    <div class="title">
      <h2 class="text-center mb-3">帶您探索菜色的無限可能</h2>
      <div class="site-induction-btn btn p-0 d-flex">
        <i class="fa-solid fa-circle-info text-secondary fs-2" title="網站介紹"></i>
        <!-- <i class="bi bi-info-circle"></i> -->
        <!-- <i class="fa-solid fa-circle-exclamation"></i> -->
      </div>
    </div>
    <div class="mode-btns text-center">
      <div class="btn-group mb-2" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary px-4 py-2" :class="{ active: mode === 'default' }"
                @click="mode = 'default'">預設模式</button>
        <button type="button" class="btn btn-outline-primary px-4 py-2" :class="{ active: mode === 'customization' }"
                @click="mode = 'customization'">自選模式</button>
      </div>
    </div>
    <div class="filter-sort-search-container mb-3 d-flex justify-content-between">
      <div class="category-filter" style="width: 8rem;">
        <select class="form-select outline-primary" aria-label="Default select example" v-model="filter">
          <option selected disabled>篩選</option>
          <option value="all">全部</option>
          <option value="staple">主食類</option>
          <option value="dishes">配菜類</option>
          <option value="entree">主菜類</option>
        </select>
      </div>
      <div class="sort-search-container d-flex justify-content-between gap-2">
        <div class="sort-dropdown dropdown">
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
        <div class="search-input input-group">
          <input type="text" class="form-control" placeholder="搜尋菜色" aria-label="Search" aria-describedby="basic-addon1"
                 size="10">
          <button class="btn btn-outline-primary" type="button" id="button-addon2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <!-- <i class="bi bi-search"></i> -->
          </button>
        </div>
      </div>
    </div>
    <div class="menu border border-primary rounded mb-3">
      <div class="wrap w-80 mx-auto pt-5 pb-4">
        <div class="staple mb-4" v-if="filter === 'all' || filter === 'staple'">
          <h3 class="d-inline mx-2">主食類</h3> <small class="text-danger">*請至少選擇一樣</small>
          <hr>
          <div class="cards row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
            <div v-for=" i in 5 " :key="i" class="col">
              <div class="card h-100">
                <img :src="white_rice" class="card-img-top" alt="white_rice">
                <div class="card-body dish-info mx-auto px-0 py-3 w-80 d-flex flex-column justify-content-between">
                  <div class="dish-info-btn btn p-0 d-flex">
                    <i class="fa-solid fa-circle-info text-secondary fs-5 lh-sm" title="菜色介紹" data-bs-toggle="modal"
                       data-bs-target="#dishModal"></i>
                  </div>
                  <h5 class="card-title text-center">白飯</h5>
                  <small class="card-eng-title mb-3 d-block text-center">White Rice</small>
                  <div class="input-group mx-auto">
                    <div class="input-group-text">
                      <input class="form-check-input mt-0" type="checkbox" v-model="isChecked"
                             aria-label="Checkbox for following text input" :disabled="mode === 'default'">
                    </div>
                    <select class="form-select" aria-label="Default select example"
                            :disabled="!isChecked || mode === 'default'">
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
        <div class="dishes mb-4" v-if="filter === 'all' || filter === 'dishes'">
          <h3 class="d-inline mx-2">配菜類</h3> <small class="text-danger">*請至少選擇三樣</small>
          <hr>
          <div class="cards row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
            <div v-for=" i in 17 " :key="i" class="col">
              <div class="card h-100" @click="temp.name = 999" data-bs-toggle="modal" data-bs-target="#dishModal">
                <img :src="stir_fried_loofah" class="card-img-top" alt="stir_fried_loofah">
                <div class="card-body dish-info mx-auto px-0 py-3 w-80 d-flex flex-column justify-content-between">
                  <div class="dish-info-btn btn p-0 d-flex">
                    <i class="fa-solid fa-circle-info text-secondary fs-5 lh-sm" title="菜色介紹" data-bs-toggle="modal"
                       data-bs-target="#dishModal"></i>
                  </div>
                  <h5 class="card-title text-center">炒絲瓜</h5>
                  <small class="card-eng-title mb-3 d-block text-center">Stir-fried Loofah</small>
                  <div class="input-group mx-auto">
                    <div class="input-group-text" @click.stop="e => e.stopPropagation()">
                      <input class="form-check-input mt-0" type="checkbox" v-model="isChecked2"
                             aria-label="Checkbox for following text input" :disabled="mode === 'default'">
                    </div>
                    <select class="form-select" aria-label="Default select example"
                            :disabled="!isChecked2 || mode === 'default'">
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
        <div class="entree mb-4" v-if="filter === 'all' || filter === 'entree'">
          <h3 class="d-inline mx-2">主菜類</h3> <small class="text-danger">*請至少選擇一樣</small>
          <hr>
          <div class="cards row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
            <div class="col">
              <div class="card h-100">
                <img :src="braised_lion_s_head" class="card-img-top" alt="Braised Lion's Head">
                <div class="card-body dish-info mx-auto px-0 py-3 w-80 d-flex flex-column justify-content-between">
                  <div class="dish-info-btn btn p-0 d-flex">
                    <i class="fa-solid fa-circle-info text-secondary fs-5 lh-sm" title="菜色介紹" data-bs-toggle="modal"
                       data-bs-target="#dishModal"></i>
                  </div>
                  <h5 class="card-title text-center">紅燒獅子頭</h5>
                  <small class="card-eng-title mb-3 d-block text-center">Braised Laised Laised Laised Laised Laised Laised
                    Laised Lio</small>
                  <div class="input-group mx-auto">
                    <div class="input-group-text">
                      <input class="form-check-input mt-0" type="checkbox" v-model="isChecked3"
                             aria-label="Checkbox for following text input" :disabled="mode === 'default'">
                    </div>
                    <select class="form-select" aria-label="Default select example"
                            :disabled="!isChecked3 || mode === 'default'">
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

            <div v-for=" i in 9 " :key="i" class="col">
              <div class="card h-100">
                <img :src="braised_lion_s_head" class="card-img-top" alt="Braised Lion's Head">
                <div class="card-body dish-info mx-auto px-0 py-3 w-80 d-flex flex-column justify-content-between">
                  <div class="dish-info-btn btn p-0 d-flex">
                    <i class="fa-solid fa-circle-info text-secondary fs-5 lh-sm" title="菜色介紹" data-bs-toggle="modal"
                       data-bs-target="#dishModal"></i>
                  </div>
                  <h5 class="card-title text-center">紅燒獅子頭</h5>
                  <small class="card-eng-title mb-3 d-block text-center">Braised Lion's
                    Head
                    (pork
                    balls)</small>
                  <div class="input-group mx-auto">
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
    <div id="bentoGenerator" class="bento-generator text-center">
      <button type="button" class="btn btn-outline-primary bento-generator-btn mb-4 px-4 py-3" data-bs-toggle="modal"
              data-bs-target="#bentoModal">生成便當</button>
    </div>
    <div id="bentoGenerator" class="bento-generator text-center">
      <button type="button" class="btn btn-outline-primary bento-generator-btn mb-4 px-4 py-3" data-bs-toggle="modal"
              data-bs-target="#dishModal">22222</button>
    </div>
    <aside class="aside">
      <div class="aside-head">
        <a href="javascript:;" class="aside-link aside-link-generator" @click="moveToGeneratorBtn">
          <i class="fa-solid fa-angles-down"></i>
          <!-- <i class="bi bi-caret-down-fill"></i> -->
        </a>
      </div>
    </aside>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="dishModal" tabindex="-1" aria-labelledby="dishModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content dish">
        <div class="modal-header px-4">
          <h3 class="modal-title" id="dishModalLabel">菜色介紹</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row row-cols-1 row-cols-lg-2">
            <div class="col order-last order-lg-1 row row-cols-1 gap-3 mt-0 py-3 px-0 mx-auto justify-content-center">
              <div class="col row align-items-start">
                <div class="col">
                  <h6 class="m-0 lh-base">中文菜名：</h6>
                </div>
                <div class="col">
                  <p class="m-0">{{ temp.name }}</p>
                </div>
              </div>
              <div class="col row align-items-start">
                <div class="col">
                  <h6 class="m-0 lh-base">英文菜名：</h6>
                </div>
                <div class="col">
                  <p class="m-0">{{ temp.engName }} sdfsdfsdf sdfsdfasdf sdf sdf ssdf</p>
                </div>
              </div>
              <div class="col row align-items-center">
                <div class="col">
                  <h6 class="m-0 lh-base">喜好程度：</h6>
                </div>
                <div class="col">
                  <select class="form-select w-50" aria-label="Default select example" :disabled="!isChecked3"
                          v-model="temp.preferenceLevel">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <div class="col row align-items-start">
                <div class="col">
                  <h6 class="m-0 lh-base">健康推薦指數：</h6>
                </div>
                <div class="col">
                  <p class="m-0">{{ temp.healthPoint }}</p>
                </div>
              </div>
              <div class="col row align-items-start">
                <div class="col">
                  <h6 class="m-0 lh-base">營養比例：</h6>
                </div>
                <div class="col">
                  <div class="row row-cols-1 justify-content-between">
                    <div class="col row">
                      <div class="col">
                        <p class="m-0">澱粉</p>
                      </div>
                      <div class="col">
                        <p class="m-0 text-end">{{ temp.portion.starch / 4 }} 碗</p>
                      </div>
                    </div>
                    <div class="col row">
                      <div class="col">
                        <p class="m-0">蛋白質</p>
                      </div>
                      <div class="col">
                        <p class="m-0 text-end">{{ temp.portion.protein }} 份</p>
                      </div>
                    </div>
                    <div class="col row">
                      <div class="col">
                        <p class="m-0">蔬菜</p>
                      </div>
                      <div class="col">
                        <p class="m-0 text-end">{{ temp.portion.vegetable }} 份</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col-lg-5 col-8 p-3 order-first order-lg-2 mx-auto align-self-center">
              <img class="img-fluid" :src="white_rice" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="bentoModal" tabindex="-1" aria-labelledby="bentoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content bento">
        <div class="modal-header px-4">
          <h3 class="modal-title" id="bentoModalLabel">今天吃什麼？</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body row m-0 row-cols-1 row-cols-lg-2">
          <div class="bento-description col-lg-4 order-last order-lg-1 row m-0 p-lg-3">
            <div class="nutrition-portion p-3 col-6 col-lg-12">
              <h4 class="mb-3 lh-base">營養比例：</h4>
              <div class="row row-cols-1">
                <div class="col row row-cols-2">
                  <div class="col">
                    <p class="m-0">澱粉</p>
                  </div>
                  <div class="col">
                    <p class="m-0 text-end">{{ 1.225 }} 碗</p>
                  </div>
                </div>
                <div class="col row row-cols-2">
                  <div class="col">
                    <p class="m-0">蛋白質</p>
                  </div>
                  <div class="col">
                    <p class="m-0 text-end">{{ 1.25 }} 份</p>
                  </div>
                </div>
                <div class="col row row-cols-2">
                  <div class="col">
                    <p class="m-0">蔬菜</p>
                  </div>
                  <div class="col">
                    <p class="m-0 text-end">{{ 1.25 }} 份</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="btns text-center p-3 col-6 col-lg-12">
              <button class="btn btn-outline-primary re-generate-btn px-4 py-3 m-2">重新生成便當</button>
              <button class="btn btn-primary save-to-diary-btn px-4 py-3 m-2">存至便當日記</button>
            </div>
          </div>
          <div class="bento-presentation col-lg-8 order-first order-lg-2">
            <div class="border border-gray border-3 rounded w-100 h-100 p-3 pb-4">
              <div class="row g-2 h-100">
                <div class="col col-4 h-50">
                  <div class="side-dish border border-gray border-3 rounded h-100">
                    <img class="img rounded object-fit-cover h-100" :src="stir_fried_loofah" alt="">
                  </div>
                </div>
                <div class="col col-4 h-50">
                  <div class="side-dish border border-gray border-3 rounded h-100">
                    <img class="img rounded object-fit-cover h-100" :src="stir_fried_loofah" alt="">
                  </div>
                </div>
                <div class="col col-4 h-50">
                  <div class="side-dish border border-gray border-3 rounded h-100">
                    <img class="img rounded object-fit-cover h-100" :src="stir_fried_loofah" alt="">
                  </div>
                </div>
                <div class="col col-12 h-50">
                  <div class="border border-gray border-3 rounded col-12 h-100 p-0 d-flex">
                    <div class="staple w-50">
                      <img class="img img-fluid object-fit-cover h-100" :src="white_rice" alt="">
                    </div>
                    <div class="entree w-50">
                      <img class="img img-fluid object-fit-cover h-100" :src="braised_lion_s_head" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import white_rice from '@/assets/dishes/white_rice.png';
import stir_fried_loofah from '@/assets/dishes/stirfried_loofah.png';
import braised_lion_s_head from "@/assets/dishes/braised_lion's_head.png";

document.title = "來點菜單";
export default {
  data() {
    return {
      mode: "default",
      white_rice,
      stir_fried_loofah,
      braised_lion_s_head,
      isChecked: false,
      isChecked2: false,
      isChecked3: false,
      filter: "all",
      temp: {
        name: "白飯",
        engName: "white rice",
        img: this.white_rice,
        category: "主食類",
        portion: {
          starch: 4,
          protein: 0,
          vegetable: 0
        },
        preferenceLevel: 5,
        healthPoint: 3
      }

    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    moveToGeneratorBtn() {
      document.querySelector('#bentoGenerator').scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

.active {
  color: white;
}

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
  width: 12%;
  height: 24%;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  right: -20%;
  transform: translateX(32%) translateY(-20%);
}

/* title ----------------------------- */
.title {
  position: relative;
}

.site-induction-btn {
  position: absolute;
  right: 0;
  top: 7%;
}

.site-induction-btn:active {
  border-color: transparent;
}

.site-induction-btn i {
  opacity: 0.5;
}

.site-induction-btn i:hover {
  opacity: 1;
  transition-duration: .3s;
}

/* card ----------------------------- */
.dish-info {
  position: relative;
}

.dish-info-btn {
  position: absolute;
  right: -8%;
  top: 1rem;
}

.dish-info-btn:active {
  border-color: transparent;
}

/* aside ----------------------------- */
.aside {
  position: fixed;
  right: 1rem;
  bottom: 20vh;
  z-index: 10;
}

.aside-link {
  color: rgba(0, 0, 0, 0.2);
  transition-duration: .3s;
}

.aside-link:hover {
  color: rgba(0, 0, 0, 0.5);
}

.aside-link-generator {
  font-size: 4vw;
}
</style>