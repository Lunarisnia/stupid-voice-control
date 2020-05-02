const command = async (req, res, service) => {
  try {
    const request = req.body;
    switch (request.command.toLowerCase()) {
      case "leap":
        await service.jump();
        break;

      case "move left":
        await service.moveLeft();
        break;

      case "move right":
        await service.moveRight();
        break;

      case "hit down":
        await service.downHit();
        break;

      case "hit":
        await service.hit();
        break;

      case "hit right":
        await service.rightHit();
        break;

      case "hit left":
        await service.leftHit();
        break;

      case "disarm":
        await service.throw();
        break;

      case "signature":
        await service.sig();
        break;

      case "signature down":
        await service.sigDown();
        break;

      case "signature right":
        await service.sigRight();
        break;

      case "signature left":
        await service.sigLeft();
        break;

      default:
        break;
    }

    res.send("Ok");
  } catch (error) {
    res.status(500);
    res.json({ errorCode: error.message });
  }
};

module.exports = { command };
