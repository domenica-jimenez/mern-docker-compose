import request from "supertest";
import app from "../src/app";

describe("Test app.ts", () => {
  test("Catch principal route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual("Hello from the server!!!");
  });
});
