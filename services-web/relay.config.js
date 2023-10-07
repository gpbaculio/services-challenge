module.exports = {
  src: ".",
  schema: "./schema.graphql",
  language: "typescript",
  excludes: ["**/.next/**", "**/node_modules/**", "**/schema/**"],
  artifactDirectory: "./__generated__",
};
