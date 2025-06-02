import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAsset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<ContentfulAssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: ContentfulSys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ContentfulImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulAssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<ContentfulAsset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulAssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulAssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulAssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<ContentfulSysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ContentfulAssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<ContentfulEntryCollection>;
  genericContentCollection?: Maybe<ContentfulGenericContentCollection>;
  pageBuilderCollection?: Maybe<ContentfulPageBuilderCollection>;
  projectCollection?: Maybe<ContentfulProjectCollection>;
};


export type ContentfulAssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulAssetLinkingCollectionsGenericContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulAssetLinkingCollectionsPageBuilderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulAssetLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentfulAssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/callToAction) */
export type ContentfulCallToAction = ContentfulEntry & Contentful_Node & {
  __typename?: 'CallToAction';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulContentfulMetadata;
  entryTitle?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentfulCallToActionLinkingCollections>;
  sys: ContentfulSys;
  target?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/callToAction) */
export type ContentfulCallToActionEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/callToAction) */
export type ContentfulCallToActionLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/callToAction) */
export type ContentfulCallToActionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/callToAction) */
export type ContentfulCallToActionTargetArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/callToAction) */
export type ContentfulCallToActionUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/callToAction) */
export type ContentfulCallToActionVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulCallToActionCollection = {
  __typename?: 'CallToActionCollection';
  items: Array<Maybe<ContentfulCallToAction>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulCallToActionFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulCallToActionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulCallToActionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<ContentfulSysFilter>;
  target?: InputMaybe<Scalars['String']['input']>;
  target_contains?: InputMaybe<Scalars['String']['input']>;
  target_exists?: InputMaybe<Scalars['Boolean']['input']>;
  target_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  target_not?: InputMaybe<Scalars['String']['input']>;
  target_not_contains?: InputMaybe<Scalars['String']['input']>;
  target_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulCallToActionLinkingCollections = {
  __typename?: 'CallToActionLinkingCollections';
  entryCollection?: Maybe<ContentfulEntryCollection>;
  genericContentCollection?: Maybe<ContentfulGenericContentCollection>;
};


export type ContentfulCallToActionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulCallToActionLinkingCollectionsGenericContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulCallToActionLinkingCollectionsGenericContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentfulCallToActionLinkingCollectionsGenericContentCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  HeadingSizeAsc = 'headingSize_ASC',
  HeadingSizeDesc = 'headingSize_DESC',
  HeadingTagAsc = 'headingTag_ASC',
  HeadingTagDesc = 'headingTag_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  RenderAsAsc = 'renderAs_ASC',
  RenderAsDesc = 'renderAs_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ContentfulCallToActionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TargetAsc = 'target_ASC',
  TargetDesc = 'target_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type ContentfulContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<ContentfulTaxonomyConcept>>;
  tags: Array<Maybe<ContentfulContentfulTag>>;
};

export type ContentfulContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ContentfulEntry = {
  contentfulMetadata: ContentfulContentfulMetadata;
  sys: ContentfulSys;
};

export type ContentfulEntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<ContentfulEntry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulEntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  sys?: InputMaybe<ContentfulSysFilter>;
};

export enum ContentfulEntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/genericContent) */
export type ContentfulGenericContent = ContentfulEntry & Contentful_Node & {
  __typename?: 'GenericContent';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulContentfulMetadata;
  ctasCollection?: Maybe<ContentfulGenericContentCtasCollection>;
  entryTitle?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  headingSize?: Maybe<Scalars['String']['output']>;
  headingTag?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentfulGenericContentLinkingCollections>;
  media?: Maybe<ContentfulAsset>;
  referencesCollection?: Maybe<ContentfulGenericContentReferencesCollection>;
  renderAs?: Maybe<Scalars['String']['output']>;
  richText?: Maybe<ContentfulGenericContentRichText>;
  sys: ContentfulSys;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/genericContent) */
export type ContentfulGenericContentCtasCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulGenericContentCtasCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulCallToActionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/genericContent) */
export type ContentfulGenericContentEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/genericContent) */
export type ContentfulGenericContentHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/genericContent) */
export type ContentfulGenericContentHeadingSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/genericContent) */
export type ContentfulGenericContentHeadingTagArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/genericContent) */
export type ContentfulGenericContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/genericContent) */
export type ContentfulGenericContentMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/genericContent) */
export type ContentfulGenericContentReferencesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/genericContent) */
export type ContentfulGenericContentRenderAsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/genericContent) */
export type ContentfulGenericContentRichTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulGenericContentCollection = {
  __typename?: 'GenericContentCollection';
  items: Array<Maybe<ContentfulGenericContent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulGenericContentCtasCollection = {
  __typename?: 'GenericContentCtasCollection';
  items: Array<Maybe<ContentfulCallToAction>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ContentfulGenericContentCtasCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TargetAsc = 'target_ASC',
  TargetDesc = 'target_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type ContentfulGenericContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulGenericContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulGenericContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  ctas?: InputMaybe<ContentfulCfCallToActionNestedFilter>;
  ctasCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingSize?: InputMaybe<Scalars['String']['input']>;
  headingSize_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingSize_not?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTag?: InputMaybe<Scalars['String']['input']>;
  headingTag_contains?: InputMaybe<Scalars['String']['input']>;
  headingTag_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingTag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTag_not?: InputMaybe<Scalars['String']['input']>;
  headingTag_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingTag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
  referencesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  renderAs?: InputMaybe<Scalars['String']['input']>;
  renderAs_contains?: InputMaybe<Scalars['String']['input']>;
  renderAs_exists?: InputMaybe<Scalars['Boolean']['input']>;
  renderAs_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  renderAs_not?: InputMaybe<Scalars['String']['input']>;
  renderAs_not_contains?: InputMaybe<Scalars['String']['input']>;
  renderAs_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  richText_contains?: InputMaybe<Scalars['String']['input']>;
  richText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  richText_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<ContentfulSysFilter>;
};

export type ContentfulGenericContentLinkingCollections = {
  __typename?: 'GenericContentLinkingCollections';
  entryCollection?: Maybe<ContentfulEntryCollection>;
  pageBuilderCollection?: Maybe<ContentfulPageBuilderCollection>;
};


export type ContentfulGenericContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulGenericContentLinkingCollectionsPageBuilderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulGenericContentLinkingCollectionsPageBuilderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentfulGenericContentLinkingCollectionsPageBuilderCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ContentfulGenericContentOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  HeadingSizeAsc = 'headingSize_ASC',
  HeadingSizeDesc = 'headingSize_DESC',
  HeadingTagAsc = 'headingTag_ASC',
  HeadingTagDesc = 'headingTag_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  RenderAsAsc = 'renderAs_ASC',
  RenderAsDesc = 'renderAs_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulGenericContentReferencesCollection = {
  __typename?: 'GenericContentReferencesCollection';
  items: Array<Maybe<ContentfulEntry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulGenericContentRichText = {
  __typename?: 'GenericContentRichText';
  json: Scalars['JSON']['output'];
  links: ContentfulGenericContentRichTextLinks;
};

export type ContentfulGenericContentRichTextAssets = {
  __typename?: 'GenericContentRichTextAssets';
  block: Array<Maybe<ContentfulAsset>>;
  hyperlink: Array<Maybe<ContentfulAsset>>;
};

export type ContentfulGenericContentRichTextEntries = {
  __typename?: 'GenericContentRichTextEntries';
  block: Array<Maybe<ContentfulEntry>>;
  hyperlink: Array<Maybe<ContentfulEntry>>;
  inline: Array<Maybe<ContentfulEntry>>;
};

export type ContentfulGenericContentRichTextLinks = {
  __typename?: 'GenericContentRichTextLinks';
  assets: ContentfulGenericContentRichTextAssets;
  entries: ContentfulGenericContentRichTextEntries;
  resources: ContentfulGenericContentRichTextResources;
};

export type ContentfulGenericContentRichTextResources = {
  __typename?: 'GenericContentRichTextResources';
  block: Array<ContentfulGenericContentRichTextResourcesBlock>;
  hyperlink: Array<ContentfulGenericContentRichTextResourcesHyperlink>;
  inline: Array<ContentfulGenericContentRichTextResourcesInline>;
};

export type ContentfulGenericContentRichTextResourcesBlock = ContentfulResourceLink & {
  __typename?: 'GenericContentRichTextResourcesBlock';
  sys: ContentfulResourceSys;
};

export type ContentfulGenericContentRichTextResourcesHyperlink = ContentfulResourceLink & {
  __typename?: 'GenericContentRichTextResourcesHyperlink';
  sys: ContentfulResourceSys;
};

export type ContentfulGenericContentRichTextResourcesInline = ContentfulResourceLink & {
  __typename?: 'GenericContentRichTextResourcesInline';
  sys: ContentfulResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/globalSettings) */
export type ContentfulGlobalSettings = ContentfulEntry & Contentful_Node & {
  __typename?: 'GlobalSettings';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulContentfulMetadata;
  entryTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentfulGlobalSettingsLinkingCollections>;
  navigationCollection?: Maybe<ContentfulGlobalSettingsNavigationCollection>;
  sys: ContentfulSys;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/globalSettings) */
export type ContentfulGlobalSettingsEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/globalSettings) */
export type ContentfulGlobalSettingsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/globalSettings) */
export type ContentfulGlobalSettingsNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulGlobalSettingsNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulPageBuilderFilter>;
};

export type ContentfulGlobalSettingsCollection = {
  __typename?: 'GlobalSettingsCollection';
  items: Array<Maybe<ContentfulGlobalSettings>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulGlobalSettingsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulGlobalSettingsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulGlobalSettingsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigation?: InputMaybe<ContentfulCfPageBuilderNestedFilter>;
  navigationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<ContentfulSysFilter>;
};

export type ContentfulGlobalSettingsLinkingCollections = {
  __typename?: 'GlobalSettingsLinkingCollections';
  entryCollection?: Maybe<ContentfulEntryCollection>;
};


export type ContentfulGlobalSettingsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentfulGlobalSettingsNavigationCollection = {
  __typename?: 'GlobalSettingsNavigationCollection';
  items: Array<Maybe<ContentfulPageBuilder>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ContentfulGlobalSettingsNavigationCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ContentfulGlobalSettingsOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ContentfulImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ContentfulImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ContentfulImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ContentfulImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ContentfulImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ContentfulImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ContentfulImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/labelAndDescription) */
export type ContentfulLabelAndDescription = ContentfulEntry & Contentful_Node & {
  __typename?: 'LabelAndDescription';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  entryTitle?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentfulLabelAndDescriptionLinkingCollections>;
  sys: ContentfulSys;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/labelAndDescription) */
export type ContentfulLabelAndDescriptionDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/labelAndDescription) */
export type ContentfulLabelAndDescriptionEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/labelAndDescription) */
export type ContentfulLabelAndDescriptionLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/labelAndDescription) */
export type ContentfulLabelAndDescriptionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulLabelAndDescriptionCollection = {
  __typename?: 'LabelAndDescriptionCollection';
  items: Array<Maybe<ContentfulLabelAndDescription>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulLabelAndDescriptionFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulLabelAndDescriptionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulLabelAndDescriptionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<ContentfulSysFilter>;
};

export type ContentfulLabelAndDescriptionLinkingCollections = {
  __typename?: 'LabelAndDescriptionLinkingCollections';
  entryCollection?: Maybe<ContentfulEntryCollection>;
};


export type ContentfulLabelAndDescriptionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentfulLabelAndDescriptionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Used for general top-level pages. [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/page) */
export type ContentfulPage = ContentfulEntry & Contentful_Node & {
  __typename?: 'Page';
  _id: Scalars['ID']['output'];
  content?: Maybe<ContentfulPageContent>;
  contentfulMetadata: ContentfulContentfulMetadata;
  linkedFrom?: Maybe<ContentfulPageLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: ContentfulSys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Used for general top-level pages. [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/page) */
export type ContentfulPageContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Used for general top-level pages. [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/page) */
export type ContentfulPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Used for general top-level pages. [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/page) */
export type ContentfulPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Used for general top-level pages. [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/page) */
export type ContentfulPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/pageBuilder) */
export type ContentfulPageBuilder = ContentfulEntry & Contentful_Node & {
  __typename?: 'PageBuilder';
  _id: Scalars['ID']['output'];
  blocksCollection?: Maybe<ContentfulPageBuilderBlocksCollection>;
  contentfulMetadata: ContentfulContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  entryTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentfulPageBuilderLinkingCollections>;
  richText?: Maybe<ContentfulPageBuilderRichText>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: ContentfulSys;
  thumbnail?: Maybe<ContentfulAsset>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/pageBuilder) */
export type ContentfulPageBuilderBlocksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulPageBuilderBlocksFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/pageBuilder) */
export type ContentfulPageBuilderDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/pageBuilder) */
export type ContentfulPageBuilderEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/pageBuilder) */
export type ContentfulPageBuilderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/pageBuilder) */
export type ContentfulPageBuilderRichTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/pageBuilder) */
export type ContentfulPageBuilderSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/pageBuilder) */
export type ContentfulPageBuilderThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/pageBuilder) */
export type ContentfulPageBuilderTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulPageBuilderBlocksCollection = {
  __typename?: 'PageBuilderBlocksCollection';
  items: Array<Maybe<ContentfulPageBuilderBlocksItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulPageBuilderBlocksFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulPageBuilderBlocksFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulPageBuilderBlocksFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<ContentfulSysFilter>;
};

export type ContentfulPageBuilderBlocksItem = ContentfulGenericContent | ContentfulRecord;

export type ContentfulPageBuilderCollection = {
  __typename?: 'PageBuilderCollection';
  items: Array<Maybe<ContentfulPageBuilder>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulPageBuilderFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulPageBuilderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulPageBuilderFilter>>>;
  blocks?: InputMaybe<ContentfulCfblocksMultiTypeNestedFilter>;
  blocksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  richText_contains?: InputMaybe<Scalars['String']['input']>;
  richText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  richText_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<ContentfulSysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulPageBuilderLinkingCollections = {
  __typename?: 'PageBuilderLinkingCollections';
  entryCollection?: Maybe<ContentfulEntryCollection>;
  globalSettingsCollection?: Maybe<ContentfulGlobalSettingsCollection>;
};


export type ContentfulPageBuilderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulPageBuilderLinkingCollectionsGlobalSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulPageBuilderLinkingCollectionsGlobalSettingsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentfulPageBuilderLinkingCollectionsGlobalSettingsCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ContentfulPageBuilderOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulPageBuilderRichText = {
  __typename?: 'PageBuilderRichText';
  json: Scalars['JSON']['output'];
  links: ContentfulPageBuilderRichTextLinks;
};

export type ContentfulPageBuilderRichTextAssets = {
  __typename?: 'PageBuilderRichTextAssets';
  block: Array<Maybe<ContentfulAsset>>;
  hyperlink: Array<Maybe<ContentfulAsset>>;
};

export type ContentfulPageBuilderRichTextEntries = {
  __typename?: 'PageBuilderRichTextEntries';
  block: Array<Maybe<ContentfulEntry>>;
  hyperlink: Array<Maybe<ContentfulEntry>>;
  inline: Array<Maybe<ContentfulEntry>>;
};

export type ContentfulPageBuilderRichTextLinks = {
  __typename?: 'PageBuilderRichTextLinks';
  assets: ContentfulPageBuilderRichTextAssets;
  entries: ContentfulPageBuilderRichTextEntries;
  resources: ContentfulPageBuilderRichTextResources;
};

export type ContentfulPageBuilderRichTextResources = {
  __typename?: 'PageBuilderRichTextResources';
  block: Array<ContentfulPageBuilderRichTextResourcesBlock>;
  hyperlink: Array<ContentfulPageBuilderRichTextResourcesHyperlink>;
  inline: Array<ContentfulPageBuilderRichTextResourcesInline>;
};

export type ContentfulPageBuilderRichTextResourcesBlock = ContentfulResourceLink & {
  __typename?: 'PageBuilderRichTextResourcesBlock';
  sys: ContentfulResourceSys;
};

export type ContentfulPageBuilderRichTextResourcesHyperlink = ContentfulResourceLink & {
  __typename?: 'PageBuilderRichTextResourcesHyperlink';
  sys: ContentfulResourceSys;
};

export type ContentfulPageBuilderRichTextResourcesInline = ContentfulResourceLink & {
  __typename?: 'PageBuilderRichTextResourcesInline';
  sys: ContentfulResourceSys;
};

export type ContentfulPageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<ContentfulPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulPageContent = {
  __typename?: 'PageContent';
  json: Scalars['JSON']['output'];
  links: ContentfulPageContentLinks;
};

export type ContentfulPageContentAssets = {
  __typename?: 'PageContentAssets';
  block: Array<Maybe<ContentfulAsset>>;
  hyperlink: Array<Maybe<ContentfulAsset>>;
};

export type ContentfulPageContentEntries = {
  __typename?: 'PageContentEntries';
  block: Array<Maybe<ContentfulEntry>>;
  hyperlink: Array<Maybe<ContentfulEntry>>;
  inline: Array<Maybe<ContentfulEntry>>;
};

export type ContentfulPageContentLinks = {
  __typename?: 'PageContentLinks';
  assets: ContentfulPageContentAssets;
  entries: ContentfulPageContentEntries;
  resources: ContentfulPageContentResources;
};

export type ContentfulPageContentResources = {
  __typename?: 'PageContentResources';
  block: Array<ContentfulPageContentResourcesBlock>;
  hyperlink: Array<ContentfulPageContentResourcesHyperlink>;
  inline: Array<ContentfulPageContentResourcesInline>;
};

export type ContentfulPageContentResourcesBlock = ContentfulResourceLink & {
  __typename?: 'PageContentResourcesBlock';
  sys: ContentfulResourceSys;
};

export type ContentfulPageContentResourcesHyperlink = ContentfulResourceLink & {
  __typename?: 'PageContentResourcesHyperlink';
  sys: ContentfulResourceSys;
};

export type ContentfulPageContentResourcesInline = ContentfulResourceLink & {
  __typename?: 'PageContentResourcesInline';
  sys: ContentfulResourceSys;
};

export type ContentfulPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulPageFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<ContentfulSysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulPageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<ContentfulEntryCollection>;
};


export type ContentfulPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentfulPageOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/project) */
export type ContentfulProject = ContentfulEntry & Contentful_Node & {
  __typename?: 'Project';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulContentfulMetadata;
  description?: Maybe<ContentfulProjectDescription>;
  desktopScreenshot?: Maybe<ContentfulAsset>;
  headline?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentfulProjectLinkingCollections>;
  liveLink?: Maybe<Scalars['String']['output']>;
  liveLinkText?: Maybe<Scalars['String']['output']>;
  mobileScreenshot?: Maybe<ContentfulAsset>;
  order?: Maybe<Scalars['Int']['output']>;
  projectTitle?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: ContentfulSys;
  technologies?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/project) */
export type ContentfulProjectDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/project) */
export type ContentfulProjectDesktopScreenshotArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/project) */
export type ContentfulProjectHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/project) */
export type ContentfulProjectLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/project) */
export type ContentfulProjectLiveLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/project) */
export type ContentfulProjectLiveLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/project) */
export type ContentfulProjectMobileScreenshotArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/project) */
export type ContentfulProjectOrderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/project) */
export type ContentfulProjectProjectTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/project) */
export type ContentfulProjectSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/project) */
export type ContentfulProjectTechnologiesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulProjectCollection = {
  __typename?: 'ProjectCollection';
  items: Array<Maybe<ContentfulProject>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulProjectDescription = {
  __typename?: 'ProjectDescription';
  json: Scalars['JSON']['output'];
  links: ContentfulProjectDescriptionLinks;
};

export type ContentfulProjectDescriptionAssets = {
  __typename?: 'ProjectDescriptionAssets';
  block: Array<Maybe<ContentfulAsset>>;
  hyperlink: Array<Maybe<ContentfulAsset>>;
};

export type ContentfulProjectDescriptionEntries = {
  __typename?: 'ProjectDescriptionEntries';
  block: Array<Maybe<ContentfulEntry>>;
  hyperlink: Array<Maybe<ContentfulEntry>>;
  inline: Array<Maybe<ContentfulEntry>>;
};

export type ContentfulProjectDescriptionLinks = {
  __typename?: 'ProjectDescriptionLinks';
  assets: ContentfulProjectDescriptionAssets;
  entries: ContentfulProjectDescriptionEntries;
  resources: ContentfulProjectDescriptionResources;
};

export type ContentfulProjectDescriptionResources = {
  __typename?: 'ProjectDescriptionResources';
  block: Array<ContentfulProjectDescriptionResourcesBlock>;
  hyperlink: Array<ContentfulProjectDescriptionResourcesHyperlink>;
  inline: Array<ContentfulProjectDescriptionResourcesInline>;
};

export type ContentfulProjectDescriptionResourcesBlock = ContentfulResourceLink & {
  __typename?: 'ProjectDescriptionResourcesBlock';
  sys: ContentfulResourceSys;
};

export type ContentfulProjectDescriptionResourcesHyperlink = ContentfulResourceLink & {
  __typename?: 'ProjectDescriptionResourcesHyperlink';
  sys: ContentfulResourceSys;
};

export type ContentfulProjectDescriptionResourcesInline = ContentfulResourceLink & {
  __typename?: 'ProjectDescriptionResourcesInline';
  sys: ContentfulResourceSys;
};

export type ContentfulProjectFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulProjectFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulProjectFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  desktopScreenshot_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  liveLink?: InputMaybe<Scalars['String']['input']>;
  liveLinkText?: InputMaybe<Scalars['String']['input']>;
  liveLinkText_contains?: InputMaybe<Scalars['String']['input']>;
  liveLinkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  liveLinkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  liveLinkText_not?: InputMaybe<Scalars['String']['input']>;
  liveLinkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  liveLinkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  liveLink_contains?: InputMaybe<Scalars['String']['input']>;
  liveLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  liveLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  liveLink_not?: InputMaybe<Scalars['String']['input']>;
  liveLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  liveLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mobileScreenshot_exists?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  order_exists?: InputMaybe<Scalars['Boolean']['input']>;
  order_gt?: InputMaybe<Scalars['Int']['input']>;
  order_gte?: InputMaybe<Scalars['Int']['input']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  order_lt?: InputMaybe<Scalars['Int']['input']>;
  order_lte?: InputMaybe<Scalars['Int']['input']>;
  order_not?: InputMaybe<Scalars['Int']['input']>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectTitle?: InputMaybe<Scalars['String']['input']>;
  projectTitle_contains?: InputMaybe<Scalars['String']['input']>;
  projectTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  projectTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projectTitle_not?: InputMaybe<Scalars['String']['input']>;
  projectTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  projectTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<ContentfulSysFilter>;
  technologies_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  technologies_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  technologies_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  technologies_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulProjectLinkingCollections = {
  __typename?: 'ProjectLinkingCollections';
  entryCollection?: Maybe<ContentfulEntryCollection>;
};


export type ContentfulProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentfulProjectOrder {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  LiveLinkTextAsc = 'liveLinkText_ASC',
  LiveLinkTextDesc = 'liveLinkText_DESC',
  LiveLinkAsc = 'liveLink_ASC',
  LiveLinkDesc = 'liveLink_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  ProjectTitleAsc = 'projectTitle_ASC',
  ProjectTitleDesc = 'projectTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulQuery = {
  __typename?: 'Query';
  _node?: Maybe<Contentful_Node>;
  _nodes: Array<Maybe<Contentful_Node>>;
  asset?: Maybe<ContentfulAsset>;
  assetCollection?: Maybe<ContentfulAssetCollection>;
  callToAction?: Maybe<ContentfulCallToAction>;
  callToActionCollection?: Maybe<ContentfulCallToActionCollection>;
  entryCollection?: Maybe<ContentfulEntryCollection>;
  genericContent?: Maybe<ContentfulGenericContent>;
  genericContentCollection?: Maybe<ContentfulGenericContentCollection>;
  globalSettings?: Maybe<ContentfulGlobalSettings>;
  globalSettingsCollection?: Maybe<ContentfulGlobalSettingsCollection>;
  labelAndDescription?: Maybe<ContentfulLabelAndDescription>;
  labelAndDescriptionCollection?: Maybe<ContentfulLabelAndDescriptionCollection>;
  page?: Maybe<ContentfulPage>;
  pageBuilder?: Maybe<ContentfulPageBuilder>;
  pageBuilderCollection?: Maybe<ContentfulPageBuilderCollection>;
  pageCollection?: Maybe<ContentfulPageCollection>;
  project?: Maybe<ContentfulProject>;
  projectCollection?: Maybe<ContentfulProjectCollection>;
  record?: Maybe<ContentfulRecord>;
  recordCollection?: Maybe<ContentfulRecordCollection>;
  recordField?: Maybe<ContentfulRecordField>;
  recordFieldCollection?: Maybe<ContentfulRecordFieldCollection>;
};


export type ContentfulQuery_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentfulQuery_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentfulQueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentfulQueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulAssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulAssetFilter>;
};


export type ContentfulQueryCallToActionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentfulQueryCallToActionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulCallToActionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulCallToActionFilter>;
};


export type ContentfulQueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulEntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulEntryFilter>;
};


export type ContentfulQueryGenericContentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentfulQueryGenericContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulGenericContentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulGenericContentFilter>;
};


export type ContentfulQueryGlobalSettingsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentfulQueryGlobalSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulGlobalSettingsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulGlobalSettingsFilter>;
};


export type ContentfulQueryLabelAndDescriptionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentfulQueryLabelAndDescriptionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulLabelAndDescriptionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulLabelAndDescriptionFilter>;
};


export type ContentfulQueryPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentfulQueryPageBuilderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentfulQueryPageBuilderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulPageBuilderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulPageBuilderFilter>;
};


export type ContentfulQueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulPageFilter>;
};


export type ContentfulQueryProjectArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentfulQueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulProjectOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulProjectFilter>;
};


export type ContentfulQueryRecordArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentfulQueryRecordCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulRecordOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulRecordFilter>;
};


export type ContentfulQueryRecordFieldArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentfulQueryRecordFieldCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulRecordFieldOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulRecordFieldFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/record) */
export type ContentfulRecord = ContentfulEntry & Contentful_Node & {
  __typename?: 'Record';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulContentfulMetadata;
  entryTitle?: Maybe<Scalars['String']['output']>;
  fieldsCollection?: Maybe<ContentfulRecordFieldsCollection>;
  linkedFrom?: Maybe<ContentfulRecordLinkingCollections>;
  sys: ContentfulSys;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/record) */
export type ContentfulRecordEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/record) */
export type ContentfulRecordFieldsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulRecordFieldsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulRecordFieldFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/record) */
export type ContentfulRecordLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulRecordCollection = {
  __typename?: 'RecordCollection';
  items: Array<Maybe<ContentfulRecord>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/recordField) */
export type ContentfulRecordField = ContentfulEntry & Contentful_Node & {
  __typename?: 'RecordField';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulContentfulMetadata;
  entryTitle?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentfulRecordFieldLinkingCollections>;
  sys: ContentfulSys;
  value?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/recordField) */
export type ContentfulRecordFieldEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/recordField) */
export type ContentfulRecordFieldLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/recordField) */
export type ContentfulRecordFieldLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2dcscgnzpk4t/content_types/recordField) */
export type ContentfulRecordFieldValueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulRecordFieldCollection = {
  __typename?: 'RecordFieldCollection';
  items: Array<Maybe<ContentfulRecordField>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulRecordFieldFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulRecordFieldFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulRecordFieldFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<ContentfulSysFilter>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulRecordFieldLinkingCollections = {
  __typename?: 'RecordFieldLinkingCollections';
  entryCollection?: Maybe<ContentfulEntryCollection>;
  recordCollection?: Maybe<ContentfulRecordCollection>;
};


export type ContentfulRecordFieldLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulRecordFieldLinkingCollectionsRecordCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulRecordFieldLinkingCollectionsRecordCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentfulRecordFieldLinkingCollectionsRecordCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ContentfulRecordFieldOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulRecordFieldsCollection = {
  __typename?: 'RecordFieldsCollection';
  items: Array<Maybe<ContentfulRecordField>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ContentfulRecordFieldsCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulRecordFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulRecordFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulRecordFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fields?: InputMaybe<ContentfulCfRecordFieldNestedFilter>;
  fieldsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<ContentfulSysFilter>;
};

export type ContentfulRecordLinkingCollections = {
  __typename?: 'RecordLinkingCollections';
  entryCollection?: Maybe<ContentfulEntryCollection>;
  pageBuilderCollection?: Maybe<ContentfulPageBuilderCollection>;
};


export type ContentfulRecordLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulRecordLinkingCollectionsPageBuilderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulRecordLinkingCollectionsPageBuilderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentfulRecordLinkingCollectionsPageBuilderCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ContentfulRecordOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulResourceLink = {
  sys: ContentfulResourceSys;
};

export type ContentfulResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type ContentfulSys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type ContentfulSysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type ContentfulTaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type Contentful_Node = {
  _id: Scalars['ID']['output'];
};

export type ContentfulCfCallToActionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulCfCallToActionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulCfCallToActionNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<ContentfulSysFilter>;
  target?: InputMaybe<Scalars['String']['input']>;
  target_contains?: InputMaybe<Scalars['String']['input']>;
  target_exists?: InputMaybe<Scalars['Boolean']['input']>;
  target_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  target_not?: InputMaybe<Scalars['String']['input']>;
  target_not_contains?: InputMaybe<Scalars['String']['input']>;
  target_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulCfPageBuilderNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulCfPageBuilderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulCfPageBuilderNestedFilter>>>;
  blocksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  richText_contains?: InputMaybe<Scalars['String']['input']>;
  richText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  richText_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<ContentfulSysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulCfRecordFieldNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulCfRecordFieldNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulCfRecordFieldNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<ContentfulSysFilter>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulCfblocksMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulCfblocksMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulCfblocksMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulContentfulMetadataFilter>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<ContentfulSysFilter>;
};

export type ContentfulGenericContentCardsPropsFragment = { __typename?: 'GenericContent', heading?: string | null, headingSize?: string | null, headingTag?: string | null, sys: { __typename?: 'Sys', id: string }, ctasCollection?: { __typename?: 'GenericContentCtasCollection', items: Array<{ __typename?: 'CallToAction', label?: string | null, variant?: string | null, url?: string | null, target?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, referencesCollection?: { __typename?: 'GenericContentReferencesCollection', items: Array<{ __typename: 'CallToAction' } | { __typename: 'GenericContent' } | { __typename: 'GlobalSettings' } | { __typename: 'LabelAndDescription' } | { __typename: 'Page' } | { __typename: 'PageBuilder', slug?: string | null, title?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string }, thumbnail?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null } | { __typename: 'Project' } | { __typename: 'Record' } | { __typename: 'RecordField' } | null> } | null };

export type ContentfulGenericContentDefaultPropsFragment = { __typename?: 'GenericContent', heading?: string | null, headingSize?: string | null, headingTag?: string | null, sys: { __typename?: 'Sys', id: string }, richText?: { __typename?: 'GenericContentRichText', json: any } | null };

export type ContentfulRecordPropsFragment = { __typename?: 'Record', sys: { __typename?: 'Sys', id: string }, fieldsCollection?: { __typename?: 'RecordFieldsCollection', items: Array<{ __typename?: 'RecordField', label?: string | null, value?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type ContentfulGenericContentFieldsFragment = { __typename?: 'GenericContent', renderAs?: string | null, heading?: string | null, headingSize?: string | null, headingTag?: string | null, sys: { __typename?: 'Sys', id: string }, richText?: { __typename?: 'GenericContentRichText', json: any } | null, media?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, ctasCollection?: { __typename?: 'GenericContentCtasCollection', items: Array<{ __typename?: 'CallToAction', label?: string | null, variant?: string | null, url?: string | null, target?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, referencesCollection?: { __typename?: 'GenericContentReferencesCollection', items: Array<{ __typename: 'CallToAction' } | { __typename: 'GenericContent' } | { __typename: 'GlobalSettings' } | { __typename: 'LabelAndDescription' } | { __typename: 'Page' } | { __typename: 'PageBuilder', slug?: string | null, title?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, thumbnail?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null } | { __typename: 'Project' } | { __typename: 'Record' } | { __typename: 'RecordField' } | null> } | null };

export type ContentfulGlobalSettingsQueryVariables = Exact<{
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ContentfulGlobalSettingsQuery = { __typename?: 'Query', globalSettingsCollection?: { __typename?: 'GlobalSettingsCollection', items: Array<{ __typename?: 'GlobalSettings', navigationCollection?: { __typename?: 'GlobalSettingsNavigationCollection', items: Array<(
          { __typename?: 'PageBuilder' }
          & ContentfulNavItemFieldsFragment
        ) | null> } | null } | null> } | null };

export type ContentfulNavItemFieldsFragment = { __typename?: 'PageBuilder', title?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ContentfulPageBuilderFieldsBaseFragment = { __typename: 'PageBuilder', slug?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string } };

export type ContentfulPageBuilderFieldsFragment = (
  { __typename?: 'PageBuilder', title?: string | null, description?: string | null, richText?: { __typename?: 'PageBuilderRichText', json: any } | null, thumbnail?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, blocksCollection?: { __typename?: 'PageBuilderBlocksCollection', items: Array<(
      { __typename: 'GenericContent' }
      & ContentfulGenericContentFieldsFragment
    ) | (
      { __typename: 'Record' }
      & ContentfulRecordFieldsFragment
    ) | null> } | null }
  & ContentfulPageBuilderFieldsBaseFragment
);

export type ContentfulPageBuilderQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ContentfulPageBuilderQuery = { __typename?: 'Query', pageBuilderCollection?: { __typename?: 'PageBuilderCollection', items: Array<(
      { __typename?: 'PageBuilder' }
      & ContentfulPageBuilderFieldsFragment
    ) | null> } | null };

export type ContentfulPageBuilderCollectionListQueryVariables = Exact<{
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulPageBuilderOrder>> | InputMaybe<ContentfulPageBuilderOrder>>;
  where?: InputMaybe<ContentfulPageBuilderFilter>;
}>;


export type ContentfulPageBuilderCollectionListQuery = { __typename?: 'Query', pageBuilderCollection?: { __typename?: 'PageBuilderCollection', items: Array<(
      { __typename?: 'PageBuilder' }
      & ContentfulPageBuilderFieldsBaseFragment
    ) | null> } | null };

export type ContentfulPageBuilderCollectionQueryVariables = Exact<{
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulPageBuilderOrder>> | InputMaybe<ContentfulPageBuilderOrder>>;
  where?: InputMaybe<ContentfulPageBuilderFilter>;
}>;


export type ContentfulPageBuilderCollectionQuery = { __typename?: 'Query', pageBuilderCollection?: { __typename?: 'PageBuilderCollection', items: Array<(
      { __typename?: 'PageBuilder' }
      & ContentfulPageBuilderFieldsFragment
    ) | null> } | null };

export type ContentfulRecordFieldsFragment = { __typename?: 'Record', sys: { __typename?: 'Sys', id: string }, fieldsCollection?: { __typename?: 'RecordFieldsCollection', items: Array<{ __typename?: 'RecordField', label?: string | null, value?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export const GenericContentCardsPropsFragmentDoc = gql`
    fragment GenericContentCardsProps on GenericContent {
  sys {
    id
  }
  heading
  headingSize
  headingTag
  ctasCollection(limit: 10) {
    items {
      sys {
        id
      }
      label
      variant
      url
      target
    }
  }
  referencesCollection(limit: 10) {
    items {
      __typename
      ... on PageBuilder {
        __typename
        sys {
          id
        }
        slug
        title
        description
        thumbnail {
          url
          width
          height
        }
      }
    }
  }
}
    `;
export const GenericContentDefaultPropsFragmentDoc = gql`
    fragment GenericContentDefaultProps on GenericContent {
  sys {
    id
  }
  heading
  headingSize
  headingTag
  richText {
    json
  }
}
    `;
export const RecordPropsFragmentDoc = gql`
    fragment RecordProps on Record {
  sys {
    id
  }
  fieldsCollection(limit: 10) {
    items {
      sys {
        id
      }
      label
      value
    }
  }
}
    `;
export const NavItemFieldsFragmentDoc = gql`
    fragment NavItemFields on PageBuilder {
  sys {
    id
  }
  title
  slug
}
    `;
export const PageBuilderFieldsBaseFragmentDoc = gql`
    fragment PageBuilderFieldsBase on PageBuilder {
  __typename
  sys {
    id
    spaceId
  }
  slug
}
    `;
export const RecordFieldsFragmentDoc = gql`
    fragment RecordFields on Record {
  sys {
    id
  }
  fieldsCollection(limit: 10) {
    items {
      sys {
        id
      }
      label
      value
    }
  }
}
    `;
export const GenericContentFieldsFragmentDoc = gql`
    fragment GenericContentFields on GenericContent {
  sys {
    id
  }
  renderAs
  heading
  headingSize
  headingTag
  richText {
    json
  }
  media {
    url
    width
    height
  }
  ctasCollection(limit: 10) {
    items {
      sys {
        id
      }
      label
      variant
      url
      target
    }
  }
  referencesCollection(limit: 10) {
    items {
      __typename
      ... on PageBuilder {
        __typename
        sys {
          id
          spaceId
        }
        slug
        title
        description
        thumbnail {
          url
          width
          height
        }
      }
    }
  }
}
    `;
export const PageBuilderFieldsFragmentDoc = gql`
    fragment PageBuilderFields on PageBuilder {
  ...PageBuilderFieldsBase
  title
  description
  richText {
    json
  }
  thumbnail {
    url
    width
    height
  }
  blocksCollection(limit: 10) {
    items {
      __typename
      ... on Record {
        ...RecordFields
      }
      ... on GenericContent {
        ...GenericContentFields
      }
    }
  }
}
    `;
export const GlobalSettingsDocument = gql`
    query globalSettings($preview: Boolean) {
  globalSettingsCollection(limit: 1, preview: $preview) {
    items {
      navigationCollection(limit: 10) {
        items {
          ... on PageBuilder {
            ...NavItemFields
          }
        }
      }
    }
  }
}
    ${NavItemFieldsFragmentDoc}`;
export const PageBuilderDocument = gql`
    query pageBuilder($slug: String!, $preview: Boolean) {
  pageBuilderCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
    items {
      ...PageBuilderFields
    }
  }
}
    ${PageBuilderFieldsFragmentDoc}
${PageBuilderFieldsBaseFragmentDoc}
${RecordFieldsFragmentDoc}
${GenericContentFieldsFragmentDoc}`;
export const PageBuilderCollectionListDocument = gql`
    query pageBuilderCollectionList($preview: Boolean, $limit: Int, $order: [PageBuilderOrder], $where: PageBuilderFilter) {
  pageBuilderCollection(
    limit: $limit
    preview: $preview
    order: $order
    where: $where
  ) {
    items {
      ...PageBuilderFieldsBase
    }
  }
}
    ${PageBuilderFieldsBaseFragmentDoc}`;
export const PageBuilderCollectionDocument = gql`
    query pageBuilderCollection($preview: Boolean, $limit: Int, $order: [PageBuilderOrder], $where: PageBuilderFilter) {
  pageBuilderCollection(
    limit: $limit
    preview: $preview
    order: $order
    where: $where
  ) {
    items {
      ...PageBuilderFields
    }
  }
}
    ${PageBuilderFieldsFragmentDoc}
${PageBuilderFieldsBaseFragmentDoc}
${RecordFieldsFragmentDoc}
${GenericContentFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    globalSettings(variables?: ContentfulGlobalSettingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ContentfulGlobalSettingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentfulGlobalSettingsQuery>(GlobalSettingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'globalSettings', 'query', variables);
    },
    pageBuilder(variables: ContentfulPageBuilderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ContentfulPageBuilderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentfulPageBuilderQuery>(PageBuilderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageBuilder', 'query', variables);
    },
    pageBuilderCollectionList(variables?: ContentfulPageBuilderCollectionListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ContentfulPageBuilderCollectionListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentfulPageBuilderCollectionListQuery>(PageBuilderCollectionListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageBuilderCollectionList', 'query', variables);
    },
    pageBuilderCollection(variables?: ContentfulPageBuilderCollectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ContentfulPageBuilderCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentfulPageBuilderCollectionQuery>(PageBuilderCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageBuilderCollection', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;