import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js"; 
import generateFakeToken from "./gen_fake_token.js";

const fakeToken = generateFakeToken();

describe("GET /metrics", () => {
  it("should return random metrics data", (done) => {
    request(app)
      .get("/metrics")
      .set("Authorization", `Bearer ${fakeToken}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        const data = res.body.data;

        expect(res.body.message).to.equal("✅ Metrics generated");
        expect(data).to.be.an("object");
        expect(data).to.have.property("cpuUsage");
        expect(data).to.have.property("memoryUsage");
        expect(data).to.have.property("diskUsage");
        expect(data).to.have.property("temperature");
        expect(data).to.have.property("uptime");

        done();
      });
  });
});
