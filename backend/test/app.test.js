const request = require("supertest");
const app = require("../src/index");

test("GET / returns backend message", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("Hello from Backend");
});
