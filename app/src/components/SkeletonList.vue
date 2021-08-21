<template>
  <div class="card">
    <div class="grid formgrid">
      <div class="field col-12 md-6">
        <div class="p-4 custom-skeleton">
          <ul class="p-0 m-0">
            <li class="mb-3">
              <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div style="flex: 1">
                  <Skeleton width="100%" class="mb-2"></Skeleton>
                  <Skeleton width="75%"></Skeleton>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div style="flex: 1">
                  <Skeleton width="100%" class="mb-2"></Skeleton>
                  <Skeleton width="75%"></Skeleton>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div style="flex: 1">
                  <Skeleton width="100%" class="mb-2"></Skeleton>
                  <Skeleton width="75%"></Skeleton>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div style="flex: 1">
                  <Skeleton width="100%" class="mb-2"></Skeleton>
                  <Skeleton width="75%"></Skeleton>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div style="flex: 1">
                  <Skeleton width="100%" class="mb-2"></Skeleton>
                  <Skeleton width="75%"></Skeleton>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div style="flex: 1">
                  <Skeleton width="100%" class="mb-2"></Skeleton>
                  <Skeleton width="75%"></Skeleton>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div style="flex: 1">
                  <Skeleton width="100%" class="mb-2"></Skeleton>
                  <Skeleton width="75%"></Skeleton>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div style="flex: 1">
                  <Skeleton width="100%" class="mb-2"></Skeleton>
                  <Skeleton width="75%"></Skeleton>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div style="flex: 1">
                  <Skeleton width="100%" class="mb-2"></Skeleton>
                  <Skeleton width="75%"></Skeleton>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Skeleton from 'primevue/skeleton'

  export default defineComponent({
    components: { Skeleton },
  })
</script>

<style scoped lang="scss">
  .custom-skeleton {
    border: 1px solid var(--surface-d);
    border-radius: 4px;

    ul {
      list-style: none;
    }
  }
</style>
