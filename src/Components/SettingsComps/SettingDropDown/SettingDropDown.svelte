<script lang="ts">

    import {StaticData_Setting} from "../../../Data/StaticData/StaticDataTypes/StaticData_Setting.js";
    import SettingDropDownOption from "./SettingDropDownOption.svelte"
    import {createEventDispatcher} from "svelte";

    export let settingStaticData: StaticData_Setting
    export let settingSaveData: string
    let isShowing = false
    const dispatch = createEventDispatcher();
    console.log( settingSaveData)
    $: optionActive = (option: string) => {
      //  console.log(option, settingSaveData)
        return option === settingSaveData
    }

</script>

<b>{settingStaticData.settingName}</b>
<div class="w-full mt-1 mb-1 bg">
    <div class="hoverC bg-gray-400 bg-opacity-40 cursorSelect  w-full p-0.5"  on:click={() => { isShowing = !isShowing}}>

        <b>{settingSaveData}</b>
        <i style="float: right" class="mi-chevron-down"/>


    </div>
    {#if isShowing}
        <div style="width: 100%">
            {#each settingStaticData.settingOptions as option, i}
                <SettingDropDownOption on:click={()=>{ dispatch('SettingChange', option)} }
                                       optionStaticData={option}
                                       optionActive={optionActive(option.settingOptionName)}
                />
            {/each}


        </div>


    {/if}


</div>
