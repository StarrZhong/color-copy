import ClipboardJS from 'clipboard';
import { createApp, onBeforeMount, onMounted, ref } from 'vue';



const vm = createApp({
  setup() {
    const msg = ref('hi')
    let copyValue = ref('123')
    let showCopied = ref(false)
    let showCopiedTimer = null
    const colorData = ref(sourceData)
    let clipboard = null
    onBeforeMount(()=>{
      
    })
    onMounted(()=>{
      clipboard = new ClipboardJS('.color-list__btn');
      clipboard.on('success', function (e) {
        clearTimeout(showCopiedTimer)
        copyValue.value = e.text
        showCopied.value = true
        showCopiedTimer = setTimeout(() => {
          showCopied.value = false
        }, 2000);
      });
    })
    return {
      msg,
      colorData,
      copyValue,
      showCopied
    }
  }
  
})
vm.mount('#app')