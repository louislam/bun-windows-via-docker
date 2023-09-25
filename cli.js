import childProcess from "child_process";

export function cli(exec) {
    // copy process.argv into a new array
    let args = process.argv.slice(0);
    let ports = [];

    // Remove first two arguments ("node" and "cli.js")
    args.shift();
    args.shift();

    // Extract ports (e.g. -p 3000,3001) to the ports array
    for (let i = 0; i < args.length; i++) {
        if (args[i] === "--windows-ports") {
            console.log(args[i + 1])
            ports = args[i + 1].split(",");

            args.splice(i, 2);
            i--;
            break;
        }
    }

    // Image and tag
    let tag = "latest";
    let image  = "oven/bun";

    if (process.env.BUN_DOCKER_TAG) {
        tag = process.env.BUN_DOCKER_TAG;
    }

    if (process.env.BUN_DOCKER_IMAGE) {
        image = process.env.BUN_DOCKER_IMAGE;
    }

    // Expose ports
    let portsArgs = [];
    for (let i = 0; i < ports.length; i++) {
        portsArgs.push("-p");
        portsArgs.push(ports[i] + ":" + ports[i]);
    }

    childProcess.spawn("docker", [
        "run",
        "--init",
        "-it",
        "--rm",
        ...portsArgs,
        "--ulimit", "memlock=-1:-1",
        "-v", process.cwd() + ":/home/bun/app",
        image + ":" + tag,
        exec,
        ...args,
    ], {
        stdio: "inherit",
    });
}

