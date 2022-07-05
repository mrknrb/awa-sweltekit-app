<script lang="ts">

    import {StaticData_Setting} from "../../../Data/StaticData/StaticDataTypes/StaticData_Setting.js";

    export let settingStaticData: StaticData_Setting
    export let settingSaveData: boolean


</script>


<div style="width: 100%;background-color: rgba(115,115,115,0.52)">
    {#if settingSaveData}
        <i style="float: right" class="mi-circle-check"/>
    {:else}
        <i style="float: right" class="mi-circle"/>

    {/if}


    <b> {settingStaticData.settingName}</b>

</div>