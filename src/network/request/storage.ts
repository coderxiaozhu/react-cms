// 获取
export const get = (key: string): string | any => {
  return localStorage.getItem(key);
}

// 增加
export const add = (key: string, val: string) => {
  localStorage.setItem(key, val);
}

// 删除
export const rm = (key: string) => {
  localStorage.removeItem(key);
}

// 清除所有
export const clear = () => {
  localStorage.clear();
}
