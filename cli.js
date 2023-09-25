#!/usr/bin/env node
import childProcess from "child_process";

// copy process.argv into a new array
let args = process.argv.slice(0);

// Remove first two arguments ("node" and "cli.js")
args.shift();
args.shift();

// Image and tag
let tag = "latest";
let image  = "oven/bun";

if (process.env.BUN_DOCKER_TAG) {
    tag = process.env.BUN_DOCKER_TAG;
}

if (process.env.BUN_DOCKER_IMAGE) {
    image = process.env.BUN_DOCKER_IMAGE;
}

childProcess.spawn("docker", [
    "run",
    "--init",
    "-it",
    "--rm",
    "--ulimit", "memlock=-1:-1",
    "-v", process.cwd() + ":/home/bun/app",
    image + ":" + tag,
    "bun",
    ... args,
], {
    stdio: "inherit",
});

