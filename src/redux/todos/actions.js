import {
  ADDED,
  ALLCOMPLETED,
  DELETED,
  COLORSELECTED,
  CLEARCOMPLETED,
  TOGGLED,
} from "./actionTypes";

export const added = (addedText) => {
  return {
    type: ADDED,
    payload: addedText,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorselected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId: todoId,
      color: color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const allcompleted = () => {
  return {
    type: DELETED,
  };
};

export const clearcompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
