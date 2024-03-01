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
                :class="{ active: mode === 'default' }" @click="setMode('default')">預設模式</button>
        <button type="button" class="customization-mode btn btn-outline-primary px-4 py-2"
                :class="{ active: mode === 'customization' }" @click="setMode('customization')">自選模式</button>
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
          <button class="btn btn-outline-primary" type="button" id="SortByWhatFactorDropdownMenuButton"
                  data-bs-toggle="dropdown" aria-expanded="false">
            <strong>三</strong>
          </button>
          <ul class="dropdown-menu" aria-labelledby="SortByWhatFactorDropdownMenuButton">
            <li><a class="dropdown-item" href="javascript:;" @click="sortBy = 'default'">依 預設
                排序</a></li>
            <li><a class="dropdown-item" href="javascript:;" @click="sortBy = 'preferenceLevel'">依
                喜好程度 排序</a></li>
            <li><a class="dropdown-item" href="javascript:;" @click="sortBy = 'healthLevel'">依 健康分數
                排序</a></li>
          </ul>
        </div>
        <form class="search-input input-group" @submit.prevent="getSearchedDishes">
          <input type="text" class="form-control" placeholder="搜尋菜色" aria-label="Search"
                 aria-describedby="Input Box For Searching Dishes" size="10" v-model.trim="searchInput">
          <button class="btn btn-outline-primary" type="button" id="button-addon2" @click="getSearchedDishes">
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
          <DishesComponent :dishes-list="stapleList" :mode="mode" modal-name="stapleModal"></DishesComponent>
        </div>
        <div class="dishes mb-4" v-if="(filter === 'all' || filter === 'dishes') && search === ''">
          <h3 class="d-inline mx-2">配菜類</h3>
          <small class="text-danger">*請至少選擇三樣</small>
          <hr>
          <DishesComponent :dishes-list="sideDishesList" :mode="mode" modal-name="sideDishesModal"></DishesComponent>
        </div>
        <div class="entree mb-4" v-if="(filter === 'all' || filter === 'entree') && search === ''">
          <h3 class="d-inline mx-2">主菜類</h3>
          <small class="text-danger">*請至少選擇一樣</small>
          <hr>
          <DishesComponent :dishes-list="mainDishesList" :mode="mode" modal-name="mainDishesModal"></DishesComponent>
        </div>
        <div class="entree mb-4" v-if="search !== ''">
          <h3 class="mx-2">搜尋結果</h3>
          <hr>
          <DishesComponent :dishes-list="searchedList" :mode="mode" modal-name="searchedDishesModal"></DishesComponent>
        </div>
      </div>
    </div>
    <div id="bentoGenerator" class="bento-generator text-center">
      <button type="button" class="btn btn-outline-primary bento-generator-btn mb-4 px-4 py-3" data-bs-toggle="modal"
              data-bs-target="#bentoModal"
              @click="bentoTemp.sideDishes?.length === 0 ? generateBento() : null">生成便當</button>
    </div>
    <aside class="aside">
      <div class="aside-head">
        <a href="javascript:;" class="aside-link aside-link-generator" @click="moveToGeneratorBentoBtn">
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

          <button v-if="introIndex !== 7" type="button" class="btn next-btn"><i
               class="bi bi-chevron-right"></i></button>
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
                    <p class="m-0 text-end">{{ Math.round(bentoTemp.starchTotalPortion / 4 * 100) / 100 }} 碗</p>
                  </div>
                </div>
                <div class="col row row-cols-2">
                  <div class="col">
                    <p class="m-0">蛋白質</p>
                  </div>
                  <div class="col">
                    <p class="m-0 text-end">{{ bentoTemp.proteinTotalPortion }} 份</p>
                  </div>
                </div>
                <div class="col row row-cols-2">
                  <div class="col">
                    <p class="m-0">蔬菜</p>
                  </div>
                  <div class="col">
                    <p class="m-0 text-end">{{ bentoTemp.vegetableTotalPortion }} 份</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="btns text-center p-3 col-6 col-lg-12">
              <button class="btn btn-outline-primary re-generate-btn px-4 py-3 m-2" data-bs-toggle="modal"
                      data-bs-target="#confirmRegenerateBentoModal">重新生成便當</button>
              <button class="btn btn-primary save-to-diary-btn px-4 py-3 m-2">存至便當日記</button>
            </div>
          </div>
          <div class="bento-presentation col-lg-8 order-first order-lg-2">
            <div class="border border-gray border-3 rounded w-100 h-100 p-3 pb-4">
              <div class="row g-2 h-100">
                <div class="col col-4 h-50">
                  <div class="side-dish border border-gray border-3 rounded h-100">
                    <img class="img rounded object-fit-cover h-100" :src="bentoTemp.sideDishes[0]?.imgUrl"
                         :alt="bentoTemp.sideDishes[0]?.title + '的圖片'" :title="bentoTemp.sideDishes[0]?.title">
                  </div>
                </div>
                <div class="col col-4 h-50">
                  <div class="side-dish border border-gray border-3 rounded h-100">
                    <img class="img rounded object-fit-cover h-100" :src="bentoTemp.sideDishes[1]?.imgUrl"
                         :alt="bentoTemp.sideDishes[1]?.title + '的圖片'" :title="bentoTemp.sideDishes[1]?.title">
                  </div>
                </div>
                <div class="col col-4 h-50">
                  <div class="side-dish border border-gray border-3 rounded h-100">
                    <img class="img rounded object-fit-cover h-100" :src="bentoTemp.sideDishes[2]?.imgUrl"
                         :alt="bentoTemp.sideDishes[2]?.title + '的圖片'" :title="bentoTemp.sideDishes[2]?.title">
                  </div>
                </div>
                <div class="col col-12 h-50">
                  <div class="border border-gray border-3 rounded col-12 h-100 p-0 d-flex">
                    <div class="staple w-50">
                      <img class="img img-fluid object-fit-cover h-100" :src="bentoTemp.stapleCourse?.imgUrl"
                           :alt="bentoTemp.stapleCourse?.title + '的圖片'" :title="bentoTemp.stapleCourse?.title">
                    </div>
                    <div class="entree w-50">
                      <img class="img img-fluid object-fit-cover h-100" :src="bentoTemp.mainCourse?.imgUrl"
                           :alt="bentoTemp.mainCourse?.title + '的圖片'" :title="bentoTemp.mainCourse?.title">
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

  <!-- 確認重新生成便當 Modal -->
  <div class="modal fade" id="confirmRegenerateBentoModal" tabindex="-1"
       aria-labelledby="confirmRegenerateBentoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmRegenerateBentoModalLabel">是否確認重新生成新的便當？</h5>
          <button type="button" class="btn-close" aria-label="Close" data-bs-toggle="modal"
                  data-bs-target="#bentoModal"></button>
        </div>
        <div class="modal-body">
          此操作將無法復原，請確認是否執行。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                  data-bs-target="#bentoModal">取消</button>
          <button type="button" class="btn btn-primary" @click="generateBento" data-bs-toggle="modal"
                  data-bs-target="#bentoModal">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
console.clear();

import DishesComponent from '@/components/DishesComponent';
import memberStore from '@/stores/memberData';
import { mapState, mapActions } from 'pinia';
document.title = "來點菜單";

export default {
  components: { DishesComponent },
  data() {
    return {
      apiUrl: "https://whatstoday2024-8nsu.onrender.com",
      mode: "default",
      filter: "all",
      sortBy: "default",
      search: "",
      searchInput: "",
      searchedList: [],
      allDishesList: [],
      stapleList: [],
      mainDishesList: [],
      sideDishesList: [],
      introIndex: 1,
      bentoTemp: {
        stapleCourse: {},
        mainCourse: {},
        sideDishes: [],
        date: "",
        mealType: "",
        starchTotalPortion: 0,
        proteinTotalPortion: 0,
        vegetableTotalPortion: 0
      },

    };
  },
  computed: {
    ...mapState(memberStore, ['memberData'])
  },
  watch: {
    sortBy() {
      this.getSortedDishes();
    }
  },
  methods: {
    drawOneDish(dishesList) {
      let totalWeight = this.mode === "default" ?
        dishesList.reduce((acc, cur) => acc + cur.healthLevel, 0) :
        dishesList.reduce((acc, cur) => acc + cur.healthLevel + +cur.preferenceLevel, 0);

      let randomNumber = Math.random() * totalWeight;
      console.log(randomNumber, totalWeight)
      let answerIndex = 0;
      for (let i = 0; i < dishesList.length; i++) {
        randomNumber -= this.mode === "default" ?
          dishesList[i].healthLevel :
          (dishesList[i].healthLevel + +dishesList[i].preferenceLevel);
        if (randomNumber <= 0) {
          answerIndex = i;
          break;
        }
      }

      // console.log(`抽中的選項是：${dishesList[answerIndex].title}`);
      this.bentoTemp.starchTotalPortion += dishesList[answerIndex].starchPortion;
      this.bentoTemp.proteinTotalPortion += dishesList[answerIndex].proteinPortion;
      this.bentoTemp.vegetableTotalPortion += dishesList[answerIndex].vegetablePortion;
      return dishesList[answerIndex];
    },
    drawThreeDishes(dishesList) {
      let answers = [];
      let tempDishesList = [...dishesList];

      while (answers.length < 3) {
        let totalWeight = tempDishesList.reduce((acc, cur) => acc + cur.healthLevel + +cur.preferenceLevel, 0);

        let randomNumber = Math.random() * totalWeight;

        let answerIndex = 0;
        for (let i = 0; i < tempDishesList.length; i++) {
          randomNumber -= (tempDishesList[i].healthLevel + tempDishesList[i].preferenceLevel);
          if (randomNumber <= 0) {
            answerIndex = i;
            break;
          }
        }

        // console.log('抽中的項目是：', tempDishesList[answerIndex].title);
        this.bentoTemp.starchTotalPortion += dishesList[answerIndex].starchPortion;
        this.bentoTemp.proteinTotalPortion += dishesList[answerIndex].proteinPortion;
        this.bentoTemp.vegetableTotalPortion += dishesList[answerIndex].vegetablePortion;
        answers.push(tempDishesList[answerIndex]);
        tempDishesList.splice(answerIndex, 1);
      }

      // answers.forEach((index) => {
      //   console.log('抽中的項目是：', dishesList[index].title);
      // })
      return answers;
    },
    generateBento() {
      this.bentoTemp = {
        starchTotalPortion: 0,
        proteinTotalPortion: 0,
        vegetableTotalPortion: 0,
      }
      this.bentoTemp.stapleCourse = this.drawOneDish(this.stapleList);
      this.bentoTemp.mainCourse = this.drawOneDish(this.mainDishesList);
      this.bentoTemp.sideDishes = this.drawThreeDishes(this.sideDishesList);

    },
    moveToGeneratorBentoBtn() {
      document.querySelector('#bentoGenerator').scrollIntoView({ behavior: 'smooth' });
    },
    async getMode() {
      await this.axios.get(`${this.apiUrl}/600/users/${this.memberData.id}`)
        .then(res => {
          if (res.data.message.mode) {
            this.mode = res.data.message.mode;
          } else {
            this.mode = "default";
          }
        })
    },
    async setMode(mode) {
      this.mode = mode;
      await this.axios.patch(`${this.apiUrl}/600/users/${this.memberData.id}`, { mode })
        .then(res => {
          console.log(res.data.message.mode);
        })
    },
    async getAllDishesList() {
      await this.axios.get(`${this.apiUrl}/dishes`)
        .then(res => {
          this.allDishesList = res.data.message;
          this.allDishesList.forEach((dish) => {
            dish.isChecked = false;
            dish.preferenceLevel = 1;
          })
          this.stapleList = this.allDishesList.filter((dish) => dish.category === "主食類");
          this.mainDishesList = this.allDishesList.filter((dish) => dish.category === "主菜類");
          this.sideDishesList = this.allDishesList.filter((dish) => dish.category === "配菜類");
        })
    },
    async getSearchedDishes() {
      this.searchedList = [];
      this.search = this.searchInput;

      await this.axios.get(`${this.apiUrl}/dishes?title_like=${this.search}`)
        .then(res => {
          this.searchedList = [...this.searchedList, ...res.data.message];
        });

      await this.axios.get(`${this.apiUrl}/dishes?engTitle_like=${this.search}`)
        .then(res => {
          this.searchedList = [...this.searchedList, ...res.data.message];
        });

      // 使用 Promise.all 確保兩個非同步呼叫都完成後再執行後續操作
      // Promise.all([titlePromise, engTitlePromise])
      //   .then(() => {
      this.searchedList.forEach((dish) => {
        dish.isChecked = false;
        dish.preferenceLevel = 1;
      })
      this.getSortedDishes();
      // });
    },
    async getSortedDishes() {
      if (this.sortBy === "default") {
        await this.getAllDishesList();
        if (this.search) {
          this.searchedList = this.searchedList.sort((a, b) => a.id - b.id);
        }
      }
      else if (this.sortBy === "healthLevel") {
        await this.axios.get(`${this.apiUrl}/dishes?_sort=${this.sortBy}&_order=desc`)
          .then(res => {
            this.allDishesList = res.data.message;
            this.allDishesList.forEach((dish) => {
              dish.isChecked = false;
              dish.preferenceLevel = 1;
            })
            this.stapleList = this.allDishesList.filter((dish) => dish.category === "主食類");
            this.mainDishesList = this.allDishesList.filter((dish) => dish.category === "主菜類");
            this.sideDishesList = this.allDishesList.filter((dish) => dish.category === "配菜類");

            if (this.search) {
              this.searchedList = this.searchedList.sort((a, b) => b.healthLevel - a.healthLevel);
            }
          });
      }

    },
    async init() {
      await this.getAllDishesList();
      await this.getUser();
      await this.getMode();
    },
    ...mapActions(memberStore, ['getUser'])
  },
  mounted() {
    this.init();
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