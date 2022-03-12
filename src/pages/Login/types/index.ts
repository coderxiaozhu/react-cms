// actionType常量
export enum ACTION_TYPE {
  USER_INFO = "USER_INFO"
}

// login的数据类型
export interface LoginState {
  username: string;
  password: string;
}

// action对象类型
export interface LoginAction {
  type: ACTION_TYPE;
  payload: LoginState
}
