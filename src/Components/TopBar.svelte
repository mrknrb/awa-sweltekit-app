<script>
    import {saveDataMainStoreReducers} from "../Store/StoreSaveData"
</script>

<div style="background-color: #3c70b4;height: 50px;width: 100%">

<input type="button" value="Save" class="bg-amber-400 h-10 w-10 hover:bg-amber-500 font-bold float-right"
on:click={()=>{saveDataMainStoreReducers.saveData()}}

>
    <input type="button" value="Load" class="bg-amber-400 h-10 w-10 hover:bg-amber-500 font-bold float-right"
           on:click={()=>{saveDataMainStoreReducers.loadData()}}

    >

</div>

<style>



</style>