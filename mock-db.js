const authors = [
    { id: 1, name: "Coco" },
    { id: 2, name: "Babou" },
    { id: 3, name: "Xandrox" },
  ];
  
  export async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
  };
  
  export default {getAuthorById};