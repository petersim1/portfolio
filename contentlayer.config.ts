import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import readingTime, { ReadTimeResults } from "reading-time";

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
    tags: {
      type: "list",
      of: { type: "string" },
      description: "List of tags",
      required: false,
      default: [],
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc): string => `/blog/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc): ReadTimeResults => readingTime(doc.body.raw),
    }
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkMath],
    // @ts-ignore
    rehypePlugins: [rehypeKatex],
  },
});
