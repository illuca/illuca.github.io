<template>
    <div v-if="image" class="poem-images">
        <div style="display: flex; justify-content: center;">
            <img :src="image" />
        </div>
    </div>
    <div class="poem-container">
        <div class="poem">
            <div class="poem-title">
                {{ $frontmatter.title }}
            </div>
            <div class="poem-content">
                <p v-for="(paragraph, index) in paragraphs" :key="index">
                    <span v-for="(line, lineIndex) in paragraph" :key="lineIndex">
                        {{ line }}
                        <br v-if="lineIndex !== paragraph.length - 1" />
                    </span>
                </p>
            </div>
        </div>
    </div>
    <div class="poem-date">
        {{ formatDate($frontmatter.date) }}
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
});

const paragraphs = props.content.split('\n\n').map(paragraph => paragraph.split('\n'));


const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
    }).format(date);
};
</script>

<style scoped>
.poem-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.poem {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* 左对齐段落内容 */
    justify-content: center;
    margin: 1em 0;
    position: relative;
}

.poem-title {
    margin-top: 1em;
    font-size: 40px;
    margin-bottom: 0.5em;
    text-align: left;
    width: 100%;
    position: relative;
}

.poem-content {
    max-width: 100%;
    /* 确保文本内容有足够的宽度 */

}

.poem-content p {
    margin: 0.5em 0 0.5em 1em;
    text-align: left;
    word-break: break-word;
    /* 防止长单词导致的折叠 */
    white-space: normal;
    /* 确保文本内容正常换行 */
}

.poem-date {
    text-align: center;
    font-size: 0.9em;
    color: gray;
    margin-bottom: 1em;
}

.poem-images img {
    max-width: 100%;
    height: auto;
    margin-top: 1em;
}
</style>