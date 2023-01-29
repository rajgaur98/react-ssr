export const wrapPromise = (promise) => {
  let status = "pending";
  let result;

  const suspender = promise.then(
    (res) => {
      result = res;
      status = "success";
    },
    (err) => {
      result = err;
      status = "error";
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};
