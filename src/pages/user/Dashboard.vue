<template>
    <layout-blank>
        <div class="p-2 flex-1 w-full h-full flex flex-wrap flex col items-center justify-center bg-primary-dark text-primary-lightest">
            <div class="p-2 flex flex-col items-center w-full space-y-1">

                <div class="text-primary text-h3 font-bold text-center">User Dashboard Page</div>
                <a @click="$router.go(-1)" class="button">Go back</a>

            </div>
        </div>
    </layout-blank>
</template>

<script>
export default {
    name: "UserDashboard"
}
</script>