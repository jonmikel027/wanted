import { test, expect, vi } from "vitest";
import { requireAdmin } from "../src/middlewares/requireAdmin.middleware.js";

test("permitir continuar al admin", () => {

    const req = {
        user: { role: "admin" }
    };

    const res = {};

    const next = vi.fn();

    requireAdmin(req, res, next);

    expect(next).toHaveBeenCalled(1);
    expect(next).toHaveBeenCalledWith();
});

test("rechazar a un usuario sin rol de admin", () => {

    const req = {
        user: { role: "user" }
    };

    const res = {};

    const next = vi.fn();

    requireAdmin(req, res, next);

    expect(next).toHaveBeenCalled(1);

    const error = next.mock.calls[0][0];

    expect(error).toBeInstanceOf(Error);
    expect(error.status).toBe(403);
});

test("rechazar una petición sin usuario", () => {

    const req = {};

    const res = {};

    const next = vi.fn();

    requireAdmin(req, res, next);

    expect(next).toHaveBeenCalled(1);

    const error = next.mock.calls[0][0];

    expect(error).toBeInstanceOf(Error);
    expect(error.status).toBe(401);
});