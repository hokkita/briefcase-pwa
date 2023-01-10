<template>
    <div 
    class="w-full h-full bg-fixed bg-cover overflow-hidden"
    :style="{ backgroundImage: `url(${mainBackground})` }">
        <main class="w-full h-screen">
            <slot />
        </main>
    </div>
</template>

<script>
import mainBackground from '@/assets/img/main-background.png';

export default{
    name: "BuildingLayout",
    data() {
        return {
        mainBackground
        }
    },
};
</script>