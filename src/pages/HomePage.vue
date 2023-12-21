<script setup>
import HomeCard from "../components/homecard.vue";
</script>

<template>
  <div>
    <div class="p-8">
      <button
        type="button"
        class="text-white text-2xl font-semibold hover:underline cursor-pointer"
      >Podcasts to make you smarter</button>

      <div class="py-1.5"></div>

      <div class="flex items-center">
        <HomeCard image="https://p-hold.com/200" title="Title is here" subTitle="Subtitle is here" />
        <HomeCard image="https://p-hold.com/200" title="Title is here" subTitle="Subtitle is here" />
        <HomeCard
          class="md:block hidden"
          image="https://p-hold.com/200"
          title="Title is here"
          subTitle="Subtitle is here"
        />
        <HomeCard
          class="lg:block hidden"
          image="https://p-hold.com/200"
          title="Title is here"
          subTitle="Subtitle is here"
        />
        <HomeCard
          class="xl:block hidden"
          image="https://p-hold.com/200"
          title="Title is here"
          subTitle="Subtitle is here"
        />
      </div>
    </div>
    <div class="p-8">
      <button
        type="button"
        class="text-white text-2xl font-semibold hover:underline cursor-pointer"
      >Recommended radio</button>

      <div class="py-1.5"></div>

      <div class="flex items-center">
        <HomeCard image="https://p-hold.com/200" title="Title is here" subTitle="Subtitle is here" />
        <HomeCard image="https://p-hold.com/200" title="Title is here" subTitle="Subtitle is here" />
        <HomeCard
          class="md:block hidden"
          image="https://p-hold.com/200"
          title="Title is here"
          subTitle="Subtitle is here"
        />
        <HomeCard
          class="lg:block hidden"
          image="https://p-hold.com/200"
          title="Title is here"
          subTitle="Subtitle is here"
        />
        <HomeCard
          class="xl:block hidden"
          image="https://p-hold.com/200"
          title="Title is here"
          subTitle="Subtitle is here"
        />
      </div>
    </div>
    <div class="p-8">
      <button
        type="button"
        class="text-white text-2xl font-semibold hover:underline cursor-pointer"
      >Recommended songs</button>

      <div class="py-1.5"></div>

      <div class="flex items-center">
        <HomeCard image="https://p-hold.com/200" title="Title is here" subTitle="Subtitle is here" />
        <HomeCard image="https://p-hold.com/200" title="Title is here" subTitle="Subtitle is here" />
        <HomeCard
          class="md:block hidden"
          image="https://p-hold.com/200"
          title="Title is here"
          subTitle="Subtitle is here"
        />
        <HomeCard
          class="lg:block hidden"
          image="https://p-hold.com/200"
          title="Title is here"
          subTitle="Subtitle is here"
        />
        <HomeCard
          class="xl:block hidden"
          image="https://p-hold.com/200"
          title="Title is here"
          subTitle="Subtitle is here"
        />
      </div>
    </div>
  </div>
</template>