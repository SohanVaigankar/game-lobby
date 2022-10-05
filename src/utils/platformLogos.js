const logo = {
  playstation: require("../img/playstation.svg"),
  apple: require("../img/apple.svg"),
  gamepad: require("../img/gamepad.svg"),
  nintendo: require("../img/nintendo.svg"),
  steam: require("../img/steam.svg"),
  xbox: require("../img/xbox.svg"),
};

function platformChecker(platform) {
  if (platform.includes("Playstation")) {
    return "playstation";
  } else if (platform.includes("iOS")) {
    return "apple";
  } else if (platform.includes("Nintendo")) {
    return "nintendo";
  } else if (platform.includes("PC")) {
    return "steam";
  } else if (platform.includes("Xbox")) {
    return "xbox";
  } else {
    return "gamepad";
  }
}

const getPlatform = (platform) => {
  switch (platformChecker(platform)) {
    case "playstation":
      return logo.playstation.default;
    case "apple":
      return logo.apple.default;
    case "nintendo":
      return logo.nintendo.default;
    case "steam":
      return logo.steam.default;
    case "xbox":
      return logo.xbox.default;
    default:
      return logo.gamepad.default;
  }
};

export default getPlatform;
