<template>
  <loadingVue :active="isLoading" />
  <div class="container">
    <div class="title">
      <h2 class="text-center my-3">帶您探索菜色的無限可能</h2>
      <!-- <div class="site-induction-btn btn p-0 d-flex">
        <i class="fa-solid fa-circle-info text-secondary fs-2" title="網站介紹" data-bs-toggle="modal"
           data-bs-target="#siteIntroModal"></i>
      </div> -->
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
          <button type="button" class="btn btn-outline-primary" id="SortByWhatFactorDropdownMenuButton"
            data-bs-toggle="dropdown" aria-expanded="false">
            <strong>三</strong>
          </button>
          <ul class="dropdown-menu" aria-labelledby="SortByWhatFactorDropdownMenuButton">
            <li><a class="dropdown-item" :class="{ active: sortBy === 'default' }" href="javascript:;"
                @click="sortBy = 'default'">依 預設 排序</a></li>
            <li><a class="dropdown-item" :class="{ active: sortBy === 'preferenceLevel' }" href=" javascript:;"
                @click="sortBy = 'preferenceLevel'">依 喜好程度 排序</a></li>
            <li><a class="dropdown-item" :class="{ active: sortBy === 'healthLevel' }" href="javascript:;"
                @click="sortBy = 'healthLevel'">依 健康分數 排序</a></li>
          </ul>
        </div>
        <form class="search-input input-group" @submit.prevent="getSearchedDishes">
          <input type="text" class="form-control" placeholder="搜尋菜色" aria-label="Search"
            aria-describedby="Input Box For Searching Dishes" size="10" v-model.trim="searchInput"
            @blur="searchPretest">
          <button type="button" class="btn btn-outline-primary" id="button-addon2" @click="getSearchedDishes">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
    <div class="menu border border-primary rounded mb-3 position-relative" :class="{ mask: mode === 'default' }">
      <div class="wrap w-80 mx-auto pt-5 pb-4">
        <div class="staple mb-4" v-if="(filter === '全部' || filter === '主食類') && search === ''">
          <h3 class="d-inline mx-2">主食類</h3>
          <small v-if="stapleList.filter((dish) => dish.isChecked === true).length < 1"
            class="text-danger">*請至少選擇一樣</small>
          <hr>
          <DishesComponent :dishes-list="stapleList" :mode="mode" modal-name="stapleModal"
            :update-selected="updateSelected" :update-preference-level="updatePreferenceLevel" />
        </div>
        <div class="dishes mb-4" v-if="(filter === '全部' || filter === '配菜類') && search === ''">
          <h3 class="d-inline mx-2">配菜類</h3>
          <small v-if="sideDishesList.filter((dish) => dish.isChecked === true).length < 3"
            class="text-danger">*請至少選擇三樣</small>
          <hr>
          <DishesComponent :dishes-list="sideDishesList" :mode="mode" modal-name="sideDishesModal"
            :update-selected="updateSelected" :update-preference-level="updatePreferenceLevel" />
        </div>
        <div class="entree mb-4" v-if="(filter === '全部' || filter === '主菜類') && search === ''">
          <h3 class="d-inline mx-2">主菜類</h3>
          <small v-if="mainDishesList.filter((dish) => dish.isChecked === true).length < 1"
            class="text-danger">*請至少選擇一樣</small>
          <hr>
          <DishesComponent :dishes-list="mainDishesList" :mode="mode" modal-name="mainDishesModal"
            :update-selected="updateSelected" :update-preference-level="updatePreferenceLevel" />
        </div>
        <div class="entree mb-4" v-if="search !== ''">
          <h3 class="mx-2">搜尋結果</h3>
          <hr>
          <DishesComponent :dishes-list="searchedList" :mode="mode" modal-name="searchedDishesModal"
            :update-selected="updateSelected" :update-preference-level="updatePreferenceLevel" />
        </div>
      </div>
    </div>
    <div id="bentoGenerator" class="bento-generator text-center">
      <button type="button" class="btn btn-outline-primary bento-generator-btn mb-4 px-4 py-3"
        @click="bentoPretest">生成便當</button>
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
  <BentoComponent :bento-temp="bentoTemp" :generate-bento="generateBento" :member-data="memberData" />

</template>

<script>
import DishesComponent from './DishesComponent.vue'
import BentoComponent from './BentoComponent.vue'
import memberData from '@/stores/memberData'
import { mapState, mapActions } from 'pinia'
import Modal from 'bootstrap/js/dist/modal'
import { toast } from 'vue3-toastify'

console.clear()

document.title = '來點菜單'

export default {
  components: { DishesComponent, BentoComponent },
  data () {
    return {
      isLoading: false,
      introIndex: 1,
      mode: 'default',
      filter: '全部',
      sortBy: 'default',
      search: '',
      searchInput: '',
      searchedList: [],
      allDishesList: [],
      stapleList: [],
      mainDishesList: [],
      sideDishesList: [],
      selectedList: [],
      bentoTemp: {
        stapleCourse: {},
        mainCourse: {},
        sideDishes: [],
        date: '',
        mealType: '',
        starchTotalPortion: 0,
        proteinTotalPortion: 0,
        vegetableTotalPortion: 0
      },
      bentoModal: null,
      successDelay: 1500,
      errorDelay: 2000
    }
  },
  computed: {
    ...mapState(memberData, ['memberData', 'hasCheckLogin'])
  },
  watch: {
    sortBy () {
      this.getSortedDishes()
    },
    filter () {
      this.getSearchedDishes()
    }
  },
  methods: {
    drawOneDish (dishesList) {
      const totalWeight = this.mode === 'default'
        ? dishesList.reduce((acc, cur) => acc + cur.healthLevel, 0)
        : dishesList.reduce((acc, cur) => acc + cur.healthLevel + +cur.preferenceLevel, 0)
      let randomNumber = Math.random() * totalWeight
      // console.log(randomNumber, totalWeight)
      let answerIndex = 0
      for (let i = 0; i < dishesList.length; i++) {
        randomNumber -= this.mode === 'default'
          ? dishesList[i].healthLevel
          : (dishesList[i].healthLevel + +dishesList[i].preferenceLevel)
        if (randomNumber <= 0) {
          answerIndex = i
          break
        }
      }

      // console.log(`抽中的選項是：${dishesList[answerIndex].title}`);
      this.bentoTemp.starchTotalPortion += dishesList[answerIndex].starchPortion
      this.bentoTemp.proteinTotalPortion += dishesList[answerIndex].proteinPortion
      this.bentoTemp.vegetableTotalPortion += dishesList[answerIndex].vegetablePortion
      return dishesList[answerIndex]
    },
    drawThreeDishes (dishesList) {
      const answers = []
      const tempDishesList = [...dishesList]

      while (answers.length < 3) {
        const totalWeight = this.mode === 'default'
          ? tempDishesList.reduce((acc, cur) => acc + cur.healthLevel, 0)
          : tempDishesList.reduce((acc, cur) => acc + cur.healthLevel + +cur.preferenceLevel, 0)
        let randomNumber = Math.random() * totalWeight
        // console.log(randomNumber, totalWeight)

        let answerIndex = 0
        for (let i = 0; i < tempDishesList.length; i++) {
          randomNumber -= this.mode === 'default'
            ? tempDishesList[i].healthLevel
            : (tempDishesList[i].healthLevel + +tempDishesList[i].preferenceLevel)

          if (randomNumber <= 0) {
            answerIndex = i
            break
          }
        }

        // console.log('抽中的項目是：', tempDishesList[answerIndex].title);
        this.bentoTemp.starchTotalPortion += dishesList[answerIndex].starchPortion
        this.bentoTemp.proteinTotalPortion += dishesList[answerIndex].proteinPortion
        this.bentoTemp.vegetableTotalPortion += dishesList[answerIndex].vegetablePortion
        answers.push(tempDishesList[answerIndex])
        tempDishesList.splice(answerIndex, 1)
      }

      return answers
    },
    bentoPretest () {
      this.bentoTemp.sideDishes?.length === 0 ? this.generateBento() : this.bentoModal.show()
    },
    async generateBento () {
      console.clear()
      this.isLoading = true
      await this.getAllDishesList()

      let isSatisfied = true
      const stapleTemp = this.mode === 'default' ? this.stapleList : this.stapleList.filter((dish) => dish.isChecked === true)
      const mainDishesTemp = this.mode === 'default' ? this.mainDishesList : this.mainDishesList.filter((dish) => dish.isChecked === true)
      const sideDishesTemp = this.mode === 'default' ? this.sideDishesList : this.sideDishesList.filter((dish) => dish.isChecked === true)

      if (stapleTemp.length < 1) {
        isSatisfied = false
        toast.error('自選模式必須選取至少一種主食。', {
          autoClose: this.errorDelay
        })
      }
      if (sideDishesTemp.length < 3) {
        isSatisfied = false
        toast.error('自選模式必須選取至少三種配菜。', {
          autoClose: this.errorDelay
        })
      }
      if (mainDishesTemp.length < 1) {
        isSatisfied = false
        toast.error('自選模式必須選取至少一種主菜。', {
          autoClose: this.errorDelay
        })
      }
      if (!isSatisfied) {
        this.isLoading = false
        return
      }

      this.bentoTemp = {
        starchTotalPortion: 0,
        proteinTotalPortion: 0,
        vegetableTotalPortion: 0
      }
      this.bentoTemp.stapleCourse = this.drawOneDish(stapleTemp)
      this.bentoTemp.mainCourse = this.drawOneDish(mainDishesTemp)
      this.bentoTemp.sideDishes = this.drawThreeDishes(sideDishesTemp)
      toast.success('新便當已生成。', {
        autoClose: this.successDelay
      })
      this.bentoModal.show()
      this.isLoading = false
    },
    moveToGeneratorBentoBtn () {
      document.querySelector('#bentoGenerator').scrollIntoView({ behavior: 'smooth' })
    },
    getMode () {
      if (this.memberData.id) {
        this.mode = this.memberData.mode !== undefined ? this.memberData.mode : 'default'
      } else {
        const mode = localStorage.getItem('mode')
        this.mode = mode || 'default'
      }
    },
    async setMode (mode) {
      this.isLoading = true
      this.mode = mode
      if (this.memberData.id) {
        try {
          await this.axios.patch(`${import.meta.env.VITE_APP_SERVER_URL}/600/users/${this.memberData.id}`, { mode })
        } catch (error) {
          this.errorProcess()
        }
      } else {
        localStorage.setItem('mode', this.mode)
      }
      this.isLoading = false
    },
    async getAllDishesList () {
      try {
        await this.getSelectedDishes()
        const res = await this.axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/dishes`)
        this.allDishesList = res.data.message.map(dish => {
          const selectedTemp = this.selectedList.find(selectedItem => selectedItem.dishId === dish.id)
          if (selectedTemp) {
            return { ...dish, isChecked: selectedTemp.isChecked, preferenceLevel: +selectedTemp.preferenceLevel }
          } else {
            return { ...dish, isChecked: false, preferenceLevel: 1 }
          }
        })

        this.stapleList = this.allDishesList.filter((dish) => dish.category === '主食類')
        this.mainDishesList = this.allDishesList.filter((dish) => dish.category === '主菜類')
        this.sideDishesList = this.allDishesList.filter((dish) => dish.category === '配菜類')
      } catch (error) {
        this.errorProcess()
      }
    },
    searchPretest () {
      if (this.search === this.searchInput) {
        return
      }
      this.getSearchedDishes()
    },
    async getSearchedDishes () {
      this.isLoading = true
      this.searchedList = []
      this.search = this.searchInput

      try {
        const titleSearchApiUrl = import.meta.env.VITE_APP_SERVER_URL + '/dishes?title_like=' + this.search +
          (this.filter === '全部' ? '' : '&category=' + this.filter) +
          (this.sortBy !== 'healthLevel' ? '' : '&_sort=' + this.sortBy + '&_order=desc')

        const res = await this.axios.get(titleSearchApiUrl)
        this.searchedList = [...this.searchedList, ...res.data.message]

        const engTitleSearchApiUrl = import.meta.env.VITE_APP_SERVER_URL + '/dishes?engTitle_like=' + this.search +
          (this.filter === '全部' ? '' : '&category=' + this.filter) +
          (this.sortBy !== 'healthLevel' ? '' : '&_sort=' + this.sortBy + '&_order=desc')

        const engRes = await this.axios.get(engTitleSearchApiUrl)
        this.searchedList = [...this.searchedList, ...engRes.data.message]

        await this.getSelectedDishes()
        this.searchedList = this.searchedList.map(dish => {
          const selectedTemp = this.selectedList.find(selectedItem => selectedItem.dishId === dish.id)
          if (selectedTemp) {
            return { ...dish, isChecked: selectedTemp.isChecked, preferenceLevel: +selectedTemp.preferenceLevel }
          } else {
            return { ...dish, isChecked: false, preferenceLevel: 1 }
          }
        })

        await this.getSortedDishes()
      } catch (error) {
        this.errorProcess()
      }

      this.isLoading = false
    },
    async getSortedDishes () {
      this.isLoading = true

      if (this.sortBy === 'default') {
        if (this.searchedList.length) {
          this.searchedList = this.searchedList.sort((a, b) => a.id - b.id)
        }
      } else if (this.sortBy === 'preferenceLevel') {
        this.allDishesList = [...this.allDishesList.filter((dish) => dish.isChecked === true).sort((a, b) => b.preferenceLevel - a.preferenceLevel),
          ...this.allDishesList.filter((dish) => dish.isChecked === false).sort((a, b) => b.preferenceLevel - a.preferenceLevel)]

        this.stapleList = this.allDishesList.filter((dish) => dish.category === '主食類')
        this.mainDishesList = this.allDishesList.filter((dish) => dish.category === '主菜類')
        this.sideDishesList = this.allDishesList.filter((dish) => dish.category === '配菜類')

        if (this.searchedList.length) {
          this.searchedList = [...this.searchedList.filter((dish) => dish.isChecked === true).sort((a, b) => b.preferenceLevel - a.preferenceLevel),
            ...this.searchedList.filter((dish) => dish.isChecked === false).sort((a, b) => b.preferenceLevel - a.preferenceLevel)]
        }

        if (this.selectedList.length) {
          this.selectedList = [...this.selectedList.filter((dish) => dish.isChecked === true).sort((a, b) => b.preferenceLevel - a.preferenceLevel),
            ...this.selectedList.filter((dish) => dish.isChecked === false).sort((a, b) => b.preferenceLevel - a.preferenceLevel)]

          if (!this.memberData.id) {
            localStorage.setItem('selectedList', JSON.stringify(this.selectedList))
          }
        }
      } else if (this.sortBy === 'healthLevel') {
        try {
          const res = await this.axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/dishes?_sort=${this.sortBy}&_order=desc`)
          this.allDishesList = res.data.message.map(dish => {
            const selectedTemp = this.selectedList.find(selectedItem => selectedItem.dishId === dish.id)
            if (selectedTemp) {
              return { ...dish, isChecked: selectedTemp.isChecked, preferenceLevel: +selectedTemp.preferenceLevel }
            } else {
              return { ...dish, isChecked: false, preferenceLevel: 1 }
            }
          })
        } catch (error) {
          this.errorProcess()
        }
        this.stapleList = this.allDishesList.filter((dish) => dish.category === '主食類')
        this.mainDishesList = this.allDishesList.filter((dish) => dish.category === '主菜類')
        this.sideDishesList = this.allDishesList.filter((dish) => dish.category === '配菜類')

        if (this.searchedList.length) {
          this.searchedList = this.searchedList.sort((a, b) => b.healthLevel - a.healthLevel)
        }
      }
      this.isLoading = false
    },
    async getSelectedDishes () {
      if (this.memberData.id) {
        try {
          const res = await this.axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/600/users/${this.memberData.id}/selecteds?_expand=dish`)
          this.selectedList = res.data.message
        } catch (error) {
          this.errorProcess()
        }
      } else {
        const selectedList = JSON.parse(localStorage.getItem('selectedList'))
        this.selectedList = selectedList || []
      }
    },
    async addToSelected (dish) {
      await this.getSelectedDishes()
      const selectedTemp = this.selectedList.find((item) => item.dishId === dish.id)
      const selectedTempIndex = this.selectedList.findIndex(item => item.dishId === dish.id)
      if (selectedTemp) {
        if (this.memberData.id) {
          try {
            await this.axios.patch(`${import.meta.env.VITE_APP_SERVER_URL}/600/selecteds/${selectedTemp.id}`, { isChecked: true })
          } catch (error) {
            this.errorProcess()
          }
        } else {
          this.selectedList[selectedTempIndex].isChecked = true
          localStorage.setItem('selectedList', JSON.stringify(this.selectedList))
        }
      } else {
        const data = {
          dishId: dish.id,
          isChecked: dish.isChecked,
          preferenceLevel: +dish.preferenceLevel
        }
        if (this.memberData.id) {
          try {
            await this.axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/600/users/${this.memberData.id}/selecteds/`, data)
          } catch (error) {
            this.errorProcess()
          }
        } else {
          this.selectedList.push(data)
          localStorage.setItem('selectedList', JSON.stringify(this.selectedList))
        }
      }
    },
    async updatePreferenceLevel (dish) {
      dish.isLoading = true
      await this.getSelectedDishes()

      const selectedTemp = this.selectedList.find((item) => item.dishId === dish.id)
      const selectedTempIndex = this.selectedList.findIndex(item => item.dishId === dish.id)
      if (this.memberData.id) {
        try {
          await this.axios.patch(`${import.meta.env.VITE_APP_SERVER_URL}/600/selecteds/${selectedTemp.id}`, { preferenceLevel: +dish.preferenceLevel })
        } catch (error) {
          this.errorProcess()
        }
      } else {
        this.selectedList[selectedTempIndex].preferenceLevel = +dish.preferenceLevel
        localStorage.setItem('selectedList', JSON.stringify(this.selectedList))
      }

      await this.getAllDishesList()
      dish.isLoading = false
    },
    async uncheckFromSelected (dish) {
      await this.getSelectedDishes()

      const selectedTemp = this.selectedList.find((item) => item.dishId === dish.id)
      const selectedTempIndex = this.selectedList.findIndex(item => item.dishId === dish.id)
      if (selectedTemp) {
        if (+dish.preferenceLevel === 1) {
          if (this.memberData.id) {
            try {
              await this.axios.delete(`${import.meta.env.VITE_APP_SERVER_URL}/600/selecteds/${selectedTemp.id}`)
            } catch (error) {
              this.errorProcess()
            }
          } else {
            this.selectedList.splice(selectedTempIndex, 1)
            localStorage.setItem('selectedList', JSON.stringify(this.selectedList))
          }
        } else {
          if (this.memberData.id) {
            try {
              await this.axios.patch(`${import.meta.env.VITE_APP_SERVER_URL}/600/selecteds/${selectedTemp.id}`, { isChecked: false })
            } catch (error) {
              this.errorProcess()
            }
          } else {
            this.selectedList[selectedTempIndex].isChecked = false
            localStorage.setItem('selectedList', JSON.stringify(this.selectedList))
          }
        }
      } else {
        this.errorProcess()
      }
    },
    async updateSelected (dish) {
      dish.isLoading = true
      dish.isChecked === true ? await this.addToSelected(dish) : await this.uncheckFromSelected(dish)
      await this.getAllDishesList()
      dish.isLoading = false
    },
    errorProcess () {
      toast.error('發生了某些錯誤，將重新整理頁面。', {
        autoClose: this.errorDelay
      })
      setTimeout(() => { location.reload() }, this.errorDelay)
    },
    async init () {
      this.isLoading = true
      await this.getUser()
      this.getMode()
      await this.getAllDishesList()
      this.bentoModal = new Modal(document.querySelector('#bentoModal'))
      this.isLoading = false
    },
    ...mapActions(memberData, ['getUser'])
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
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
  border-radius: .25rem;
}

/* aside ----------------------------- */
.aside {
  position: fixed;
  right: 1.5rem;
  bottom: 2rem;
  z-index: 999;
  transition: all 0.5s;
  color: $primary;

  &:hover {
      transform: translateY(-2px);
  }
  &:active {
      transform: translateY(2px);
  }
}

/*
.aside-link {
  opacity: 0.5;
  transition-duration: .3s;
}

.aside-link:hover {
  opacity: 0.7;
}
*/

.aside-link-generator {
  /* font-size: 4vw; */
  font-size: 40px;
}

/* site-induction-btn ----------------------------- */
.title {
  position: relative;
}

.site-induction-btn {
  position: absolute;
  right: 0;
  top: 7%;
  display: none;
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
