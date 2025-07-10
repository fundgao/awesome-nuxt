export default defineEventHandler((event) => {
    return {
        hello: 'world'
    }
})
/**
 * 使用
    <script setup lang="ts">
        const { data } = await useFetch('/api/hello')
    </script>
 * 
 */