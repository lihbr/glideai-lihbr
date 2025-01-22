<script setup lang="ts">
import { RichTextGlideText, RichTextHeading2 } from "#components";
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.BentoSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <PrismicRichText
      :field="slice.primary.heading"
      :components="{ heading2: RichTextHeading2, em: RichTextGlideText }"
    />
    <PrismicRichText
      :field="slice.primary.body"
      class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300"
      wrapper="div"
    />
    <div class="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
      <article
        v-for="item in slice.primary.bento"
        :key="$prismic.asText(item.title)"
        class="glassContainer grid grid-rows-subgrid row-span-3 gap-4 rounded-lg bg-gray-950/60 bg:bg-gray-100/10 p-4"
        :class="item.is_wide ? 'md:col-span-2' : 'md:col-span-1'"
      >
        <PrismicText :field="item.title" wrapper="h3" class="text-2xl" />
        <PrismicRichText :field="item.body" class="max-w-md text-balance text-gray-300" wrapper="div" />
        <PrismicImage :field="item.image" class="max-h-36 w-full object-cover" />
      </article>
    </div>
  </Bounded>
</template>
