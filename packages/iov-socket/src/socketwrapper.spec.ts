import { SocketWrapper } from "./socketwrapper";

function pendingWithoutSocketServer(): void {
  if (!process.env.SOCKETSERVER_ENABLED) {
    pending("Set SOCKETSERVER_ENABLED to enable socket tests");
  }
}

describe("SocketWrapper", () => {
  const socketServerUrlNonExisting = "ws://localhost:4443/websocket";
  const socketServerUrl = "ws://localhost:4444/websocket";
  const socketServerUrlSlow = "ws://localhost:4445/websocket";

  it("can be constructed", () => {
    const socket = new SocketWrapper(socketServerUrl, fail, fail);
    expect(socket).toBeTruthy();
  });

  it("can connect", done => {
    pendingWithoutSocketServer();

    const socket = new SocketWrapper(
      socketServerUrl,
      () => done.fail("Got unexpected message event"),
      error => done.fail(error.message || "Unknown socket error"),
      done,
      () => done.fail("Connection closed"),
    );
    expect(socket).toBeTruthy();
    socket.connect();
  });

  it("fails to connect to non-existing server", done => {
    pendingWithoutSocketServer();

    const socket = new SocketWrapper(
      socketServerUrlNonExisting,
      () => done.fail("Got unexpected message event"),
      error => {
        if (error.message) {
          // error message only available in nodejs
          expect(error.message).toMatch(/ECONNREFUSED/i);
        }
        done();
      },
      () => done.fail("Got unexpected open event"),
    );
    expect(socket).toBeTruthy();
    socket.connect();
  });

  it("can connect to slow server", done => {
    pendingWithoutSocketServer();

    const socket = new SocketWrapper(
      socketServerUrlSlow,
      () => done.fail("Got unexpected message event"),
      error => done.fail(error.message || "Unknown socket error"),
      done,
      () => done.fail("Connection closed"),
    );
    expect(socket).toBeTruthy();
    socket.connect();
  });

  it("can connect and disconnect", done => {
    pendingWithoutSocketServer();

    let opened = 0;

    const socket = new SocketWrapper(
      socketServerUrl,
      () => done.fail("Got unexpected message event"),
      error => done.fail(error.message || "Unknown socket error"),
      () => {
        opened += 1;
        socket.disconnect();
      },
      closeEvent => {
        expect(closeEvent.wasClean).toEqual(true);
        expect(closeEvent.code).toEqual(1000 /* Normal Closure */);

        expect(opened).toEqual(1);
        done();
      },
    );
    socket.connect();
  });

  it("can disconnect before waiting for open", done => {
    pendingWithoutSocketServer();

    const socket = new SocketWrapper(
      socketServerUrl,
      () => done.fail("Got unexpected message event"),
      error => done.fail(error.message || "Unknown socket error"),
      () => done.fail("Got unexpected open event"),
      closeEvent => {
        expect(closeEvent.wasClean).toEqual(false);
        expect(closeEvent.code).toEqual(4001);
        done();
      },
    );
    socket.connect();
    socket.disconnect();
  });

  it("can send events when connected", done => {
    pendingWithoutSocketServer();

    const responseMessages = new Array<string>();

    const socket = new SocketWrapper(
      socketServerUrl,
      response => {
        expect(response.type).toEqual("message");
        responseMessages.push(response.data);

        if (responseMessages.length === 3) {
          socket.disconnect();
        }
      },
      error => done.fail(error.message || "Unknown socket error"),
      async () => {
        await socket.send("aabbccdd");
        await socket.send("whatever");
        await socket.send("lalala");
      },
      () => {
        expect(responseMessages.length).toEqual(3);
        done();
      },
    );
    socket.connect();
  });

  it("cannot send on a disconnect socket (it will never come back)", done => {
    pendingWithoutSocketServer();

    const socket = new SocketWrapper(
      socketServerUrl,
      () => done.fail("Got unexpected message event"),
      error => done.fail(error.message || "Unknown socket error"),
      () => {
        socket.disconnect();
      },
      () => {
        socket
          .send("la li lu")
          .then(() => done.fail("must not resolve"))
          .catch(error => {
            expect(error).toMatch(/socket was closed/i);
            done();
          });
      },
    );
    socket.connect();
  });
});
