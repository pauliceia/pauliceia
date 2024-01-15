<template>
  <div class="faq-wrapper">
    <h3>{{ $t("home.faqTitle") }}</h3>
    <div class="faq-accordion">
      <div
        class="faq-item"
        v-for="(item, index) in faqs"
        :key="index"
        @click="toggle(index)"
      >
        <div class="faq-question">{{ $t(item.question) }}</div>
        <div class="faq-answer" v-if="activeIndex === index">
          {{ $t(item.answer) }}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: 0,
      faqs: [
        { question: "about.title1", answer: "about.text1" },
        { question: "about.title2", answer: "about.text2" },
        { question: "about.title3", answer: "about.text3" },
        { question: "about.title8", answer: "about.text8"}
      ],
    };
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>


<style>
.faq-wrapper {
  width: 100%;
  padding: 50px 5% 100px 5%;
  color: #c6c6c6;
}

.faq-accordion {
  width: 50%;
  margin-top: 50px;
}

.faq-item {
  border-bottom: 1px solid #c6c6c6;
  padding: 10px;
  cursor: pointer;
}

.faq-question {
  font-weight: bold;
}

.faq-answer {
  padding-top: 12px;
}
</style>
