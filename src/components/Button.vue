<template>
    <div>
        <button :style="{width: w, height:h, padding:p, margin:m, color:c, background:bg}" >{{ value }}</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Button',
    props: ["value", "w" , "h", "p", "m", "c", "bg"]
}
</script>

<style scoped>
button {
    width: fit-content;
    cursor: pointer;
    font-weight: 540;
    padding: 10px;
    font-size: 14px;
    line-height: 10px;
    /* letter-spacing: 1px; */
    border-radius: 2px;
    border: 1px solid;
    transition: 0.2s ease-in-out;
    background-color: black;
    color: white;
    outline: none;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}


</style>