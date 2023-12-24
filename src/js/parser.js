export default function json(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const jsonString = String.fromCharCode.apply(null, new Uint16Array(data));
      const jsonObject = JSON.parse(jsonString);
      resolve(jsonObject);
    }, 500);
  });
}
