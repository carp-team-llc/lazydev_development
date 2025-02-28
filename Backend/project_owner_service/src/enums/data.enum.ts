const owner = {
  None: {
    isActivated: false,
    pricing: "None",
    level: "Zero",
    repositories: 0,
  },
  Free: {
    isActivated: true,
    pricing: "Free",
    level: "1",
    repositories: 1,
  },
  Pro: {
    isActivated: true,
    pricing: "Pro",
    level: "2",
    repositories: 3,
  },
  Premium: {
    isActivated: true,
    pricing: "Premium",
    level: "3",
    repositories: 10,
  }
};

const ResError = {
  INTERNAL: "INTERNAL_SERVER_ERROR",
  BADRQ: "BAD REQUESTS",
}

export { owner, ResError }