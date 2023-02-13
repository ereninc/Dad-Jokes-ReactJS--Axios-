const Colors = {
  1: "#4CAF50",
  2: "#8BC34A",
  3: "#CDDC39",
  4: "#FFEB3B",
  5: "#FFC107",
  6: "#FF9800",
  7: "#FF5722",
};

const Emojis = {
  1: "em em-rolling_on_the_floor_laughing",
  2: "em em-laughing",
  3: "em em-smiley",
  4: "em em-slightly_smiling_face",
  5: "em em-neutral_face",
  6: "em em-confused",
  7: "em em-angry",
};

export const getColor = (votes) => {
  if (votes >= 15) {
    return "#4CAF50";
  } else if (votes >= 12) {
    return "#8BC34A";
  } else if (votes >= 9) {
    return "#CDDC39";
  } else if (votes >= 6) {
    return "#FFEB3B";
  } else if (votes >= 3) {
    return "#FFC107";
  } else if (votes >= 0) {
    return "#FF9800";
  } else {
    return "#FF5722";
  }
};

export const getEmoji = (votes) => {
  if (votes >= 15) {
    return "em em-rolling_on_the_floor_laughing";
  } else if (votes >= 12) {
    return "em em-laughing";
  } else if (votes >= 9) {
    return "em em-smiley";
  } else if (votes >= 6) {
    return "em em-slightly_smiling_face";
  } else if (votes >= 3) {
    return "em em-neutral_face";
  } else if (votes >= 0) {
    return "em em-confused";
  } else {
    return "em em-angry";
  }
};

export default { Colors, Emojis };
