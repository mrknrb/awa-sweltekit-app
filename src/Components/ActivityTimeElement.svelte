
<script lang="ts">
    import { SaveData_Activity } from "../Data/SaveData/SaveData_Activity";

    export let time=100

    export let hovered = false;
    export let activitySaveData: SaveData_Activity
    $:borderOnHover=()=>{
      if(hovered)  return "border-4 border-cyan-600"
      return "border-r-4"
    }

</script>


<div on:mouseenter on:mouseleave  style="min-width:{time}px;width: {time}px" class="h-8 bg-amber-400 flex justify-center cent overflow-hidden  {borderOnHover()} " >
<a class="text-center">{activitySaveData.activityType}</a>
</div>
