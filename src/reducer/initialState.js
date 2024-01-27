export const initialState = {
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "Integration API",
      description:
        "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
      tags: ["Web", "Python2", "API"],
      priority: "High",
      isFavourite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "API Data Synchronization with Python",
      description:
        "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
      tags: ["Python2", "API", "Data Synchronization"],
      priority: "Medium",
      isFavourite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Efficient Web API Connectivity in Python",
      description:
        "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
      tags: ["Web", "API", "Python2"],
      priority: "Low",
      isFavourite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Data Handling",
      description:
        "Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity.",
      tags: ["API", "Python2", "Security"],
      priority: "High",
      isFavourite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Reacting to Input with State",
      description:
        "React provides a declarative way to manipulate the UI. Instead of manipulating individual pieces of the UI directly, you describe the different states that your component can be in, and switch between them in response to the user input.",
      tags: ["REACT", "JAVASCRIPT"],
      priority: "High",
      isFavourite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Sharing State Between Components",
      description:
        "Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props.",
      tags: ["React", "Web"],
      priority: "Low",
      isFavourite: false,
    },
  ],
  showModal: false,
  taskToUpdate: null,
};
