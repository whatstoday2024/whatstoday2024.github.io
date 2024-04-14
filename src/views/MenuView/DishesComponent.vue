<template>
  <template v-if="dishesList.length !== 0">
    <div class="cards row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
      <div class="col" v-for="dish in dishesList" :key="dish.title">
        <div class="card h-100">
          <img :src="dish.imgUrl" height="120rem" class="card-img-top object-fit-cover" :alt="dish.title + '的圖片'">
          <div class="card-body dish-info mx-auto px-0 py-3 w-80 d-flex flex-column justify-content-between">
            <div class="dish-info-btn btn p-0 d-flex" @click="dishInfo = dish">
              <i class="fa-solid fa-circle-info text-secondary fs-5 lh-sm" title="菜色介紹" data-bs-toggle="modal"
                :data-bs-target="'#' + modalName"></i>
            </div>
            <h5 class="card-title text-center">{{ dish.title }}</h5>
            <small class="card-eng-title mb-3 d-block text-center">{{ dish.engTitle }}</small>
            <div class="input-group mx-auto">
              <div class="input-group-text" :class="{ 'bg-primary-mid': dish.isLoading === true }">
                <input class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input"
                  v-model="dish.isChecked" @change="updateSelected(dish)"
                  :disabled="mode === 'default' || dish.isLoading === true">
              </div>
              <select class="form-select" :class="{ 'bg-primary-light': dish.isLoading === true }"
                aria-label="Default select example" v-model="dish.preferenceLevel" @change="updatePreferenceLevel(dish)"
                :disabled="!dish.isChecked || mode === 'default' || dish.isLoading === true">
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
  </template>

  <template v-else>
    <div class="mx-2">
      <h5>沒有找到對應的菜色</h5>
    </div>
  </template>

  <!-- 菜色介紹 Modal -->
  <div class="modal fade" :id="modalName" tabindex="-1" aria-labelledby="dishModalLabel" aria-hidden="true">
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
                  <p class="m-0">{{ dishInfo.title }}</p>
                </div>
              </div>
              <div class="col row align-items-start">
                <div class="col">
                  <h6 class="m-0 lh-base">英文菜名：</h6>
                </div>
                <div class="col">
                  <p class="m-0">{{ dishInfo.engTitle }}</p>
                </div>
              </div>
              <div class="col row align-items-center">
                <div class="col">
                  <h6 class="m-0 lh-base">喜好程度：</h6>
                </div>
                <div class="col">
                  <select class="form-select w-75" aria-label="Default select example" :disabled="!dishInfo.isChecked"
                    v-model="dishInfo.preferenceLevel">
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
                  <p class="m-0">{{ dishInfo.healthLevel }}</p>
                </div>
              </div>
              <div class="col row align-items-start">
                <div class="col">
                  <h6 class="m-0 lh-base">營養比例：</h6>
                </div>
                <div class="col">
                  <div class="row row-cols-1 justify-content-between">
                    <div class="col d-flex">
                      <div class="w-50">
                        <p class="m-0">澱粉</p>
                      </div>
                      <div class="w-50">
                        <p class="m-0 text-end">{{ dishInfo.starchPortion / 4 }} 碗</p>
                      </div>
                    </div>
                    <div class="col d-flex">
                      <div class="w-50">
                        <p class="m-0">蛋白質</p>
                      </div>
                      <div class="w-50">
                        <p class="m-0 text-end">{{ dishInfo.proteinPortion }} 份</p>
                      </div>
                    </div>
                    <div class="col d-flex">
                      <div class="w-50">
                        <p class="m-0">蔬菜</p>
                      </div>
                      <div class="w-50">
                        <p class="m-0 text-end">{{ dishInfo.vegetablePortion }} 份</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col-lg-5 col-8 p-3 order-first order-lg-2 mx-auto align-self-center">
              <img class="object-fit-cover" :src="dishInfo.imgUrl" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dishesList', 'mode', 'modalName', 'updateSelected', 'updatePreferenceLevel'],
  data() {
    return {
      dishInfo: {}
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style scoped>
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

.form-check-input {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
