import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "The excerpt of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc): string => `/blog/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});
