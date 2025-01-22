// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
  | ShowcaseSlice
  | BentoSlice
  | HeroSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  navigation: prismic.Repeatable<
    prismic.LinkField<
      string,
      string,
      unknown,
      prismic.FieldState,
      "Link" | "Button"
    >
  >;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = PageDocument | SettingsDocument;

/**
 * Item in *Bento → Default → Primary → Bento*
 */
export interface BentoSliceDefaultPrimaryBentoItem {
  /**
   * Title field in *Bento → Default → Primary → Bento*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.bento[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Body field in *Bento → Default → Primary → Bento*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.bento[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *Bento → Default → Primary → Bento*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.bento[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Is Wide? field in *Bento → Default → Primary → Bento*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: bento.default.primary.bento[].is_wide
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_wide: prismic.BooleanField;
}

/**
 * Primary content in *Bento → Default → Primary*
 */
export interface BentoSliceDefaultPrimary {
  /**
   * Heading field in *Bento → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *Bento → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Bento field in *Bento → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.bento[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  bento: prismic.GroupField<Simplify<BentoSliceDefaultPrimaryBentoItem>>;
}

/**
 * Default variation for Bento Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BentoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Bento*
 */
type BentoSliceVariation = BentoSliceDefault;

/**
 * Bento Shared Slice
 *
 * - **API ID**: `bento`
 * - **Description**: Bento
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSlice = prismic.SharedSlice<"bento", BentoSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * CTAs field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.ctas
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  ctas: prismic.Repeatable<
    prismic.LinkField<string, string, unknown, prismic.FieldState, never>
  >;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *Showcase → Default → Primary*
 */
export interface ShowcaseSliceDefaultPrimary {
  /**
   * Heading field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Image field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Icon field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: ph:gear-six-fill
   * - **API ID Path**: showcase.default.primary.icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"ph:gear-six-fill" | "ph:aperture", "filled">;

  /**
   * Subheading field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField;

  /**
   * Body field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * CTA field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.cta
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for Showcase Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ShowcaseSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Showcase → Reversed → Primary*
 */
export interface ShowcaseSliceReversedPrimary {
  /**
   * Heading field in *Showcase → Reversed → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reversed.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Image field in *Showcase → Reversed → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reversed.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Icon field in *Showcase → Reversed → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: ph:gear-six-fill
   * - **API ID Path**: showcase.reversed.primary.icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"ph:gear-six-fill" | "ph:aperture", "filled">;

  /**
   * Subheading field in *Showcase → Reversed → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reversed.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField;

  /**
   * Body field in *Showcase → Reversed → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reversed.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * CTA field in *Showcase → Reversed → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reversed.primary.cta
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Reversed variation for Showcase Slice
 *
 * - **API ID**: `reversed`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSliceReversed = prismic.SharedSliceVariation<
  "reversed",
  Simplify<ShowcaseSliceReversedPrimary>,
  never
>;

/**
 * Slice variation for *Showcase*
 */
type ShowcaseSliceVariation = ShowcaseSliceDefault | ShowcaseSliceReversed;

/**
 * Showcase Shared Slice
 *
 * - **API ID**: `showcase`
 * - **Description**: Showcase
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSlice = prismic.SharedSlice<
  "showcase",
  ShowcaseSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      BentoSlice,
      BentoSliceDefaultPrimaryBentoItem,
      BentoSliceDefaultPrimary,
      BentoSliceVariation,
      BentoSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      ShowcaseSlice,
      ShowcaseSliceDefaultPrimary,
      ShowcaseSliceReversedPrimary,
      ShowcaseSliceVariation,
      ShowcaseSliceDefault,
      ShowcaseSliceReversed,
    };
  }
}
