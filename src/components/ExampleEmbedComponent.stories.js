import { ExampleEmbedComponent } from "./ExampleEmbedComponent";

export default {
  title: "ExampleEmbedComponent",
  component: ExampleEmbedComponent,
  //tags: ["autodocs"],
};

export const Starter = {};

export const withAuthor = {
  args: {
    author: "John Doe",
  },
};

export const withTitle = {
  args: {
    ...withAuthor.args,
    title: "The title of the work",
  },
};

export const withDescription = {
  args: {
    ...withTitle.args,
    description: "The description of the work",
  },
};

export const FullExample = {
  args: {
    ...withDescription.args,
    summary: "Lore Ipsum",
  },
};
