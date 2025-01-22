<script setup lang="ts">
import gsap from "gsap"
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = await useAsyncData(
  `[case_study-uid-${route.params.uid}]`,
  () => prismic.client.getByUID("case_study", route.params.uid as string),
);

useSeoMeta({
  title: page.value?.data.meta_title ?? undefined,
  ogTitle: page.value?.data.meta_title ?? undefined,
  description: page.value?.data.meta_description ?? undefined,
  ogDescription: page.value?.data.meta_description ?? undefined,
  ogImage: computed(() => prismic.asImageSrc(page.value?.data.meta_image)),
});

onMounted(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    return;
  }

  gsap.fromTo(".caseStudy__image", {
    opacity: 0,
    y: 100,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.inOut"
  })
})
</script>

<template>
  <main>
    <Bounded>
      <header class="relative grid w-full place-items-center text-center">
        <GlideGrid />
        <h1 class="text-5xl font-medium text-balance md:text-7xl">
          <PrismicText :field="page?.data.company" />
          <RichTextGlideText class="block text-lg">Case Study</RichTextGlideText>
        </h1>
        <PrismicText :field="page?.data.description" wrapper="p" class="mb-4 mt-8 max-w-xl text-lg text-gray-300" />
        <PrismicImage
          v-if="$prismic.isFilled.image(page?.data.cover)"
          :field="page?.data.cover"
          class="caseStudy__image rounded-lg max-w-4xl w-full"
        />
      </header>
    </Bounded>
    <SliceZone
      wrapper="div"
      class="mx-auto mt-12 md:mt-16"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </main>
</template>