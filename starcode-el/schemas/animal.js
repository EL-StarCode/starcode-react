export default {
  name: 'realisations',
  type: 'document',
	title: 'Realisations',
  fields: [
    {
      name: 'enterprise',
      type: 'string',
      title: 'Name'
    },
    {name: 'image', title: 'Image', type: 'image'},
    {
      name: "description",
      type: 'text',
      title: 'Description'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: "title",
        maxLength: 150,
        slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 200)
      }
    }
 
  ]
}