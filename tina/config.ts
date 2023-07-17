import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "4c70a80b-b6cc-4c79-98ff-70c4ccf55cbd", // Get this from tina.io
  token: "befb8033b0a60dcf5be3e02ed70e16ad8bc3f493", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/post",
        format: 'md',
        defaultItem: () => {
          return {
            // When a new post is created the title field will be set to "New post"
            date: new Date(),
            draft: true,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: false,
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
            required: false,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Is Draft",
            required: true,
            description: 'If this is checked the post will not be published',
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: false,
          },
          {
            type: "image",
            name: "image",
            label: "Feature Image",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            label: 'Tags',
            name: 'tags',
            type: 'string',
            list: true,
          },
          {
            label: 'Categories',
            name: 'categories',
            type: 'string',
            list: true,
          },
        ],
      },
      {
        name: "categories",
        label: "Categories",
        path: "content/categories",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: false,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: false,
          },
          {
            type: "image",
            name: "image",
            label: "Feature Image",
            required: false,
          },
        ]
      }
    ],
  },
});
