<template>
    <layout-building>
        <div class="p-2 flex-1 w-full h-full flex flex-wrap flex col items-center justify-center text-primary-lightest">
            <div class="p-2 flex flex-col items-center w-full space-y-1">

                <div class="text-h1 font-bold uppercase">404</div>
                <div class="text-lg">Page not found.</div>
                <a @click="$router.go(-1)" class="button">Go back</a>

            </div>
        </div>
    </layout-building>
</template>

<script>
export default {
    name: "PageNotFound"
}
</script>