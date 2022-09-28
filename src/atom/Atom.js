import { atom } from "recoil";

const listPageReLoading = atom({
    key: 'listpageReLoading',
    default: false,
});

const focusNav = atom({
    key: 'focusNav',
    default: "", 
});

const focusIndex = atom({
    key: 'focusIndex',
    default: "1"
});


export {listPageReLoading, focusNav, focusIndex};