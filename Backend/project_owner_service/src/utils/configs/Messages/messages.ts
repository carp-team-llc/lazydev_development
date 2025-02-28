import moment from "moment-timezone";

const SysMessage = (where: string, log: any) => {
  return `${moment.now()} - [\x1b[36mINFO\x1b[0m] - [\x1b[36m${where}\x1b[0m] - ${log}`;
};

const ErrorMessage = (where: string, log: any) => {
  return `${moment.now()} - [\x1b[31mError\x1b[0m] - [\x1b[36m${where}\x1b[0m] - ${log}`;
};

export { SysMessage, ErrorMessage };
