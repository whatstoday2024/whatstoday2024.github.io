<script>
import { toast } from 'vue3-toastify';

export default {
  methods: {
    getFreeDaysData(){
      this.isLoading = true
      this.axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/freeDays?userId=${this.memberData.id}`)
        .then(res => {
          if(res.data.message[0]?.weekly) {
            this.freeDays = res.data.message[0]
            this.isLoading = false
          } else {
            this.initFreeDaysData()
          }
        }).catch(e => {
          toast.error(e.data?.message || e)
        })
    },
    initFreeDaysData(){
      const data = {
        weekly: [],
        monthly: [],
        yearly: [],
        specific: [],
      }
      this.isLoading = true
      this.axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/600/users/${this.memberData.id}/freeDays`, data, {
        headers: {
          'authorization': this.$cookie.getMemberToken()
        }
      })
      .then(res => {
        this.freeDays = res.data.message
        this.isLoading = false
      }).catch(e => {
        toast.error(e.data?.message || e)
      })
    }
  }
}
</script>