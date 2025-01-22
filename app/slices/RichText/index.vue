<script setup lang="ts">
import type { Content } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.RichTextSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <Bounded>
    <PrismicRichText
      :field="slice.primary.content"
      class="prose prose-invert prose-slate w-full"
      wrapper="div"
    />
  </Bounded>
</template>

