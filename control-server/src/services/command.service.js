var { spawn } = require("child_process");

class CommandService {
  jump() {
    const jump = spawn("C:/Program Files/AutoHotkey/AutoHotkey.exe", [
      "../ahks/jump.ahk",
    ]);
    console.log("Jump");

    return "Done";
  }

  moveLeft() {
    const left = spawn("C:/Program Files/AutoHotkey/AutoHotkey.exe", [
      "../ahks/move_left.ahk",
    ]);
    console.log("Left");

    return "Done";
  }

  moveRight() {
    const right = spawn("C:/Program Files/AutoHotkey/AutoHotkey.exe", [
      "../ahks/move_right.ahk",
    ]);
    console.log("Right");

    return "Done";
  }

  hit() {
    const hit = spawn("C:/Program Files/AutoHotkey/AutoHotkey.exe", [
      "../ahks/hit.ahk",
    ]);
    console.log("Hit");

    return "Done";
  }

  rightHit() {
    const right = spawn("C:/Program Files/AutoHotkey/AutoHotkey.exe", [
      "../ahks/hit_right.ahk",
    ]);
    console.log("Hit Right");

    return "Done";
  }

  leftHit() {
    const left = spawn("C:/Program Files/AutoHotkey/AutoHotkey.exe", [
      "../ahks/hit_left.ahk",
    ]);
    console.log("Hit Left");

    return "Done";
  }

  downHit() {
    const down = spawn("C:/Program Files/AutoHotkey/AutoHotkey.exe", [
      "../ahks/hit_down.ahk",
    ]);
    console.log("Hit Down");

    return "Done";
  }

  throw() {
    const throwWeap = spawn("C:/Program Files/AutoHotkey/AutoHotkey.exe", [
      "../ahks/throw.ahk",
    ]);
    console.log("Throw");

    return "Done";
  }

  sig() {
    const nsig = spawn("C:/Program Files/AutoHotkey/AutoHotkey.exe", [
      "../ahks/sig.ahk",
    ]);
    console.log("N Sig");

    return "Done";
  }

  sigLeft() {
    const nsig = spawn("C:/Program Files/AutoHotkey/AutoHotkey.exe", [
      "../ahks/sig_left.ahk",
    ]);
    console.log("Sig left");

    return "Done";
  }

  sigRight() {
    const nsig = spawn("C:/Program Files/AutoHotkey/AutoHotkey.exe", [
      "../ahks/sig_right.ahk",
    ]);
    console.log("Sig right");

    return "Done";
  }

  sigDown() {
    const nsig = spawn("C:/Program Files/AutoHotkey/AutoHotkey.exe", [
      "../ahks/sig_down.ahk",
    ]);
    console.log("Sig down");

    return "Done";
  }
}

module.exports = CommandService;
