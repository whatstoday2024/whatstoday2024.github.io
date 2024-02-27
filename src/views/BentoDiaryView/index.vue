<template>
    <div class="container">
        <h2 class="text-center my-2">我的便當日記</h2>
        <div class="calendar-wrap rounded border border-primary bg-light p-4 my-3 mx-auto">
            <FullCalendar :options="calendarOptions" />
        </div>
    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '`@fullcalendar/interaction`'

let calendarWrap = null;

export default {
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin],
                locale: "zh-tw",
                initialView: 'dayGridMonth',
                buttonText: { today: "今天" },
                headerToolbar: {
                    start: 'today',
                    center: 'prev,title,next',
                    end: 'setFreeDayBtn'
                },
                // themeSystem: 'bootstrap5',
                customButtons: {
                    setFreeDayBtn: {
                        text: '設定放縱日',
                        click: function () {
                            alert('clicked the custom button!');
                        },
                        backgroundColor: "524786",
                    }
                },
                fixedWeekCount: false,
                showNonCurrentDates: false,
                height: "auto",
                dateClick: this.handleDateClick,
                events: [
                    { title: '午餐便當', date: '2024-02-25' },
                    { title: 'event 2', date: '2024-02-25' },
                    {
                        title: 'event 2',
                        date: '2024-02-28'
                    },
                    {
                        start: '2024-02-24',
                        display: 'background',
                        backgroundColor: "#462056",
                    },
                    {
                        start: '2024-02-23',
                        display: 'background',
                        backgroundColor: "#462056",
                    },
                    {
                        title: "午餐",
                        daysOfWeek: [3], // 指定事件在星期三發生
                        // start: '2024-02-24', // 設定事件的開始時間
                        // endTime: "17:00", // 設定事件的結束時間
                        startRecur: "2024-02-24", // 開始日期（第一次事件發生的日期）
                        // endRecur: "2024-12-31" // 結束日期（最後一次事件發生的日期）
                    },
                    {
                        daysOfWeek: [3], // 指定事件在星期三發生
                        // start: '8:00', // 設定事件的開始時間
                        // endTime: "17:00", // 設定事件的結束時間
                        startRecur: "2024-02-27", // 開始日期（第一次事件發生的日期）
                        // endRecur: "2024-12-31" // 結束日期（最後一次事件發生的日期）
                        display: 'background',
                        backgroundColor: "orange",
                    }
                ],
                eventClick: this.eventClick,
                eventClassNames: this.eventClassNames,
            }
        }
    },
    methods: {
        handleDateClick(arg) {
            alert('date click! ' + arg.dateStr)
        },
        eventClick(info) {
            // 檢查被點選的事件元素是否包含 lunch-bento 類
            if (info.el.classList.contains("lunch-bento")) {
                alert("午餐便當: " + info.event.title);
                info.el.style.borderColor = "red";
            }
        },
        eventClassNames(arg) {
            if (arg.event.title === "午餐便當") {
                return ['lunch-bento']
            } else if (arg.event.title === "晚餐便當") {
                return ['dinner-bento']
            }
        },
        resizeCalendar() {
            if (window.innerWidth >= 992) {
                calendarWrap.classList.add("col-md-10");
            } else {
                calendarWrap.classList.remove("col-md-10");
            }
        }
    },
    mounted() {
        calendarWrap = document.querySelector(".calendar-wrap");
        this.resizeCalendar();
        window.addEventListener("resize", this.resizeCalendar);

        const nextBtn = document.querySelector(".fc-next-button");
        nextBtn.click();
        const todayBtn = document.querySelector(".fc-today-button");
        todayBtn.click();
    }
}
</script>

<style>
/* 月曆基本設定 */
/* 讓日期文字置左 */
.fc .fc-daygrid-day-top {
    /* flex-direction: row */
    justify-content: start;
}

/* 將日期與星期幾的文字改成無底線與灰色 */
.fc .fc-daygrid-day-number,
.fc .fc-col-header-cell-cushion {
    text-decoration: none;
    color: #6c757d;
}

/* 增加日期文字左右的padding */
.fc-daygrid-day-frame {
    padding-right: 0.2rem;
    padding-left: 0.2rem;
}

/* 減少日期格子的margin-bottom以免畫面過長 */
.fc .fc-daygrid-body-natural .fc-daygrid-day-events {
    margin-bottom: 0.5rem;
    /* 以下也可以用來調整事件之間的距離 */
    /* display: flex;
    flex-direction: column;
    gap: 0.2rem; */
}


/* headerToolbar */
/* 將title換成inline-block避免換行 */
.fc-header-toolbar .fc-toolbar-title {
    display: inline-block;
    margin-right: 1rem;
    margin-left: 1rem;
}

/* 調整title與bts的水平置中 */
.fc .fc-toolbar-chunk div {
    display: flex;
    align-items: center;
    /* gap: 1rem; */
}


/* 事件 */
/* 將事件的文字置中與增加padding以增加事件高度 */
.fc-event-title-container {
    padding: 0.5rem;
    text-align: center;
}

/* 增加事件之間的間距 */
.fc-daygrid-event-harness {
    margin-bottom: 0.2rem;
}
</style>