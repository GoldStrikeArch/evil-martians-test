import { login } from "../api";
import { expect, test, describe, spyOn } from "bun:test";

describe("login tests", () => {
  test("successful login with valid credentials", async () => {
    spyOn(Math, "random").mockReturnValue(0.6);
    const response = await login("test@test.com", "123456", false);

    expect(response.status).toBe(200);
    const text = await response.text();
    expect(text).toBe("OK, you are logged in!");
  });

  test('login fails with invalid email', async () => {
    spyOn(Math, "random").mockReturnValue(0.6);

    const response = await login('invalid@test.com', '123456', false);

    expect(response.status).toBe(401);
    expect(response.statusText).toBe('Invalid credentials, please check your email and password');
  });

  test('login fails with invalid password', async () => {
    spyOn(Math, "random").mockReturnValue(0.6);

    const response= await login('test@test.com', 'wrongpassword', false);

    expect(response.status).toBe(401);
    expect(response.statusText).toBe('Invalid credentials, please check your email and password');
  });

  test('login fails with network error', async () => {
    spyOn(Math, "random").mockReturnValue(0.1);

    const responsePromise = login('test@test.com', '123456', false);

    expect(responsePromise).rejects.toThrow('Network error');
  });
});
