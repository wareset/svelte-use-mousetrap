declare type TypeList = (string | Function | TypeList)[];
export default function use(_node: Node, arr: TypeList): {
    destroy: () => void;
    update: (arr: TypeList) => void;
};
export {};
