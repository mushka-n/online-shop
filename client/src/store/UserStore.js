import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._user = {};
        this._isAuth = false;
        this._isAdmin = false;
        makeAutoObservable(this);
    }

    setUser(user) {
        this._user = user;
    }

    get user() {
        return this._user;
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    get isAuth() {
        return this._isAuth;
    }

    setIsAdmin(bool) {
        this._isAdmin = bool;
    }

    get isAdmin() {
        return this._isAdmin;
    }
}
