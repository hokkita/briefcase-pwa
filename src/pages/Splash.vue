<template>
    <layout-building>
        <div class="p-2 flex-1 w-full h-full flex flex-wrap flex col items-center justify-center text-primary-lightest">
            <div class="p-2 flex flex-col items-center w-full">

                <img src="@/assets/img/logo.png" alt="Briefcase Logo" class="w-[10rem]">

                <div class="text-h2 text-center uppercase">
                    <span class="text-primary italic">BRIEF</span>
                    <span class="text-secondary font-bold">CASE</span>
                </div>

                <router-link
                    to="/coming-soon"
                    class="button mt-2">
                    Touch here to start
                </router-link>

            </div>
        </div>
    </layout-building>
</template>

<script>

export default {
    name: "Splash"
}
</script>