import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";
import generateFakeToken from "./gen_fake_token.js";

const fakeToken = generateFakeToken();

describe("GET /metrics", () => {
  it("should return system metrics data", (done) => {
    request(app)
      .get("/metrics")
      .set("Authorization", `Bearer ${fakeToken}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        const { message, data } = res.body;

        expect(message).to.equal("✅ Metrics collected");
        expect(data).to.be.an("object");

        expect(data).to.have.property("timestamp");
        expect(data).to.have.property("uptime");
        expect(data).to.have.property("environment");
        expect(data).to.have.property("cpuCount").that.is.a("number");
        expect(data).to.have.property("loadAverage").that.is.an("array").with.lengthOf(3);
        expect(data).to.have.property("memoryUsage").that.is.an("object");
        expect(data.memoryUsage).to.have.all.keys("total", "used", "free");
        expect(data).to.have.property("platform").that.is.a("string");
        expect(data).to.have.property("arch").that.is.a("string");
        expect(data).to.have.property("nodeVersion").that.is.a("string");
        expect(data).to.have.property("status").that.is.a("string");

        done();
      });
  });
});
