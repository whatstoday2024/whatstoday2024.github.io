<template>
    <!-- 便當生成 Modal -->
    <div class="modal fade" id="bentoModal" tabindex="-1" aria-labelledby="bentoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content bento">
                <div class="modal-header px-4">
                    <h3 class="modal-title" id="bentoModalLabel">今天吃什麼？</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="hideModal"></button>
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
                                        <p class="m-0 text-end">{{ Math.round(bentoTemp.starchTotalPortion / 4 * 100) /
                                100 }} 碗</p>
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
                        <div v-if="path === '/menu'" class="btns text-center p-3 col-6 col-lg-12">
                            <button class="btn btn-outline-primary re-generate-btn px-4 py-3 m-2"
                                    data-bs-dismiss="modal" @click="openModal(confirmRegenerateModal)"
                                    title="重新生成便當">重新生成便當</button>
                            <button class="btn btn-primary save-to-diary-btn px-4 py-3 m-2" data-bs-dismiss="modal"
                                    @click="openModal(saveToBentoDiaryModal)"
                                    :title="memberData.id ? '存至便當日記' : '便當日記為會員限定功能'"
                                    :disabled="!memberData.id">存至便當日記</button>
                            <small class="d-block text-danger" v-if="!memberData.id">* 登入以享 便當日記 相關功能</small>
                        </div>
                        <div v-if="path === '/member/bento-diary'" class="btns text-center p-3 col-6 col-lg-12">
                            <p>{{ bentoTemp.dateTemp }}</p>
                            <p>{{ bentoTemp.mealType }}</p>
                            <button class="btn btn-outline-primary re-generate-btn px-4 py-3 m-2"
                                    data-bs-dismiss="modal" @click="openModal(confirmDeleteRecordModal)"
                                    title="刪除此便當紀錄">刪除此便當紀錄</button>
                        </div>
                    </div>
                    <div class="bento-presentation col-lg-8 order-first order-lg-2">
                        <div class="border border-gray border-3 rounded w-100 h-100 p-3 pb-4">
                            <div class="row g-2 h-100">
                                <div class="col col-4 h-50">
                                    <div class="side-dish border border-gray border-3 rounded h-100">
                                        <img class="img rounded object-fit-cover h-100"
                                             :src="bentoTemp.sideDishes[0]?.imgUrl"
                                             :alt="bentoTemp.sideDishes[0]?.title + '的圖片'"
                                             :title="bentoTemp.sideDishes[0]?.title">
                                    </div>
                                </div>
                                <div class="col col-4 h-50">
                                    <div class="side-dish border border-gray border-3 rounded h-100">
                                        <img class="img rounded object-fit-cover h-100"
                                             :src="bentoTemp.sideDishes[1]?.imgUrl"
                                             :alt="bentoTemp.sideDishes[1]?.title + '的圖片'"
                                             :title="bentoTemp.sideDishes[1]?.title">
                                    </div>
                                </div>
                                <div class="col col-4 h-50">
                                    <div class="side-dish border border-gray border-3 rounded h-100">
                                        <img class="img rounded object-fit-cover h-100"
                                             :src="bentoTemp.sideDishes[2]?.imgUrl"
                                             :alt="bentoTemp.sideDishes[2]?.title + '的圖片'"
                                             :title="bentoTemp.sideDishes[2]?.title">
                                    </div>
                                </div>
                                <div class="col col-12 h-50">
                                    <div class="border border-gray border-3 rounded col-12 h-100 p-0 d-flex">
                                        <div class="staple w-50">
                                            <img class="img img-fluid object-fit-cover h-100"
                                                 :src="bentoTemp.stapleCourse?.imgUrl"
                                                 :alt="bentoTemp.stapleCourse?.title + '的圖片'"
                                                 :title="bentoTemp.stapleCourse?.title">
                                        </div>
                                        <div class="entree w-50">
                                            <img class="img img-fluid object-fit-cover h-100"
                                                 :src="bentoTemp.mainCourse?.imgUrl"
                                                 :alt="bentoTemp.mainCourse?.title + '的圖片'"
                                                 :title="bentoTemp.mainCourse?.title">
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
    <div class="modal fade" id="confirmRegenerateModal" tabindex="-1" aria-labelledby="confirmRegenerateModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="confirmRegenerateModalLabel">是否確認重新生成新的便當？</h5>
                    <button type="button" class="btn-close" aria-label="Cancel and Return" data-bs-dismiss="modal"
                            @click="openModal(bentoModal)">
                    </button>
                </div>
                <div class="modal-body">
                    此操作將無法復原，請確認是否執行。
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" aria-label="Cancel and Return"
                            data-bs-dismiss="modal" @click="openModal(bentoModal)">取消</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            @click="generateBento">確認</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 存至便當日記 Modal -->
    <div class="modal fade" id="saveToBentoDiaryModal" tabindex="-1" aria-labelledby="saveToBentoDiaryModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="saveToBentoDiaryModalLabel">存至便當日記</h5>
                    <button type="button" class="btn-close" aria-label="Cancel and Return" data-bs-dismiss="modal"
                            @click="openModal(bentoModal)"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="mx-2" for="bentoDate">便當日記：</label>
                        <input class="form-control me-4 w-auto d-inline-block" id="bentoDate" type="date"
                               v-model="bentoDate">
                    </div>
                    <div>
                        <label class="mx-2" for="mealType">這是我的：</label>
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" class="lunch-btn btn btn-outline-primary px-2 py-1"
                                    :class="{ active: mealType === '午餐' }" @click="mealType = '午餐'">午餐</button>
                            <button type="button" class="dinner-btn btn btn-outline-primary px-2 py-1"
                                    :class="{ active: mealType === '晚餐' }" @click="mealType = '晚餐'">晚餐</button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" aria-label="Cancel and Return"
                            data-bs-dismiss="modal" @click="openModal(bentoModal)">取消</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            @click="saveToDiary">確認儲存</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 確認刪除便當紀錄 Modal -->
    <div class="modal fade" id="confirmDeleteRecordModal" tabindex="-1" aria-labelledby="confirmDeleteRecordModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="confirmDeleteRecordModalLabel">是否確認刪除此便當紀錄？</h5>
                    <button type="button" class="btn-close" aria-label="Cancel and Return" data-bs-dismiss="modal"
                            @click="openModal(bentoModal)"></button>
                </div>
                <div class="modal-body">
                    此操作將無法復原，請確認是否執行。
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" aria-label="Cancel and Return"
                            data-bs-dismiss="modal" @click="openModal(bentoModal)">取消</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            @click="deleteRecord">確認</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import modal from "bootstrap/js/dist/modal";
import { toast } from 'vue3-toastify';

export default {
    props: ['bentoTemp', 'generateBento', "memberData", "deleteFromCalendar"],
    data() {
        return {
            path: "",
            bentoModal: null,
            saveToBentoDiaryModal: null,
            confirmRegenerateModal: null,
            confirmDeleteRecordModal: null,
            bentoDate: new Date().toISOString().slice(0, 10),
            mealType: "午餐",
            bentoRecords: [],
            successDelay: 1500,
            errorDelay: 2000
        };
    },
    methods: {
        async getBentoRecords() {
            try {
                const res = await this.axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/600/users/${this.memberData.id}/records/`)
                this.bentoRecords = res.data.message;
            } catch (error) {
                this.errorProcess();
            }
        },
        async saveToDiary() {
            await this.getBentoRecords();
            const data = {
                ...this.bentoTemp,
                date: this.bentoDate,
                mealType: this.mealType,
            }
            const recordTemp = this.bentoRecords.find((record) => record.date === data.date && record.mealType === data.mealType);
            if (recordTemp) {
                const overwrite = confirm('該時段已有便當紀錄，請問是否決定覆蓋該紀錄？')
                if (overwrite) {
                    try {
                        await this.axios.patch(`${import.meta.env.VITE_APP_SERVER_URL}/600/records/${recordTemp.id}`, data)
                        // console.log("done-patch", res.data.message)
                        toast.success('紀錄已存至便當日記！', {
                            autoClose: this.successDelay,
                        })
                    } catch (error) {
                        this.errorProcess();
                    }
                }
            } else {
                try {
                    await this.axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/600/users/${this.memberData.id}/records/`, data)
                    // console.log("done-patch", res.data.message)
                    toast.success('紀錄已存至便當日記！', {
                        autoClose: this.successDelay,
                    })
                } catch (error) {
                    this.errorProcess();
                }
            }
            this.saveToBentoDiaryModal.hide();
        },
        async deleteRecord() {
            try {
                await this.axios.delete(`${import.meta.env.VITE_APP_SERVER_URL}/600/records/${this.bentoTemp.idTemp}`)
                toast.success('便當紀錄刪除成功！', {
                    autoClose: this.successDelay,
                })
                this.deleteFromCalendar();
                // setTimeout(() => { location.reload() }, this.successDelay);
            } catch (error) {
                this.errorProcess();
            }
            this.confirmDeleteRecordModal.hide();
        },
        errorProcess() {
            toast.error('發生了某些錯誤，將重新整理頁面。', {
                autoClose: this.errorDelay,
            })
            setTimeout(() => { location.reload() }, this.errorDelay);
        },
        openModal(modal) {
            this.hideModal();
            modal.show();
        },
        hideModal() {
            this.bentoModal.hide();
            this.saveToBentoDiaryModal.hide();
            this.confirmRegenerateModal.hide();
            this.confirmDeleteRecordModal.hide();
        },
        init() {
            this.path = this.$route.path;
            this.bentoModal = new modal(document.querySelector("#bentoModal"));
            this.saveToBentoDiaryModal = new modal(document.querySelector("#saveToBentoDiaryModal"));
            this.confirmRegenerateModal = new modal(document.querySelector("#confirmRegenerateModal"));
            this.confirmDeleteRecordModal = new modal(document.querySelector("#confirmDeleteRecordModal"));
        }
    },
    mounted() {
        this.init();
    }
};
</script>

<style scoped>
.active {
    color: white;
}
</style>