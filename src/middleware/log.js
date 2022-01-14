export default function log({from,next, to }) {
    console.log(to.name);
    console.log(from.name);
    return next();
  }