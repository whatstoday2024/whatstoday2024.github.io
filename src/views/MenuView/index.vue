<template>
  <div class="container">
    <div class="title">
      <h2 class="text-center my-3">帶您探索菜色的無限可能</h2>
      <div class="site-induction-btn btn p-0 d-flex">
        <i class="fa-solid fa-circle-info text-secondary fs-2" title="網站介紹" data-bs-toggle="modal"
           data-bs-target="#siteIntroModal"></i>
      </div>
    </div>
    <div class="mode-btns text-center mb-3">
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="default-mode btn btn-outline-primary px-4 py-2"
                :class="{ active: mode === 'default' }" @click="mode = 'default'">預設模式</button>
        <button type="button" class="customization-mode btn btn-outline-primary px-4 py-2"
                :class="{ active: mode === 'customization' }" @click="mode = 'customization'">自選模式</button>
      </div>
    </div>
    <div class="filter-sort-search-container mb-2 d-flex justify-content-between">
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
        <form class="search-input input-group" @submit.prevent="searchDishes">
          <input type="text" class="form-control" placeholder="搜尋菜色" aria-label="Search"
                 aria-describedby="Input Box For Searching Dishes" size="10" v-model.trim="searchInput">
          <button class="btn btn-outline-primary" type="button" id="button-addon2" @click="searchDishes">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
    <div class="menu border border-primary rounded mb-3 position-relative" :class="{ mask: mode === 'default' }">
      <div class="wrap w-80 mx-auto pt-5 pb-4">
        <div class="staple mb-4" v-if="(filter === 'all' || filter === 'staple') && search === ''">
          <h3 class="d-inline mx-2">主食類</h3>
          <small class="text-danger">*請至少選擇一樣</small>
          <hr>
          <DishesComponent :dishes-list="stapleList" :mode="mode"></DishesComponent>
        </div>
        <div class="dishes mb-4" v-if="(filter === 'all' || filter === 'dishes') && search === ''">
          <h3 class="d-inline mx-2">配菜類</h3>
          <small class="text-danger">*請至少選擇三樣</small>
          <hr>
          <DishesComponent :dishes-list="sideDishesList" :mode="mode"></DishesComponent>
        </div>
        <div class="entree mb-4" v-if="(filter === 'all' || filter === 'entree') && search === ''">
          <h3 class="d-inline mx-2">主菜類</h3>
          <small class="text-danger">*請至少選擇一樣</small>
          <hr>
          <DishesComponent :dishes-list="mainDishesList" :mode="mode"></DishesComponent>
        </div>
        <div class="entree mb-4" v-if="search !== ''">
          <h3 class="mx-2">搜尋結果</h3>
          <hr>
          <DishesComponent :dishes-list="searchList" :mode="mode"></DishesComponent>
        </div>
      </div>
    </div>
    <div id="bentoGenerator" class="bento-generator text-center">
      <button type="button" class="btn btn-outline-primary bento-generator-btn mb-4 px-4 py-3" data-bs-toggle="modal"
              data-bs-target="#bentoModal">生成便當</button>
    </div>
    <aside class="aside">
      <div class="aside-head">
        <a href="javascript:;" class="aside-link aside-link-generator" @click="moveToGeneratorBtn">
          <i class="fa-solid fa-angles-down"></i>
        </a>
      </div>
    </aside>
  </div>


  <!-- Modal -->
  <!-- 網站介紹 Modal -->
  <div class="modal fade " id="siteIntroModal" tabindex="-1" aria-labelledby="siteIntroModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content vh-75">
        <div class="modal-header justify-content-between">
          <h4 class="modal-title" id="siteIntroModalLabel">網站介紹</h4>
          <small> {{ introIndex }} / 7 </small>
          <button type="button" class="btn text-primary p-0" data-bs-dismiss="modal" aria-label="Close">略過</button>
        </div>
        <div class="modal-body d-flex justify-content-between align-items-center p-3">
          <button v-if="introIndex !== 1" type="button" class="btn prev-btn"><i class="bi bi-chevron-left"></i></button>

          <div class="row row-cols-1 row-cols-lg-2 align-items-center h-100 w-100">
            <div class="col col-lg-5 col-8 p-3 mx-auto align-self-center">
              <!-- <img class="object-fit-cover" :src="white_rice" alt=""> -->
              <div>
                <p class="text-center">我是gif</p>
              </div>
            </div>
            <div class="col gap-3 p-3 mx-auto mt-0">
              <p>★ 你可以 篩選出 主食、配菜與主菜</p>
              <p>★ 你可以 依 喜好程度 或 健康推薦指數，將菜色卡片進行排序</p>
              <p>★ 你可以 以 關鍵字 搜尋特定菜色卡片</p>
            </div>
          </div>

          <button v-if="introIndex !== 7" type="button" class="btn next-btn"><i class="bi bi-chevron-right"></i></button>
        </div>
        <div class="modal-footer">
          <div class="no-show-again d-flex gap-2 mx-auto">
            <input type="checkbox" id="no-show-again" name="no-show-again"
                   class="form-check-input no-show-again-checkout">
            <label for="no-show-again">不再顯示</label>
          </div>
        </div>
      </div>
    </div>
  </div>



  <!-- 便當生成 Modal -->
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
import DishesComponent from '@/components/DishesComponent'

document.title = "來點菜單";
export default {

  components: { DishesComponent },
  data() {
    return {
      mode: "default",
      filter: "all",
      search: "",
      searchInput: "",
      searchList: [],
      allDishesList: [],
      stapleList: [],
      mainDishesList: [],
      sideDishesList: [],
      introIndex: 1

    };
  },
  computed: {
  },
  methods: {
    moveToGeneratorBtn() {
      document.querySelector('#bentoGenerator').scrollIntoView({ behavior: 'smooth' });
    },
    getAllDishesList() {
      this.axios.get("https://whatstoday2024-8nsu.onrender.com/dishes")
        .then(res => {
          this.allDishesList = res.data.message;
          this.allDishesList.forEach((dish) => {
            dish.isChecked = false;
            dish.preferenceLevel = 1;
          })
          this.stapleList = this.allDishesList.filter((dish) => dish.category === "主食類");
          this.mainDishesList = this.allDishesList.filter((dish) => dish.category === "主菜類");
          this.sideDishesList = this.allDishesList.filter((dish) => dish.category === "配菜類");
          console.log(this.sideDishesList, this.mainDishesList, this.stapleList)
        })
    },
    searchDishes() {
      this.searchList = [];
      this.search = this.searchInput;

      const titlePromise = this.axios.get(`https://whatstoday2024-8nsu.onrender.com/dishes?title_like=${this.search}`)
        .then(res => {
          console.log(res)
          this.searchList = [...this.searchList, ...res.data.message];
        });

      const engTitlePromise = this.axios.get(`https://whatstoday2024-8nsu.onrender.com/dishes?engTitle_like=${this.search}`)
        .then(res => {
          console.log(res)
          this.searchList = [...this.searchList, ...res.data.message];
        });

      // 使用 Promise.all 確保兩個非同步呼叫都完成後再執行後續操作
      Promise.all([titlePromise, engTitlePromise])
        .then(() => {
          this.searchList.forEach((dish) => {
            dish.isChecked = false;
            dish.preferenceLevel = 1;
          })
        });
    }
  },
  mounted() {
    this.getAllDishesList()

    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    console.log(123, token)
    if (token) {
      console.log(2222, token)
      this.axios.defaults.headers.common.Authorization = token;
    }

  }

};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

.vh-75 {
  height: 75vh;
}

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

.default-mode {
  border-right-color: white;
}

.customization-mode {
  border-left-color: white;
}

/* mask ----------------------------- */
.mask::before {
  position: absolute;
  z-index: 5;
  /* overflow: hidden; */
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
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