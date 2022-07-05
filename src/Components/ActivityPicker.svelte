<script lang="ts">



import ActivityGroup from "./ActivityGroup.svelte"
import {globalStaticData} from "../Store/GlobalStaticData.js"



</script>


<div style="height: 100%;width: 500px;float: left;background-color: aquamarine;
            overflow:auto">
 
    {#each globalStaticData.activityGroups as group, i}
        <ActivityGroup  groupData={group}></ActivityGroup>
    {/each}


</div>
