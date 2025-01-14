import { defineType, defineField } from "sanity";

export const categoryType = defineType({
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    defineField({
      title: "Category Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name", // Génère automatiquement le slug à partir du nom de la catégorie
        maxLength: 96, // Longueur maximale du slug
      },
      validation: (Rule) => Rule.required(), // Le slug est obligatoire
    }),
  ],
});
