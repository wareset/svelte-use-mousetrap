import Mousetrap from 'mousetrap';

const isFunc = (v) => typeof v === 'function';
const isArr = Array.isArray;

const listen = (arr, mousetrap) => {
  const result = [];
  let v2, f1;
  let i = 0;
  arr.forEach((v1, k) => {
    if (isArr(v1)) result.push(v1), ++i;
    else {
(v2 = arr[k + 1]), (f1 = isFunc(v1));

      if (!result[i]) result[i] = [[], []];
      result[i][!f1 ? 0 : 1].push(v1);

      if (v2 && f1 && !isFunc(v2)) ++i;
    }
  });

  result.forEach((arr) => {
    if (arr.length !== 2) listen(arr, mousetrap);
    else {
      const types = arr[0],
        fns = isArr(arr[1]) ? arr[1] : [arr[1]];

      mousetrap.bind(types, (...a) => fns.forEach((fn) => fn(...a)));
    }
  });
};

function use(
  _node,
  arr
)


 {
  const mousetrap = new Mousetrap(window.document);

  const destroy = () => {
    mousetrap.reset();
  };

  const update = (arr) => {
    destroy(), listen(arr, mousetrap);
  };

  update(arr);
  return { update, destroy }
}

export default use;
