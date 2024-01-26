export const initialState = {
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "React Js",
      description: "Lorem text done here",
      tags: ["web", "react", "js"],
      priority: "high",
      isFavourite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "HTML CSS",
      description: "Lorem text done here",
      tags: ["web"],
      priority: "low",
      isFavourite: true,
    },
  ],
};
