<template>
  <div>
    <free-ui-alert-basic />
    <free-ui-alert-icon />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FreeUiAlertBasic from '~/components/External/Elements/Alerts/FreeAlert/Basic/FreeUiAlertBasic.vue'
import FreeUiAlertIcon from '~/components/External/Elements/Alerts/FreeAlert/Icon/FreeUiAlertIcon.vue'
@Component({
  components: { FreeUiAlertIcon, FreeUiAlertBasic },
})
export default class FreeUiAlert extends Vue {}
</script>
