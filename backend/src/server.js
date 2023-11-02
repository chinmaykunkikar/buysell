import Hapi from "@hapi/hapi";

const start = async () => {
  const server = Hapi.server({
    port: 8000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/hello",
    handler: (_, h) => {
      return h.response("Hello!").code(200);
    },
  });

  await server.start();
  console.log(`Server is running on port ${server.info.uri}`);
};

process.on("unhandledRejection", (error) => {
  console.log(`Error: ${error}`);
  process.exit(1);
});

start();
