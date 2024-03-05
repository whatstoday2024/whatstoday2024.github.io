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
          <option value="全部">全部</option>
          <option value="主食類">主食類</option>
          <option value="配菜類">配菜類</option>
          <option value="主菜類">主菜類</option>
        </select>
      </div>
      <div class="sort-search-container d-flex justify-content-between gap-2">
        <div class="sort-dropdown dropdown">
          <button class="btn btn-outline-primary" type="button" id="SortByWhatFactorDropdownMenuButton"
                  data-bs-toggle="dropdown" aria-expanded="false">
            <strong>三</strong>
          </button>
          <ul class="dropdown-menu" aria-labelledby="SortByWhatFactorDropdownMenuButton">
            <li><a class="dropdown-item" :class="{ active: sortBy === 'default' }" href="javascript:;"
                 @click="sortBy = 'default'">依 預設 排序</a></li>
            <li><a class="dropdown-item disabled" href="javascript:;" @click="sortBy = 'preferenceLevel'"
                 aria-disabled="true">依 喜好程度 排序</a></li>
            <li><a class="dropdown-item" :class="{ active: sortBy === 'healthLevel' }" href="javascript:;"
                 @click="sortBy = 'healthLevel'">依 健康分數 排序</a></li>
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
        <div class="staple mb-4" v-if="(filter === '全部' || filter === '主食類') && search === ''">
          <h3 class="d-inline mx-2">主食類</h3>
          <small class="text-danger">*請至少選擇一樣</small>
          <hr>
          <DishesComponent :dishes-list="stapleList" :mode="mode" modal-name="stapleModal"
                           :update-selected="updateSelected" :update-preference-level="updatePreferenceLevel">
          </DishesComponent>
        </div>
        <div class="dishes mb-4" v-if="(filter === '全部' || filter === '配菜類') && search === ''">
          <h3 class="d-inline mx-2">配菜類</h3>
          <small class="text-danger">*請至少選擇三樣</small>
          <hr>
          <DishesComponent :dishes-list="sideDishesList" :mode="mode" modal-name="sideDishesModal"
                           :update-selected="updateSelected" :update-preference-level="updatePreferenceLevel">
          </DishesComponent>
        </div>
        <div class="entree mb-4" v-if="(filter === '全部' || filter === '主菜類') && search === ''">
          <h3 class="d-inline mx-2">主菜類</h3>
          <small class="text-danger">*請至少選擇一樣</small>
          <hr>
          <DishesComponent :dishes-list="mainDishesList" :mode="mode" modal-name="mainDishesModal"
                           :update-selected="updateSelected" :update-preference-level="updatePreferenceLevel">
          </DishesComponent>
        </div>
        <div class="entree mb-4" v-if="search !== ''">
          <h3 class="mx-2">搜尋結果</h3>
          <hr>
          <DishesComponent :dishes-list="searchedList" :mode="mode" modal-name="searchedDishesModal"
                           :update-selected="updateSelected" :update-preference-level="updatePreferenceLevel">
          </DishesComponent>
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

  <!-- 便當相關 Modal -->
  <BentoComponent :bento-temp="bentoTemp" :generate-bento="generateBento" :member-data="memberData"></BentoComponent>

</template>

<script>
console.clear();

import DishesComponent from './DishesComponent.vue';
import BentoComponent from './BentoComponent.vue';
import memberStore from '@/stores/memberData';
import { mapState, mapActions } from 'pinia';
import { toast } from 'vue3-toastify';

document.title = "來點菜單";
const delay = 1000
toast.error('請先登入', {
  autoClose: delay,
})
export default {
  components: { DishesComponent, BentoComponent },
  data() {
    return {
      apiUrl: "https://whatstoday2024-8nsu.onrender.com",
      mode: "default",
      filter: "全部",
      sortBy: "default",
      search: "",
      searchInput: "",
      searchedList: [],
      allDishesList: [],
      stapleList: [],
      mainDishesList: [],
      sideDishesList: [],
      selected: [],
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
    },
    filter() {
      this.getSearchedDishes();
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
        let totalWeight = this.mode === "default" ?
          dishesList.reduce((acc, cur) => acc + cur.healthLevel, 0) :
          dishesList.reduce((acc, cur) => acc + cur.healthLevel + +cur.preferenceLevel, 0);
        let randomNumber = Math.random() * totalWeight;
        console.log(randomNumber, totalWeight)

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

      return answers;
    },
    generateBento() {
      // console.clear()
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
    getMode() {
      if (Object.keys(this.memberData).length !== 0) {
        this.mode = this.memberData.mode !== undefined ? this.memberData.mode : "default";
      } else {
        this.mode = "default";
      }
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
          this.allDishesList = this.allDishesList.map(dish => {
            const selectedTemp = this.selected.find(selectedItem => selectedItem.dishId === dish.id);
            // console.log(selectedTemp)
            if (selectedTemp) {
              return { ...dish, isChecked: selectedTemp.isChecked, preferenceLevel: +selectedTemp.preferenceLevel };
            } else {
              // console.log(123)
              return { ...dish, isChecked: false, preferenceLevel: 1 };
            }
          });
          console.log(this.allDishesList)

          this.stapleList = this.allDishesList.filter((dish) => dish.category === "主食類");
          this.mainDishesList = this.allDishesList.filter((dish) => dish.category === "主菜類");
          this.sideDishesList = this.allDishesList.filter((dish) => dish.category === "配菜類");
        })
    },
    async getSearchedDishes() {
      this.searchedList = [];
      this.search = this.searchInput;

      let titleSearchApiUrl = this.filter === "全部" ?
        `${this.apiUrl}/dishes?title_like=${this.search}` :
        `${this.apiUrl}/dishes?category=${this.filter}&title_like=${this.search}`
      await this.axios.get(titleSearchApiUrl)
        .then(res => {
          this.searchedList = [...this.searchedList, ...res.data.message];
        });

      let engTitleSearchApiUrl = this.filter === "全部" ?
        `${this.apiUrl}/dishes?engTitle_like=${this.search}` :
        `${this.apiUrl}/dishes?category=${this.filter}&engTitle_like=${this.search}`

      await this.axios.get(engTitleSearchApiUrl)
        .then(res => {
          this.searchedList = [...this.searchedList, ...res.data.message];
        });

      this.searchedList = this.searchedList.map(dish => {
        const selectedTemp = this.selected.find(selectedItem => selectedItem.dishId === dish.id);
        if (selectedTemp) {
          return { ...dish, isChecked: selectedTemp.isChecked, preferenceLevel: +selectedTemp.preferenceLevel };
        } else {
          return { ...dish, isChecked: false, preferenceLevel: 1 };
        }
      });

      this.getSortedDishes();
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
            this.allDishesList = this.allDishesList.map(dish => {
              const selectedTemp = this.selected.find(selectedItem => selectedItem.dishId === dish.id);
              if (selectedTemp) {
                return { ...dish, isChecked: selectedTemp.isChecked, preferenceLevel: +selectedTemp.preferenceLevel };
              } else {
                return { ...dish, isChecked: false, preferenceLevel: 1 };
              }
            });
            this.stapleList = this.allDishesList.filter((dish) => dish.category === "主食類");
            this.mainDishesList = this.allDishesList.filter((dish) => dish.category === "主菜類");
            this.sideDishesList = this.allDishesList.filter((dish) => dish.category === "配菜類");

            if (this.search) {
              this.searchedList = this.searchedList.sort((a, b) => b.healthLevel - a.healthLevel);
            }
          });
      }

    },
    async getFilteredDishes() {
      await this.getSearchedDishes();
      if (this.filter !== "全部") {
        this.searchedList = this.searchedList.filter((dish) => dish.category === this.filter);
      }
    },
    async getSelected() {
      await this.axios.get(`${this.apiUrl}/600/users/${this.memberData.id}/selecteds?_expand=dish`)
        .then(res => {
          this.selected = res.data.message;
          console.log(this.selected)
        })
    },
    async addToSelected(dish) {
      const selectedTemp = this.selected.find((item) => item.dishId === dish.id);
      console.log(selectedTemp)
      if (selectedTemp) {
        await this.axios.patch(`${this.apiUrl}/600/selecteds/${selectedTemp.id}`, { isChecked: true })
          .then(() => {
            this.getSelected();
          })
      } else {
        const data = {
          dishId: dish.id,
          isChecked: dish.isChecked,
          preferenceLevel: +dish.preferenceLevel
        }
        await this.axios.post(`${this.apiUrl}/600/users/${this.memberData.id}/selecteds/`, data)
          .then(() => {
            this.getSelected();
          })
      }
      console.log("done")
    },
    async updatePreferenceLevel(dish) {
      const selectedTemp = this.selected.find((item) => item.dishId === dish.id);
      await this.axios.patch(`${this.apiUrl}/600/selecteds/${selectedTemp.id}`, { preferenceLevel: +dish.preferenceLevel })
        .then(() => {
          this.getSelected();
        }).catch(err => {
          console.dir(err)
          console.log("wrong!")
        })
    },
    async removeFromSelected(dish) {
      const selectedTemp = this.selected.find((item) => item.dishId === dish.id);
      console.log(selectedTemp)
      if (selectedTemp) {
        if (+dish.preferenceLevel === 1) {
          await this.axios.delete(`${this.apiUrl}/600/selecteds/${selectedTemp.id}`)
            .then(() => {
              this.getSelected();
            })
        } else {
          await this.axios.patch(`${this.apiUrl}/600/selecteds/${selectedTemp.id}`, { isChecked: false })
            .then(() => {
              this.getSelected();
            })
        }

      } else {
        console.log("something wrong.")
      }
      console.log("done2")
    },
    updateSelected(dish) {
      dish.isChecked === true ? this.addToSelected(dish) : this.removeFromSelected(dish);
    },
    async init() {
      await this.getUser();
      if (Object.keys(this.memberData).length !== 0) {
        this.getMode();
        await this.getSelected();
      }
      await this.getAllDishesList();
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

/* tool ----------------------------- */
.vh-75 {
  height: 75vh;
}

.active {
  color: white;
}

/* mode-btn ----------------------------- */
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

/* site-induction-btn ----------------------------- */
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

/* bento-generator-btn ----------------------------- */
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
</style>