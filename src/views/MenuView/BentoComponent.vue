<template>
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
export default {
    props: ['bentoTemp', 'generateBento'],
    data() {
        return {
        };
    },
    methods: {}
};
</script>

<style scoped></style>