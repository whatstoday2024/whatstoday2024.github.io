<template>
  <div class="container my-5">
    <div class="text-start mb-4 d-flex justify-content-between border-bottom pb-3">
      <h3>新增菜色</h3>
      <button class="btn btn-outline-brand-blue">
        <RouterLink class="navbar-brand" to="/admin/admin-items">
          菜色列表
        </RouterLink>
      </button>
    </div>
    <VForm class="row" v-slot="{ errors }" @submit="addItem" >
    <div class="p-2 p-lg-3 col-md-6">
      <div>
        <h5>菜色名稱 / 分類 / 健康分數</h5>
        <div class="form-floating mb-4">
          <VField type="text" id="title" placeholder="請輸入菜色名稱" name="title" class="form-control" :class="{ 'is-invalid': errors['title'] }" rules="required" v-model="item.title" />
            <ErrorMessage name="title" class="invalid-feedback"/>
            <label for="title">中文名稱*</label>
        </div>
        <div class="form-floating mb-4">
          <VField type="text" id="engTitle" placeholder="請輸入英文名稱" name="engTitle" class="form-control" :class="{ 'is-invalid': errors['engTitle'] }" rules="required" v-model="item.engTitle" />
            <ErrorMessage name="engTitle" class="invalid-feedback"/>
            <label for="engTitle">英文名稱*</label>
        </div>
        <div class="form-floating mb-4">
          <VField as="select" id="category" placeholder="請選擇分類" name="category" class="form-select" :class="{ 'is-invalid': errors['category'] }" rules="required" v-model="item.category">
            <option value="主食類">主食類</option>
            <option value="配菜類">配菜類</option>
            <option value="主菜類">主菜類</option>
          </VField>
            <ErrorMessage name="category" class="invalid-feedback"/>
            <label for="category">分類*</label>
        </div>
        <div class="form-floating mb-4">
          <VField as="select" id="healthLevel" placeholder="請選擇健康分數" name="healthLevel" class="form-select" :class="{ 'is-invalid': errors['healthLevel'] }" rules="required" v-model="item.healthLevel">
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3.5">3.5</option>  
            <option value="4">4</option>  
            <option value="4.5">4.5</option>
            <option value="5">5</option>   
          </VField>
            <ErrorMessage name="healthLevel" class="invalid-feedback"/>
            <label for="healthLevel">健康分數*</label>
        </div>
      </div>
      <div>
        <h5>營養比例(份)</h5>
        <div class="form-floating mb-4">
          <VField as="select" id="starchPortion" placeholder="請選擇澱粉比例" name="starchPortion" class="form-select" :class="{ 'is-invalid': errors['starchPortion'] }" rules="required" v-model="item.starchPortion">
            <option v-for="item in portionOptions" :value="item" :key="item">{{item}}</option>     
          </VField>
            <ErrorMessage name="starchPortion" class="invalid-feedback"/>
            <label for="starchPortion">澱粉比例*</label>
        </div>
        <div class="form-floating mb-4">
          <VField as="select" id="proteinPortion" placeholder="請選擇蛋白質比例" name="proteinPortion" class="form-select" :class="{ 'is-invalid': errors['proteinPortion'] }" rules="required" v-model="item.proteinPortion">
            <option v-for="item in portionOptions" :value="item" :key="item">{{item}}</option>   
          </VField>
            <ErrorMessage name="proteinPortion" class="invalid-feedback"/>
            <label for="proteinPortion">蛋白質比例*</label>
        </div>
        <div class="form-floating mb-4">
          <VField as="select" id="vegetablePortion" placeholder="請選擇蔬菜比例" name="vegetablePortion" class="form-select" :class="{ 'is-invalid': errors['vegetablePortion'] }" rules="required" v-model="item.vegetablePortion">
            <option v-for="item in portionOptions" :value="item" :key="item">{{item}}</option>  
          </VField>
            <ErrorMessage name="vegetablePortion" class="invalid-feedback"/>
            <label for="vegetablePortion">蔬菜比例*</label>
        </div>
      </div>
    </div>
    <div class="p-2 p-lg-3 col-md-6">
      <div>
        <h5>菜色圖片</h5>
        <form id="upload-image" class="mb-2" action="/api/whatstoday2024/admin/upload" enctype="multipart/form-data" method="post">
          <label for="formFile" class="form-label">上傳圖片</label>
          <input ref="input-file" class="form-control" type="file" id="file-input" name="file-to-upload" @change="uploadImg">
          <!-- <input type="submit" value="送出" @click.prevent="uploadImg"> -->
          <img v-if="tempImg1 !==''" class="img" :src="tempImg1" alt="image">
          <button v-if="tempImg1 !== ''" type="button" @click="addImage1" class="mt-2 btn btn-outline-brand-blue btn-sm">新增此圖片至圖片列表</button>
        </form>
      </div>
      <div>
        <div class="form-floating mb-4">
          <div class="form-group mb-3">
            <label for="imgUrl" class="form-label">圖片網址</label>
              <input id="imgUrl" v-model="tempImg2" type="text" class="form-control" placeholder="請輸入圖片連結">
              <img v-if="tempImg2 !==''" class="img" :src="tempImg2" alt="image">
              <button v-if="tempImg2 !== ''" type="button" @click="addImage2" class="mt-2 btn btn-outline-brand-blue btn-sm">新增此圖片至圖片列表</button>
          </div>
        </div> 
      </div>
      <div>
        <div class="mb-3">
          <span>主圖*</span><span class="errorMsg">{{ errorMsg }}</span>
          <div v-if="item.imgUrl">
            <img class="img" :src="item.imgUrl" alt="image">
          </div>
        </div>
        <div mb-3>
          <span>圖片列表(點選<ElSelect style="width: 20px; height: 20px ;color:yellow;"/>成為主圖 / <DeleteFilled style="width: 20px; height: 20px ;color:black;"/>刪除圖片)</span>
          <div v-if="item.images.length" class="img-box">
            <div v-for="(img,index) in item.images" :key="index" style="position: relative;">
              <img class="img" :src="img" alt="image">
              <span @click="chooseMainImg(img)"><ElSelect style="width: 30px; height: 30px ;color:yellow; position: absolute; top: 1; left: 1;cursor: pointer;"/></span>
              <span @click="deleteImg(index)"><DeleteFilled style="width: 30px; height: 30px ;color:#d4d4d4; position: absolute; top: 1; right: 1;cursor: pointer;"/></span>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex gap-2 mt-3 btn-container">
        <button type="submit" class="btn btn-brand-blue btn-md mb-4">確認</button>
        <button type="button" @click="reset" class="btn btn-outline-grey66 btn-md mb-4">重置</button>
      </div>
      
    </div>
        
    </VForm>
  </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'vue3-toastify';
import { DeleteFilled } from "@element-plus/icons-vue";
import { Select as ElSelect } from "@element-plus/icons-vue";

import memberStore from '@/stores/memberData'
import { mapActions } from 'pinia'

export default {
  data() {
    return {
      portionOptions:[0,0.25,0.5,0.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3,3.25,3.5,3.75,4,4.25,4.5,4.75,5],
      item: {
        title: '',
        engTitle: '',
        category:'',
        healthLevel:'',
        starchPortion: '',
        proteinPortion: '',
        vegetablePortion: '',
        imgUrl: '',
        images:[],
        noBgImg: ''
      },
      tempImg1:'',
      tempImg2:'',
      errorMsg:'',
    }
  },
  components: {
    DeleteFilled,
    ElSelect
  },
  methods: {
    uploadImg() {
        const form = document.querySelector('#upload-image');
        const imageInput = document.querySelector("#file-input");
        const formData = new FormData(form);
        if (imageInput.value) {
            // 取出 Token
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
            axios.defaults.headers.common.Authorization = token;
            axios.post(`${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/admin/upload`, formData)
                .then((res) => {
                    this.tempImg1 = res.data.imageUrl;
                    imageInput.value = '';
                    axios.defaults.headers.common.Authorization = null;
                })
                .catch(err => {
                    toast.error(err.data.message);
                    axios.defaults.headers.common.Authorization = null;
                })
        } else {
            alert("請先選擇欲上傳之圖片。");
        }
    },
    async addItem(){
      if(this.item.imgUrl === ''){
        this.errorMsg = '主圖為必填'
        return
      }
      try{
        const res = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/dishes`,this.item)
        toast.success(`成功新增 ${res.data.message.title}`)
        this.$router.push(`/admin/admin-items`);
      }catch(err){
        toast.error(err.data.message)
      }
    
    },
    reset(){
      this.item = {title: '',
        engTitle: '',
        category:'',
        healthLevel:'',
        starchPortion: '',
        proteinPortion: '',
        vegetablePortion: '',
        imgUrl: '',
        images:[],
        noBgImg: ''}
    },
    addImage1(){
      this.item.images.push(this.tempImg1)
      this.tempImg1 = ''
    },
    addImage2(){
      this.item.images.push(this.tempImg2)
      this.tempImg2 = ''
    },
    chooseMainImg(img){
      this.item.imgUrl = img
    },
    deleteImg(index){
      this.item.images.splice(index,1)
    },
    ...mapActions(memberStore, ['checkIsAdmin'])
  },
  watch:{
    'item.imgUrl':function(){
      this.errorMsg = ''
    },
  },
  mounted() {
   if(!this.checkIsAdmin()) {
      toast.error('非管理者無法執行')
      this.$router.push(`/`);
   }
  },
}
</script>

<style lang="scss" scoped>
.img-box{
  display: flex;
}
.img{
  width: 12rem;
}

.container{
  position: relative;
}
.btn-container{
  position: absolute;
  top: 3.5rem;
  right: 0.8rem;
}
.errorMsg{
  color: $brand-red;
  font-size: 0.9rem;
  margin-left: 1rem;
}
</style>